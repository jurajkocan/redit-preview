import qs from "querystring";

export function parseQueryString(queryString: string) {
  return qs.parse(queryString.startsWith("?") ? queryString.substr(1) : queryString);
}
