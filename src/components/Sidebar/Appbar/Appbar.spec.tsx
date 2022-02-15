import { render } from '@testing-library/react';
import Appbar, { DataTestId } from '.';

describe('Appbar', () => {
  it('renders', () => {
    const { getByTestId } = render(
      <Appbar>
        <div>test</div>
      </Appbar>,
    );

    expect(getByTestId(DataTestId.AppBar)).toBeTruthy();
    expect(getByTestId(DataTestId.AppBarContent).textContent).toBe('test');
  });
});
