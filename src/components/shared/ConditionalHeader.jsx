"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";

const ConditionalHeader = () => {
  const pathname = usePathname();
  const isAuthPage = pathname.startsWith("/login") || pathname.startsWith("/rejister");

  if (isAuthPage) {
    return null;
  }

  return <Header />;
};

export default ConditionalHeader;