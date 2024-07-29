import React, {useState} from 'react';
import { recipe } from '../../lista/recetaList';
import { Link, useParams } from 'react-router-dom';
import CategoryList from '../../componentes/container/CategoryList';
import Search from '../../componentes/pure/Search';

const CategoryPage = () => {

    const { categoria } = useParams();

    const recetasFiltradas = recipe.filter(rec => {
        if (rec.categoria === categoria) {
            return true
        }
    });

    const [searchTerm, setSearchTerm] = useState('');

    const filteredRecipes = recetasFiltradas.filter(rec =>
        rec.nombre.toLowerCase().includes(searchTerm.toLowerCase())
    );


    return (
        <div>
            <CategoryList /> 
            
            <h1 className='w-full text-center text-xl font-bold my-9'> {categoria} </h1>

            <div className='flex justify-center items-center mt-9 mr-2'>
                <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
            </div>

            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10 place-items-center mb-10">
                {
                    recetasFiltradas  ? (
                        filteredRecipes.map((rec) => ( 
                            <div key={rec.id} className='w-[300px] h-[280px] shadow-sombra'>
        
                                <div className='w-full h-[200px] '>
                                <img src={require(`../../img/recetas/${rec.imagen}.jpg`)} alt={rec.nombre} className='w-full h-full' />
                                </div>
                                <div className='w-full h-7 pl-2 mb-1'>
                                    <p className=' font-bold'> {rec.nombre} </p>
                                </div>
                                <div className='flex items-center justify-between '>
                                    <Link to={`/detail/${rec.id-1}`} className='bg-red-400 px-5 text-white py-2 ml-2 rounded-3xl transition-all duration-400 hover:bg-red-600'>Ver Detalles</Link>
                                </div>
                            </div>
                        ))
                    ) : 
                    (
                        (<div> Recetas no Encontradas</div>)
                    )
                }
            </div>


        </div>
    );
};

export default CategoryPage;