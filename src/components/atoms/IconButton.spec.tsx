import { render } from '@testing-library/react';
import IconButton, { DataTestId } from './IconButton';
import userEvent from '@testing-library/user-event';
import { TrendingDown } from '@mui/icons-material';

describe('IconButton', () => {
  it('renders', () => {
    const { getByTestId } = render(
      <IconButton label="test" icon={TrendingDown} />,
    );
    expect(getByTestId(DataTestId.IconBtn)).toBeTruthy();
  });

  it('handles click', () => {
    const mockFn = jest.fn();
    const { getByTestId } = render(
      <IconButton label="test" icon={TrendingDown} handleOnClick={mockFn} />,
    );
    userEvent.click(getByTestId(DataTestId.IconBtn));
    expect(mockFn).toBeCalled();
  });
});
