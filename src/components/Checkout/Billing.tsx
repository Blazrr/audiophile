import React, { useState } from "react";
import { useForm } from "react-hook-form";

type Props = {
  register: any;
  errors: any;
};

const Billing = ({ register, errors }: Props) => {
  const [isCash, setIsCash] = useState(true);

  console.log(isCash);

  return (
    <div className="bg-white lg:w-full rounded-lg p-4   ">
      <h2 className="text-xl font-bold tracking-widest ">Checkout</h2>
      <h3 className="text-[#D87D4A]">Billing details</h3>
      <div className="flex space-x-4">
        <div className="flex flex-col w-1/2 mt-2">
          <label htmlFor="">Name</label>
          <input
            type="text"
            {...register("Name", { required: true })}
            className="rounded-md p-2 border-[1px] border-slate-200"
          />
          {errors.Name && <p className="text-red-400 mt-1">Name is required</p>}
        </div>
        <div className="flex flex-col w-1/2 mt-2">
          <label htmlFor="">Email Address</label>
          <input
            type="email"
            {...register("Email", { required: true })}
            className="rounded-md p-2 border-[1px] border-slate-200"
          />
          {errors.Email && (
            <p className="text-red-400 mt-1">
              A valid Email Adress is required
            </p>
          )}
        </div>
      </div>
      <div className="flex flex-col w-1/2 mt-2">
        <label htmlFor="">Phone Number</label>
        <input
          type="number"
          id=""
          {...register("Phone", { required: true })}
          className="rounded-md p-2 border-[1px] border-slate-200"
        />
        {errors.Phone && (
          <p className="text-red-400 mt-1">Please enter a valid phone number</p>
        )}
      </div>
      <h3 className="mt-4 text-[#D87D4A]">SHIPPING INFO</h3>

      <div className="flex flex-col ">
        <label htmlFor="">Address</label>
        <input
          type="text"
          {...register("Adress", { required: true })}
          className="rounded-md p-2 border-[1px] border-slate-200"
        />
        {errors.Adress && (
          <p className="text-red-400 mt-1">Please enter Your shipping adress</p>
        )}
      </div>

      <div className="flex space-x-4">
        <div className="flex flex-col w-1/2 mt-2">
          <label htmlFor="">Zipcode</label>
          <input
            type="text"
            {...register("ZipCode", { required: true })}
            className="rounded-md p-2 border-[1px] border-slate-200"
          />
          {errors.ZipCode && (
            <p className="text-red-400 mt-1">Zipcode is required</p>
          )}
        </div>
        <div className="flex flex-col w-1/2 mt-2">
          <label htmlFor="" className="">
            City
          </label>
          <input
            type="text"
            {...register("City", { required: true })}
            className="rounded-md p-2 border-[1px] border-slate-200"
          />
          {errors.City && (
            <p className="text-red-400 mt-1">Please Enter your City</p>
          )}
        </div>
      </div>

      <div className="flex flex-col w-1/2 mt-2">
        <label htmlFor="">Country</label>
        <input
          type="text"
          {...register("Country", { required: true })}
          className="rounded-md p-2 border-[1px] border-slate-200"
        />
        {errors.Country && (
          <p className="text-red-400 mt-1">
            Please Enter your shipping country
          </p>
        )}
      </div>
    </div>
  );
};

export default Billing;
