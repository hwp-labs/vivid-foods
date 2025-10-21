import axios, { type AxiosError } from "axios";
import { type NextRequest, NextResponse } from "next/server";
import { type ResponseCookie } from "next/dist/compiled/@edge-runtime/cookies";
import type { LoginRequest, LoginResponse } from "@/store/services/authApi/types";
import { APP } from "@/constants/APP";

export async function POST(req: NextRequest) {
  try {
    const body: LoginRequest = await req.json();

    const response = await axios.post<LoginResponse>(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/login`,
      body,
      { headers: { "Content-Type": "application/json" } }
    );

    const data = response.data;
    console.log("🚀 ~ POST ~ data:", data)

    const result = NextResponse.json(data);

    const cookieOptions = {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict", // lax
      path: "/",
    };

    if (data.access_token) {
      result.cookies.set(
        APP.cookieAccessTokenName,
        data.access_token,
        {
          ...cookieOptions,
          maxAge: 60 * 60 * 24, // 1 day
        } as ResponseCookie
      );
    }

    if (data.refresh_token) {
      result.cookies.set(
        APP.cookieRefreshTokenName,
        data.refresh_token,
        {
          ...cookieOptions,
          maxAge: 60 * 60 * 24 * 7, // 7 days
        } as ResponseCookie
      );
    }

    return result;
  } catch (err) {
    const axiosError = err as AxiosError;

    const result = axiosError.response?.data ?? { message: axiosError.message };
    const status = axiosError.response?.status ?? 500;

    return NextResponse.json(result, { status });
  }
}
