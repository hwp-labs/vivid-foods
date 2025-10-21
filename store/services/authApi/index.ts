import { httpClient, httpServer } from "@/lib/axios/config";
import { LoginRequest, RegisterBuyerRequest, RegisterVendorRequest } from "./types";

export const authApiService = {
  async login(req: LoginRequest) {
    const res = await httpServer.post("/auth/login", req);
    return res.data;
  },

  async logout() {
    const res = await httpServer.post("/auth/logout");
    return res.data;
  },

  async registerBuyer(req: RegisterBuyerRequest) {
    const res = await httpClient.post(`/auth/signup/buyer`, req);
    return res.data;
  },

  async registerVendor(req: RegisterVendorRequest) {
    const res = await httpClient.post(`/auth/signup/vendor`, req);
    return res.data;
  },
}


