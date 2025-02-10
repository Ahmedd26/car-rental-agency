import { ICar } from "@/types/CarInterface";
import mongoose, { Schema, Model } from "mongoose";
import slugify from "slugify";

const CarSchema: Schema<ICar> = new Schema(
  {
    name: {
      type: String,
      unique: true,
      require: [true, "Please provide a name"],
      maxLength: [20, "Car name shouldn't exceed 20 characters"],
      trim: true,
    },
    brand: {
      type: String,
      require: true,
      trim: true,
    },
    category: {
      type: String,
      require: true,
      trim: true,
    },
    description: {
      type: String,
      require: true,
      trim: true,
      minLength: [10, "Car description should be more than 10 characters"],
      maxLength: [200, "Car description shouldn't exceed 20 characters"],
    },
    fuelType: {
      type: String,
      require: true,
      trim: true,
      enum: ["Gasoline", "Electric"],
    },
    fuelCapacity: {
      type: Number,
      require: [true, "Please provide fuel/battery capacity"],
    },
    price: {
      type: Number,
      require: true,
    },
    discount: {
      type: Number,
      min: [0, "Discount must fall within 0 and 100"],
      max: [100, "Discount must fall within 0 and 100"],
    },
    capacity: {
      type: Number,
      require: true,
    },

    transmission: {
      type: String,
      require: true,
      enum: ["Manual", "Automatic"],
    },
    gallery: {
      type: [String],
      require: true,
    },
    thumbnail: {
      type: String,
      require: true,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    likes: {
      type: Number,
      default: 0,
    },
    ratingsAverage: {
      type: Number,
      min: [0, "Rating must fall within 0 and 5"],
      max: [5, "Rating must fall within 0 and 5"],
      default: 0,
    },
    ratingsQuantity: {
      type: Number,
      default: 0,
    },
    slug: String,
    available: {
      type: Boolean,
      default: true,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);
// ** Indexes ** //
CarSchema.index({ slug: 1 });
CarSchema.index({ price: 1, ratingsAverage: -1 });

// ** Document Middleware ** //
CarSchema.pre<ICar>("save", function (next) {
  this.slug = slugify(this.name ?? "", { lower: true });
  next();
});

const Car: Model<ICar> =
  mongoose.models.Car || mongoose.model<ICar>("Car", CarSchema);

export default Car;
