'use client'

import { useRouter } from 'next/navigation';
import { BiX } from "react-icons/bi";

export default function CloseButton() {
  const router = useRouter();
  return (
    <div onClick={() => router.back()} className="float-right text-3xl inline">
      <BiX />
    </div>
  );
}