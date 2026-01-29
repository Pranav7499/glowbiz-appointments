import { NextResponse } from "next/server";
import { ref, get, update } from "firebase/database";
import { db } from "@/lib/firebase";

export async function POST(req: Request) {
  try {
    const { couponCode } = await req.json();

    if (!couponCode) {
      return NextResponse.json(
        { error: "Coupon code required" },
        { status: 400 }
      );
    }

    const snapshot = await get(ref(db, "offers"));

    if (!snapshot.exists()) {
      return NextResponse.json(
        { error: "No offers found" },
        { status: 404 }
      );
    }

    let matchedOffer: any = null;
    let offerId = "";

    snapshot.forEach((child) => {
      const offer = child.val();
      if (
        offer.couponCode === couponCode &&
        offer.quantity > 0
      ) {
        matchedOffer = offer;
        offerId = child.key!;
      }
    });

    if (!matchedOffer) {
      return NextResponse.json(
        { error: "Invalid or expired coupon" },
        { status: 400 }
      );
    }

    const discountedPrice =
      matchedOffer.price -
      (matchedOffer.price * matchedOffer.discount) / 100;

    return NextResponse.json({
      offerId,
      discount: matchedOffer.discount,
      originalPrice: matchedOffer.price,
      finalPrice: discountedPrice,
    });
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to apply coupon" },
      { status: 500 }
    );
  }
}
