import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  ToDo: yup
    .string()
    .required("Campo em branco!")
    .max(30, "Maximo de caracteres atingido")
    .min(3, "Minimo de caracteres atingido"),
});

export const Validation = yupResolver(schema);
