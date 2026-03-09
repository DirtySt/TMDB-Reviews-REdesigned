import React from 'react';
import SearchMovies from "../../components/SearchMovies/SearchMovies/SearchMovies";
import {useAppSelector} from "../../hooks/ReduxHooks";
import {useSearchParams, useParams} from "react-router-dom";
import css from '../MoviePage/MoviesPage.module.css';

const SearchMoviesPage = () => {
    const {error} = useAppSelector(state => state.movies);
    const [query, setQuery] = useSearchParams({page: '1'});
    const page = query.get('page');

    const prev = () => setQuery(prev => { prev.set('page', `${+page - 1}`); return prev; });
    const next = () => setQuery(prev => { prev.set('page', `${+page + 1}`); return prev; });

    return (
        <div>
            <div className={css.hero}>
                <h1 className={css.heroTitle}>Search <span>Results</span></h1>
                <p className={css.heroSub}>Movies matching your query</p>
            </div>
            {error ? <div>{error.message}</div> : <SearchMovies page={page}/>}
            <div className={css.pagination}>
                <button disabled={page === '1'} onClick={prev}>← Prev</button>
                <span className={css.pageNum}>Page {page}</span>
                <button disabled={page === '499'} onClick={next}>Next →</button>
            </div>
        </div>
    );
};

export default SearchMoviesPage;
