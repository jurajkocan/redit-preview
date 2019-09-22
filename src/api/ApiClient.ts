import axios, { AxiosInstance, AxiosRequestConfig, AxiosPromise } from "axios";
import { AppGetType } from "./apiTypes/ApiRoutes";
import config from "../../config/app.config";

export class ApiClient {
  private instance: AxiosInstance;
  constructor(baseUrl: string) {
    this.instance = axios.create({ baseURL: baseUrl });
  }

  public get<T extends AppGetType>(
    baseUrl: T["url"],
    urlParams?: string,
    config?: AxiosRequestConfig
  ): AxiosPromise<T["responseData"]> {
    const url = urlParams ? baseUrl + urlParams : baseUrl;
    return this.instance.get(url, config);
  }
}

export const redditClient = new ApiClient(config.redditApiUrl);
