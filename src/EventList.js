import React, { Component } from 'react';
import Event from './Event';

class EventList extends Component {
    render() {
        const { events } = this.props;

        if (!events) {
            return <div>Loading events...</div>;
        }

        return (
            <ul className="EventList">
                {events.map((event) => (
                    <li key={event.id}>
                        <Event event={event} />
                    </li>
                ))}
            </ul>
        );
    }
}

export default EventList;
