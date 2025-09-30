"use client";
import NextLink from "next/link";
import { usePathname } from "next/navigation";

export function Link(props) {
  const { to, href, ...rest } = props || {};
  const finalHref = href ?? to ?? "";
  return <NextLink href={finalHref} {...rest} />;
}

export function useLocation() {
  const pathname = usePathname();
  return { pathname };
}

export const BrowserRouter = ({ children }) => <>{children}</>;
export const Routes = ({ children }) => <>{children}</>;
export const Route = ({ element }) => element ?? null;
