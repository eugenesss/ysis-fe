import { FunctionComponent } from 'react';
import MenuContainer from '@container/MenuContainer';

interface CollectionPageProps {}

const CollectionPage: FunctionComponent<CollectionPageProps> = () => {
  return (
    <MenuContainer title="Collections" subtitle="Where collectables go">
      something ehre
    </MenuContainer>
  );
};

export default CollectionPage;
