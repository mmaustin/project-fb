import mongoose from "mongoose";

const WorkSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    genre: {
      type: String,
      required: true,
      trim: true,
    },
    synopsis: {
      type: String,
      minLength: 5,
      maxLength: 250,
      default: 'Still Conceptualizing, Patience!',
      trim: true,
    },
    authUser: {
      type: String,
      required: true
    },
    authorName: {
      type: String,
      required: true
    },
    writingStage: {
      type: String,
      enum: ['Brainstorming', 'Drafting', 'Editing'],
      default: 'Brainstorming'
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'Author',
      required: true,
    }
  },
  { timestamps: true }
);

const Work = mongoose.models.Work || mongoose.model("Work", WorkSchema);
export default Work;