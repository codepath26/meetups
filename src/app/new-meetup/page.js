import NewMeetupForm from '@/components/meetup/meetupForm/meetupForm';
import Head from 'next/head';
import React from 'react'

function Newmeet() {
  
  return (
    <>
    <Head>
    <title>Add a New Meetup</title>
    <meta
    name ='description'
    content="add your own meetup lists "
    />
  </Head>
    <NewMeetupForm/>
    </>
  )
}

export default Newmeet;