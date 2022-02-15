import { render, fireEvent } from '@testing-library/react';
import SubNav, { SubNavProps, DataTestId } from '.';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

const mockProps: SubNavProps = {
  items: [
    { label: 'one', route: '/one' },
    { label: 'two', route: '/two' },
  ],
};

describe('SubNav', () => {
  it('should render navtabs and handle route push', () => {
    const history = createMemoryHistory({ basename: '/one' });
    const { getAllByTestId } = render(
      <Router history={history}>
        <SubNav {...mockProps} />,
      </Router>,
    );
    const element = getAllByTestId(DataTestId.NavTab);

    expect(element.length).toBe(2);

    fireEvent.click(element[1]);
    expect(history.length).toBe(2);
    expect(history.location.pathname).toBe('/two');
  });
});
