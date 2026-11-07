import Link from "next/link"

interface QldPoolGuideProps {
  city: string
  fibreglass: string
  concrete: string
  sewerOwner: string
  site: { title: string; text: string }[]
}

const QBCC = "https://www.qbcc.qld.gov.au/home-owner-hub/swimming-pools/build-pool"

/** Queensland pool building guide for a city page: the rules are state-wide, the site issues and prices are local. */
export function QldPoolGuide({ city, fibreglass, concrete, sewerOwner, site }: QldPoolGuideProps) {
  const place = city === "Gold Coast" ? "on the Gold Coast" : `in ${city}`
  const faqs = [
    {
      q: `How much does a pool cost ${place}?`,
      a: `Online cost guides put a standard in-ground pool ${place} at about ${fibreglass} for fibreglass and ${concrete} for concrete in 2026. These are estimates, not quotes. Access, slope, soil, fencing and landscaping can all move the price.`,
    },
    {
      q: `Do I need approval to build a pool ${place}?`,
      a: "Yes. You need building approval from your local council or a private certifier before work starts. Your builder usually arranges it, and the certifier will tell you if you need an engineer's report or another approval, such as for building over a sewer line.",
    },
    {
      q: "How much deposit can a Queensland pool builder ask for?",
      a: "For work of $20,000 or more, the QBCC limit is 5%. For work under that, it's 10%. The deposit usually includes the Queensland Home Warranty Scheme premium.",
    },
    {
      q: "When can I fill the pool?",
      a: "A compliant permanent fence must be in place, and your certifier must inspect and certify it, before the pool is filled to 300mm or more.",
    },
  ]
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  }

  const card = "mb-10 rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 sm:p-8"
  const h2 = "text-xl font-bold text-white mb-4"
  const body = "text-zinc-400 leading-relaxed"
  const link = "text-white underline hover:no-underline"

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className={card}>
        <h2 className={h2}>Fibreglass vs Concrete Prices</h2>
        <div className="overflow-x-auto">
          <table className="mb-4 w-full text-left text-sm text-zinc-400">
            <thead>
              <tr className="border-b border-zinc-800 text-zinc-300">
                <th className="py-2 pr-4 font-semibold">Pool type</th>
                <th className="py-2 font-semibold">Typical installed price, 2026</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-zinc-800">
                <td className="py-2 pr-4">Fibreglass, in-ground</td>
                <td className="py-2">{fibreglass}</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Concrete, in-ground</td>
                <td className="py-2">{concrete}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className={body}>
          These come from online cost guides, so treat them as a starting point and not a quote. Check whether a price includes fencing, paving and
          landscaping, because they&apos;re often extra. Our{" "}
          <Link href="/pool-building-costs-australia-2026" className={link}>
            pool cost guide
          </Link>{" "}
          goes through it line by line.
        </p>
      </section>

      <section className={card}>
        <h2 className={h2}>Site Issues to Ask a {city} Builder About</h2>
        <div className="space-y-4">
          {site.map((s) => (
            <div key={s.title}>
              <h3 className="mb-1 font-semibold text-white">{s.title}</h3>
              <p className={body}>{s.text}</p>
            </div>
          ))}
          <div>
            <h3 className="mb-1 font-semibold text-white">Sewer lines</h3>
            <p className={body}>
              Pools count as building over or near a sewer, and digging one close to a main can need a referral to {sewerOwner}. Find out where your
              sewer runs before you settle on the design, because it can decide where the pool can go.
            </p>
          </div>
        </div>
      </section>

      <section className={card}>
        <h2 className={h2}>Before You Sign With a Builder</h2>
        <ul className={`list-disc space-y-2 pl-5 ${body}`}>
          <li>Get several quotes, and have each builder inspect your site and give you their warranty details in writing.</li>
          <li>Check the builder&apos;s licence and licence history on the QBCC register before you accept a quote.</li>
          <li>Make sure the quote covers fencing, surrounds, landscaping and the Queensland Home Warranty Scheme premium.</li>
          <li>Pay no more than the legal deposit: 5% for work of $20,000 or more, 10% for work under that.</li>
          <li>Over $3,300, you must get a written contract, a QBCC Contract Information Statement and a 5-business-day cooling-off period.</li>
          <li>The contract should spell out the drawings, pool details, progress payments and what happens if something unexpected turns up in the ground.</li>
        </ul>
      </section>

      <section className={card}>
        <h2 className={h2}>From Approval to Swimming</h2>
        <ol className={`list-decimal space-y-2 pl-5 ${body}`}>
          <li>Get building approval from council or a private certifier. Your builder usually arranges this.</li>
          <li>Put up the pool warning sign before construction starts.</li>
          <li>Use a temporary fence during the build. It&apos;s only good for up to 3 months once your certifier has approved it.</li>
          <li>Finish the permanent fence, then have your certifier inspect and certify it before the pool is filled to 300mm or more.</li>
          <li>Have your builder show you how to run the filtration and keep the water safe.</li>
          <li>Register the pool with the QBCC.</li>
        </ol>
        <p className={`mt-4 ${body}`}>
          More detail: our{" "}
          <Link href="/pool-safety-fencing-regulations-australia" className={link}>
            pool fencing guide
          </Link>
          ,{" "}
          <Link href="/queensland-pool-safety-inspections-what-gets-checked-and-how-to-pass" className={link}>
            Queensland pool safety inspections
          </Link>{" "}
          and{" "}
          <Link href="/how-to-build-a-pool-in-australia" className={link}>
            how to build a pool in Australia
          </Link>
          .
        </p>
      </section>

      <section className={card}>
        <h2 className={h2}>Common Questions</h2>
        <div className="space-y-4">
          {faqs.map((f) => (
            <div key={f.q}>
              <h3 className="mb-1 font-semibold text-white">{f.q}</h3>
              <p className={body}>{f.a}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-xs text-zinc-500">
          General information, checked November 2026. Rules change, so confirm the details with your certifier or the{" "}
          <a href={QBCC} target="_blank" rel="noopener noreferrer" className="underline hover:text-white">
            QBCC
          </a>
          .
        </p>
      </section>
    </>
  )
}
