import { useMutation } from "@tanstack/react-query";
import { authApiService } from "./";

export function useAuthApi() {
  const loginMutation = useMutation({
    mutationFn: authApiService.login
  });

  const logoutMutation = useMutation({
    mutationFn: authApiService.logout
  });

  const registerBuyerMutation = useMutation({
    mutationFn: authApiService.registerBuyer
  });

  const registerVendorMutation = useMutation({
    mutationFn: authApiService.registerVendor
  });

  return {
    loginMutation,
    logoutMutation,
    registerBuyerMutation,
    registerVendorMutation,
  }
}

