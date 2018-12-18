const API_KEY = "4aZkeOQNr4";

type Envelope<T extends OkEnvelope> = ErrorEnvelope | T;

interface ErrorEnvelope {
  status: "error";
  error: Error;
}

interface Error {
  message: string;
  code: number;
}

interface OkEnvelope {
  status: "ok";
}

interface ResultsEnvelope extends OkEnvelope {
  results: Result[];
}

export interface Result {
  // The AcoustID identifier for this match. A human readable page about the
  // information for an id can be found at https://acoustid.org/track/{id}
  id: string;
  score: number;
}

export const lookupByFingerprint = async (
  fingerprint: string,
  duration: number
): Promise<Result[]> => {
  const url = `https://api.acoustid.org/v2/lookup?client=${API_KEY}&duration=${duration}&fingerprint=${fingerprint}`;
  const response = await fetch(url);
  const json = (await response.json()) as Envelope<ResultsEnvelope>;
  if (json.status === "error") {
    throw json.error;
  }

  return json.results;
};
