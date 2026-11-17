import { NextResponse } from "next/server";

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request) {
  let body;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const phone = typeof body.phone === "string" ? body.phone.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  const errors = {};

  if (!name) errors.name = "Name is required.";
  if (!email || !isValidEmail(email)) errors.email = "A valid email is required.";
  if (!message || message.length < 10) {
    errors.message = "Message should be at least 10 characters.";
  }

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ errors }, { status: 400 });
  }

  // NOTE: This currently just logs the submission server-side.
  // Wire this up to an email service, CRM, or database before going to production.
  console.log("New CareKar contact submission:", {
    name,
    email,
    phone,
    message,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({ success: true }, { status: 200 });
}
