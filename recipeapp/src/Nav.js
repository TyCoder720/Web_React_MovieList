import React, {useState, useContext} from 'react';
import {MovieContext} from './MovieContext';

const Nav = () =>{
    const [movies, SetMovies] = useContext(MovieContext);
    return(
        <div className='nav'>
            <h3>Jordi</h3>
            <p>Movie List : {movies.length}</p>
        </div>
    );
}

export default Nav;