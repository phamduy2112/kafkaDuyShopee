// services/AuthService.ts

import { axiosWithAuth } from "../axios.config";
import { TPayloadLogin, TPayloadRegister } from "./auth.type";

class AuthService {
  signup(payload: TPayloadRegister) {
    return axiosWithAuth("/register", {
      method: "post",
      data: payload,
    });
  }

  login(payload: TPayloadLogin) {
    return axiosWithAuth("/login", {
      method: "post",
      data: payload,
    });
  }

  resetToken(token: string) {
    return axiosWithAuth.post("/reset-token", { token });
  }
}

export const authService = new AuthService();
