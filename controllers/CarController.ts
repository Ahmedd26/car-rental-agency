import Car from "@/models/CarModel";
import connectMongo from "@/lib/mongodb";
import { ICar } from "@/types/CarInterface";
import { ObjectId } from "mongoose";

export const getAllCars = async () => {
  try {
    await connectMongo();
    const cars = await Car.find();
    return cars;
  } catch (error) {
    console.error("Error fetching cars:", (error as Error).message);
    throw new Error("Failed to fetch cars");
  }
};

export const getCarBySlug = async (slug: string) => {
  try {
    await connectMongo();
    const car = await Car.findOne({ slug });
    return car;
  } catch (error) {
    console.error(`Error fetching ${slug}`, (error as Error).message);
    throw new Error(`Failed to fetch ${slug}`);
  }
};
export const getCarById = async (_id: ObjectId): Promise<ICar | null> => {
  try {
    await connectMongo();
    const car = await Car.findOne({ _id });
    return car;
  } catch (error) {
    console.error(`Error fetching car: #${_id}`, (error as Error).message);
    throw new Error(`Failed to fetch #${_id}`);
  }
};

export const createCar = async (carData: ICar) => {
  try {
    await connectMongo();

    const newCar = new Car(carData);
    await newCar.save();

    return newCar;
  } catch (error) {
    console.error("Error creating car:", (error as Error).message);
    throw new Error("Failed to create car");
  }
};
