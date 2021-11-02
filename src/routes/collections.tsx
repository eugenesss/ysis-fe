import React, { FunctionComponent } from 'react';
import MenuContainer from '@container/MenuContainer';

interface CollectionPageProps {}

const CollectionPage: FunctionComponent<CollectionPageProps> = () => {
  return (
    <MenuContainer
      title="Collections"
      subtitle="Where you store your collections"
    >
      something ehre
    </MenuContainer>
  );
};

export default CollectionPage;
