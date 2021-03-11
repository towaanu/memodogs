export enum MemoMode {
  Dog,
  Cat,
  Bird,
}

export enum MemoDifficulty {
  VeryEasy,
  Easy,
  Normal,
  Hard,
}

export interface MemoConfig {
  difficulty: MemoDifficulty;
  mode: MemoMode;
}
