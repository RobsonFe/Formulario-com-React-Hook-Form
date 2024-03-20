import * as Yup from "yup";

export const userValidation = Yup.object().shape({
  nome: Yup.string().required("Nome é obrigatório!"),
  email: Yup.string().email().required("Email obrigatório!"),
  senha: Yup.string().required("Senha obrigatória!").min(6).max(8),
  confirSenha: Yup.string()
    .required("Senha obrigatória!")
    .min(6)
    .max(8)
    .oneOf([Yup.ref("senha"), "As senhas precisam ser iguais!"]),
});
