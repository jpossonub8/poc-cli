import {
  use,
  StackContext,
  Api as ApiGateway
} from "sst/constructs";
import { Database } from "./Database";

export function Api({ stack }: StackContext) {
  const db = use(Database);

  const api = new ApiGateway(stack, "Api", {
    defaults: {
      function: {
        bind: [
          db.mainTable,
        ]
      }
    },
    routes: {
      "GET /": "packages/functions/src/lambda.handler",
    },
  });
  stack.addOutputs({
    ApiEndpoint: api.url,
  });
}
