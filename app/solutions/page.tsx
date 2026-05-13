import type { Metadata } from "next";
import ApplicationForm from "@/components/sections/solutions/ApplicationForm";
import BestFitNotFit from "@/components/sections/solutions/BestFitNotFit";
import GSHeader from "@/components/sections/solutions/GSHeader";
import ProcessStrip from "@/components/sections/solutions/ProcessStrip";
import TierGrid from "@/components/sections/solutions/TierGrid";

export const metadata: Metadata = {
  title: "Growth Solutions",
  description:
    "Three ways to work together — a focused brand sprint, a quarterly strategy and implementation engagement, or an embedded operator-in-residence. Apply within.",
};

export default function SolutionsPage() {
  return (
    <>
      <GSHeader />
      <TierGrid />
      <ProcessStrip />
      <BestFitNotFit />
      <ApplicationForm />
    </>
  );
}
