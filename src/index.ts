import _lambda1 from "./lambda1";

type Response = {
  statusCode: number;
  body: string;
};

const response = (body: any): Response => ({
  body: JSON.stringify(body),
  statusCode: 200
});

const error = (error: string): Response => ({
  body: JSON.stringify({
    error
  }),
  statusCode: 200
});

export const lambda1 = async (): Promise<Response> => {
  try {
    const res = await _lambda1();
    return response(res);
  } catch (e) {
    return error(e);
  }
};
