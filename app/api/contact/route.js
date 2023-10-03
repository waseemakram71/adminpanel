import connectDB from "@/app/lib/db";
import Contact from "@/app/models/employ";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    await connectDB();
    const body = await req.json();
    const contact = await Contact.create(body);

    return NextResponse.json({
      message: "Message sent successfully",
      data: contact,
    }, {
      status: 200
    });
  } catch (e) {
    console.error("Error in POST route:", e); // Log the error for debugging
    return NextResponse.json({
      message: "Server error, please try again",
      error: e.message
    }, {
      status: 500
    });
  }
}

