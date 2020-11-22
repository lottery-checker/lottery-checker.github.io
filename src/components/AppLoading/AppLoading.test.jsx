import { shallow } from 'enzyme';
import CircularProgress from '@material-ui/core/CircularProgress';
import { AppLoading } from './AppLoading';
describe('App Loading', () => {
    let subject;
    beforeEach(() => {
        subject = shallow(<AppLoading />);
    });
    it('should be div', () => {
        expect(subject.type()).toBe('div');
    });
    it('should has class', () => {
        expect(subject.hasClass('AppLoading')).toBeTrue();
    });
    describe('App Loading Container', () => {
        it('should has container', () => {
            expect(subject.childAt(0).type()).toBe('div');
            expect(subject.childAt(0).hasClass('AppLoading__container')).toBeTrue();
        });
        describe('CircularProgress', () => {
            it('render CircularProgress', () => {
                expect(subject.childAt(0).childAt(0).type()).toBe(CircularProgress);
            });
        });
        describe('Loading Text', () => {
            it('render Loading Text', () => {
                expect(subject.childAt(0).childAt(1).type()).toBe('div');
                expect(subject.childAt(0).childAt(1).text()).toBe('Getting Ready ...');
            });
        });
    });
});