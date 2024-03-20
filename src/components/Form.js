import React from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import "react-toastify/dist/ReactToastify.css";
import { userValidation } from "../validation/userValidation";

export function Form() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userValidation),
  });

  const onSubmit = (data) => {
    console.log(data);
    if (Object.keys(data).length !== 0) {
      toast.success("Formulario Enviado!");
    } else {
      toast.error("Preencha o Formulario");
    }
    reset();
  };

  return (
    <div className="container mt-5">
      <form
        className="row justify-content-center mx-auto"
        style={{ width: "500px" }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-3">
          <label htmlFor="nome" className="form-label">
            Nome
          </label>
          <input
            type="text"
            className="form-control"
            id="nome"
            name="nome"
            placeholder="Digite seu nome"
            {...register("nome")}
          />
          <span style={{ color: "red" }}>{errors.nome?.message}</span>
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="exemplo@mail.com"
            {...register("email")}
          />
          <span style={{ color: "red" }}>{errors.email?.message}</span>
        </div>

        <div className="mb-3">
          <label htmlFor="senha" className="form-label">
            Senha
          </label>
          <input
            type="password"
            id="senha"
            name="senha"
            className="form-control"
            {...register("senha")}
          />
          <span style={{ color: "red" }}>{errors.senha?.message}</span>
        </div>

        <div className="mb-3">
          <label htmlFor="confirSenha" className="form-label">
            Confirme a sua Senha
          </label>
          <input
            type="password"
            id="confirSenha"
            name="confirSenha"
            className="form-control"
            {...register("confirSenha")}
          />
          <span style={{ color: "red" }}>{errors.confirSenha?.message}</span>
        </div>

        <div className="btn-group gap-3" role="group">
          <div className="mb-3">
            <button type="submit" className="btn btn-primary">
              Enviar
            </button>
          </div>

          <div className="mb-3">
            <button
              type="reset"
              className="btn btn-danger"
              onClick={() => reset()}
            >
              Cancelar
            </button>
          </div>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}
