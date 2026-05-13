import type { Metadata } from "next";
import FeaturedResource from "@/components/sections/resources/FeaturedResource";
import ResourcesDarkCTA from "@/components/sections/resources/ResourcesDarkCTA";
import ResourcesGrid from "@/components/sections/resources/ResourcesGrid";
import ResourcesHeader from "@/components/sections/resources/ResourcesHeader";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Free frameworks, playbooks, and tools — the reps repackaged. Marketing, sales, mentality, client acquisition, and AI leverage for growth.",
};

export default function ResourcesPage() {
  return (
    <>
      <ResourcesHeader />
      <FeaturedResource />
      <ResourcesGrid />
      <ResourcesDarkCTA />
    </>
  );
}
