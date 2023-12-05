import Meetup from "@/models/meetupModel";
import { NextResponse } from "next/server";

export async function GET(request ,{params}) {
  try {
     const id = params.meetupid
     console.log("this is the id" , typeof id ,id);
     const Onemeetup = await Meetup.findById (id);
     if(!Onemeetup){
      console.log('meetup not found')
      return NextResponse.json({}, { status: 201 });
     }
     console.log("get one meetup",Onemeetup); 
    return NextResponse.json({Onemeetup}, { status: 201 });
  } catch (error) {
    console.log("this is the error", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
