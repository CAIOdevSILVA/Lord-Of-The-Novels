import { useForm } from "react-hook-form";
import validator from "validator"
import { Link } from "react-router-dom";

import logo from "../../assets/Logo-Dark__1.png";
import * as Styles from "./style";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm();

  const password = watch("password")

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Styles.Container>
      <Styles.Wrapper>
        <div className="Register__Header">
          <img src={logo} alt="Logo Lord of the novels" />
          <h3>Bem Vindo ao Reino</h3>
        </div>
        <form className="Register__Form">
          <div className="Register__Name">
            <label>Nome</label>
            <input
              type="text"
              className={errors?.name && "error"}
              placeholder="Digite o seu nome..."
              {...register("name", { required: true })}
            />
            {errors?.name?.type === "required" && (
              <p className="error-message">Campo Obrigatório.</p>
            )}
          </div>
          <div className="Register__Email">
            <label>Email</label>
            <input
              type="email"
              className={errors?.email && "error"}
              placeholder="Digite o email..."
              {...register("email", { required: true , validate: value => validator.isEmail(value)})}
            />
            {errors?.email?.type === "required" && (
              <p className="error-message">Campo Obrigatório.</p>
            )}
            {errors?.email?.type === "validate" && (
              <p className="error-message">coloque um email válido.</p>
            )}
          </div>
          <div className="Register__Password">
            <label>Senha</label>
            <input
              type="password"
              className={errors?.password && "error"}
              placeholder="Digite a senha..."
              {...register("password", { required: true, minLength: 7 })}
            />
            {errors?.password?.type === "required" && (
              <p className="error-message">Campo Obrigatório.</p>
            )}
            {errors?.password?.type === "minLength" && (
              <p className="error-message">
                A senha deve ter nominimo 7 caractéres.
              </p>
            )}
          </div>
          <div className="Register__Check__Password">
            <label>Confirme a Senha</label>
            <input
              type="password"
              className={errors?.okPassword && "error"}
              placeholder="Digite a senha..."
              {...register("okPassword", { required: true, validate: (value) => value === password })}
            />
            {errors?.okPassword?.type === "required" && (
              <p className="error-message">Campo Obrigatório.</p>
            )}
            {errors?.okPassword?.type === "validate" && (
              <p className="error-message">As senhas não são iguais.</p>
            )}
          </div>

          <button
            className="btn"
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              handleSubmit(onSubmit)();
            }}
          >
            Criar Conta
          </button>
        </form>
        <span className="Span__Text">ou</span>
        <div className="Register__Google"></div>
        <div className="Register__Facebook"></div>
        <p className="noAccount">
          Já Possui Conta?{" "}
          <Link className="link" to={"/login"}>
            Login
          </Link>
        </p>
      </Styles.Wrapper>
    </Styles.Container>
  );
};

export default Register;
