import fetch from "../fetch";
const baseUrl = "https://www.hongdounatie.xyz/api";
export default {
  getList(params) {
    return fetch.get(baseUrl, params);
  },
  saveUser(params) {
    return fetch.post(baseUrl + "/saveUser", params);
  },
};
