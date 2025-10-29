"use client";

import Image from "next/image";
import { useState } from "react";
import ButtonComponent from "./Button";

export default function Navigation() {
  const [activeButton, setActiveButton] = useState<"food" | "orders">("food");

  return (
    <div className="flex w-[205px] h-[1024px] m-9 flex-col gap-10">
      {/* LOGO CONTAINER */}
      <div className="flex items-center gap-2">
        <Image
          src={"logo.svg"}
          height={29}
          width={36}
          alt=""
          className="w-10 h-10 items-center justify-center gap-2.5"
        />
        <div className="flex flex-col justify-center items-center w-[90px] h-11">
          <p className="font-semibold text-[18px]">NomNom</p>
          <p className="text-[#71717A] font-normal text-[12px] ">
            Swift delivery
          </p>
        </div>
      </div>

      {/* MENU CONTAINER */}
      <div className="flex flex-col w-[165px] gap-6">
        <ButtonComponent
          text="Food menu"
          buttonVariant={activeButton === "food" ? "active" : "inactive"}
          onClick={() => setActiveButton("food")}
          buttonImage="foodMenu.svg"
        />
        <ButtonComponent
          text="Orders"
          buttonVariant={activeButton === "orders" ? "active" : "inactive"}
          onClick={() => setActiveButton("orders")}
          buttonImage="truck.svg"
        />
      </div>
    </div>
  );
}
