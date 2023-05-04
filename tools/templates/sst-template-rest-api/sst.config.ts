import { SSTConfig } from "sst";
import { Api } from "./stacks/Api";
import { Database } from "./stacks/Database";

export default {
  config(_input) {
    return {
      name: "__name__KebabCase__",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(Api)
       .stack(Database);
  }
} satisfies SSTConfig;
