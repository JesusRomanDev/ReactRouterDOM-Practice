import { useLoaderData } from "react-router-dom"
export async function loader() {
    const url = 'http://localhost:4000/users';
    const respuesta = await fetch(url);
    const resultado = await respuesta.json();

    return resultado;
}

type Datos = {
    id: number,
    name: string,
    username: string,
    email: string
} 

const Index = () => {
    const datos = useLoaderData() as Datos[];
    console.log(datos);
  return (
    <>
        <div>Pagina de Inicio</div>
        {datos.length && 
            datos.map(el => (
                <h1>{el.email}</h1>
            ))}
    </>
    
  )
}

export default Index