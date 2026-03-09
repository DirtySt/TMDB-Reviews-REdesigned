import React from 'react';
import Genres from "../../components/GenreContainer/Genres/Genres";
import {useAppSelector} from "../../hooks/ReduxHooks";
import css from './GenresPage.module.css';

const GenresPage = () => {
    const {error} = useAppSelector(state => state.movies);

    return (
        <div>
            <div className={css.hero}>
                <h1 className={css.heroTitle}>Browse by <span>Genre</span></h1>
                <p className={css.heroSub}>Explore films by category</p>
            </div>
            {error ? <div>{error.message}</div> : <Genres/>}
        </div>
    );
};

export default GenresPage;
