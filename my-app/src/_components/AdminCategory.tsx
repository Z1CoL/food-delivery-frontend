"use client";

import { useState } from "react";
import ButtonComponent from "./Button"; 
import Image from "next/image";

export default function AdminCategory() {
  const [activeTab, setActiveTab] = useState<"food" | "orders">("food");

  return (
    <div className="flex">
      {/* LEFT MENU */}
      <div className="flex flex-col w-[165px] gap-6">
        <ButtonComponent
          text="Food menu"
          buttonVariant={activeTab === "food" ? "active" : "inactive"}
          onClick={() => setActiveTab("food")}
          buttonImage="foodMenu.svg"
        />
        <ButtonComponent
          text="Orders"
          buttonVariant={activeTab === "orders" ? "active" : "inactive"}
          onClick={() => setActiveTab("orders")}
          buttonImage="truck.svg"
        />
      </div>

      {/* RIGHT CONTENT */}
      <div className="flex-1 p-5 border-l">
        {activeTab === "food" && (
          <div>
            <h2 className="text-xl font-semibold">Food Menu</h2>
            <p>Энд хоолны жагсаалт гарна...</p>
          </div>
        )}

        {activeTab === "orders" && (
          <div>
            <h2 className="text-xl font-semibold">Orders</h2>
            <p>Энд захиалгын жагсаалт гарна...</p>
          </div>
        )}
      </div>
    </div>
  );
}
