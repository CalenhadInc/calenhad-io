import { Metadata } from "next";
import { CONTACT_EMAIL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Consulting",
  description:
    "Mesh network consulting and development services. From architecture to deployment, we help startups build production-ready mesh network solutions.",
};

export default function ConsultingPage() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-[60vh] flex items-center bg-black text-white border-b-8 border-brand-accent">
        <div className="w-full px-8 py-24 md:px-16 lg:px-24">
          <div className="max-w-7xl">
            <h1 className="text-[10vw] md:text-[8vw] lg:text-[7rem] font-black leading-[0.85] mb-12">
              MESH
              <br />
              NETWORK
              <br />
              <span className="text-brand-accent">CONSULTING</span>
            </h1>

            <div className="text-2xl md:text-3xl lg:text-4xl font-bold max-w-4xl">
              WE'VE BUILT MESH NETWORKS.
              <br />
              WE CAN HELP YOU BUILD YOURS.
            </div>
          </div>
        </div>
      </section>

      {/* What We Know */}
      <section className="bg-white text-black border-b-4 border-black">
        <div className="px-8 py-16 md:px-16 lg:px-24">
          <div className="max-w-7xl">
            <h2 className="text-5xl md:text-7xl font-black mb-12">
              WHAT WE KNOW
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="border-4 border-black p-8">
                <div className="text-3xl font-black mb-6 text-brand-accent">
                  MESH NETWORKS
                </div>
                <div className="space-y-3 text-lg font-bold">
                  <div>→ SELF-ORGANIZING TOPOLOGIES</div>
                  <div>→ ROUTING PROTOCOLS</div>
                  <div>→ NODE DISCOVERY</div>
                  <div>→ NETWORK RESILIENCE</div>
                  <div>→ SCALABILITY PATTERNS</div>
                </div>
              </div>

              <div className="border-4 border-black p-8">
                <div className="text-3xl font-black mb-6 text-brand-accent">
                  HARDWARE
                </div>
                <div className="space-y-3 text-lg font-bold">
                  <div>→ WATERPROOFING (IP67+)</div>
                  <div>→ POWER MANAGEMENT</div>
                  <div>→ RF DESIGN</div>
                  <div>→ ENVIRONMENTAL HARDENING</div>
                  <div>→ MANUFACTURING</div>
                </div>
              </div>

              <div className="border-4 border-black p-8">
                <div className="text-3xl font-black mb-6 text-brand-accent">
                  SOFTWARE
                </div>
                <div className="space-y-3 text-lg font-bold">
                  <div>→ EMBEDDED SYSTEMS</div>
                  <div>→ REAL-TIME PROTOCOLS</div>
                  <div>→ DISTRIBUTED SYSTEMS</div>
                  <div>→ FIRMWARE DEVELOPMENT</div>
                  <div>→ SYSTEM ARCHITECTURE</div>
                </div>
              </div>

              <div className="border-4 border-black p-8 bg-black text-white">
                <div className="text-3xl font-black mb-6 text-brand-accent">
                  DEPLOYMENT
                </div>
                <div className="space-y-3 text-lg font-bold">
                  <div>→ FIELD TESTING</div>
                  <div>→ PRODUCTION SCALING</div>
                  <div>→ RELIABILITY ENGINEERING</div>
                  <div>→ PERFORMANCE OPTIMIZATION</div>
                  <div>→ REAL-WORLD VALIDATION</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="bg-black text-white border-b-4 border-white">
        <div className="px-8 py-16 md:px-16 lg:px-24">
          <div className="max-w-7xl">
            <h2 className="text-5xl md:text-7xl font-black mb-12">
              HOW WE WORK
            </h2>

            <div className="space-y-8">
              <div className="border-l-8 border-brand-accent pl-8">
                <div className="text-3xl font-black mb-4">01. UNDERSTAND</div>
                <div className="text-xl font-bold text-white/80">
                  WE START BY UNDERSTANDING YOUR USE CASE. WHAT PROBLEM ARE YOU
                  SOLVING? WHAT ARE YOUR CONSTRAINTS? WHAT DOES SUCCESS LOOK
                  LIKE?
                </div>
              </div>

              <div className="border-l-8 border-brand-accent pl-8">
                <div className="text-3xl font-black mb-4">02. ARCHITECT</div>
                <div className="text-xl font-bold text-white/80">
                  WE DESIGN A SOLUTION THAT FITS YOUR NEEDS. NETWORK TOPOLOGY.
                  HARDWARE SPECS. SOFTWARE ARCHITECTURE. DEPLOYMENT STRATEGY.
                </div>
              </div>

              <div className="border-l-8 border-brand-accent pl-8">
                <div className="text-3xl font-black mb-4">03. BUILD</div>
                <div className="text-xl font-bold text-white/80">
                  WE HELP YOU BUILD IT. PROTOCOL DEVELOPMENT. HARDWARE DESIGN.
                  FIRMWARE. TESTING. ITERATION. PRODUCTION.
                </div>
              </div>

              <div className="border-l-8 border-brand-accent pl-8">
                <div className="text-3xl font-black mb-4">04. DEPLOY</div>
                <div className="text-xl font-bold text-white/80">
                  WE HELP YOU SHIP IT. FIELD TESTING. PRODUCTION SCALING.
                  RELIABILITY. PERFORMANCE. REAL-WORLD VALIDATION.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Can Build */}
      <section className="bg-white text-black border-b-4 border-black">
        <div className="px-8 py-16 md:px-16 lg:px-24">
          <div className="max-w-7xl">
            <h2 className="text-5xl md:text-7xl font-black mb-12">
              WHAT WE CAN BUILD
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border-l-4 border-black pl-6">
                <div className="text-2xl font-black mb-3">
                  IOT MESH NETWORKS
                </div>
                <div className="text-lg font-bold text-muted">
                  Sensor networks. Data collection. Remote monitoring.
                  Environmental sensing. Industrial IoT.
                </div>
              </div>

              <div className="border-l-4 border-black pl-6">
                <div className="text-2xl font-black mb-3">
                  EVENT INFRASTRUCTURE
                </div>
                <div className="text-lg font-bold text-muted">
                  Festival networks. Temporary deployments. High-density
                  scenarios. Outdoor events. Mobile infrastructure.
                </div>
              </div>

              <div className="border-l-4 border-black pl-6">
                <div className="text-2xl font-black mb-3">
                  EMERGENCY SYSTEMS
                </div>
                <div className="text-lg font-bold text-muted">
                  Disaster recovery. Off-grid communication. Resilient networks.
                  Critical infrastructure. Backup systems.
                </div>
              </div>

              <div className="border-l-4 border-black pl-6">
                <div className="text-2xl font-black mb-3">
                  SMART CITIES
                </div>
                <div className="text-lg font-bold text-muted">
                  Urban sensing. Traffic management. Environmental monitoring.
                  Public infrastructure. Distributed systems.
                </div>
              </div>

              <div className="border-l-4 border-black pl-6">
                <div className="text-2xl font-black mb-3">
                  INDUSTRIAL
                </div>
                <div className="text-lg font-bold text-muted">
                  Factory automation. Asset tracking. Process monitoring.
                  Predictive maintenance. Industrial control.
                </div>
              </div>

              <div className="border-l-4 border-brand-accent pl-6 bg-black text-white p-6 -ml-4">
                <div className="text-2xl font-black mb-3 text-brand-accent">
                  YOUR USE CASE
                </div>
                <div className="text-lg font-bold">
                  If it involves mesh networks, we can probably help.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Capabilities */}
      <section className="bg-brand-accent text-black border-b-4 border-black">
        <div className="px-8 py-16 md:px-16 lg:px-24">
          <div className="max-w-7xl">
            <h2 className="text-5xl md:text-7xl font-black mb-12">
              TECHNICAL CAPABILITIES
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-2xl font-black mb-4 border-b-4 border-black pb-2">
                  PROTOCOLS
                </div>
                <div className="space-y-2 text-lg font-bold">
                  <div>→ 802.11S</div>
                  <div>→ ZIGBEE</div>
                  <div>→ THREAD</div>
                  <div>→ LORA MESH</div>
                  <div>→ CUSTOM PROTOCOLS</div>
                </div>
              </div>

              <div>
                <div className="text-2xl font-black mb-4 border-b-4 border-black pb-2">
                  PLATFORMS
                </div>
                <div className="space-y-2 text-lg font-bold">
                  <div>→ ESP32</div>
                  <div>→ NRF52</div>
                  <div>→ RASPBERRY PI</div>
                  <div>→ STM32</div>
                  <div>→ CUSTOM HARDWARE</div>
                </div>
              </div>

              <div>
                <div className="text-2xl font-black mb-4 border-b-4 border-black pb-2">
                  LANGUAGES
                </div>
                <div className="space-y-2 text-lg font-bold">
                  <div>→ C/C++</div>
                  <div>→ RUST</div>
                  <div>→ PYTHON</div>
                  <div>→ EMBEDDED C</div>
                  <div>→ ASSEMBLY</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="bg-black text-white border-b-4 border-white">
        <div className="px-8 py-16 md:px-16 lg:px-24">
          <div className="max-w-7xl">
            <h2 className="text-5xl md:text-7xl font-black mb-12">
              ENGAGEMENT MODELS
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border-4 border-white p-6">
                <div className="text-3xl font-black mb-4">CONSULTING</div>
                <div className="text-lg font-bold space-y-2">
                  <div>→ TECHNICAL ADVISORY</div>
                  <div>→ ARCHITECTURE REVIEW</div>
                  <div>→ TECHNOLOGY SELECTION</div>
                  <div>→ STRATEGIC GUIDANCE</div>
                </div>
              </div>

              <div className="border-4 border-white p-6">
                <div className="text-3xl font-black mb-4">CO-DEVELOPMENT</div>
                <div className="text-lg font-bold space-y-2">
                  <div>→ JOINT DEVELOPMENT</div>
                  <div>→ EMBEDDED TEAM</div>
                  <div>→ KNOWLEDGE TRANSFER</div>
                  <div>→ HANDS-ON BUILDING</div>
                </div>
              </div>

              <div className="border-4 border-brand-accent bg-brand-accent text-black p-6">
                <div className="text-3xl font-black mb-4">CUSTOM</div>
                <div className="text-lg font-bold space-y-2">
                  <div>→ TAILORED TO YOUR NEEDS</div>
                  <div>→ FLEXIBLE ENGAGEMENT</div>
                  <div>→ YOUR TIMELINE</div>
                  <div>→ YOUR BUDGET</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white text-black border-b-8 border-black">
        <div className="px-8 py-24 md:px-16 lg:px-24">
          <div className="max-w-7xl">
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-black mb-12 leading-[0.85]">
              LET'S
              <br />
              BUILD.
            </h2>

            <div className="mb-12 text-2xl md:text-3xl font-bold space-y-2">
              <div>→ SERIOUS ABOUT MESH NETWORKS?</div>
              <div>→ READY TO BUILD SOMETHING?</div>
              <div>→ GET IN TOUCH.</div>
            </div>

            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-block border-4 border-black bg-black text-white px-8 py-4 text-xl font-black uppercase hover:bg-white hover:text-black transition-all"
            >
              EMAIL: {CONTACT_EMAIL}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
