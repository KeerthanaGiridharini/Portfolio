import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Contact from "@/lib/models/Contact";

export async function POST(req: Request) {
      try {
            const body = await req.json();
            const { name, email, subject, message } = body;

            // Validate inputs
            if (!name || !email || !message) {
                  return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
            }

            // Connect to MongoDB
            await connectToDatabase();

            // Create a new contact entry in the database
            const newContact = await Contact.create({
                  name,
                  email,
                  subject,
                  message,
            });

            return NextResponse.json({ success: true, data: newContact }, { status: 201 });
      } catch (error: any) {
            console.error("Error saving contact to MongoDB:", error);
            return NextResponse.json(
                  { error: "Failed to submit message to database", details: error.message },
                  { status: 500 }
            );
      }
}
