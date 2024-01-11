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
      required: true,
      trim: true,
    },
    workInfluence: {
      type: String,
      required: true,
      trim: true,
    },
    wordCount: {
      type: Number,
      default: 0
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