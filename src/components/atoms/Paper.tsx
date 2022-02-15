import React, { FunctionComponent } from 'react';
import MuiPaper, { PaperProps as MuiPaperProps } from '@mui/material/Paper';
import styled from 'styled-components';
import Typography from '@mui/material/Typography';
import SpaceDivider from '@components/atoms/SpaceDivider';

export enum DataTestId {
  PaperWrapper = 'paper-wrapper',
  PaperHeader = 'paper-header',
  PaperHeaderActionElement = 'paper-header-action',
  PaperContent = 'paper-content',
}

interface PaperProps extends MuiPaperProps {}

export const Paper: FunctionComponent<PaperProps> = (props) => {
  return (
    <MuiPaper
      data-testid={DataTestId.PaperWrapper}
      elevation={0}
      sx={{ padding: '8px 16px' }}
      {...props}
    ></MuiPaper>
  );
};

const HeadingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeadingAction = styled.div`
  display: flex;
  > *:not(:last-of-type) {
    margin-right: 8px;
  }
`;

interface PaperHeaderProps {
  title: React.ReactNode;
  action?: React.ReactNode | React.ReactNode[];
}
export const PaperHeader: FunctionComponent<PaperHeaderProps> = ({
  title,
  action,
}) => {
  return (
    <HeadingWrapper data-testid={DataTestId.PaperHeader}>
      <Typography variant="body1" sx={{ fontWeight: 700 }}>
        {title}
      </Typography>
      {action && (
        <HeadingAction data-testid={DataTestId.PaperHeaderActionElement}>
          {action}
        </HeadingAction>
      )}
    </HeadingWrapper>
  );
};

const ContentWrapper = styled.div``;

interface PaperContentProps {}
export const PaperContent: FunctionComponent<PaperContentProps> = ({
  children,
}) => {
  return (
    <ContentWrapper data-testid={DataTestId.PaperContent}>
      <SpaceDivider spacing={2} />
      {children}
    </ContentWrapper>
  );
};
