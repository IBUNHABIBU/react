import { render, screen } from '@testing-library/react';
import App from './App';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Counter testing', () => {
  test('renders the title of counter', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('h1').text()).toContain('This is counter app');
  });
  test('rendering our button  with text of increment', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('#increment-btn').text()).toBe('increment');
  })
});
