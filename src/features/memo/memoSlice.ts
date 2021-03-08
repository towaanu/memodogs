import * as dogsApi from "../../apis/dogs";
import {
  createSlice,
  createAsyncThunk,
  createSelector,
  PayloadAction,
  ThunkAction,
  Action,
} from "@reduxjs/toolkit";
import { RootState } from "../../reduxStore";

interface Card {
  image: string;
  isHidden: boolean;
}

interface MemoState {
  cards: Array<Card>;
  pickedCards: Array<number>;
  isInit: boolean;
  isLoading: boolean;
  isGameDone: boolean;
}

const initialState: MemoState = {
  cards: [],
  pickedCards: [],
  isInit: false,
  isLoading: false,
  isGameDone: false,
};

const initMemo = createAsyncThunk(
  "memo/initMemo",
  (cardsCount: number, _thunkApi) => dogsApi.randomDogs(cardsCount)
);

const memoSlice = createSlice({
  name: "memo",
  initialState,
  reducers: {
    pickOneCard: (state, action: PayloadAction<number>) => {
      if (state.pickedCards.length === 2) return;
      const id = action.payload;
      const pickedCard = state.cards[id];
      if (pickedCard.isHidden) {
        state.cards[id].isHidden = false;
        state.pickedCards.push(id);
      }
    },
    checkPickedCards: (state, action: PayloadAction<Array<number>>) => {
      const cardIdsToCheck = action.payload;
      if (cardIdsToCheck.length < 2) return;

      const firstCardImage = state.cards[cardIdsToCheck[0]].image;
      if (
        cardIdsToCheck.every(
          (cardId) => state.cards[cardId].image === firstCardImage
        )
      ) {
        state.isGameDone = state.cards.every((card) => !card.isHidden);
      } else {
        cardIdsToCheck.forEach((cardId) => {
          state.cards[cardId].isHidden = true;
        });
      }
      state.pickedCards = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(initMemo.pending, (state, _action) => {
      state.isLoading = true;
    });

    builder.addCase(initMemo.fulfilled, (state, action) => {
      state.isLoading = false;
      state.cards = action.payload
        .map((image) => ({ image, isHidden: true }))
        .reduce<Card[]>(
          (cards, newCard) => [...cards, { ...newCard }, { ...newCard }],
          []
        );
    });
  },
});

const pickCard = (
  cardId: number
): ThunkAction<void, RootState, unknown, Action<string>> => {
  return (dispatch, getState) => {
    const { pickOneCard, checkPickedCards } = memoSlice.actions;
    dispatch(pickOneCard(cardId));

    const state = getState();
    const memoState = state.memo;

    setTimeout(() => dispatch(checkPickedCards(memoState.pickedCards)), 500);
  };
};

const selectMemo = (state: RootState) => state.memo;
const selectMemoCards = createSelector(
  [selectMemo],
  (memoState) => memoState.cards
);

export { memoSlice, selectMemo, selectMemoCards, initMemo, pickCard };
export default memoSlice.reducer;
