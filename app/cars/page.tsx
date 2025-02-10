// import { createCar } from "@/controllers/CarController";
// import Car from "@/models/CarModel";

export default async function page() {
  //   const car = new Car({
  //     name: "Nissan GT-R",
  //     brand: "Nissan",
  //     category: "Sport car",
  //     description:
  //       "NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the 'race track'.",
  //     fuelType: "Gasoline",
  //     fuelCapacity: 70,
  //     price: 150,
  //     discount: 8,
  //     capacity: 5,
  //     transmission: "Automatic",
  //     gallery: ["/assets/look-1.jpg", "/assets/look-2.jpg", "/assets/look-3.jpg"],
  //     thumbnail: "/assets/Car.png",
  //   });
  //   const newCar = await createCar(car);
  //   console.log("Created: ", newCar);
  return (
    <div>
      <button>Create a car</button>
    </div>
  );
}
