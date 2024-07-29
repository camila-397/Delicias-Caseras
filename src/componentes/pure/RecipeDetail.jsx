import React from 'react';
import { recipe } from '../../lista/recetaList';
import { useParams, useNavigate } from 'react-router-dom';

const RecipeDetail = () => {

    const {id} = useParams();
    const receta = recipe[id];
    const navigate = useNavigate();


    return (
        <div className='w-full py-10'>

            <div className='w-full mt-5 flex flex-col justify-center items-center mb-24'>

                <div className='w-full flex justify-center '>
                    <img src={require(`../../img/recetas/${receta.imagen}.jpg`)} alt={receta.nombre} className='w-full h-[300px] md:w-[800px] md:h-[500px]'/>
                </div>

                <p className='w-full text-[30px] font-bold text-center '> {receta.nombre} </p>

                <div className='w-full md:w-[800px] pl-10 ms:pl-0'>
                    <h2 className='font-semibold my-3'>Ingredientes</h2>
                    <ul className='list-disc ml-5 '> 
                        {
                            receta.ingredientes.map((i, index) => (
                                <li key={index} className='dec'> {i} </li>
                            ))
                        }
                    </ul>
                </div>

                <div className='w-full md:w-[800px] pl-10 ms:pl-0'>
                    <h2 className='w-[800px] text-[20px] font-bold mt-10 mb-5'>Como preparar {receta.nombre} </h2>
                    <ul className='list-decimal ml-5'> 
                        {
                            receta.preparacion.map((i, index) => (
                                <li key={index} className='dec'> {i} </li>
                            ))
                        }
                    </ul>
                </div>

            </div>

            <div className='w-full'>
                <button onClick={() => navigate(-1)} 
                  className='text-white bg-slate-400 py-2 px-5 ml-3 rounded-3xl mt-20 transition-all duration-300 hover:bg-slate-600'
                >
                    Volver
                </button>
            </div>
        </div>
    );
};

export default RecipeDetail;