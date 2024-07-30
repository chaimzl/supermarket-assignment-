import { TextField } from "@mui/material";
import { InputText } from "primereact/inputtext";

interface TextField {
  name: string;
  title: string;
  value: string;
  errorMessage: string;
  onChange: (e: string) => void;
}

export const FormTextField = (props: TextField) => {
  return (
    <>
      <div className="flex flex-col mb-10">
        <label htmlFor="username">{props.title}</label>
        {/* <InputText
          id={props.name}
          onChange={(e) => props.onChange(e.target.value)}
          value={props.value}
          placeholder={props.title}
          className={`${props.errorMessage ? "border-red-600" : ""} mt-2`}
        /> */}
        <TextField id="filled-basic" label="" variant="outlined" />
        <small
          className={`${props.errorMessage ? "text-red-600" : ""} mt-1`}
          id="username-help"
        >
          Enter your username to reset your password.
        </small>
      </div>
    </>
  );
};
export default FormTextField;
