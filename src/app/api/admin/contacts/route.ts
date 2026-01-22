import { ref, get, remove } from "firebase/database";
import { db } from "@/lib/firebase";

/* =========================
   GET ALL CONTACTS
========================= */
export async function GET() {
  try {
    const snapshot = await get(ref(db, "salonandspa/contacts"));

    // ✅ VERY IMPORTANT
    if (!snapshot.exists()) {
      return Response.json([]); // always return JSON
    }

    const data = Object.entries(snapshot.val()).map(
      ([id, value]: any) => ({
        id,
        ...value,
      })
    );

    return Response.json(data);

  } catch (error) {
    console.error("GET CONTACTS ERROR:", error);
    return Response.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}

/* =========================
   DELETE CONTACT
========================= */
export async function DELETE(req: Request) {
  try {
    const { id } = await req.json();

    if (!id) {
      return Response.json(
        { error: "ID required" },
        { status: 400 }
      );
    }

    await remove(ref(db, `salonandspa/contacts/${id}`));


    return Response.json({ success: true });

  } catch (error) {
    console.error("DELETE ERROR:", error);
    return Response.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}
