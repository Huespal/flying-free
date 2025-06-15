
type HTTPMethod = 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE';

const throwError = (error: unknown) => {
  throw new Error(JSON.stringify(error));
}

export const api = async <T,>(
  url: string, method: HTTPMethod, body?: T
) => {
  const headers: [string, string][] = [
    ['accept', 'application/json'],
    ['content-type', 'application/json']
  ];
  try {
    const data = await fetch(`${process.env.API_URL}${url}`, {
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