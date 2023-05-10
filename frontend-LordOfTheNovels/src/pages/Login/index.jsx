import { useForm } from "react-hook-form"
import validator from "validator";
import { Link } from "react-router-dom";

import logo from "../../assets/Logo-Dark__1.png";
import * as Styles from "./style";

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <Styles.Container>
      <Styles.Wrapper>
        <div className="Login__Header">
          <img src={logo} alt="Logo Lord of the novels" />
          <h3>Bem Vindo ao Reino</h3>
        </div>
        <form className="Login__Form">
          <div className="Login__Email">
            <label>Email</label>
            <input 
              type="email" 
              className={errors?.email && "error"}
              placeholder="Digite o email..."
              {...register("email", { required: true , validate: value => validator.isEmail(value)})}
            />
            {errors?.email?.type === "required" && <p className="error-message">Campo Obrigatório.</p>}
          </div>
          <div className="Login__Password">
            <label>Senha</label>
            <input 
              type="password" 
              placeholder="Digite a senha..." 
              className={errors?.password && "error"}
              { ...register("password", {required: true}) }
            />
            {errors?.password?.type === "required" && <p className="error-message">Campo Obrigatório.</p>}
            {errors?.email?.type === "validate" && (
              <p className="error-message">coloque um email válido.</p>
            )}
          </div>
          <button 
            className="btn" 
            onClick={(e) =>{ 
              e.preventDefault()
              handleSubmit(onSubmit)()
              }
            }  
          >
            Login
          </button>

        </form>
        <span className="Span__Text">ou</span>
        <div className="Login__Google"></div>
        <div className="Login__Facebook"></div>
        <p className="noAccount">
          Não Possui Conta? <Link className="link" to={"/register"}>Registre-se</Link>
        </p>
      </Styles.Wrapper>
    </Styles.Container>
  );
};

export default Login;
