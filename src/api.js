export const extractLocations = (events) => {
    if (!events) {
        return [];
    }
    var extractLocations = events.map((event) => event.location);
    var locations = [...new Set(extractLocations)];
    return locations;
};
