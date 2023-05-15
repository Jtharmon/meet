import React, { Component } from 'react';

class Event extends Component {
    state = {
        hideDetails: true,
    };

    handleHideDetails = () => {
        this.setState({ hideDetails: true });
    };

    handleShowDetails = () => {
        this.setState({ hideDetails: false });
    };

    render() {
        const { event } = this.props;
        const { hideDetails } = this.state;

        return (
            <div className='event'>
                <div className='event-summary'>
                    <h1 className='title'>{event.summary}</h1>
                    <p className='location'>{event.location}</p>
                    <p className='dateTime'>{event.start.dateTime}</p>
                </div>
                {!hideDetails && (
                    <div className='event-details'>
                        <h2>About event:</h2>
                        <ul className='details'>
                            <li>Description: {event.description}</li>
                            <li>Location: {event.location}</li>
                            <li>
                                Start: {new Date(event.start.dateTime).toISOString()}
                            </li>
                            <li>End: {new Date(event.end.dateTime).toISOString()}</li>
                        </ul>
                        <a href={event.htmlLink} target='_blank' rel='noreferrer'>
                            See details on Google Calendar
                        </a>
                    </div>
                )}
                <button
                    className='detailsButton'
                    onClick={hideDetails ? this.handleShowDetails : this.handleHideDetails}
                >
                    {hideDetails ? 'Show details' : 'Hide details'}
                </button>
            </div>
        );
    }
}

export default Event;
