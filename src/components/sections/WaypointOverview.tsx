import Link from "next/link";
import { B2C_SITE_URL } from "@/lib/constants";

export function WaypointOverview() {
  return (
    <section className="bg-black text-white border-b-4 border-white">
      <div className="px-8 py-16 md:px-16 lg:px-24">
        <div className="max-w-7xl">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-12">
            WAYPOINT
          </h2>

          {/* Specs table - brutalist */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 text-xl md:text-2xl font-bold">
            <div className="border-4 border-white p-6">
              <div className="text-brand-accent mb-4">SPEC:</div>
              <div className="space-y-2 text-lg">
                <div>WATERPROOF: IP67</div>
                <div>MESH: SELF-ORGANIZING</div>
                <div>DEPLOYMENT: FESTIVALS</div>
                <div>STATUS: PRODUCTION</div>
              </div>
            </div>

            <div className="border-4 border-brand-accent p-6 bg-brand-accent text-black">
              <div className="mb-4">PROOF:</div>
              <div className="space-y-2 text-lg">
                <div>→ DEPLOYED AT FESTIVALS</div>
                <div>→ SURVIVED RAIN & MUD</div>
                <div>→ SCALED TO THOUSANDS</div>
                <div>→ IT WORKS.</div>
              </div>
            </div>
          </div>

          {/* Direct links */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={B2C_SITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="border-4 border-white text-white px-8 py-4 text-xl font-black uppercase hover:bg-white hover:text-black transition-all"
            >
              VISIT WAYPOINT →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
