


import Card from '../../../components/ui/Card';
import classes from './MeetupItem.module.css';
import Image from 'next/image';


function MeetupItem(props) {
 const showDetailsHandler = ()=>{

 }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img className='img' src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetailsHandler}>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;