import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {tagValidator} from "../../../validators/tagValidator";
import {joiResolver} from "@hookform/resolvers/joi";
import {useNavigate} from "react-router-dom";
import styles from './MovieSearchForm.module.css';

const MovieSearchForm = () => {
    const navigate = useNavigate();
    const {reset, handleSubmit, formState: {isValid}, register} = useForm({
        resolver: joiResolver(tagValidator)
    });

    const save: SubmitHandler<any> = (tag) => {
        navigate(`/movies/search/${tag.tag}`);
        reset();
    };

    return (
        <div className={styles.wrapper}>
            <form onSubmit={handleSubmit(save)} className={styles.form}>
                <span className={styles.icon}>⌕</span>
                <input
                    type={"text"}
                    placeholder={'Search movies...'}
                    className={styles.input}
                    {...register('tag')}
                />
                <button disabled={!isValid} className={styles.btn}>Search</button>
            </form>
        </div>
    );
};

export default MovieSearchForm;
