import React, { Component } from "react";
import "./App.css";
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from "./NumberOfEvents";
import { getEvents, extractLocations } from './api';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import EventGenre from './EventGenre';


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
        const { numberOfEvents } = this.state;
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

    getData = () => {
        const { locations, events } = this.state;
        const data = locations.map((location) => {
            const number = events.filter((event) => event.location === location).length;
            const city = location.split(', ').shift();
            return { city, number };
        });
        return data;
    };

    render() {
        const { locations, numberOfEvents, events } = this.state;
        return (
            <div className="App">
                <h1>Meet App</h1>
                <h4>Choose your nearest city</h4>
                <CitySearch updateEvents={this.updateEvents} locations={locations} />
                <NumberOfEvents
                    updateEvents={this.updateEvents}
                    numberOfEvents={numberOfEvents}
                />
                <h4>Events in each city</h4>

                <EventGenre events={events} />
                <ResponsiveContainer height={400}>
                    <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                        <CartesianGrid />
                        <XAxis type="category" dataKey="city" name="city" />
                        <YAxis
                            allowDecimals={false}
                            type="number"
                            dataKey="number"
                            name="number of events"
                        />
                        <Tooltip cursor={{ strokeDasharray: "3 3" }} />
                        <Scatter data={this.getData()} fill="#8884d8" />
                    </ScatterChart>
                </ResponsiveContainer>
                <EventList events={events} />
            </div>
        );
    }
}

export default App;
