import React, { FunctionComponent } from 'react';
import useScrollTrigger from '@mui/material/useScrollTrigger';

interface ElevationScrollProps {
  children: React.ReactElement;
}

const ElevationScroll: FunctionComponent<ElevationScrollProps> = (props) => {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 1 : 0,
  });
};

export default ElevationScroll;
