import React from 'react';
import Movies from "../../components/MovieContainer/Movies/Movies";
import {useAppSelector} from "../../hooks/ReduxHooks";
import {useSearchParams} from "react-router-dom";
import css from './MoviesPage.module.css'

const MoviesPage = () => {
    const {error} = useAppSelector(state => state.movies);
    const [query, setQuery] = useSearchParams({page: '1'});
    const page = query.get('page');

    const prev = () => setQuery(prev => { prev.set('page', `${+page - 1}`); return prev; });
    const next = () => setQuery(prev => { prev.set('page', `${+page + 1}`); return prev; });

    return (
        <div>
            <div className={css.hero}>
                <h1 className={css.heroTitle}>Popular <span>Movies</span></h1>
                <p className={css.heroSub}>Discover the most watched films right now</p>
            </div>
            {error ? <div>{error.message}</div> : <Movies page={page}/>}
            <div className={css.pagination}>
                <button disabled={page === '1'} onClick={prev}>← Prev</button>
                <span className={css.pageNum}>Page {page}</span>
                <button disabled={page === '499'} onClick={next}>Next →</button>
            </div>
        </div>
    );
};

export default MoviesPage;
