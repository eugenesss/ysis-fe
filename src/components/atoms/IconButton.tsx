import { FunctionComponent } from 'react';
import MuiIconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import { SvgIconComponent } from '@mui/icons-material';

export enum DataTestId {
  IconBtn = 'icon-btn',
}

const CustomIconButton = styled(MuiIconButton)(({ theme }) => ({
  border: `1px solid`,
  borderColor: '#b3b3b3',
}));

const iconWrapper = (Icon) => {
  const Wrapper = (iconProps) => {
    return <Icon fontSize="small" {...iconProps} />;
  };
  return <Wrapper />;
};

export interface IconButtonProps {
  label: string;
  icon: SvgIconComponent;
  handleOnClick?: () => void;
}

const IconButton: FunctionComponent<IconButtonProps> = ({
  label,
  handleOnClick,
  icon,
  ...rest
}) => {
  return (
    <Tooltip title={label}>
      <CustomIconButton
        data-testid={DataTestId.IconBtn}
        onClick={handleOnClick}
        size="small"
        {...rest}
      >
        {iconWrapper(icon)}
      </CustomIconButton>
    </Tooltip>
  );
};

export default IconButton;
