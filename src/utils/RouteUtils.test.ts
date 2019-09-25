import { parseQueryString } from "./RouteUtils";

test("subredditParm", () => {
  const result = "123";
  expect(parseQueryString("?subreddit=123").subreddit).toBe(result);
});
