import { render } from '@testing-library/react';
import Checkbox, { DataTestId } from './Checkbox';
import userEvent from '@testing-library/user-event';

describe('Checkbox', () => {
  it('renders', () => {
    const { getByTestId } = render(<Checkbox label="test" />);
    expect(getByTestId(DataTestId.CheckBox)).toBeTruthy();
  });

  it('handles click', () => {
    const { getByTestId } = render(<Checkbox label="test" />);
    userEvent.click(getByTestId(DataTestId.CheckBox));
    expect(getByTestId(DataTestId.CheckBox)).toBeChecked();
  });
});
