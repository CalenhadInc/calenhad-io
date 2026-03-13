import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  const { email } = await request.json();

  if (!email || typeof email !== "string") {
    return NextResponse.json({ error: "Email required" }, { status: 400 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  await resend.emails.send({
    from: "Calenhad <onboarding@resend.dev>",
    to: "ed@eddydavies.com",
    subject: "Calenhad — New access request",
    text: `New access request from: ${email}`,
  });

  return NextResponse.json({ ok: true });
}
