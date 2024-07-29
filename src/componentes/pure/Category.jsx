import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ img, ruta, nombre }) => {
    return (
        <Link to={ruta} className='shadow-sombra w-[200px] h-[100px] bg-red-400 flex items-center transition-all duration-400 hover:bg-red-600 rounded-[30px]'>
            <div className='w-[70px] h-[70px] rounded-full bg-white flex justify-center items-center ml-3'>
                <img src={require(`../../img/categoria/${img}.png`)} alt={`Imagen de ${nombre}`} className='w-[50px]' />
            </div>
            <span className='text-white ml-5 font-semibold'> {nombre} </span>
        </Link>
    );
};

export default Category;