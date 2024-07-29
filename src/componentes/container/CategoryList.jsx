import React from 'react';
import Category from '../pure/Category';
import { useParams } from 'react-router-dom';

const CategoryList = () => {
    
    return (
        <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-14 place-items-center  '>
            <Category img='desayuno' nombre='Desayuno' ruta={'/category/Desayuno'} />
            <Category img='almuerzo' nombre='Almuerzo' ruta={'/category/Almuerzo'} />
            <Category img='cena' nombre='Cena' ruta={'/category/Cena'} />
            <Category img='postre' nombre='Postre' ruta={'/category/Postre'} />
        </div>
    );
};

export default CategoryList;