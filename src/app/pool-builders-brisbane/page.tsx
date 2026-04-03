import type { Metadata } from "next"
import { LocationPage } from "@/components/LocationPage"

export const metadata: Metadata = {
  title: "Pool Builders in Brisbane — Get 3 Free Quotes | PoolHub",
  description:
    "Compare licensed pool builders in Brisbane. Get 3 free quotes from local pool builders. No obligation.",
}

export default function PoolBuildersBrisbane() {
  return (
    <LocationPage
      city="Brisbane"
      state="QLD"
      costRange="$35,000–$65,000"
      tips="Look for QBCC-licensed builders with experience in Brisbane's clay soils and subtropical climate. Check they carry public liability and home warranty insurance. Ask for references from recent builds in your area and visit completed pools if possible."
    />
  )
}
