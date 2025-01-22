import { getCities } from "@/lib/generalRequests";
import { DatePicker } from "./DatePicker";
import { DropDown } from "./DropDown";

export default async function FilterCard({ header }: { header: string }) {
  const cities: string[] = await getCities("egypt");

  return (
    <div className="w-full space-y-4 rounded-xl bg-white px-12 py-6 shadow-lg">
      <div className="flex items-center gap-4">
        <span className="h-2 w-2 rounded-full bg-primary-500 ring-4 ring-primary-200"></span>
        <h3 className="text-base font-semibold">{header}</h3>
      </div>
      <div className="grid grid-cols-3 grid-rows-2 gap-x-6">
        <label className="col-start-1 row-start-1 text-base font-bold">
          Location
        </label>
        <div className="col-start-1 row-start-2 w-full bg-white">
          <DropDown
            data={cities}
            placeholder="Select your city"
            label="Egypt"
          />
        </div>
        <label className="col-start-2 row-start-1 text-base font-bold">
          Date
        </label>
        <div className="col-start-2 row-start-2">
          <DatePicker />
        </div>
        <label className="col-start-3 row-start-1 text-base font-bold">
          Time
        </label>
        <div className="col-start-3 row-start-2 flex w-full items-center gap-4 bg-white">
          <DropDown
            data={timeSlots}
            placeholder="Select your time"
            label="Pickup time"
          />
        </div>
      </div>
    </div>
  );
}
const timeSlots = [
  "12:00 AM",
  "12:30 AM",
  "01:00 AM",
  "01:30 AM",
  "02:00 AM",
  "02:30 AM",
  "03:00 AM",
  "03:30 AM",
  "04:00 AM",
  "04:30 AM",
  "05:00 AM",
  "05:30 AM",
  "06:00 AM",
  "06:30 AM",
  "07:00 AM",
  "07:30 AM",
  "08:00 AM",
  "08:30 AM",
  "09:00 AM",
  "09:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "01:00 PM",
  "01:30 PM",
  "02:00 PM",
  "02:30 PM",
  "03:00 PM",
  "03:30 PM",
  "04:00 PM",
  "04:30 PM",
  "05:00 PM",
  "05:30 PM",
  "06:00 PM",
  "06:30 PM",
  "07:00 PM",
  "07:30 PM",
  "08:00 PM",
  "08:30 PM",
  "09:00 PM",
  "09:30 PM",
  "10:00 PM",
  "10:30 PM",
  "11:00 PM",
  "11:30 PM",
];
