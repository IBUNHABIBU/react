import { render, screen } from '@testing-library/react';
import Counter from '../components/Counter';
import { shallow, mount } from 'enzyme';

let wrapper;
beforeEach(()=> {
  wrapper = shallow(<Counter />)
});
describe('Counter testing', () => {
  test('renders the title of counter', () => {
    expect(wrapper.find('h1').text()).toContain('This is counter app');
  });

  test('rendering our button  with text of increment', () => {
    expect(wrapper.find('#increment-btn').text()).toBe('increment');
  })

  test('render the initial value of state in a div', () => {
   expect(wrapper.find('#counter-value').text()).toBe("0");
  });

  test('render the click event of the increament btn and increment valu ', () => {
    wrapper.find('#increment-btn').simulate('click');
    expect(wrapper.find('#counter-value').text()).toBe("1");
  });

  test('render the click event of the decrement btn and decrement value ', () => {
    wrapper.find('#increment-btn').simulate('click');
    expect(wrapper.find('#counter-value').text()).toBe("1");
    wrapper.find('#decrement-btn').simulate('click');
    expect(wrapper.find('#counter-value').text()).toBe("0");
  })
});

describe("name should show result when click 3 numbers", () => {
   wrapper.find()
})