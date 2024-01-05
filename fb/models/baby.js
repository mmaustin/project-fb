import { Schema, model, models } from 'mongoose';

const BabySchema = new Schema({
  parents: {
    type: [String],
    required: true,
  },
  babyName: {
    type: String,
    required: true,
  },
  boyNamesArray: {
    type: [String],
    required: true,
  },
  girlNamesArray: {
    type: [String],
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  hourBorn: {
    type: Number,
    required: true,
  },
  eyeColor: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  }
});

const Baby = models.Baby || model("Baby", BabySchema);
export default Baby;

