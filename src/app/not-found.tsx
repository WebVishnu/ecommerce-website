"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
  const router = useRouter();
  
  useEffect(() => {
    router.push("/");
  }, [router]);
  
  return (
    <div className="h-screen flex justify-center items-center text-lg">
      Loading...
    </div>
  );
}
