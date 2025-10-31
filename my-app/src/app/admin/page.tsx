"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Navigation from "@/_components/navigation";


export default function AdminPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/admin/food");
  }, [router]);

  return (
    <div className="flex">
      <Navigation />
      <div className="flex-1 p-10">Redirecting to food menu...</div>
    </div>
  );
}
