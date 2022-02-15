import { FunctionComponent } from 'react';
import MenuContainer from '@container/MenuContainer';
import { Grid } from '@mui/material';
import DataTable from '@components/DataTable';
import CustomTextField from '@app/components/atoms/Textfield';

const columns = [
  { id: 'col1', label: 'Column 1' },
  { id: 'col2', label: 'Column 2' },
  { id: 'col3', label: 'Column 3' },
  { id: 'col4', label: 'Column 4' },
  {
    id: 'col5',
    label: 'Column 5',
    columnSettings: { format: (x) => x.toFixed(2) },
  },
];

function createData(
  name: string,
  code: string,
  population: number,
  size: number,
) {
  return {
    col1: name,
    col2: code,
    col3: population,
    col4: size,
    col5: population / size,
  };
}

const rows = [
  createData('India', 'IN', 1324171354, 3287263),
  createData('China', 'CN', 1403500365, 9596961),
  createData('Italy', 'IT', 60483973, 301340),
  createData('United States', 'US', 327167434, 9833520),
  createData('Canada', 'CA', 37602103, 9984670),
  createData('Australia', 'AU', 25475400, 7692024),
  createData('Germany', 'DE', 83019200, 357578),
  createData('Ireland', 'IE', 4857000, 70273),
  createData('Mexico', 'MX', 126577691, 1972550),
  createData('Japan', 'JP', 126317000, 377973),
  createData('France', 'FR', 67022000, 640679),
  createData('United Kingdom', 'GB', 67545757, 242495),
  createData('Russia', 'RU', 146793744, 17098246),
  createData('Nigeria', 'NG', 200962417, 923768),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('India', 'IN', 1324171354, 3287263),
  createData('China', 'CN', 1403500365, 9596961),
];

interface CollectionPageProps {}

const CollectionPage: FunctionComponent<CollectionPageProps> = () => {
  return (
    <MenuContainer title="Collections" subtitle="Where collectables go">
      <Grid container>
        <Grid item xs={12}>
          <CustomTextField />
          <DataTable columns={columns} rows={rows} />
        </Grid>
      </Grid>
    </MenuContainer>
  );
};

export default CollectionPage;
