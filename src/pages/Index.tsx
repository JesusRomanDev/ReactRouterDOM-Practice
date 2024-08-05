import { useLoaderData, Link, useNavigate } from "react-router-dom"
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
    const navigate = useNavigate();
  return (
    <>
        <div>Pagina de Inicio</div>
        <Link to='/nosotros' >Nosotros</Link>
        {datos.length && 
            datos.map((el) => (
                <>
                    <h1 key={el.id}>{el.name}</h1>
                    <button onClick={() => navigate(`/editar/${el.id}`)}>Editar</button>
                </>
            ))}
    </>
    
  )
}

export default Index