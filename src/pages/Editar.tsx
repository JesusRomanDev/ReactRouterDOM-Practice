import { Form, useActionData, useLoaderData, redirect } from "react-router-dom"

export async function action({params, request}){
    console.log(params);
    const formData = await request.formData();
    const datos = Object.fromEntries(formData);
    const nombre = formData.get('name');

    const errores = [];
    if(nombre.length === 0){
      errores.push('Campo nombre falta');
      return errores;
    }
  
    const url = `http://localhost:4000/users/${params.editarId}`;
    await fetch(url, {
      method: 'PUT',
      body: JSON.stringify(datos),
      headers: {
        'Content-Type': 'application/json'
        }
    });
    return redirect('/')
}

export async function loader({params}) {
    
    const url = `http://localhost:4000/users/${params.editarId}`;
    const respuesta = await fetch(url);
    const resultado = await respuesta.json();

    return resultado;
}

type Cliente = {
    id: number;
    name: string;
    username: string;
    email: string;
}

const Editar = () => {
    const cliente = useLoaderData() as Cliente;
    console.log(cliente);
    const errores = useActionData() as string[]; 
  return (
    <>
        <div>Editar</div>
        <Form method="post" noValidate>
        <label htmlFor="nombre">Nombre:</label>
        <input defaultValue={cliente.name} type="text" name="name" id="nombre" />

        <button type="submit">Enviar Datos</button>
        </Form>
        {errores && errores.length && errores.map(el=> (
        <p>{el}</p>
      ))}
    </>
    
  )
}

export default Editar