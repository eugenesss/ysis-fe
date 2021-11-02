import { render } from '@testing-library/react';
import ListItem, { DataTestId } from './ListItem';

describe('ListItem', () => {
  it('renders without icon', () => {
    const { getByTestId, queryByTestId } = render(<ListItem label="test" />);
    expect(getByTestId(DataTestId.ListItemLabel).textContent).toBe('test');
    expect(queryByTestId(DataTestId.ListItemIcon)).toBeNull();
  });

  it('renders with icon', () => {
    const MockIcon = () => <div data-testid="mock-icon">icon</div>;
    const { getByTestId } = render(<ListItem label="test" icon={MockIcon} />);
    expect(getByTestId(DataTestId.ListItemIcon)).toBeTruthy();
  });
});
