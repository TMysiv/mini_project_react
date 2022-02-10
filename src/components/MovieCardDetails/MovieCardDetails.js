import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {useParams} from "react-router-dom";

import css from './card_details.css'
import {getActors, getMovie} from "../../store/card.slice";
import {Details} from "../Details/Details";
import cardService from "../../services/card.service";

const MovieCardDetails = () => {

    const {id} = useParams();
    const dispatch = useDispatch();

    useEffect(()=>{
        cardService.getMovieById(id).then(value =>{
        dispatch(getMovie({value}))
        } )
    },[])

    useEffect(()=>{
        cardService.getActorsById(id).then(value =>{
            dispatch(getActors({value}))
        } )
    },[])

    return (
        <div className={'wrap_details'}>
          <Details/>
        </div>
    );
};

export {MovieCardDetails};