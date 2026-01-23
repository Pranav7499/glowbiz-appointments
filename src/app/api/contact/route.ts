// import { NextResponse } from "next/server";
// import { ref, push } from "firebase/database";
// import { db } from "../../../lib/firebase";

// export async function POST(req: Request) {
//   try {
//     const body = await req.json();
//     const { name, email, phone, message } = body;

//     if (!name || !email || !phone || !message) {
//       return NextResponse.json(
//         { error: "All fields required" },
//         { status: 400 }
//       );
//     }

//     const contactsRef = ref(db, "salonandspa/contacts");

//     await push(contactsRef, {
//       name,
//       email,
//       phone,
//       message,
//       createdAt: Date.now(),
//     });

//     return NextResponse.json(
//       { message: "Message sent successfully" },
//       { status: 201 }
//     );

//   } catch (error) {
//     console.error("API ERROR:", error);
//     return NextResponse.json(
//       { error: "Server error" },
//       { status: 500 }
//     );
//   }
// }


import { NextResponse } from "next/server";
import { ref, push } from "firebase/database";
import { db } from "@/lib/firebase";
import { transporter } from "@/lib/mailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, subject, message } = body;

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: "All fields required" },
        { status: 400 }
      );
    }

    /* 1️⃣ Save to Firebase */
    await push(ref(db, "salonandspa/contacts"), {
      name,
      email,
      phone,
      subject,
      message,
      createdAt: Date.now(),
    });

    /* 2️⃣ Send confirmation email to USER */
    await transporter.sendMail({
      from: `"GlowBiz Salon" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "We received your query ✅",
      html: `
        <div style="font-family: Arial; line-height:1.6">
          <h2>Hi ${name},</h2>
          <p>Thank you for contacting <b>GlowBiz Salon</b>.</p>
          <p>We have received your query and our team will get back to you shortly.</p>

          <hr/>

          <p><b>Your Message:</b></p>
          <p>${message}</p>

          <br/>
          <p>Regards,<br/>
          <b>GlowBiz Salon Team</b></p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("CONTACT API ERROR:", err);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
