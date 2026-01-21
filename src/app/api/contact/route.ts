import { NextResponse } from "next/server";
import { ref, push } from "firebase/database";
import { db } from "../../../lib/firebase";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, message } = body;

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: "All fields required" },
        { status: 400 }
      );
    }

    const contactsRef = ref(db, "salonandspa/contacts");

    await push(contactsRef, {
      name,
      email,
      phone,
      message,
      createdAt: Date.now(),
    });

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 201 }
    );

  } catch (error) {
    console.error("API ERROR:", error);
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}
