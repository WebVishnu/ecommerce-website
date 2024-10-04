"use client";

import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  router.push("/");
  return (
    <div className="h-screen flex justify-center items-center text-lg">
      Loading...
    </div>
  );
}
