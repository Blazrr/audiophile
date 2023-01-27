import React, { useState } from "react";
import { useForm } from "react-hook-form";

type Props = {
  register: any;
  errors:any,

};

const Billing = ({ register, errors }: Props) => {
  const [isCash, setIsCash] = useState(true);

  console.log(isCash);

  return (
    <div className="bg-white lg:w-full rounded-lg p-4   ">
      <h2 className="text-xl font-bold tracking-widest ">Checkout</h2>
        <h3 className="text-[#D87D4A]">Billing details</h3>
        <div className="flex space-x-4">
          <div className="flex flex-col w-1/2">
            <label htmlFor="">Name</label>
            <input
              type="text"
              {...register("Name", { required: true })}
              className="rounded-md p-2 border-[1px] border-slate-200"
            />
            {errors.Name && <p>Name is required</p>}
          </div>
          <div className="flex flex-col w-1/2">
            <label htmlFor="">Email Address</label>
            <input
              type="text"
              {...register("Email")}
              className="rounded-md p-2 border-[1px] border-slate-200"
              
            />
            {errors.Email && <p>A valid Email Adress is required</p>}
          </div>
        </div>
        <div className="flex flex-col w-1/2">
          <label htmlFor="">Phone Number</label>
          <input
            type="number"
            id=""
            {...register("Phone")}
            className="rounded-md p-2 border-[1px] border-slate-200"
          />
          {errors.Phone && <p>Please enter a valid phone number</p>}
        </div>
        <h3 className="mt-4 text-[#D87D4A]">SHIPPING INFO</h3>

        <div className="flex flex-col ">
          <label htmlFor="">Address</label>
          <input
            type="text"
            {...register("Adress")}
            className="rounded-md p-2 border-[1px] border-slate-200"
          />
        </div>

        <div className="flex space-x-4">
          <div className="flex flex-col w-1/2">
            <label htmlFor="">Zipcode</label>
            <input
              type="text"
              {...register("ZipCode", { required: true })}
              className="rounded-md p-2 border-[1px] border-slate-200"
            />
            {errors.ZipCode && <p>Zipcode is required</p>}
          </div>
          <div className="flex flex-col w-1/2">
            <label htmlFor="" className="">City</label>
            <input
              type="text"
              {...register("City")}
              className="rounded-md p-2 border-[1px] border-slate-200"
            />
          </div>
        </div>

        <div className="flex flex-col w-1/2">
          <label htmlFor="">Country</label>
          <input
            type="text"
            {...register("Country")}
            className="rounded-md p-2 border-[1px] border-slate-200"
          />
        </div>
        <h3 className="text-[#D87D4A]">Payment Method</h3>
        <div className="flex  flex-col  items-end">
          <div className="w-1/2 ">
            <input
              type="radio"
              value="eMoney"
              name="Method"
              onClick={() => setIsCash(false)}
              className="rounded-md p-2 border-[1px] border-slate-200"
              {...register("method", { required: true })}
            />
            <label htmlFor="">e-Money</label>
          </div>
          <div className="w-1/2">
            <input
              type="radio"
              value="cash"
              name="Method"
              onClick={() => setIsCash(true)}
              {...register("method", { required: true })}
              className="rounded-md p-2 border-[1px] border-slate-200"
            />
            <label htmlFor="">cash</label>
            {errors.method && <p>Please select a Payment Method</p>}
          </div>
        </div>


        {!isCash && (
          <div className="flex space-x-4">
            <div className="flex flex-col w-1/2">
              <label htmlFor="">e-Money Number</label>
              <input
                type="text"
                {...register("number", { required: true })}
                className="rounded-md p-2 border-[1px] border-slate-200"
              />
              {errors.Name && <p>Name is required</p>}
            </div>
            <div className="flex flex-col w-1/2">
              <label htmlFor="">e-Money PIN</label>
              <input
                type="text"
                {...register("pin")}
                className="rounded-md p-2 border-[1px] border-slate-200"
              />
            </div>
           
          </div>
        )}

    </div>
  );
};

export default Billing;
