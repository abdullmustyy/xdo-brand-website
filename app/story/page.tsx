import type { Metadata } from "next";
import ClosingDarkCTA from "@/components/sections/story/ClosingDarkCTA";
import CoreValues from "@/components/sections/story/CoreValues";
import StoryHeader from "@/components/sections/story/StoryHeader";
import StoryIntro from "@/components/sections/story/StoryIntro";
import Timeline from "@/components/sections/story/Timeline";

export const metadata: Metadata = {
  title: "My Story",
  description:
    "Five chapters, one engine — the path from trying to fit into someone else's plan to building a growth performance practice of my own.",
};

export default function StoryPage() {
  return (
    <>
      <StoryHeader />
      <StoryIntro />
      <Timeline />
      <CoreValues />
      <ClosingDarkCTA />
    </>
  );
}
