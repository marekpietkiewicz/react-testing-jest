import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { render } from '@testing-library/react';
import App from './../App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

//is it possible to render such component successfully?
test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

//is it possible to render such component successfully?
//more elegant way then the above one
it('renders without crashing using Eznyme', () => {
  shallow(<App />);
});
 
//does that component contains a text "Learn React"?
it('renders welcome message', () => {
  const wrapper = shallow(<App />);
  const welcome = "Learn React";
  // expect(wrapper.contains(welcome)).toBe(true);
  expect(wrapper.contains(welcome)).toEqual(true);
  //accept only valid React elements, not string
  // expect(wrapper).toContainReact(welcome);
});

const shoppingList = [
  'diapers',
  'kleenex',
  'trash bags',
  'paper towels',
  'beer',
];

test('the shopping list has beer on it', () => {
  expect(shoppingList).toContain('beer');
  expect(new Set(shoppingList)).toContain('beer');
});

function compileAndroidCode() {
  throw new Error('you are using the wrong JDK');
}

test('compiling android goes as expected', () => {
  expect(compileAndroidCode).toThrow();
  expect(compileAndroidCode).toThrow(Error);

  // You can also use the exact error message or a regexp
  expect(compileAndroidCode).toThrow('you are using the wrong JDK');
  expect(compileAndroidCode).toThrow(/JDK/);
});