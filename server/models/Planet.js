import mongoose, { Schema } from 'mongoose'

const PlanetSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    starId: { type: Schema.Types.ObjectId, ref: 'Star', required: true }

  },
  { timestamps: true, toJSON: { virtuals: true } }
)

export default PlanetSchema
