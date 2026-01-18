"use client";

import { useLenis } from "lenis/react";
import { usePathname, useRouter } from "next/navigation";

const useNavigator = (link: string) => {
  const router = useRouter();
  const lenis = useLenis();
  const pathname = usePathname();

  const handleNavigate = () => {
    const isPathnameSame = pathname === link;

    if (!isPathnameSame) {
      router.push(link);
    } else {
      router.refresh();
      lenis?.scrollTo(0, { immediate: true });
    }
  };

  return handleNavigate;
};

export default useNavigator;
