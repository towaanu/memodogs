const DOG_API_URL = "https://dog.ceo/api";

interface RandomDogsRes {
  message: Array<string>;
  status: "success" | "error";
}

function randomDogs(count: number): Promise<Array<string>> {
  return fetch(`${DOG_API_URL}/breeds/image/random/${count}`)
    .then((res) => res.json())
    .then((res: RandomDogsRes) => {
      if (res.status === "success") return res.message;
      else return Promise.reject(new Error("Unable to fetch dog images"));
    });
}

export { randomDogs };
