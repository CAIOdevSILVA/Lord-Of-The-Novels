import { useState } from "react"

import { useForm } from "react-hook-form"
import emailjs from "@emailjs/browser"

import * as Styles from "./style"



const Contact = () => {
  const [loading, setLoading] = useState(false)

  const  {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm()

  const onSubmit = (data) => {
    setLoading(true)
    
    emailjs.send(
      "service_x70evis", 
      "template_uqjrotf", 
      {
        from_name: data?.name,
        to_name: "Administrador",
        from_email: data?.email,
        to_email: "caiossantosp5560@gmail.com",
        message: data?.message
      },
      "8CqVNDBzdqxO2ulpr"
    )
    .then(() => {
      setLoading(false)
      alert("Obrigado pelo mensagem!")
      reset()
    })
    
  }

  return (
    <Styles.Container>
      <Styles.Title>Entre em Contato</Styles.Title>
      <form>
        <div className="inputs">
          <div className={`inputTextContainer ${errors?.name && "error"}`}>
            <input 
              type="text" 
              placeholder="Nome"
              {...register("name", { required: true })}
            />
            {errors?.name?.type === "required" && (
              <p className="errors">Campo Obrigatório</p>
            )}
          </div>
          <div className={`inputTextContainer ${errors?.email && "error"}`}>
            <input 
              type="email" 
              placeholder="Email"
              {...register("email", { required: true })}
            />

            {errors?.email?.type === "required" && (
              <p className="errors">Campo Obrigatório</p>
            )}
          </div>
        </div>
        <div className="textAreaContainer">
          <textarea 
            id="textArea"
            className={errors?.message && "error"}
            placeholder="Escreva sua mensagem aqui..."
            {...register("message", { required: true })}
          ></textarea>
          {errors?.message?.type === "required" && (
            <p className="errors">Campo Obrigatório</p>
          )}
        </div>
        <button
          onClick={(e) => {
            e.preventDefault()
            handleSubmit(onSubmit)()
          }}
          className="btn"
        >{loading ? "Enviando" : "Enviar"}</button>
      </form>
    </Styles.Container>
  )
}

export default Contact