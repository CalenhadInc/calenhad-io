import Link from "next/link";

export function Hero() {
  return (
    <section className="min-h-[80vh] flex items-center bg-black text-white border-b-8 border-brand-accent">
      <div className="w-full px-8 py-24 md:px-16 lg:px-24">
        <div className="max-w-7xl">
          {/* Huge statement */}
          <h1 className="text-[12vw] md:text-[10vw] lg:text-[8rem] font-black leading-[0.85] mb-12">
            MESH
            <br />
            NETWORK
            <br />
            <span className="text-brand-accent">INFRASTRUCTURE</span>
          </h1>

          {/* Direct statement list */}
          <div className="text-xl md:text-2xl lg:text-3xl font-bold space-y-2 mb-16 max-w-3xl">
            <p>→ WE BUILD MESH NETWORKS</p>
            <p>→ WE DEPLOYED WAYPOINT AT FESTIVALS</p>
            <p>→ WE CAN HELP YOU BUILD YOURS</p>
          </div>

          {/* Stark CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/consulting"
              className="border-4 border-white bg-white text-black px-8 py-4 text-xl font-black uppercase hover:bg-brand-accent hover:border-brand-accent hover:text-black transition-all"
            >
              CONSULTING →
            </Link>
            <a
              href="https://findwaypoint.io"
              target="_blank"
              rel="noopener noreferrer"
              className="border-4 border-brand-accent text-brand-accent px-8 py-4 text-xl font-black uppercase hover:bg-brand-accent hover:text-black transition-all"
            >
              WAYPOINT →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
