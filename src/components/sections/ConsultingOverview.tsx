import Link from "next/link";

export function ConsultingOverview() {
  return (
    <section className="bg-white text-black border-b-4 border-black">
      <div className="px-8 py-16 md:px-16 lg:px-24">
        <div className="max-w-7xl">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-12">
            CONSULTING
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: What we offer */}
            <div>
              <div className="text-3xl md:text-4xl font-black mb-8 border-b-4 border-black pb-4">
                WE OFFER:
              </div>
              <div className="space-y-4 text-xl md:text-2xl font-bold">
                <div className="flex items-start gap-4">
                  <div className="text-brand-accent">→</div>
                  <div>ARCHITECTURE DESIGN</div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-brand-accent">→</div>
                  <div>PROTOCOL DEVELOPMENT</div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-brand-accent">→</div>
                  <div>HARDWARE CONSULTING</div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-brand-accent">→</div>
                  <div>DEPLOYMENT STRATEGY</div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-brand-accent">→</div>
                  <div>CO-DEVELOPMENT</div>
                </div>
              </div>
            </div>

            {/* Right: Who we work with */}
            <div>
              <div className="text-3xl md:text-4xl font-black mb-8 border-b-4 border-black pb-4">
                WHO WE WORK WITH:
              </div>
              <div className="space-y-4 text-xl md:text-2xl font-bold">
                <div className="border-l-4 border-black pl-6">
                  STARTUPS BUILDING IOT
                </div>
                <div className="border-l-4 border-black pl-6">
                  COMPANIES NEEDING MESH
                </div>
                <div className="border-l-4 border-black pl-6">
                  TEAMS WANTING TO LEARN
                </div>
                <div className="border-l-4 border-brand-accent pl-6 bg-black text-white p-4 -ml-4">
                  ANYONE SERIOUS ABOUT MESH NETWORKS
                </div>
              </div>
            </div>
          </div>

          <Link
            href="/consulting"
            className="mt-12 inline-block border-4 border-black bg-black text-white px-8 py-4 text-xl font-black uppercase hover:bg-white hover:text-black transition-all"
          >
            MORE INFO →
          </Link>
        </div>
      </div>
    </section>
  );
}
