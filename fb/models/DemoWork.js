import mongoose from "mongoose";

const DemoWorkSchema = mongoose.Schema(
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
      maxLength: 250,
      default: 'Still Conceptualizing, Patience!',
      trim: true,
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
      ref: 'DemoAuthor',
      required: true,
    }
  },
  { timestamps: true },
);

const DemoWork = mongoose.models.DemoWork || mongoose.model("DemoWork", DemoWorkSchema);
export default DemoWork;