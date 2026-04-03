import type { Metadata } from "next"
import { LocationPage } from "@/components/LocationPage"

export const metadata: Metadata = {
  title: "Pool Builders in Sydney — Get 3 Free Quotes | PoolHub",
  description:
    "Compare licensed pool builders in Sydney. Get 3 free quotes from local pool builders. No obligation.",
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
