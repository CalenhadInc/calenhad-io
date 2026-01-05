export function ValueProposition() {
  return (
    <section className="bg-white text-black border-b-4 border-black">
      <div className="px-8 py-16 md:px-16 lg:px-24">
        <div className="max-w-7xl">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-12">
            WHAT WE DO:
          </h2>

          {/* Numbered list - brutalist style */}
          <div className="space-y-8 text-2xl md:text-3xl lg:text-4xl font-bold">
            <div className="border-l-8 border-black pl-8">
              <div className="text-brand-accent mb-2">01.</div>
              <div>MESH NETWORK CONSULTING</div>
            </div>

            <div className="border-l-8 border-black pl-8">
              <div className="text-brand-accent mb-2">02.</div>
              <div>WATERPROOFING & HARDWARE</div>
            </div>

            <div className="border-l-8 border-black pl-8">
              <div className="text-brand-accent mb-2">03.</div>
              <div>PROTOCOL DEVELOPMENT</div>
            </div>

            <div className="border-l-8 border-brand-accent pl-8 bg-black text-white p-8 -ml-8">
              <div className="text-brand-accent mb-2">04.</div>
              <div>WE BUILT WAYPOINT. NOW WE BUILD YOURS.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
