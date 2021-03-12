import { cardModeToApiTopic } from "../helpers/memoConfig";
import { MemoMode } from "../types";

const MEMODOGS_API_URL = "http://0.0.0.0:3030/api";

function randomImages(
  count: number,
  imagesTopic: string
): Promise<Array<string>> {
  return fetch(
    `${MEMODOGS_API_URL}/random-images/${imagesTopic}/${count}`
  ).then((res) => res.json());
}

function randomImagesByMode(
  count: number,
  memoMode: MemoMode
): Promise<Array<string>> {
  return randomImages(count, cardModeToApiTopic(memoMode));
}

export { randomImages, randomImagesByMode };
