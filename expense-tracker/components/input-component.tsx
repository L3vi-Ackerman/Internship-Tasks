import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { InputComponentInterface } from "./Interface/interface";

interface inputProps extends InputComponentInterface {
  setTransaction: React.Dispatch<React.SetStateAction<any>>;
  value: string;
}

const InputComponent: React.FC<inputProps> = ({
  name,
  value,
  labelName,
  id,
  setTransaction,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTransaction((prev: any) => ({
      ...prev,
      [name]: e.target.value,
    }));
  };
  return (
    <div className="grid grid-cols-4 items-center gap-4">
      <Label htmlFor={name} className="text-right">
        {labelName}
      </Label>
      <Input
        id={id}
        name={name}
        value={value}
        onChange={handleChange}
        className="col-span-3"
      />
    </div>
  );
};

export default InputComponent;
