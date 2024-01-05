import mongoose from "mongoose";

const ContestantSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

const Contestant = mongoose.model("Contestant", ContestantSchema);
export default Contestant;