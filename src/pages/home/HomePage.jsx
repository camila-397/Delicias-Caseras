import React from 'react';
import RecipeList from '../../componentes/container/RecipeList';
import CategoryList from '../../componentes/container/CategoryList';

const HomePage = () => {
    return (
        <div>
            <CategoryList /> 
            <RecipeList />
        </div>
    );
};

export default HomePage;