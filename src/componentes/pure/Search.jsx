import React from 'react';
import { IoSearchOutline } from "react-icons/io5";

const Search = ({ searchTerm, setSearchTerm }) => {
    return (
        <div className='flex justify-center items-center rounded-xl w-full mb-8'>
            
            <input type="search" placeholder='Buscar...' className='bg-slate-300 outline-none pl-2 py-1 rounded-l-xl w-[30%]' value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)} />
            <i className='text-white text-base p-2 cursor-pointer rounded-r-xl bg-red-600 '><IoSearchOutline /></i>

        </div>
    );
};

export default Search;