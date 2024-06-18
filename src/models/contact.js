import { connectToDatabase } from "@/utils/dbConn";
import Contact from "@/models/contact";
import { NextResponse } from "next/server";

export default async function handler(req, res) {
    try {
        const body = await req.json();
        await connectToDatabase();

        const newContact = new Contact(body);
        await newContact.save();

        return NextResponse.json({
            message: "Message sent successfully!"
        }, {
            status: 200
        });
    } catch (error) {
        console.error("Server error:", error);
        return NextResponse.json(
            { message: "Server error, please try again!" },
            { status: 500 }
        );
    }
}
