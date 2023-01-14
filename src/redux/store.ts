import { configureStore } from '@reduxjs/toolkit'

import mainSlice from '@/redux/slices/mainSlice'

const store = configureStore({
	reducer: {
		mainSlice
	}
})

export type RootState = ReturnType<typeof store.getState>

export default store
