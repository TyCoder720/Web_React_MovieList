import React, {useState, createContext} from 'react';

export const MovieContext = createContext();

export const MovieProvider = (props) => {
    const[movies, SetMovies] = useState([
        {
            name: 'Harry Potter',
            price: '10€',
            id: 23124
        },
        {
            name: 'Game Of Throne',
            price: '10€',
            id: 2541624
        },
        {
            name: 'Inception',
            price: '10€',
            id: 23524
        }
    ]);

    return(
        <MovieContext.Provider value={[movies, SetMovies]}>
            {props.children}
        </MovieContext.Provider>
    );
}