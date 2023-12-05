"use client"

import axios from 'axios';
import Card from '../../../components/ui/Card';
import classes from './MeetupItem.module.css';
import Image from 'next/image';
import { useRouter } from 'next/navigation';


function MeetupItem(props) {
  console.log("thisis  the prop see the id",props);
  const router = useRouter()
  const image = props.image;
 
 const imageHeightPercentage = 50; 
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
        <Image
        src={image}
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
          <button onClick={()=>router.push(`/meetupdetails/${props.id}`)}>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;