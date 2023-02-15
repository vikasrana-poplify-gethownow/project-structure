import { axios } from "./imports";

export class SignupService {
  async signup(params) {
    const url = "/api/signUp";
    try {
      let result = await axios.post(url, params, {
        headers: { "Content-Type": "application/json" },
        crossDomain: true,
        withCredentials: true,
      });
      return result;
    } catch (error) {
      return error;
    }
  }
}
