import type { SlackFunctionHandler } from "deno-slack-sdk/types.ts";
import type { ReverseFunction } from "../manifest.ts";

const reverse: SlackFunctionHandler<typeof ReverseFunction.definition> = async (
  { inputs, env },
) => {
  console.log(`Reversing ${inputs.stringToReverse}.`);
  console.log(`SLACK_API_URL=${env["SLACK_API_URL"]}`);

  const reverseString = inputs.stringToReverse.split("").join("");
  return await {
    outputs: { reverseString },
  };
};

export default reverse;
