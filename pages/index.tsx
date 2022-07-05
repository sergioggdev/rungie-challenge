import type { NextPage, GetStaticProps } from 'next';

import { Layout, SelectableGrid } from '@Components';

type Props = {
  rows?: number;
  columns?: number;
};

const Home: NextPage<Props> = ({ columns, rows }) => {
  return (
    <Layout>
      <SelectableGrid {...(rows && { rows })} {...(columns && { columns })} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async context => {
  return {
    props: {
      rows: process.env.GRID_ROWS && +process.env.GRID_ROWS,
      columns: process.env.GRID_COLUMNS && +process.env.GRID_COLUMNS,
    },
  };
};

export default Home;
