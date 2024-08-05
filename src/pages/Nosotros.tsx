import { useNavigate, Form, useActionData, redirect } from "react-router-dom"
export async function action({request}){

  const formData = await request.formData();
  const datos = Object.fromEntries(formData);
  const nombre = formData.get('name');
  console.log(nombre);
  console.log(datos);

  const errores = [];
  if(nombre.length === 0){
    errores.push('Campo nombre falta');
    return errores;
  }

  const url = 'http://localhost:4000/users';
  await fetch(url, {
    method: 'POST',
    body: JSON.stringify(datos),
    headers: {
      'Content-Type': 'application/json'
      }
  });
  return redirect('/')
}

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