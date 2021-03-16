import * as memodogsApi from "../../apis/memodogs";
import {
  createSlice,
  createAsyncThunk,
  createSelector,
  PayloadAction,
  ThunkAction,
  Action,
} from "@reduxjs/toolkit";
import { RootState } from "../../reduxStore";
import { shuffle } from "../../helpers/array";
import { MemoConfig } from "../../types";
import { getCardCountByDifficulty } from "../../helpers/memoConfig";

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
  (memoConfig: MemoConfig, _thunkApi) => {
    const cardsCount = getCardCountByDifficulty(memoConfig.difficulty);
    return memodogsApi.randomImagesByMode(cardsCount, memoConfig.mode);
  }
);

const memoSlice = createSlice({
  name: "memo",
  initialState,
  reducers: {
    initNewMemo: (_state) => {
      return initialState;
    },
    pickOneCard: (state, action: PayloadAction<number>) => {
      if (state.pickedCards.length === 2) return;
      const id = action.payload;
      const pickedCard = state.cards[id];
      if (pickedCard.isHidden) {
        state.cards[id].isHidden = false;
        state.pickedCards.push(id);
      }
    },
    resetPickedCard: (state, _action) => {
      state.pickedCards = [];
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
    },
  },
  extraReducers: (builder) => {
    builder.addCase(initMemo.pending, (state, _action) => {
      return {
        ...initialState,
        cards: [...state.cards],
        isLoading: true,
      };
    });

    builder.addCase(initMemo.fulfilled, (state, action) => {
      state.isLoading = false;
      const doubledCards = action.payload
        .map((image) => ({ image, isHidden: true }))
        .reduce<Card[]>(
          (cards, newCard) => [...cards, { ...newCard }, { ...newCard }],
          []
        );
      state.cards = shuffle(doubledCards);
    });
  },
});

const pickCard = (
  cardId: number
): ThunkAction<void, RootState, unknown, Action<string>> => {
  return (dispatch, getState) => {
    const {
      pickOneCard,
      checkPickedCards,
      resetPickedCard,
    } = memoSlice.actions;

    dispatch(pickOneCard(cardId));

    const memoState = getState().memo;
    if (memoState.pickedCards.length === 2) {
      dispatch(resetPickedCard({}));
      setTimeout(() => dispatch(checkPickedCards(memoState.pickedCards)), 500);
    }
  };
};

const selectMemo = (state: RootState) => state.memo;
const selectMemoCards = createSelector(
  [selectMemo],
  (memoState) => memoState.cards
);

const selectIsGameDone = createSelector(
  [selectMemo],
  (memoState) => memoState.isGameDone
);

export {
  memoSlice,
  selectMemo,
  selectMemoCards,
  selectIsGameDone,
  initMemo,
  pickCard,
};
export default memoSlice.reducer;
