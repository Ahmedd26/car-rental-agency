import FilterCard from "@/app/_components/Filter/FilterCard";

export default function Filter() {
  return (
    <div className="grid w-full grid-cols-1 items-center gap-4 lg:grid-cols-[1fr,auto,1fr]">
      <FilterCard header="Pick-Up" />
      <div className="relative z-10 mx-auto -mb-10 -mt-10 flex aspect-square w-fit items-center justify-center rounded-xl bg-primary-500 p-6 shadow-lg shadow-primary-400">
        <svg
          width="24"
          height="24"
          viewBox="0 0 20 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.16124 0.836324L5.16124 14.4541"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1.0837 4.93262L5.16148 0.83595L9.23926 4.93262"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.089 17.167L15.089 3.54921"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.167 13.0713L15.0892 17.168L11.0114 13.0713"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <FilterCard header="Drop-Off" />
    </div>
  );
}
