import { FC, PropsWithChildren } from 'react'

import Footer from './footer/Footer'
import Header from './header/Header'
import Meta from './meta/Meta'
import { ISeo } from './meta/meta.interface'

interface ILayout extends ISeo {}

const Layout: FC<PropsWithChildren<ILayout>> = ({ children, ...rest }) => {
	return (
		<>
			<Meta {...rest} />

			<main className={'main'}>
				<div className={'container'}>
					<Header />
					<section>{children}</section>
					<Footer />
				</div>
			</main>
		</>
	)
}

export default Layout
