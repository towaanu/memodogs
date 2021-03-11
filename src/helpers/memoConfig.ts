import { MemoDifficulty } from "../types";

const CARD_COUNT_BY_DIFFICULTY = {
  [MemoDifficulty.VeryEasy]: 5,
  [MemoDifficulty.Easy]: 8,
  [MemoDifficulty.Normal]: 15,
  [MemoDifficulty.Hard]: 30,
};

function getCardCountByDifficulty(memoDifficulty: MemoDifficulty): number {
  return CARD_COUNT_BY_DIFFICULTY[memoDifficulty] ?? 5;
}

export { getCardCountByDifficulty };
