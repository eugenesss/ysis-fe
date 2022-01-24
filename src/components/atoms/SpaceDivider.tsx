import React, { FunctionComponent } from 'react';
import { styled } from '@mui/material/styles';

const CustomSpacer = styled('div')<SpaceDividerProps>(({ theme, spacing }) => ({
  paddingTop: spacing ? theme.spacing(0.5 * spacing) : theme.spacing(0.5),
  paddingBottom: spacing ? theme.spacing(0.5 * spacing) : theme.spacing(0.5),
}));

const CustomLine = styled('div')(({ theme }) => ({
  height: '1px',
  width: '100%',
  backgroundColor: theme.palette.divider,
}));

interface SpaceDividerProps {
  spacing?: number;
  line?: boolean;
}

const SpaceDivider: FunctionComponent<SpaceDividerProps> = ({
  spacing,
  line,
}) => {
  return (
    <CustomSpacer spacing={spacing}>{line && <CustomLine />}</CustomSpacer>
  );
};

export default SpaceDivider;
