import Meetup from "@/models/meetupModel";
import { NextResponse } from 'next/server';
import connectDB from '@/dbcong/dbconfig';

connectDB();

// Handler for GET without ID (fetch all meetups)
export async function getAllMeetups(request) {
  try {
    console.log('at the getAllMeetups method');
    const allMeetups = await Meetup.find({});
    console.log("All meetups:", allMeetups);
    return NextResponse.json({ allMeetups }, { status: 200 });
  } catch (error) {
    console.error("Error fetching meetups:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// Handler for GET with ID (fetch a single meetup)
export async function getMeetupById(request) {
  try {
    console.log('at the getMeetupById method');
    const meetupId = request.query.id;

    // If an ID is provided, fetch a single meetup
    const meetup = await Meetup.findOne({ _id: meetupId });

    if (!meetup) {
      return NextResponse.json({ message: "Meetup not found" }, { status: 404 });
    }

    console.log("Single meetup:", meetup);
    return NextResponse.json({ meetup }, { status: 200 });
  } catch (error) {
    console.error("Error fetching meetup:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// Handler for POST
export async function createMeetup(request) {
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
    console.log('savedMeetups', savedMeetup);
    return NextResponse.json({
      message: "data added successfully",
      savedMeetup,
    });
  } catch (error) {
    console.error("Error adding meetup:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
