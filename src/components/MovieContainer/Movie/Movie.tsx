import React, {FC} from 'react';
import {IMovie} from "../../../interfaces/IMovie";
import css from './movie.module.css'
import {useNavigate} from "react-router-dom";

interface IProps {
    movie: IMovie;
}

const Movie: FC<IProps> = ({movie}) => {
    const {poster_path, title, vote_average, id, release_date} = movie
    const navigate = useNavigate();

    return (
        <div className={css.Element} onClick={() => navigate(`/movies/${id}`)}>
            <div className={css.poster}>
                <img src={`https://image.tmdb.org/t/p/w300/${poster_path}`} alt={title}/>
            </div>
            <div className={css.description}>
                <div className={css.rating}>
                    <span className={css.ratingBadge}>★ {vote_average?.toFixed(1)}</span>
                </div>
                <div className={css.title}>{title}</div>
                <div className={css.date}>{release_date?.substring(0, 4)}</div>
            </div>
        </div>
    );
};

export default Movie;
