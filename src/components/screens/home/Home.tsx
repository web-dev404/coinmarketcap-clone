import { useSelector } from 'react-redux'

import Layout from '@/layout/Layout'

import { RootState } from '@/redux/store'

const Home = () => {
	const mainSlice = useSelector((state: RootState) => state.mainSlice)

	return (
		<Layout title='Home' description={'Coinmarketcap Clone'}>
			{mainSlice.id}
		</Layout>
	)
}
export default Home
