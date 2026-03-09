import React from 'react';
import css from './Header.module.css'
import {NavLink} from "react-router-dom";
import MovieSearchForm from "../SearchMovies/MovieSearchForm/MovieSearchForm";

const Header = () => {
    return (
        <div className={css.Header}>
            <div className={css.logo}>🎬 CineVault</div>
            <NavLink to={'movies'}>Movies</NavLink>
            <NavLink to={'genres'}>Genres</NavLink>
            <div className={css.spacer}/>
            <MovieSearchForm/>
            <div className={css.user}>
                <div>U</div>
            </div>
        </div>
    );
};

export default Header;
