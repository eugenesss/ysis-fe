import React, { FunctionComponent } from 'react';

interface SettingsConfigurationProps {}

const SettingsConfiguration: FunctionComponent<SettingsConfigurationProps> = (
  props,
) => {
  React.useEffect(() => {
    console.log('render');
  }, []);

  return (
    <div>
      <p>config</p>
    </div>
  );
};

export default SettingsConfiguration;
