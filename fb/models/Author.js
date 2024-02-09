import mongoose from "mongoose";

const AuthorSchema = mongoose.Schema(
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
    }
  },
  { timestamps: true }
);

const Author = mongoose.models.Author || mongoose.model("Author", AuthorSchema);
export default Author;