import React, { Component } from "react";
import "./App.css";
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from "./NumberOfEvents";
import { getEvents, extractLocations } from './api';

class App extends Component {
    state = {
        events: [],
        locations: [],
        selectedLocation: 'all',
        numberOfEvents: 10, // Change the default value to your choice
    };

    componentDidMount() {
        this.mounted = true;
        getEvents().then((events) => {
            if (this.mounted) {
                this.setState({ events, locations: extractLocations(events) });
            }
        });
    }

    componentWillUnmount() {
        this.mounted = false;
    }

    updateNumberOfEvents = (number) => {
        this.setState({
            numberOfEvents: number,
        });
    }

    updateEvents = (location, eventCount) => {
        const { selectedLocation, numberOfEvents } = this.state;
        const count = eventCount || numberOfEvents;

        getEvents().then((events) => {
            const locationEvents = (location === 'all') ?
                events :
                events.filter((event) => event.location === location);

            const eventsToShow = locationEvents.slice(0, count);

            this.setState({
                events: eventsToShow,
                selectedLocation: location,
                numberOfEvents: count,
            });
        });
    }

    render() {
        return (
            <div className="App">
                <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
                <EventList events={this.state.events} />
                <NumberOfEvents numberOfEvents={this.state.numberOfEvents} updateNumberOfEvents={this.updateNumberOfEvents} />
            </div>
        );
    }
}

export default App;
