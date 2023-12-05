import Meetup from "@/models/meetupModel";
import { NextResponse } from "next/server";
import connectDB from "@/dbcong/dbconfig";

connectDB();
export async function POST(request) {
  try {
    const reqBody = await request.json();
    console.log("request body", reqBody);
    const { image, title, address, description } = reqBody;
    const newMeetup = new Meetup({
      image,
      title,
      address,
      description,
    });
    const savedMeetup = await newMeetup.save();
    console.log("savedMeetups", savedMeetup);
    return NextResponse.json({
      message: "data added successfully",
      savedMeetup,
    });
  } catch (error) {
    console.log("this is the error", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function GET(request){
  try {
    const allMeetups = await Meetup.find({});
    console.log("all the users", allMeetups);
    return NextResponse.json({ allMeetups }, { status: 201 });
  } catch (error) {
    console.log("this is the error", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
