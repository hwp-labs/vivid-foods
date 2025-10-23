import type { Metadata } from "next";
import { AppQueryClientProvider } from "@/lib/tanstack/provider";
import { APP } from "@/constants/APP";

export const metadata: Metadata = {
  title: APP.title,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          content="Premium Multipurpose Admin & Dashboard Template"
          name="description"
        />
        <meta content="Themesbrand" name="author" />
        
        <title>Dashboard | Minible - Admin & Dashboard Template</title>
        <link rel="shortcut icon" href="assets/images/favicon.ico" />

        <link
          href="assets/css/bootstrap.min.css"
          id="bootstrap-style"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="assets/css/icons.min.css"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="assets/css/app.min.css"
          id="app-style"
          rel="stylesheet"
          type="text/css"
        />
      </head>
      <body className="">
        <AppQueryClientProvider>{children}</AppQueryClientProvider>

        <script src="assets/libs/jquery/jquery.min.js"></script>
        <script src="assets/libs/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="assets/libs/metismenu/metisMenu.min.js"></script>
        <script src="assets/libs/simplebar/simplebar.min.js"></script>
        <script src="assets/libs/node-waves/waves.min.js"></script>
        <script src="assets/libs/waypoints/lib/jquery.waypoints.min.js"></script>
        <script src="assets/libs/jquery.counterup/jquery.counterup.min.js"></script>
        {/*  */}
        <script src="assets/libs/apexcharts/apexcharts.min.js"></script>
        {/*  */}
        <script src="assets/js/dashboard.init.js"></script>
        {/*  */}
        <script src="assets/js/app.js"></script>
      </body>
    </html>
  );
}
