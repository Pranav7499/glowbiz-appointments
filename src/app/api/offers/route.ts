// // import { NextResponse } from "next/server";
// // import { ref, push, get, remove } from "firebase/database";
// // import { db } from "@/lib/firebase";

// // /**
// //  * ==========================
// //  * CREATE OFFER (POST)
// //  * ==========================
// //  */
// // export async function POST(req: Request) {
// //   try {
// //     const body = await req.json();

// //     const {
// //       name,
// //       price,
// //       discount,
// //       quantity,
// //       couponCode,
// //       description,
// //       image,
// //     } = body;

// //     if (
// //       !name ||
// //       !price ||
// //       !discount ||
// //       !quantity ||
// //       !couponCode ||
// //       !description
// //     ) {
// //       return NextResponse.json(
// //         { error: "All fields are required" },
// //         { status: 400 }
// //       );
// //     }

// //     const offersRef = ref(db, "salonandspa/offers");

// //     const newOffer = {
// //       name,
// //       price: Number(price),
// //       discount: Number(discount),
// //       quantity: Number(quantity),
// //       couponCode,
// //       description,
// //       image: image || "",
// //       createdAt: Date.now(),
// //     };

// //     await push(offersRef, newOffer);

// //     return NextResponse.json(
// //       { message: "Offer created successfully" },
// //       { status: 201 }
// //     );
// //   } catch (error) {
// //     console.error("CREATE OFFER ERROR:", error);
// //     return NextResponse.json(
// //       { error: "Server error" },
// //       { status: 500 }
// //     );
// //   }
// // }

// // /**
// //  * ==========================
// //  * GET ALL OFFERS (GET)
// //  * ==========================
// //  */
// // export async function GET() {
// //   try {
// //     const snapshot = await get(ref(db, "salonandspa/offers"));

// //     if (!snapshot.exists()) {
// //       return NextResponse.json([]);
// //     }

// //     const data = Object.entries(snapshot.val()).map(
// //       ([id, value]: any) => ({
// //         id,
// //         ...value,
// //       })
// //     );

// //     // latest first
// //     data.sort((a, b) => b.createdAt - a.createdAt);

// //     return NextResponse.json(data);
// //   } catch (error) {
// //     console.error("GET OFFERS ERROR:", error);
// //     return NextResponse.json(
// //       { error: "Server error" },
// //       { status: 500 }
// //     );
// //   }
// // }

// // /**
// //  * ==========================
// //  * DELETE OFFER (DELETE)
// //  * ==========================
// //  */
// // export async function DELETE(req: Request) {
// //   try {
// //     const { id } = await req.json();

// //     if (!id) {
// //       return NextResponse.json(
// //         { error: "Offer ID required" },
// //         { status: 400 }
// //       );
// //     }

// //     await remove(ref(db, `salonandspa/offers/${id}`));

// //     return NextResponse.json({ message: "Offer deleted" });
// //   } catch (error) {
// //     console.error("DELETE OFFER ERROR:", error);
// //     return NextResponse.json(
// //       { error: "Server error" },
// //       { status: 500 }
// //     );
// //   }
// // }


// import { ref, get, update } from "firebase/database";
// import { db } from "@/lib/firebase";

// export async function PATCH(req: Request) {
//   try {
//     const { id } = await req.json();

//     if (!id) {
//       return Response.json(
//         { error: "Offer ID required" },
//         { status: 400 }
//       );
//     }

//     const offerRef = ref(db, `offers/${id}`);
//     const snapshot = await get(offerRef);

//     if (!snapshot.exists()) {
//       return Response.json(
//         { error: "Offer not found" },
//         { status: 404 }
//       );
//     }

//     const offer = snapshot.val();

//     if (offer.quantity <= 0) {
//       return Response.json(
//         { error: "Offer out of stock" },
//         { status: 400 }
//       );
//     }

//     await update(offerRef, {
//       quantity: offer.quantity - 1,
//     });

//     return Response.json({ success: true });
//   } catch (err) {
//     return Response.json(
//       { error: "Failed to apply offer" },
//       { status: 500 }
//     );
//   }
// }


import { ref, push, get, remove, update } from "firebase/database";
import { db } from "@/lib/firebase";

/* =========================
   CREATE OFFER
========================= */
export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      name,
      price,
      discount,
      quantity,
      couponCode,
      description,
      image,
    } = body;

    if (
      !name ||
      !price ||
      !discount ||
      !quantity ||
      !couponCode ||
      !description
    ) {
      return Response.json(
        { error: "All fields required" },
        { status: 400 }
      );
    }

    const offerRef = ref(db, "offers");

    await push(offerRef, {
      name,
      price: Number(price),
      discount: Number(discount),
      quantity: Number(quantity),
      couponCode,
      description,
      image: image || "",
      createdAt: Date.now(),
    });

    return Response.json({
      success: true,
      message: "Offer created successfully",
    });
  } catch (err) {
    console.error("CREATE OFFER ERROR:", err);
    return Response.json(
      { error: "Failed to create offer" },
      { status: 500 }
    );
  }
}

/* =========================
   GET ALL OFFERS
========================= */
export async function GET() {
  try {
    const snapshot = await get(ref(db, "offers"));

    if (!snapshot.exists()) {
      return Response.json([]);
    }

    const data = Object.entries(snapshot.val()).map(
      ([id, value]: any) => ({
        id,
        ...value,
      })
    );

    return Response.json(data);
  } catch (err) {
    return Response.json(
      { error: "Failed to fetch offers" },
      { status: 500 }
    );
  }
}

/* =========================
   APPLY OFFER (REDUCE QTY)
========================= */
export async function PATCH(req: Request) {
  try {
    const { id } = await req.json();

    const offerRef = ref(db, `offers/${id}`);
    const snapshot = await get(offerRef);

    if (!snapshot.exists()) {
      return Response.json(
        { error: "Offer not found" },
        { status: 404 }
      );
    }

    const offer = snapshot.val();

    if (offer.quantity <= 0) {
      return Response.json(
        { error: "Offer out of stock" },
        { status: 400 }
      );
    }

    await update(offerRef, {
      quantity: offer.quantity - 1,
    });

    return Response.json({ success: true });
  } catch (err) {
    return Response.json(
      { error: "Failed to apply offer" },
      { status: 500 }
    );
  }
}

/* =========================
   DELETE OFFER
========================= */
export async function DELETE(req: Request) {
  try {
    const { id } = await req.json();

    await remove(ref(db, `offers/${id}`));

    return Response.json({ success: true });
  } catch (err) {
    return Response.json(
      { error: "Failed to delete offer" },
      { status: 500 }
    );
  }
}
