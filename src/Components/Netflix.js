import React, { useEffect, useState } from 'react'
import Row from './Row';
import RowLarge from './RowLarge';
import Navbar from './Navbar';
import Footer from './Footer';
import './css/Netflix.css';
import axios from 'axios';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { SkeletonTheme } from 'react-loading-skeleton'

const Api_key = process.env.REACT_APP_API_KEY;
const base_url = "https://api.themoviedb.org/3";
const imgUrl = 'https://image.tmdb.org/t/p/original';

let randomNo = Math.floor(Math.random() * 19) + 1;
const popular = `${base_url}/movie/popular?api_key=${Api_key}&language=en-US&page=${randomNo}`;
const upcoming = `${base_url}/movie/upcoming?api_key=${Api_key}&language=en-US&page=${1}`;
const trending = `${base_url}/trending/all/day?api_key=${Api_key}&language=en-US&page=${2}`;
const now_playing = `${base_url}/movie/now_playing?api_key=${Api_key}&language=en-US&page=${7}`;
const top_rated = `${base_url}/movie/top_rated?api_key=${Api_key}&language=en-US&page=${4}`;

const Netflix = () => {

  const [myPopular, setMyPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [nowPlaying, setNowPlaying] = useState([]);
  const [Upcoming, setUpcoming] = useState([]);
  const [Trending, setTrending] = useState([]);

  const [Banner, setBanner] = useState([]);
  const [trailer, setTrailer] = useState('');

  // inside this function we call multiple api using axios 
  const FetchData = () => {

    const fetchPopular = async () => {
      const { data } = await axios.get(popular);
      setMyPopular(data.results);
    };

    const fetchTopRated = async () => {
      const { data } = await axios.get(top_rated);
      setTopRated(data.results);
    };

    const fetchNowPlaying = async () => {
      const { data } = await axios.get(now_playing);
      setNowPlaying(data.results);
    };

    const fetchUpcoming = async () => {
      const { data } = await axios.get(upcoming);
      setUpcoming(data.results);
    };

    const fetchTrending = async () => {
      const { data } = await axios.get(trending);
      setTrending(data.results);
    };
    setBanner(
      Math.floor(Math.random() * 15) + 1
    );

    fetchPopular();
    fetchTopRated();
    fetchNowPlaying();
    fetchUpcoming();
    fetchTrending();

  };

  useEffect(() => {
    FetchData();
    window.scroll(0, 0);
  }, [])

  const opts = {
    height: '390',
    width: '100%',
    playerVar: {
      autoplay: 1
    }
  };
  const handleClick = (title) => {
    if (trailer) {
      setTrailer('');
    } else {
      movieTrailer(title || '').then((url) => {
        const urlParams = new URLSearchParams(new URL(url).search)
        setTrailer(urlParams.get('v'));
      }).catch(() => console.log('Temporarily Unavailable!'));
    }
  };

  // we create location to access state received from useNavigate hook that written in WhoWatching Component 
  const location = useLocation();
  return (
    <>
      <SkeletonTheme baseColor="#313131" highlightColor="#525252" >
        <section className="netflix-container" id='Netflix'>
          <Navbar
            avatar={location.state.avatar}
          />

          <div className="banner" style={{
            backgroundImage: myPopular[Banner] ? `url(${`${imgUrl}/${myPopular[Banner].backdrop_path}`})` : "none"
          }}>
            <div className="banner-info">
              <div>
                {myPopular[Banner] && <h1>{myPopular[Banner].title}</h1>}
                {myPopular[Banner] && <p>{myPopular[Banner].overview.slice(0, 300)}.....</p>}
                <span onClick={() => handleClick(myPopular[Banner].title)} className='banner-btn play-icon'><i className="fas fa-play"></i> Play</span>
                <Link to='*' className='banner-btn list-icon'> <i className="fas fa-plus"></i> My List</Link>
              </div>
            </div>
          </div>
          {trailer && <YouTube videoId={trailer} opts={opts} className='trailer-box' />}
          {location.pathname === '/netflix-shows' &&
            <div className="rows">
              <RowLarge rowTitle={'Popular On Netflix'} arr={myPopular} />
              <RowLarge rowTitle={'Upcoming'} arr={Upcoming} />
              <RowLarge rowTitle={'Trending'} arr={Trending} />
              <RowLarge rowTitle={'Now Playing'} arr={nowPlaying} />
              <Row rowTitle={'Top Rated'} arr={topRated} />
              <Row rowTitle={'Top Movies'} arr={Trending} />
              <Row rowTitle={'Recently Added'} arr={Upcoming} />
            </div>
          }
          < Footer />
        </section>
      </SkeletonTheme>
    </>

  )
}
export default Netflix
