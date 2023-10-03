import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { connectionStr } from "../lib/db";

export async function GET() {
  // await mongoose.connect(connectionStr)
    return NextResponse.json({result:true})
  }