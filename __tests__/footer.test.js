'use strict';

import renderer from 'react-test-renderer';
import Footer from '../components/Footer';
it('renders correctly', () => {
  const tree = renderer
    .create(<Footer/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders as an anchor when no page is set', () => {
  const tree = renderer.create(<Footer/>).toJSON();
  expect(tree).toMatchSnapshot();
});

