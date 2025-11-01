export const PATH = {
  home: "/",
  login: "/login",
  dashboard: "/dashboard",
  settings: "/settings",
};

export const ADMIN_PATH = {
  home: "/admin",
  login: "/admin",
  dashboard: "/admin/dashboard",
  settings: "/admin/settings",
};

export const PUBLIC_PATHS: string[] = [];

interface IRedirectPath {
  source: string;
  destination: string;
  permanent: boolean;
}

export const REDIRECT_PATHS: IRedirectPath[] = [
  {
    source: "/admin/login",
    destination: "/admin",
    permanent: false,
  },
];
