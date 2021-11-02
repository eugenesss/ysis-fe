import { FunctionComponent } from 'react';
import styled from 'styled-components';

const StyledAppLogo = styled.div`
  height: 50px;
  width: 50px;
  background-image: url('./assets/logo.png');
  background-size: cover;
  background-position: center;
`;

interface AppLogoProps {}
const AppLogo: FunctionComponent<AppLogoProps> = () => {
  return <StyledAppLogo />;
};

export default AppLogo;
