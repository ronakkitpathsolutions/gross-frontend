import client from "./api";
import { METHODS } from "../utils/constant";

export const api = {
  auth: {
    login: (params) =>
      client({
        url: "/login",
        data: params,
        method: METHODS.POST,
      }),
    register: (params) =>
      client({
        url: "/login",
        data: params,
        method: METHODS.POST,
      }),
  },
};
