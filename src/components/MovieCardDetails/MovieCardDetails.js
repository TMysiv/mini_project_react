import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {useParams} from "react-router-dom";

import css from './card_details.css'
import {getActors, getMovie, getVideos} from "../../store/card.slice";
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
        cardService.getActorsById(550).then(value =>{
            dispatch(getActors({value}))
        } )
    },[])

    useEffect(()=>{
        cardService.getVideosById(id).then(value => {
            const video = value.results[0]
            dispatch(getVideos({video}))
        })
    },[])


    return (
        <div className={'wrap_details'}>
          <Details/>
        </div>
    );
};

export {MovieCardDetails};