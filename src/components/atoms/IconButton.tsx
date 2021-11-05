import { FunctionComponent } from 'react';
import MuiIconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';

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
  icon: React.ReactNode;
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
      <CustomIconButton onClick={handleOnClick} size="small" {...rest}>
        {iconWrapper(icon)}
      </CustomIconButton>
    </Tooltip>
  );
};

export default IconButton;
