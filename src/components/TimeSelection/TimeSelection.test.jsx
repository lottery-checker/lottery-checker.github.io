import { shallow } from 'enzyme';
import * as Provider from '../../provider'
import { TimeSelection } from './TimeSelection';
describe('TimeSelection', () => {
    let subject;
    let spy;
    const dispatchMockFunc = jest.fn();
    const mockTimes = [
        { time:21, label:"၂၁ ကြိမ်", sheetid:2, status:"FINISHED" }
    ];
    beforeEach(() => {
        spy = jest.spyOn(Provider, 'useStateValue');
        spy.mockReturnValue([{ times: mockTimes }, dispatchMockFunc]);
        subject = shallow(<TimeSelection />);
    });
    it('render TimeSelection div', () => {
        expect(subject.type()).toBe('div');
        expect(subject.hasClass('TimeSelection')).toBeTrue();
    });
    describe('TimeSelection Select', () => {
        it('render select', () => {
            expect(subject.childAt(0).type()).toBe('select');
            expect(subject.childAt(0).hasClass('TimeSelection__select')).toBeTrue();
        });
        it('render options', () => {
            subject.childAt(0).find('option').forEach((node, index) => {
                expect(node.prop('value')).toEqual(index);
                expect(node.text()).toEqual(mockTimes[index].label);
            });
        });
    });
});