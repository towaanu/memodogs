import { cardModeToApiTopic } from "../helpers/memoConfig";
import { MemoMode } from "../types";

const MEMODOGS_API_URL = process.env.REACT_APP_MEMODOGS_API_URL;

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
