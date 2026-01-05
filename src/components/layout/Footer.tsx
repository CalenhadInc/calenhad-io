import Link from "next/link";
import { NAV_LINKS, CONTACT_EMAIL, B2C_SITE_URL } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t-8 border-black bg-black text-white">
      <div className="px-8 py-16 md:px-16 lg:px-24">
        <div className="max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            {/* Brand */}
            <div>
              <h3 className="text-4xl md:text-5xl font-black uppercase mb-6">
                CALENHAD
              </h3>
              <div className="text-xl font-bold space-y-2">
                <div>→ MESH NETWORKS</div>
                <div>→ WATERPROOF HARDWARE</div>
                <div>→ PRODUCTION READY</div>
              </div>
            </div>

            {/* Links */}
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-xl font-black uppercase mb-4 border-b-2 border-white pb-2">
                  NAVIGATE
                </div>
                <ul className="space-y-2 text-lg font-bold">
                  {NAV_LINKS.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="hover:text-brand-accent transition-colors"
                      >
                        {link.label.toUpperCase()}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="text-xl font-black uppercase mb-4 border-b-2 border-white pb-2">
                  CONTACT
                </div>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-lg font-bold text-brand-accent hover:underline break-all"
                >
                  {CONTACT_EMAIL}
                </a>
                <div className="mt-4">
                  <a
                    href={B2C_SITE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-bold hover:text-brand-accent"
                  >
                    WAYPOINT STORE →
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t-4 border-white pt-8">
            <p className="text-lg font-bold">
              © {currentYear} CALENHAD. WE BUILD MESH NETWORKS.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
