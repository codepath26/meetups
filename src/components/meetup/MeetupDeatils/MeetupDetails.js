import Card from '@/components/ui/Card';
import Image from 'next/image';
import React from 'react'
import classes from './MeetupDetails.module.css'

function MeetupDetails(props) {
  return (
    <li className={classes.item}>
    <Card>
      <div className={classes.image}>
      <Image
      src={props.image}
      alt={props.title}
      layout="fill"
      objectFit="cover"
      objectPosition="center"
      loading="lazy"
    />
      </div>
      <div className={classes.content}>
        <h3>{props.title}</h3>
        <address>{props.address}</address>
      </div>
      <div className={classes.actions}>
        <button onClick={()=>showDetailsHandler(props.id)}>Show Details</button>
      </div>
    </Card>
  </li>
  )
}

export default MeetupDetails;