import ButtonComponent from "@/_components/Button";
import Image from "next/image";

export default function OrdersPage() {
  return (
    <div className="flex flex-col bg-[#E4E4E7] w-full p-4">
      <div className="flex w-full flex-col items-end gap-6 ">
        {/* profile */}
        <Image src={"/Avatar.svg"} width={36} height={36} alt="" />

        {/* order list title */}

        <div className="bg-white w-full rounded-[5px] border-gray-400  ">
          {/* orders list title  */}
          <div className="flex p-4 justify-between items-center">
            <div className="flex w-[485px] flex-col items-start">
              <p className="font-bold text-[20px] space-x-[-2]">Orders</p>
              <p className="text-[#71717A] text-[12px] font-medium">
                {/*items counter*/} 1 items
              </p>
            </div>

            <div className="flex items-center gap-3">
              <ButtonComponent
                text="Food menu"
                buttonImage="/foodMenu.svg"
              ></ButtonComponent>
              <ButtonComponent
                text="Change delivery state"
                buttonImage="/foodMenu.svg"
              ></ButtonComponent>
            </div>
          </div>

          <div></div>
        </div>

        {/* lists */}
      </div>
    </div>
  );
}
