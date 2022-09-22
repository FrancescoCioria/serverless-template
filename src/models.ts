export type Map = {
  [k: string]: string;
};

export type Event = {
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

export type Response = {
  statusCode: number;
  body: string;
};

export type Handler = (event: Event) => Promise<Response>;
