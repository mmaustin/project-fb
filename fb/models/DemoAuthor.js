import mongoose from "mongoose";

const DemoAuthorSchema = mongoose.Schema(
  {
    authorName: {
      type: String,
      required: true,
      trim: true
    },
    aboutMe: {
      type: String,
      required: true,
      minLength: 5,
      maxLength: 500,
      trim: true,
    },
    authorInfluence: {
      type: String,
      required: true,
      trim: true,
    },
    workInfluence: {
      type: String,
      required: true,
      trim: true,
    },
    publicProfile: {
      type: String,
      enum: ['Public', 'Private'],
      default: 'Public'
    }
  },
  { timestamps: true }
);

const DemoAuthor = mongoose.models.DemoAuthor || mongoose.model("DemoAuthor", DemoAuthorSchema);
export default DemoAuthor;