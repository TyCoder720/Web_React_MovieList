import React, {useState, useContext} from 'react';
import {MovieCOntext, MovieContext} from './MovieContext';
import Movie from './Movie';

const AddMovie = ()=>{
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [movies, setMovies] = useContext(MovieContext);

    const UpdateName = (e)=>{
        setName(e.target.value);
    };
    const UpdatePrice = (e)=>{
        setPrice(e.target.value);
    };

    const addMovie = (e)=>{
        e.preventDefault();
        setMovies(prevMovies => [...prevMovies, {name : name, price : price}]);
    };

    return(
        <form onSubmit={addMovie}>
            <input type="text" name="name" value={name} placeholder="Enter A Name" onChange={UpdateName}/>
            <input type="text" name="price" value={price} placeholder="Enter A Price" onChange={UpdatePrice}/>
            <button>Submit</button>
        </form>
    );
}

export default AddMovie;