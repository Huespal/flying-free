
type HTTPMethod = 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE';

const throwError = (error: unknown) => {
  throw new Error(JSON.stringify(error));
}

export const api = async <T,>(
  url: string, method: HTTPMethod, body?: T
) => {
  const API_URL = process.env.API_URL ?? '';
  const headers: [string, string][] = [
    ['accept', 'application/json'],
    ['content-type', 'application/json']
  ];
  try {
    const data = await fetch(`${API_URL}${url}`, {
      headers,
      method,
      body: JSON.stringify(body)
    });

    const response = await data.json();

    if (!!response.error) {
      throwError(response.error);
    } else {
      return response;
    }
  } catch (error) {
    throwError(error);
  }
}