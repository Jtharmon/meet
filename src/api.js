import { mockData } from './mock-data';


export const extractLocations = (events) => {
    if (!events) {
        return [];
    }
    var extractLocations = events.map((event) => event.location);
    var locations = [...new Set(extractLocations)];
    return locations;
};

export const getEvents = async () => {
    return mockData;
};