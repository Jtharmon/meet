import React from 'react';
import { shallow } from 'enzyme';
import CitySearch from '../CitySearch';
import { mockData } from '../mock-data';
import { extractLocations } from '../api';

describe('<CitySearch /> component', () => {
    let locations, CitySearchWrapper;
    beforeAll(() => {
        locations = extractLocations(mockData);
        CitySearchWrapper = shallow(<CitySearch locations={locations} />);
    });

    test('render text input', () => {
        expect(CitySearchWrapper.find('.city')).toHaveLength(1);
    });

    test('renders a list of suggestions', () => {
        expect(CitySearchWrapper.find('.suggestions')).toHaveLength(1);
    });

    test('renders text input correctly', () => {
        const query = CitySearchWrapper.state('query');
        expect(CitySearchWrapper.find('.city').prop('value')).toBe(query);
    });

    test('change state when text input changes', () => {
        CitySearchWrapper.setState({
            query: 'Munich',
        });
        const eventObject = { target: { value: 'Berlin' } };
        CitySearchWrapper.find('.city').simulate('change', eventObject);
        expect(CitySearchWrapper.state('query')).toBe('Berlin');
    });

    test('render list of suggestions correctly', async () => {
        CitySearchWrapper.setState({ query: 'Berlin', suggestions: [] });
        const eventObject = { target: { value: 'Berlin' } };
        await CitySearchWrapper.find('.city').simulate('change', eventObject);
        //await act(async () => {
            //await new Promise(resolve => setTimeout(resolve, 1000));
            //CitySearchWrapper.update();
        //});
        expect(CitySearchWrapper.find('.suggestions li')).toHaveLength(2);
    });

    test('suggestion list match the query when changed', () => {
        CitySearchWrapper.setState({ query: '', suggestions: [] });
        CitySearchWrapper.find(".city").simulate("change", {
            target: { value: "Berlin" },
        });
        const query = CitySearchWrapper.state("query");
        const filteredLocations = locations.filter((location) => {
            return location.toUpperCase().indexOf(query.toUpperCase()) > -1;
        });
        expect(CitySearchWrapper.state("suggestions")).toEqual(filteredLocations);
    });

    test('selecting a suggestion should change query state', () => {
        CitySearchWrapper.setState({ query: 'Berlin, Germany', suggestions: ['Berlin, Germany'] });
        CitySearchWrapper.find('.suggestions li').first().simulate('click');
        expect(CitySearchWrapper.state('query')).toBe('Berlin, Germany');
    });
});