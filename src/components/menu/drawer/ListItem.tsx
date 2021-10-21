import * as React from "react";
import ListItem from "@mui/material/ListItem";
import styled from "styled-components";

const StyledListItem = styled((props) => <ListItem {...props} />)`
  justify-content: center;
  padding: 16px;
`;
const ListItemIcon = styled.div`
  margin-right: 16px;
  display: flex;
  align-content: center;
`;
const ListItemLabel = styled.p`
  margin: 0px;
  font-weight: 500;
  font-size: 1rem;
  text-transform: capitalize;
`;

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
      {icon && <ListItemIcon>{icon}</ListItemIcon>}
      <ListItemLabel>{label}</ListItemLabel>
    </StyledListItem>
  );
};

export default NavListItem;
