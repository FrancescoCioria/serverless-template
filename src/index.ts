import _lambda1 from "./lambda1";
import { Handler, Response } from "./models";

const response = (body: any): Response => ({
  body: JSON.stringify(body),
  statusCode: 200
});

const error = (error: unknown): Response => ({
  body: JSON.stringify({
    error
  }),
  statusCode: 200
});

export const lambda1: Handler = async event => {
  try {
    const res = await _lambda1();
    return response(res);
  } catch (e) {
    return error(e);
  }
};
