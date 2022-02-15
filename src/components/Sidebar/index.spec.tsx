import { render } from '@testing-library/react';
import MenuDrawer, { DrawerItemProps, MenuDrawerProps } from './index';
import { MemoryRouter } from 'react-router-dom';

const mockMenuRoute: DrawerItemProps = {
  label: 'test',
  to: '/123',
};

const mockProps: MenuDrawerProps = {
  open: true,
  handleDrawerClose: jest.fn(),
  drawerList: [mockMenuRoute, mockMenuRoute],
  logoutComponent: null,
};

describe('MenuDrawer', () => {
  it('renders with multiple navlinks', () => {
    const { getAllByText } = render(<MenuDrawer {...mockProps} />, {
      wrapper: MemoryRouter,
    });
    expect(getAllByText('test')).toHaveLength(2);
  });
});
