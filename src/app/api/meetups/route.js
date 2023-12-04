import Meetup from "@/models/meetupModel";
import { NextRequest, NextResponse } from "next/server";


export async function POST(){
  try {
    const reqBody =await NextRequest.json();
    const {image,title,address ,description} =reqBody;
    console.log(reqBody);
    const newUser = new Meetup({
      image,
      title,
      address,
      description,
    });
    const saveduser = await newUser.save();
    console.log(saveduser);
    return NextResponse.json({
      meddage : "data added succesfully",
      saveduser,
    })
    
  } catch (error) {
    console.log( "this is the error",error)
     return NextResponse.json({error : error.message},{status :500})
    
  }

}