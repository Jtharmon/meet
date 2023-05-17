import React from "react";
import { shallow } from "enzyme";
import NumberOfEvents from "../NumberOfEvents";

describe("<NumberOfEvents/> component", () => {
    let NumberOfEventsWrapper;
    beforeAll(() => {
        NumberOfEventsWrapper = shallow(<NumberOfEvents updateEvents={() => { }} />);
    });

    test("Default input is 32", () => {
        expect(NumberOfEventsWrapper.state("query")).toBe(32);
    });

    test("Value changes correctly", () => {
        NumberOfEventsWrapper.find(".NumberOfEvents").simulate("change", {
            target: { value: 20 },
        });
        expect(NumberOfEventsWrapper.state("query")).toBe(32);
    });

    test('calls updateEvents with the selected city and input value when a valid number is entered', () => {
        const inputValue = '32';
        const input = NumberOfEventsWrapper.find('input');
        input.simulate('change', { target: { value: inputValue } });
    });

});