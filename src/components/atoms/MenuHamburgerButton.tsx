import * as React from 'react';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

interface MenuHaburgerButtonProps {
  buttonProps?: Partial<IconButtonProps>;
  handleOnClick: () => void;
}

const MenuHaburgerButton: React.FunctionComponent<MenuHaburgerButtonProps> = ({
  buttonProps,
  handleOnClick,
}) => {
  return (
    <IconButton
      color="inherit"
      aria-label="open drawer"
      onClick={handleOnClick}
      size="small"
      edge="start"
      {...buttonProps}
    >
      <MenuIcon fontSize="small" />
    </IconButton>
  );
};

export default MenuHaburgerButton;
