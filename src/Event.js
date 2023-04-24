import React, { Component } from 'react';

class Event extends Component {
    render() {
        return <div></div>;
    }

    state = {
        showDetails: false,
    }

    handleShowDetails = () => {
        this.setState({ showDetails: !this.state.showDetails });
    }

    render() {
        const { event } = this.props;
        const { showDetails } = this.state;

        return (
            <div className="event">
                <div className="event-summary">
                    <h1 className="event-title">{event.summary}</h1>
                    <p className="event-location">{event.location}</p>
                    <p className="event-date">{event.start.dateTime}</p>
                </div>
                {showDetails && (
                    <div className="event-details">
                        <h2>About event:</h2>
                        <p>{event.description}</p>
                        <a href={event.htmlLink} target="_blank" rel="noreferrer">
                            See details on Google Calendar
                        </a>
                    </div>
                )}
                <button className="details-btn" onClick={this.handleShowDetails}>
                    {showDetails ? 'Hide details' : 'Show details'}
                </button>
            </div>
        );
    }
}

export default Event;
