import { FC, PropsWithChildren } from 'react';

import Footer from '@/layout/footer/Footer';
import Header from '@/layout/header/Header';
import Meta from '@/layout/meta/Meta';

import { ISeo } from '../meta/meta.interface';

export interface IWrapper extends ISeo {}

const Wrapper: FC<PropsWithChildren<IWrapper>> = function ({
  children,
  ...rest
}) {
  return (
    <>
      <Meta {...rest} />

      <div className='wrapper'>
        <Header />
        <main className='page'>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Wrapper;
