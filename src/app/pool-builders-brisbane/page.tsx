import type { Metadata } from "next"
import { LocationPage } from "@/components/LocationPage"
import { QldPoolGuide } from "@/components/QldPoolGuide"

export const metadata: Metadata = {
  title: { absolute: "Pool Builders in Brisbane: 2026 Costs, Rules & Quotes | PoolHub" },
  description:
    "What a pool costs in Brisbane in 2026, Queensland approvals, deposit limits and what to check before you sign with a pool builder.",
}

export default function PoolBuildersBrisbane() {
  return (
    <LocationPage
      city="Brisbane"
      state="QLD"
      costRange="about $41,000–$78,000 for fibreglass and $60,000–$101,000 for concrete"
      tips="Look for QBCC-licensed builders with experience in Brisbane's clay soils and subtropical climate. Check their licence history on the QBCC register, ask for references from recent builds in your area, and visit completed pools if you can."
    >
      <QldPoolGuide
        city="Brisbane"
        fibreglass="$41,000–$78,000"
        concrete="$60,000–$101,000"
        sewerOwner="Urban Utilities"
        site={[
          {
            title: "Clay soil",
            text: "Plenty of Brisbane blocks sit on clay that swells when wet and shrinks when dry. Ask whether your pool needs a soil test or an engineer's design, and what happens to the price if the ground isn't what the builder expected.",
          },
          {
            title: "Sloping blocks",
            text: "A hilly block can mean retaining walls, extra digging and more concrete. Have the builder price these in the quote, not as a variation once work has started.",
          },
          {
            title: "Access",
            text: "Tight side access can make excavation slower, and a fibreglass shell has to be craned in. Ask how the machinery and the pool will reach your backyard.",
          },
        ]}
      />
    </LocationPage>
  )
}
