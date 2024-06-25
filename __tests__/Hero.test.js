'use strict';

import renderer from 'react-test-renderer';
import Hero from '../components/Hero';
it('renders correctly', () => {
  const tree = renderer
    .create(<Hero/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders as an anchor when no page is set', () => {
  const tree = renderer.create(<Hero/>).toJSON();
  expect(tree).toMatchSnapshot();
});

