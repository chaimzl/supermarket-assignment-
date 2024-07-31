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

        <TextField
          id={props.name}
          onChange={(e) => props.onChange(e.target.value)}
          value={props.value}
          className={`${props.errorMessage ? "border-red-600" : ""} mt-2`}
          label=""
          variant="outlined"
        />
        <small
          className={`${props.errorMessage ? "text-red-600" : "invisible"} mt-1`}
          id="username-help"
        >
          {props.title}
        </small>
      </div>
    </>
  );
};
export default FormTextField;
