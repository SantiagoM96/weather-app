import { DailyOrHourlyProps } from "@/interfaces/show-weather/dailyOrHourlyProps.interface";

const DailyOrHourly = ({ daily, hourly }: DailyOrHourlyProps) => {
  const allItems = [
    ...(daily?.map(item => ({ ...item })) || []),
    ...(hourly?.map(item => ({ ...item })) || []),
  ];

  return (
    <div className="grid place-items-center grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:w-full gap-4">
      {allItems.map((item, index) => (
        <div
          className="bg-white rounded-[20px] flex flex-col items-center p-4 max-w-[200px] w-full"
          key={index}
        >
          <h4 className="font-medium text-sm">
            {item.dayAndTime}
          </h4>
          <div className="tooltip">
            <img
              src={item.icon}
              alt={item.details}
              width={50}
              height={50}
            />
            <span className="tooltipText">{item.details}</span>
          </div>
          <span className="font-medium text-sm">{item.temp}°</span>
        </div>
      ))}
    </div>
  );
}

export default DailyOrHourly