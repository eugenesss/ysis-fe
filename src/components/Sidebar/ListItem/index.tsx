import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import styled from 'styled-components';

export enum DataTestId {
  ListItemIcon = 'list-item-icon',
  ListItemLabel = 'list-item-label',
}

const StyledListItem = styled((props) => <ListItem {...props} />)`
  justify-content: space-evenly;
  padding: 16px;
`;
const ListItemIcon = styled.div`
  margin-right: 12px;
  display: flex;
  align-content: center;
  font-size: 12px;
`;
const ListItemLabel = styled.p`
  margin: 0px;
  font-weight: 500;
  font-size: 1rem;
  text-transform: capitalize;
`;

const iconWrapper = (Icon) => {
  const Wrapper = (iconProps) => {
    return <Icon {...iconProps} />;
  };
  return Wrapper;
};

interface NavListItemProps {
  label: string;
  icon?: React.ReactNode;
}

const NavListItem: React.FunctionComponent<NavListItemProps> = ({
  label,
  icon,
}) => {
  return (
    <StyledListItem>
      {icon && (
        <ListItemIcon data-testid={DataTestId.ListItemIcon}>
          {iconWrapper(icon)({ style: { fontSize: '1.2rem' } })}
        </ListItemIcon>
      )}
      <ListItemLabel data-testid={DataTestId.ListItemLabel}>
        {label}
      </ListItemLabel>
    </StyledListItem>
  );
};

export default NavListItem;
