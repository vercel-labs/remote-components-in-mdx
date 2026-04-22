import { withRemoteComponents } from "remote-components/next/middleware";

export const middleware = withRemoteComponents();
export const config = {
  matcher: "/:path*",
};
