import axios, { AxiosError } from "axios";
import { NextRequest, NextResponse } from "next/server";
import { ResponseCookie } from "next/dist/compiled/@edge-runtime/cookies";
import type { IApiResponse } from "@/store/services/baseApi/types";
import type { LoginRequest, LoginResponse } from "@/store/services/authApi/types";
import { APP } from "@/constants/APP";

type ResponseType = IApiResponse<LoginResponse>

export async function POST(req: NextRequest) {
  try {
    const body: LoginRequest = await req.json();

    const result = await axios.post<LoginResponse>(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/login`,
      body,
      { headers: { "Content-Type": "application/json" } }
    );

    const data = result.data;

    const res = NextResponse.json<ResponseType>({
      success: true,
      error: data.message ?? 'OK',
      data,
    });

    const cookieOptions = {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict", // lax
      path: "/",
    };

    if (data.access_token) {
      res.cookies.set(
        APP.cookieAccessTokenName,
        data.access_token,
        {
          ...cookieOptions,
          maxAge: 60 * 60 * 24, // 1 day
        } as ResponseCookie
      );
    }

    if (data.refresh_token) {
      res.cookies.set(
        APP.cookieRefreshTokenName,
        data.refresh_token,
        {
          ...cookieOptions,
          maxAge: 60 * 60 * 24 * 7, // 7 days
        } as ResponseCookie
      );
    }

    return res;
  } catch (err) {
    console.log("🚀 ~ POST ~ err:", err)
    const axiosError = err as AxiosError;
    const error = JSON.stringify(axiosError.response?.data);
    const status = axiosError.response?.status ?? 500;

    return NextResponse.json<ResponseType>({
      success: false,
      data: null,
      error,
    }, { status });
  }
}
