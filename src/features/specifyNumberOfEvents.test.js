import { loadFeature, defineFeature } from 'jest-cucumber';
import { mount } from 'enzyme';
import App from '../App';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, (test) => {
    test('When user hasn\'t specified a number, 32 is the default number', ({ given, when, then }) => {
        given('the user has not specified the number of events they want to see', () => {

        });

        when('the user opens the app', () => {

        });

        then(/^the app should display a list of (\d+) upcoming events by default$/, (arg0) => {

        });
    });

    test('User can collapse an event to hide its details', ({ given, when, then }) => {
        given('User has expanded an event to see its details', () => {

        });

        when(/^User clicks on the "(.*)" button of the event$/, (arg0) => {

        });

        then('Event details should be hidden', () => {

        });
    });
});

    
    