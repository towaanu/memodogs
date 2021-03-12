import { MemoDifficulty, MemoMode } from "../types";

const CARD_COUNT_BY_DIFFICULTY = {
  [MemoDifficulty.VeryEasy]: 5,
  [MemoDifficulty.Easy]: 8,
  [MemoDifficulty.Normal]: 15,
  [MemoDifficulty.Hard]: 24,
};

const CARD_MODE_TOPIC = {
  [MemoMode.Dog]: "dogs",
  [MemoMode.Cat]: "cats",
  [MemoMode.Bird]: "birds",
};

function getCardCountByDifficulty(memoDifficulty: MemoDifficulty): number {
  return CARD_COUNT_BY_DIFFICULTY[memoDifficulty] ?? 5;
}

function cardModeToApiTopic(memoMode: MemoMode): string {
  return CARD_MODE_TOPIC[memoMode] ?? "dogs";
}

export { getCardCountByDifficulty, cardModeToApiTopic };
