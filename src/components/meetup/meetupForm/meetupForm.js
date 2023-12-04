"use client";

import connectDB from "@/dbcong/dbconfig";
import axios from "axios";
import { useRef } from "react";

function NewMeetupForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
   async function sendData(){
    try {

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };
   
        await connectDB();
        const response = await  axios.post('/api/meetups' , meetupData);
        console.log(response);
      } catch (error) {
        console.log(error);   
      }
    }
    sendData();
  }

  return (
    <div className="w-screen h-screen flex justify-center">
      <div className="w-1/2 h-1/2  mt-10">
        <form className="h-100 w-100 p-2" onSubmit={submitHandler}>
          <div className="w-full  flex flex-col">
            <label className='mt-2 ' htmlFor="title">Meetup Title</label>
            <input type="text" className="h-10 text-black p-2" required id="title" ref={titleInputRef} />
          </div>
          <div className="w-full  flex flex-col">
            <label className='mt-2 ' htmlFor="image">Meetup Image</label>
            <input className='h-10 text-black p-2' type="url" required id="image" ref={imageInputRef} />
          </div>
          <div className="w-full  flex flex-col">
            <label className='mt-2 ' htmlFor="address">Address</label>
            <input className='h-10 text-black p-2' type="text" required id="address" ref={addressInputRef} />
          </div>
          <div className="w-full  flex flex-col">
            <label className='mt-2 ' htmlFor="description">Description</label>
            <textarea className='h-10 text-black p-2'
              id="description"
              required
              rows="5"
              ref={descriptionInputRef}
            ></textarea>
          </div>
          <div className="  text-center mt-6">
            <button className="text-xl p-2  border-none bg-orange-500 hover:bg-orange-900 rounded">Add Meetup</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewMeetupForm;
