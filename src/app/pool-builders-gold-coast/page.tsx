import type { Metadata } from "next"
import { LocationPage } from "@/components/LocationPage"

export const metadata: Metadata = {
  title: "Pool Builders on the Gold Coast — Get 3 Free Quotes | PoolHub",
  description:
    "Compare licensed pool builders on the Gold Coast. Get 3 free quotes from local pool builders. No obligation.",
}

export default function PoolBuildersGoldCoast() {
  return (
    <LocationPage
      city="Gold Coast"
      state="QLD"
      costRange="$35,000–$70,000"
      tips="Gold Coast pool builders should be QBCC-licensed and experienced with sandy coastal soils and salt-air exposure. Ask about saltwater chlorination systems and pool fencing compliance. Many Gold Coast builds include outdoor entertaining areas — get this quoted upfront."
    />
  )
}
