import { serviceList } from "../constants/constants";
import "./serviceCard.css";

const ServicesCard = () => {
  return (
    <div className="flex flex-wrap items-center justify-center mb-12 sm:justify-center gap-5 px-3 sm:py-[1rem] sm:px-[6rem] service-card">
      {serviceList.map((service) => {
        return (
          <div
            key={service.id}
            className="flex items-center gap-3 my-2 sm:my-0 border-[#303030] service-card-item"
          >
            <img
              src={service.icon}
              alt={service.name}
              className="w-auto h-[1.5rem]"
            />
            <h4 className="text-lg font-medium">{service.name}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default ServicesCard;
