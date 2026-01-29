import { NextResponse } from "next/server";
import { ref, get, update } from "firebase/database";
import { db } from "@/lib/firebase";

export async function POST(req: Request) {
  try {
    const { offerId } = await req.json();

    const offerRef = ref(db, `offers/${offerId}`);
    const snapshot = await get(offerRef);

    if (!snapshot.exists()) {
      return NextResponse.json(
        { error: "Offer not found" },
        { status: 404 }
      );
    }

    const offer = snapshot.val();

    if (offer.quantity <= 0) {
      return NextResponse.json(
        { error: "Offer sold out" },
        { status: 400 }
      );
    }

    await update(offerRef, {
      quantity: offer.quantity - 1,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to redeem offer" },
      { status: 500 }
    );
  }
}
