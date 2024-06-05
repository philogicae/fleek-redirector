"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaCircleNotch } from "react-icons/fa6";

if (!process.env.NEXT_PUBLIC_REDIRECT_URL) {
  throw new Error("You need to provide NEXT_PUBLIC_REDIRECT_URL env variable");
}
const url = process.env.NEXT_PUBLIC_REDIRECT_URL;

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.replace(url);
  }, []);
  return (
    <main className="flex flex-col w-full h-full items-center justify-center">
      <FaCircleNotch className="mb-6 text-6xl animate-spin" />
      <span className="mb-2 text-2xl font-bold">Fleek redirection to:</span>
      <a className="text-xl font-bold text-cyan-500 hover:underline" href={url}>
        {url}
      </a>
    </main>
  );
}
