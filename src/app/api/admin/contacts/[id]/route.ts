import { ref, get } from "firebase/database";
import { db } from "@/lib/firebase";

export async function GET(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    // ✅ unwrap params correctly
    const { id } = await context.params;

    if (!id) {
      return Response.json(
        { error: "ID missing" },
        { status: 400 }
      );
    }

    const snapshot = await get(
      ref(db, `salonandspa/contacts/${id}`)
    );

    if (!snapshot.exists()) {
      return Response.json(
        { error: "Not found" },
        { status: 404 }
      );
    }

    return Response.json({
      id,
      ...snapshot.val(),
    });

  } catch (error) {
    console.error("GET SINGLE CONTACT ERROR:", error);
    return Response.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}
