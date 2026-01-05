import { CONTACT_EMAIL } from "@/lib/constants";

export function CallToAction() {
  return (
    <section className="bg-brand-accent text-black border-b-8 border-black">
      <div className="px-8 py-24 md:px-16 lg:px-24">
        <div className="max-w-7xl">
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-black mb-12 leading-[0.85]">
            LET'S
            <br />
            WORK.
          </h2>

          <div className="border-4 border-black bg-black text-white p-8 max-w-2xl">
            <div className="text-2xl md:text-3xl font-black mb-4">EMAIL:</div>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-xl md:text-2xl font-bold text-brand-accent hover:underline break-all"
            >
              {CONTACT_EMAIL}
            </a>
          </div>

          <div className="mt-12 text-xl md:text-2xl font-bold">
            → SERIOUS ABOUT MESH NETWORKS
            <br />
            → READY TO BUILD
            <br />
            → CONTACT US
          </div>
        </div>
      </div>
    </section>
  );
}
