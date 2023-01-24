import React from "react";
import { useForm } from "react-hook-form";

type Props = {
    test:any
};

const Billing = ({test}: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) =>{
    console.log(data);
    test()
  } 

  return (
    <div className="bg-slate-200 lg:w-full rounded-lg  ">
      <h2 className="text-xl font-bold tracking-widest">Checkout</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>Billing details</h3>
        <div>
          <div className="form-group">
            <label htmlFor="">Name</label>
            <input type="text" {...register("Name", {required : true})} />
          </div>
          <div className="form-group mt-2">
            <label htmlFor="">Email Address</label>
            <input type="text" {...register("Email")}  />
          </div>
        </div>
        <div className="form-group">
            <label htmlFor="">Phone Number</label>
            <input type="number" id="" {...register("Phone")}  />
        </div>

        <input type="submit" />
      </form>
    </div>
  );
};

export default Billing;
