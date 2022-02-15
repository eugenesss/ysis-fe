import * as React from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';
import styled from 'styled-components';
import { useTheme } from '@mui/material/styles';

const StyledNavLink = styled((props) => <NavLink {...props} />)`
  text-decoration: none;
  color: inherit;
`;

interface CustomNavLinkProps {
  children: React.ReactNode;
  to: NavLinkProps['to'];
}

const CustomNavLink: React.FunctionComponent<CustomNavLinkProps> = ({
  children,
  to,
}) => {
  const theme = useTheme();

  return (
    <StyledNavLink
      exact
      to={to}
      activeStyle={{ color: theme.palette.primary.main }}
    >
      {children}
    </StyledNavLink>
  );
};

export default CustomNavLink;
