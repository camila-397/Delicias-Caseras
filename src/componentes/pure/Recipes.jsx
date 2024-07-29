import React, {useState} from 'react';
import { recipe } from '../../lista/recetaList';
import { Link } from 'react-router-dom';
import Search from '../pure/Search';


const Recipes = () => {

    const [searchTerm, setSearchTerm] = useState('');

    const filteredRecipes = recipe.filter(rec =>
        rec.nombre.toLowerCase().includes(searchTerm.toLowerCase())
    );


    return (
        <div className='w-full'>
            <div className='flex justify-center items-center mr-2'>
                <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
            </div>
        
            <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 place-items-center'>
                {
                    filteredRecipes.map((rec) => ( 
                        <div key={rec.id} className='w-[260px] h-[270px] shadow-sombra'>
                            <div className='w-full h-[200px] '>
                            <img src={require(`../../img/recetas/${rec.imagen}.jpg`)} alt={rec.nombre} className='w-full h-full' />
                            </div>
                            <div className='w-full h-7 pl-2'>
                                <p className=' font-bold'> {rec.nombre} </p>
                            </div>
                            <div className='flex items-center justify-between '>
                                <Link to={`/detail/${rec.id-1}`} className='bg-red-400 px-4 text-white text-sm py-1 ml-2 rounded-3xl transition-all duration-400 hover:bg-red-600'>Ver Detalles</Link>
                            </div>
                        </div>
                    ))
                }  
            </div>
        </div>
    );
};

export default Recipes;