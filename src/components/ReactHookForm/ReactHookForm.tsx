import { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type Inputs = {
  name: string;
  email: string;
};

const schema = yup.object({
  name: yup
    .string()
    .required("Este campo es requerido")
    .max(6, "Must be 6 characters or less"),
  email: yup
    .string()
    .required("Este campo es requerido")
    .email("No es un email valido"),
});

export function ReactHookForm() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitSuccessful, isSubmitting, touchedFields },
  } = useForm<Inputs>({
    defaultValues: {
      name: "",
      email: "",
    },
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log("form: ", data);
  };

  useEffect(() => {
    reset({
      name: "",
      email: "",
    });
  }, [isSubmitSuccessful]);

  //   console.log(watch("email"));
  console.log("err: ", errors.name);
  console.log(touchedFields.name);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <section>
        <input type="text" placeholder="Name" {...register("name")} />
        {touchedFields.name && errors.name && (
          <span>{errors.name.message}</span>
        )}
      </section>

      <section>
        <input placeholder="Email" {...register("email")}></input>
        {touchedFields.email && errors.email && (
          <span>{errors.email.message}</span>
        )}
      </section>

      <button type="submit">Send</button>
    </form>
  );
}
