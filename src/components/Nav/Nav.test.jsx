import React from 'react';
import { shallow } from 'enzyme';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import TimeSelection from '../TimeSelection/TimeSelection';
import { actionTypes } from '../../reducer';
import * as Provider from '../../provider';
import { Nav } from './Nav';
describe('Nav', () => {
    let subject;
    let spy;
    const dispatchMockFunc = jest.fn();
    beforeEach(() => {
        spy = jest.spyOn(Provider, 'useStateValue');
        spy.mockReturnValue([{ menuOpened: true }, dispatchMockFunc]);
        subject = shallow(
        <Nav />,
        );
    });
    describe('AppBar', () => {
        it('render App Bar', () => {
            expect(subject.type()).toBe(AppBar);
        });
        describe('Toolbar', () => {
            it('render Toolbar', () => {
                expect(subject.childAt(0).type()).toBe(Toolbar);
            });
            describe('render menu icon button', () => {
                it('render IconButton', () => {
                    expect(subject.childAt(0).childAt(0).type()).toBe(IconButton);
                });
                it('handle onClick', () => {
                    subject.childAt(0).childAt(0).simulate('click')
                    expect(dispatchMockFunc).toHaveBeenCalledWith({
                        type: actionTypes.SET_MENU_OPENED,
                        payload: false,
                    });
                });
            });
            describe('render app title', () => {
                it('render Typography', () => {
                    expect(subject.childAt(0).childAt(1).type()).toBe(Typography);
                });
                it('render app title text', () => {
                    expect(subject.childAt(0).childAt(1).text()).toBe(process.env.REACT_APP_WEBSITE_NAME);
                });
            });
            describe('render time selection menu', () => {
                it('render TimeSelection', () => {
                    expect(subject.childAt(0).childAt(2).type()).toBe(TimeSelection);
                });
            });
        });
    });
});