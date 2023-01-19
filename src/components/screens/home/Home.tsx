import { useSelector } from 'react-redux';

import Layout from '@/layout/wrapper/Wrapper';

import { RootState } from '@/redux/store';

const Home = function () {
  const mainSlice = useSelector((state: RootState) => state.mainSlice);

  return (
    <Layout title='Home' description='Coinmarketcap Clone'>
      {mainSlice.id}
    </Layout>
  );
};
export default Home;
