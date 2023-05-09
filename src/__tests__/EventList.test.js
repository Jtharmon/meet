import { shallow } from 'enzyme';
import EventList from '../EventList';
import Event from '../Event';

describe('<EventList /> component', () => {
    const mockData = [
        {
            id: 1,
            name: 'Event 1',
            date: '2023-05-01',
            time: '10:00',
            timezone: 'UTC+1'
        },
        {
            id: 2,
            name: 'Event 2',
            date: '2023-05-02',
            time: '11:00',
            timezone: 'UTC+2'
        },
        {
            id: 3,
            name: 'Event 3',
            date: '2023-05-03',
            time: '12:00',
            timezone: 'UTC+3'
        }
    ];

    test('render correct number of events', () => {
        const EventListWrapper = shallow(<EventList events={mockData} />);
        expect(EventListWrapper.find(Event)).toHaveLength(mockData.length);
    });
});
