import type { Metadata } from "next";
import NotFound from "@/components/sections/NotFound";

export const metadata: Metadata = {
  title: "Page not found",
  description: "Lost the thread — that page doesn't exist. Here are a few paths back.",
};

export default function NotFoundPage() {
  return <NotFound />;
}
