import { getAllArticles } from "@/lib/articles"
import { ArticleCard } from "@/components/ArticleCard"

interface LocationPageProps {
  city: string
  state: string
  costRange: string
  tips: string
}

export function LocationPage({ city, state, costRange, tips }: LocationPageProps) {
  const articles = getAllArticles().slice(0, 3)
  const quoteUrl = `https://tradihubai.com.au/jobs/new?trade=pool-building&ref=poolhub-${city.toLowerCase().replace(/\s+/g, "-")}`

  return (
    <>
      {/* Hero */}
      <section className="mb-10">
        <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          Pool Builders in {city}{" "}
          <span style={{ color: "var(--accent)" }}>
            — Get 3 Free Quotes
          </span>
        </h1>
        <p className="mt-3 text-lg text-zinc-400 max-w-2xl">
          Compare licensed pool builders in {city}, {state}. Free, no obligation.
        </p>
        <div className="mt-6">
          <a
            href={quoteUrl}
            className="inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-semibold text-white transition-all shadow-lg"
            style={{ background: "var(--accent)" }}
          >
            Get My 3 Quotes &rarr;
          </a>
        </div>
      </section>

      {/* Trust signals */}
      <section className="mb-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-zinc-400">
        {[
          "Licensed builders",
          "Free quotes",
          "No obligation",
        ].map((label) => (
          <span key={label} className="flex items-center gap-1.5">
            <svg className="w-4 h-4" style={{ color: "var(--accent)" }} fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
            {label}
          </span>
        ))}
      </section>

      {/* Brief content */}
      <section className="mb-10 rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 sm:p-8">
        <h2 className="text-xl font-bold text-white mb-4">
          Pool Building Costs in {city}
        </h2>
        <p className="text-zinc-400 leading-relaxed mb-4">
          Average pool installation costs in {city}: {costRange}. Prices vary based on pool type (concrete, fibreglass, or above-ground), size, site access, and landscaping requirements.
        </p>
        <h3 className="text-lg font-semibold text-white mb-3">
          What to Look For in a {city} Pool Builder
        </h3>
        <p className="text-zinc-400 leading-relaxed">
          {tips}
        </p>
      </section>

      {/* Second CTA */}
      <section className="mb-10 rounded-xl border border-teal-500/30 bg-gradient-to-b from-teal-500/10 to-transparent p-6 sm:p-8 text-center">
        <p className="text-base sm:text-lg font-semibold text-white mb-4">
          Ready? Get your free quotes now.
        </p>
        <a
          href={quoteUrl}
          className="inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm sm:text-base font-semibold text-white transition-all shadow-lg"
          style={{ background: "var(--accent)" }}
        >
          Get Quotes &rarr;
        </a>
        <p className="mt-3 text-xs text-zinc-500">No obligation. Takes 60 seconds.</p>
      </section>

      {/* Related articles */}
      {articles.length > 0 && (
        <section className="mb-10">
          <h2 className="mb-6 text-xl font-bold text-white">
            Pool Guides from PoolHub
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </section>
      )}
    </>
  )
}
