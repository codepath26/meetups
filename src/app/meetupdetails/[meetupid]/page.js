"use client";
import MeetupDetails from "@/components/meetup/MeetupDeatils/MeetupDetails";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function MeetupOne({ params }) {
  const [meetupDetails , setMeetupDetails] = useState({
    id :"",
    image :'',
    title :'',
    address :"",
  })
  const id = params.meetupid;
  useEffect(() => {
    const getDetails = async (id) => {
      const response = await axios.get(`/api/meetups/${id}`);
      console.log(response.data.Onemeetup, "data");
      setMeetupDetails(response.data.Onemeetup);
    };
    getDetails(id);
  }, [id ,setMeetupDetails]);

  return (
    <MeetupDetails
      id={meetupDetails.id}
      image={meetupDetails.image}
      title={meetupDetails.title}
      address={meetupDetails.address}
    />
  );
}
