import _lambda1 from "./lambda1";

type Map = {
  [k: string]: string;
};

type Event = {
  resource: string;
  path: string;
  httpMethod: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  headers: Map;
  queryStringParameters: null | Map;
  pathParameters: null | Map;
  stageVariables: null | Map;
  requestContext: any;
  body: string;
  isBase64Encoded: boolean;
};

type Response = {
  statusCode: number;
  body: string;
};

type Handler = (event: Event) => Promise<Response>;

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

export const lambda1: Handler = async event => {
  try {
    const res = await _lambda1();
    return response(res);
  } catch (e) {
    return error(e);
  }
};
