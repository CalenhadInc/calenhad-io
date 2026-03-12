"use client";

import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || submitting) return;
    setSubmitting(true);

    // Replace with your actual endpoint (Formspree, Mailchimp, etc.)
    // For now, this simulates a successful submission
    await new Promise((resolve) => setTimeout(resolve, 600));
    setSubmitted(true);
    setSubmitting(false);
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Subtle warm gradient overlay */}
      <div className="pointer-events-none fixed inset-0 bg-gradient-to-b from-warm-950 via-warm-950 to-warm-900 opacity-80" />

      {/* Above the fold */}
      <section className="relative flex min-h-screen flex-col items-center justify-center px-6">
        <div className="animate-fade-up max-w-3xl text-center">
          <h1 className="font-serif text-warm-100 mb-8 text-6xl font-light tracking-tight sm:text-7xl md:text-8xl lg:text-9xl">
            Calenhad
          </h1>
          <p className="font-serif text-warm-400 animate-fade-up animate-delay-1 text-xl leading-relaxed sm:text-2xl md:text-3xl">
            Most ads are guesses. This isn&rsquo;t.
          </p>
        </div>
      </section>

      {/* Middle section */}
      <section className="relative px-6 py-32 sm:py-40 md:py-48">
        <div className="mx-auto flex max-w-2xl flex-col gap-24 sm:gap-32 md:gap-40">
          <p className="font-serif text-warm-300 animate-fade-up text-2xl leading-relaxed sm:text-3xl md:text-4xl">
            Before a single word of copy is written, we already know why
            she&rsquo;ll buy.
          </p>

          <p className="font-serif text-warm-300 animate-fade-up text-2xl leading-relaxed sm:text-3xl md:text-4xl">
            Every ad answers one question for one person. We just know which
            question.
          </p>

          <p className="font-serif text-warm-300 animate-fade-up text-2xl leading-relaxed sm:text-3xl md:text-4xl">
            The system is structured, layered, deliberate. The hook
            isn&rsquo;t written. It&rsquo;s discovered.
          </p>
        </div>
      </section>

      {/* Close — Request access */}
      <section className="relative px-6 pb-32 pt-16 sm:pb-40 md:pb-48">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-serif text-warm-100 animate-fade-up mb-4 text-3xl font-light sm:text-4xl">
            Request Access
          </h2>
          <p className="text-warm-500 animate-fade-up animate-delay-1 mb-12 text-sm tracking-wide">
            Limited availability. We&rsquo;ll be in touch.
          </p>

          {submitted ? (
            <p className="font-serif text-amber-glow animate-fade-up text-xl">
              Noted. We&rsquo;ll find you.
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="animate-fade-up animate-delay-2 flex flex-col gap-4 sm:flex-row"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="border-warm-700 bg-warm-900/50 text-warm-100 placeholder:text-warm-600 focus:border-amber-glow flex-1 rounded-none border-b px-4 py-3 text-base transition-colors focus:outline-none"
              />
              <button
                type="submit"
                disabled={submitting}
                className="border-warm-600 text-warm-300 hover:border-amber-glow hover:text-amber-glow cursor-pointer border-b px-8 py-3 text-sm tracking-widest uppercase transition-colors disabled:opacity-50"
              >
                {submitting ? "..." : "Enter"}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Minimal footer */}
      <footer className="relative px-6 pb-8 pt-16">
        <div className="text-warm-700 text-center text-xs tracking-wider">
          Calenhad
        </div>
      </footer>
    </div>
  );
}
