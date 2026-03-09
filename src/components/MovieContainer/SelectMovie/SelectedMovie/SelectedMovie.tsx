import React, {FC} from 'react';
import css from './SelectedMovie.module.css'
import {ISelectMovie} from "../../../../interfaces/ISelectMovie";
import {ICast} from "../../../../interfaces/ICast";

interface IProps {
    movie: ISelectMovie
    cast: ICast[]
}

const SelectedMovie: FC<IProps> = ({movie, cast}) => {
    const {adult, poster_path, runtime, genres, homepage} = movie

    return (
        <div className={css.Container}>
            <div className={css.hero}>
                <img
                    src={`https://image.tmdb.org/t/p/w400/${poster_path}`}
                    className={css.Poster}
                    alt={movie.title}
                />
                <div className={css.details}>
                    <h1 className={css.movieTitle}>{movie.title}</h1>

                    <div className={css.metaRow}>
                        <span className={`${css.badge} ${css.badgeGold}`}>★ {movie.vote_average?.toFixed(1)}</span>
                        <span className={`${css.badge} ${css.badgeGray}`}>{runtime} min</span>
                        {adult
                            ? <span className={`${css.badge} ${css.badgeRed}`}>18+</span>
                            : <span className={`${css.badge} ${css.badgeGray}`}>All Ages</span>
                        }
                        <span className={`${css.badge} ${css.badgeGray}`}>{movie.status}</span>
                    </div>

                    <div className={css.genres}>
                        {genres.map(g => <span key={g.id} className={css.genreTag}>{g.name}</span>)}
                    </div>

                    <p className={css.overview}>{movie.overview}</p>

                    <div className={css.infoGrid}>
                        <div className={css.infoItem}>
                            <span className={css.infoLabel}>Original Language</span>
                            <span className={css.infoValue}>{movie.original_language?.toUpperCase()}</span>
                        </div>
                        {homepage && (
                            <div className={css.infoItem}>
                                <span className={css.infoLabel}>Homepage</span>
                                <span className={css.infoValue}>
                                    <a href={homepage} target="_blank" rel="noreferrer">Official Site ↗</a>
                                </span>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <h2 className={css.sectionTitle}>Main <span>Cast</span></h2>
            <div className={css.cast}>
                {cast.map(artist => (
                    <div className={css.artist} key={artist.id}>
                        <img
                            src={artist.profile_path
                                ? `https://image.tmdb.org/t/p/w185/${artist.profile_path}`
                                : 'https://via.placeholder.com/185x278/1a1a26/5a5870?text=No+Photo'
                            }
                            alt={artist.name}
                        />
                        <div className={css.artistName}>{artist.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SelectedMovie;
