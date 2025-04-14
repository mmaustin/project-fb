import mongoose from "mongoose";

const DemoNoteSchema = mongoose.Schema(
  {
    content: {
      type: String,
      maxLength: 100,
      trim: true,
      required: true
    },
    category: {
      type: String,
      enum: ['Musings', 'Character', 'Plot', 'Setting'],
      default: 'Musings'
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'DemoWork',
      required: true,
    },
    authorName: {
      type: String,
      required: true
    },
    authorId: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

const DemoNote = mongoose.models.DemoNote || mongoose.model("DemoNote", DemoNoteSchema);
export default DemoNote;