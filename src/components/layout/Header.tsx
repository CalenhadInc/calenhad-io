"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b-4 border-black bg-white">
      <nav className="px-8 md:px-16 lg:px-24">
        <div className="flex h-20 items-center justify-between">
          {/* Logo/Brand */}
          <Link
            href="/"
            className="flex items-center gap-3 text-3xl md:text-4xl font-black uppercase hover:text-brand-accent transition-colors group"
          >
            <div className="relative h-10 w-10 border-2 border-black group-hover:border-brand-accent transition-colors">
              <Image
                src="/logo.svg"
                alt="Calenhad Logo"
                fill
                className="object-contain p-1"
              />
            </div>
            <span>CALENHAD</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-8">
            {NAV_LINKS.map((link) =>
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-bold uppercase hover:text-brand-accent transition-colors"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-lg font-bold uppercase hover:text-brand-accent transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 border-4 border-black hover:bg-black hover:text-white transition-all"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t-4 border-black py-4">
            <div className="space-y-2">
              {NAV_LINKS.map((link) =>
                link.external ? (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-3 text-xl font-bold uppercase border-l-4 border-black hover:border-brand-accent hover:text-brand-accent"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-3 text-xl font-bold uppercase border-l-4 border-black hover:border-brand-accent hover:text-brand-accent"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
