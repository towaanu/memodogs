import * as dogsApi from '../../apis/dogs';
import { createSlice, createAsyncThunk, createSelector } from '@reduxjs/toolkit'
import {RootState} from '../../reduxStore'

interface Card {
    image: string,
    isHidden: boolean
}

interface MemoState {
    isSecondPick: boolean
    cards: Array<Card>
    isInit: boolean
    isLoading: boolean
}

const initialState: MemoState = {
    cards: [],
    isSecondPick: false,
    isInit: false,
    isLoading: false
}

const initMemo = createAsyncThunk(
    "memo/initMemo",
    (cardsCount: number, _thunkApi) => dogsApi.randomDogs(cardsCount)
)

const memoSlice = createSlice({
    name: "memo",
    initialState,
    reducers: {
    },
    extraReducers: builder => {
	builder.addCase(initMemo.pending, (state, _action) => {
	    state.isLoading = true
	})

	builder.addCase(initMemo.fulfilled, (state, action) => {
	    state.isLoading = false;
	    state.cards = action.payload.map(image => ({ image, isHidden: true }))
	})
    }
})

const selectMemo = (state:RootState) => state.memo;
const selectMemoCards = createSelector(
    [selectMemo],
    (memoState) => memoState.cards
);

export {memoSlice, selectMemo, selectMemoCards, initMemo}
export default memoSlice.reducer
