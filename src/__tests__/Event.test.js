import React, { useState } from 'react';

const Event = ({ event }) => {
    const [showDetails, setShowDetails] = useState(false);

    const handleToggleDetails = () => {
        setShowDetails(!showDetails);
    };

    return (
        <div className="event">
            <h2>{event.summary}</h2>
            <p>{event.start.dateTime}</p>
            <p>{event.location}</p>
            {showDetails && (
                <>
                    <p>{event.description}</p>
                    <p>{event.organizer.email}</p>
                </>
            )}
            <button onClick={handleToggleDetails}>
                {showDetails ? 'Hide Details' : 'Show Details'}
            </button>
        </div>
    );
};

export default Event;
