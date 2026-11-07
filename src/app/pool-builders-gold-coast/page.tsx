import type { Metadata } from "next"
import { LocationPage } from "@/components/LocationPage"
import { QldPoolGuide } from "@/components/QldPoolGuide"

export const metadata: Metadata = {
  title: { absolute: "Pool Builders on the Gold Coast: 2026 Costs, Rules & Quotes | PoolHub" },
  description:
    "What a pool costs on the Gold Coast in 2026, water table and canal block issues, Queensland approvals and what to check before you sign.",
}

export default function PoolBuildersGoldCoast() {
  return (
    <LocationPage
      city="Gold Coast"
      state="QLD"
      costRange="about $43,000–$82,000 for fibreglass and $62,000–$106,000 for concrete"
      tips="Gold Coast pool builders should be QBCC-licensed and experienced with sandy coastal soils and salt-air exposure. Ask about saltwater chlorination systems and pool fencing compliance. Many Gold Coast builds include outdoor entertaining areas, so get this quoted upfront."
    >
      <QldPoolGuide
        city="Gold Coast"
        fibreglass="$43,000–$82,000"
        concrete="$62,000–$106,000"
        sewerOwner="the City of Gold Coast"
        site={[
          {
            title: "High water tables",
            text: "Local builders flag this as a big one, especially on canal estates and near the Coomera River. It can change how the hole is dug and the pool's design, and may need dewatering and sub-soil drainage. Ask how it's priced before you sign.",
          },
          {
            title: "Acid sulfate soils",
            text: "Low-lying coastal land can hold acid sulfate soil, and lowering the water table or digging it up can release acid. Disturbed soil must be treated, which adds cost, so ask your builder and certifier whether your block is affected.",
          },
          {
            title: "Sand and salt air",
            text: "Sandy ground and coastal air affect how a pool is built and what lasts. Ask about shoring during the dig, and which fence fittings and equipment suit a site near the water.",
          },
        ]}
      />
    </LocationPage>
  )
}
