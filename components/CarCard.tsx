"use client";

import { CarProps } from "@/types";
import { useState } from "react";
import { CarDetails, CustomButton } from ".";
import { calculateCarRent } from "@/utils";
import Image from "next/image";

interface CarCardProps {
  car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {
  const { city_mpg, year, make, model, transmission, drive } = car;

  const carRent = calculateCarRent(city_mpg, year);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>
      <p className="flex mt-6 font-extrabold text-[32px]">
        <span className="self-start text-[14px] font-semibold">$</span>
        {carRent}
        <span className="self-end text-[14px] font-medium">/day</span>
      </p>

      {/* car image */}
      <div className="w-full relative h-40 my-3 object-contain">
        <Image
          src={"/hero.png"}
          fill
          priority
          className="object-contain"
          alt="Car-models"
        />
      </div>

      <div className="flex w-full mt-2 relative">
        {/* 3 components */}
        <div className="flex group-hover:invisible w-full justify-between text-grey">
          {/* steering wheel */}
          <div className="flex flex-col text-center justify-center items-center gap-2">
            <Image
              src={"/steering-wheel.svg"}
              alt="steering-wheel"
              width={20}
              height={20}
            />
            <p className="text-[14px]">
              {transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>
          {/* Tires */}
          <div className="flex flex-col text-center justify-center items-center gap-2">
            <Image src={"/tire.svg"} alt="tire" width={20} height={20} />
            <p className="text-[14px]">{drive.toUpperCase()}</p>
          </div>
          {/* gas */}
          <div className="flex flex-col text-center justify-center items-center gap-2">
            <Image src={"/gas.svg"} alt="gas" width={20} height={20} />
            <p className="text-[14px]">{city_mpg} MPG</p>
          </div>
        </div>
        {/* view more button */}
        <div className="car-card__btn-container">
          <CustomButton
            title="View More"
            containerStyle="w-full py-[16px] bg-primary-blue rounded-full"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>
      {/* car details component */}
      <CarDetails />
    </div>
  );
};

export default CarCard;
