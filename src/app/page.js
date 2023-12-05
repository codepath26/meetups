"use client"

import { useEffect, useState } from "react";
import MeetupList from "../components/meetup/meetupList/meetup";
import axios from "axios";

export default function Home() {
const [meetups , setMeetups] = useState([]);
useEffect(()=>{
  const getAllMeetups = async()=>{
    try {
      const response =await axios.get('/api/meetups');
      const allMeetups =  response.data.allMeetups;
      setMeetups(allMeetups)
    } catch (error) {
      
      console.log( "response error",error);
    }
  }
  getAllMeetups();
} ,[]); 
  return (
  <MeetupList meetups={meetups}/>
  )
}
