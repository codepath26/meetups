import mongoose from "mongoose"; 

// Define the Meetup schema
const meetupSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

// Define the Meetup model
const Meetup = mongoose.model('Meetup', meetupSchema);

export default  Meetup;
