import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export default function Logo({ className }: LogoProps) {
  return (
    <Link href="/">
      <h1 className={cn("text-center font-bold text-4xl transition-all duration-300", className)}>
        <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">GIGA</span>
      </h1>
    </Link>
  );
}