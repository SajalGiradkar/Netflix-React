import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import RowLarge from './RowLarge'
import Row from './Row'
import axios from 'axios';
import Footer from './Footer';
// skeleton theme
import { SkeletonTheme } from 'react-loading-skeleton';
const Api_key = process.env.REACT_APP_API_KEY;
const base_url = "https://api.themoviedb.org/3";

const tv_shows = `${base_url}/tv/popular?api_key=${Api_key}&language=en-US`;
const tv_shows_top_rated = `${base_url}/tv/top_rated?api_key=${Api_key}&language=en-US`;

const TvShows = () => {
    const [TvShows, setTvShows] = useState([]);
    const [TvShowsTopRated, setTvShowsTopRated] = useState([]);

    const fetchApiData = () => {
        const fetchTvShows = async () => {
            const { data } = await axios.get(tv_shows);
            setTvShows(data.results);
        };
        const fetchTvShowsTopRated = async () => {
            const { data } = await axios.get(tv_shows_top_rated);
            setTvShowsTopRated(data.results);
        };

        fetchTvShows();
        fetchTvShowsTopRated();
    };

    useEffect(() => {
        fetchApiData();
    }, []);


    return (
        <>
            <SkeletonTheme baseColor="#313131" highlightColor="#525252" >

                <Container>
                    <div className="tv-shows row">
                        <div className="tv-row">
                            <RowLarge rowTitle={'Popular'} arr={TvShows} />
                            <RowLarge rowTitle={'Top Rated'} arr={TvShowsTopRated} />
                            <Row rowTitle={'Arriving Today'} arr={TvShows} />
                        </div>
                    </div>
                </Container>
            </SkeletonTheme>
            <Footer />
        </>
    )
}

const Container = styled.div`
        border: 1px solid black;
        background-color: black;
    .tv-shows{
        width: 100%;
        min-height: 120vh;
        background-color: black;
        overflow: hidden;
    }
    .tv-row{
        margin-top: 8rem;
    }
`;


export default TvShows