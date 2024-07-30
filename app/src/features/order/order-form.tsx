import { Controller, useForm } from "react-hook-form";
import { OrderDetails } from "../../app/types/Order.type";
import { FormTextField } from "../../libs/form/form-text-field";
import { Button } from "@mui/material";

export const OrderForm = () => {
  const defaultValues: OrderDetails = {
    name: "",
    fullAddress: "",
    mail: "",
  };

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({ defaultValues });

  const getFormErrorMessage = (name: any) => {
    let curError: any = (errors as any)[name];
    return curError?.message;
  };

  const onSubmit = async (data: any) => {
    alert(JSON.stringify(data));
  };

  return (


// <div className="w-full max-w-xs">
//   <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
//     <div className="mb-4">
//       <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
//         Username
//       </label>
//       <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"></input>
//     </div>
//     <div className="mb-6">
//       <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
//         Password
//       </label>
//       <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"></input>
//       <p className="text-red-500 text-xs italic">Please choose a password.</p>
//     </div>
//     <div className="flex items-center justify-between">
//       <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
//         Sign In
//       </button>
//       <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
//         Forgot Password?
//       </a>
//     </div>
//   </form>
//   <p className="text-center text-gray-500 text-xs">
//     &copy;2020 Acme Corp. All rights reserved.
//   </p>
// </div>

    <form className="bg-white shadow-md rounded p-16" onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="name"
        control={control}
        rules={{ required: "חובה להזין שם מלא" }}
        render={({ field }) => (
          <FormTextField
            name={field.name}
            title={"הזן שם מלא"}
            value={field.value || ""}
            errorMessage={getFormErrorMessage(field.name)}
            onChange={function (e: string): void {
              field.onChange(e);
            }}
          />
        )}
      />

      <Controller
        name="fullAddress"
        control={control}
        rules={{ required: "חובה להזין כתובת מלאה" }}
        render={({ field }) => (
          <FormTextField
            name={field.name}
            title={"הזן כתובת מלאה"}
            value={field.value || ""}
            errorMessage={getFormErrorMessage(field.name)}
            onChange={function (e: string): void {
              field.onChange(e);
            }}
          />
        )}
      />
      <Controller
        name="mail"
        control={control}
        rules={{ required: "חובה להזין כתובת מייל" }}
        render={({ field }) => (
          <FormTextField
            name={field.name}
            title={"הזן כתובת מייל"}
            value={field.value || ""}
            errorMessage={getFormErrorMessage(field.name)}
            onChange={function (e: string): void {
              field.onChange(e);
            }}
          />
        )}
      />

      <div className="d-flex justify-content-end position-absolute w-100 bottom-0">
        <Button className="ms-2" type="submit">
          שמירה
        </Button>
      </div>
    </form>
  );
};
