import type { Metadata } from "next"
import { LocationPage } from "@/components/LocationPage"

export const metadata: Metadata = {
  title: { absolute: "Pool Builders in Sydney: Costs, Rules & Quotes | PoolHub" },
  description:
    "What to know before you hire a pool builder in Sydney: costs, site access and approvals, plus a free way to ask local builders to quote.",
}

export default function PoolBuildersSydney() {
  return (
    <LocationPage
      city="Sydney"
      state="NSW"
      costRange="$40,000–$80,000"
      tips="Sydney pool builders must hold a valid NSW Fair Trading licence. Consider site access — many Sydney properties have limited rear access which affects excavation costs. Ask about council DA requirements, as most Sydney councils require development approval for pools over a certain size."
    />
  )
}
