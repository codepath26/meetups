"use client"
import MeetupList from "../components/meetup/meetupList/meetup";
const meetups = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/15189445/pexels-photo-15189445/free-photo-of-a-man-taking-a-picture-with-his-camera.jpeg',
      title: 'Meetup 1',
      address: '123 Main Street, City1',
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/15189445/pexels-photo-15189445/free-photo-of-a-man-taking-a-picture-with-his-camera.jpeg',
      title: 'Meetup 2',
      address: '456 Oak Avenue, City2',
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/15189445/pexels-photo-15189445/free-photo-of-a-man-taking-a-picture-with-his-camera.jpeg',
      title: 'Meetup 3',
      address: '789 Pine Lane, City3',
    },
    {
      id: 4,
      image: 'https://images.pexels.com/photos/15189445/pexels-photo-15189445/free-photo-of-a-man-taking-a-picture-with-his-camera.jpeg',
      title: 'Meetup 4',
      address: '101 Elm Street, City4',
    },
    {
      id: 5,
      image: 'https://images.pexels.com/photos/15189445/pexels-photo-15189445/free-photo-of-a-man-taking-a-picture-with-his-camera.jpeg',
      title: 'Meetup 5',
      address: '202 Maple Road, City5',
    },
    {
      id: 6,
      image: 'https://images.pexels.com/photos/15189445/pexels-photo-15189445/free-photo-of-a-man-taking-a-picture-with-his-camera.jpeg',
      title: 'Meetup 6',
      address: '303 Birch Boulevard, City6',
    },
    {
      id: 7,
      image: 'https://images.pexels.com/photos/15189445/pexels-photo-15189445/free-photo-of-a-man-taking-a-picture-with-his-camera.jpeg',
      title: 'Meetup 7',
      address: '404 Cedar Lane, City7',
    },
    {
      id: 8,
      image: 'https://images.pexels.com/photos/15189445/pexels-photo-15189445/free-photo-of-a-man-taking-a-picture-with-his-camera.jpeg',
      title: 'Meetup 8',
      address: '505 Walnut Street, City8',
    },
    {
      id: 9,
      image: 'https://images.pexels.com/photos/15189445/pexels-photo-15189445/free-photo-of-a-man-taking-a-picture-with-his-camera.jpeg',
      title: 'Meetup 9',
      address: '606 Pine Avenue, City9',
    },
    {
      id: 10,
      image: 'https://images.pexels.com/photos/15189445/pexels-photo-15189445/free-photo-of-a-man-taking-a-picture-with-his-camera.jpeg',
      title: 'Meetup 10',
      address: '707 Oak Road, City10',
    },
   
]


export default function Home() {
  return (
  <MeetupList meetups={meetups}/>
  )
}
