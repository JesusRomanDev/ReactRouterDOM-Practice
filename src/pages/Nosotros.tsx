import { useNavigate, Form, useActionData } from "react-router-dom"


const Nosotros = () => {
    const errores = useActionData() as string[];
    const navigate = useNavigate();
  return (
    <>

      <div>Pagina Nosotros</div>
      <button onClick={()=> navigate(-1)}>Volver</button>
      <h1>Estas interesado? Manda tus datos</h1>
      <Form method="post" noValidate>
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" name="name" id="nombre" />

        <button type="submit">Enviar Datos</button>
      </Form>
      {errores && errores.length && errores.map(el=> (
        <p>{el}</p>
      ))}
    </>
  )
}

export default Nosotros