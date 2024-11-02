"use client";
import { useRouter } from 'next/navigation';
import { ChevronLeft } from "lucide-react";
 // Replace with actual icon import

export default function BackButton() {
  const router = useRouter();

  return (
    <div
      className="float-left text-3xl inline cursor-pointer"
      onClick={() => router.back()}
    >
      <ChevronLeft className="text-primary inline" />
      <span className="text-primary text-xl inline">Back</span>
    </div>
  );
}
