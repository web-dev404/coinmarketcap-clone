import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	id: 1
}

const mainSlice = createSlice({
	name: 'mainSlice',
	initialState,
	reducers: {
		changeId: (state, action) => {
			state.id = action.payload
		}
	}
})

export const { changeId } = mainSlice.actions

export default mainSlice.reducer
