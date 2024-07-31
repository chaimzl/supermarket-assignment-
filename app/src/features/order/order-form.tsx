import { Controller, useForm } from "react-hook-form";
import { OrderDetails } from "../../app/types/Order.type";
import { FormTextField } from "../../libs/form/form-text-field";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { api } from "../../app/api";

export const OrderForm = () => {
  const orderedList = useSelector((state: RootState) =>
    state?.cart?.data
  );
  
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
    let orderDetails={
      userInfo:data,
      items:orderedList
    }
    await api.setOrder(orderDetails).then(res=> {
      
    });
  };

  return (

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

      <div className="">
        <Button className="ms-2 float-end" variant="contained" type="submit">
          שמירה
        </Button>
      </div>
    </form>
  );
};
