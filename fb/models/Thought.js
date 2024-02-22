import mongoose from "mongoose";

const ThoughtSchema = mongoose.Schema(
  {
    content: {
      type: String,
      minLength: 20,
      maxLength: 100,
      trim: true,
      required: true
    }
  },
  {
    category: {
      type: String,
      enum: ['Musings', 'Character', 'Plot', 'Setting'],
      default: 'Musings'
    }
  },
  {
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'Work',
      required: true,
    }
  },
  {
    authUser: {
      type: String,
      required: true
    }
  },
  {
    authorName: {
      type: String,
      required: true
    }
  },
  {
    authorId: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

//const Contestant = mongoose.model("Contestant", ContestantSchema);
const Thought = mongoose.models.Thought || mongoose.model("Thought", ThoughtSchema);
export default Thought;