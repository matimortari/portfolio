import { routing } from "@/src/lib/i18n/routing";
import createMiddleware from "next-intl/middleware";

export default createMiddleware(routing);

export const config = {
  matcher: ["/", "/(de|pt)/:path*"],
};
