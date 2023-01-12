import React, { useEffect, useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import logo from './Images/logo.png';
import cross from './Images/plus.png';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const Features = () => {
    const [trailer, setTrailer] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const location = useLocation();
    const image = location.state.cardImg;
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }
    useEffect(() => {
        window.scroll(0, 0);
    }, [location]);
    const handleClick = (title) => {
        if (trailer) {
            setTrailer('');
        } else {
            movieTrailer(title || '').then((url) => {
                const urlParams = new URLSearchParams(new URL(url).search)
                setTrailer(urlParams.get('v'));
            }).catch(() => setErrorMsg('Temporarily Unavailable!'));
        }
    };
    const opts = {
        height: '600',
        width: '1100',
        playerVar: {
            autoplay: 1
        }
    };

    return (
        <>
            <Container image={image}>
                <div className="features">
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    <div className="features-info">
                        <div>
                            {location.state.cardTitle && <h1>{location.state.cardTitle}</h1>}
                            <div className='movie-info'>
                                {location.state.vote && <span className='ratings'><i className="fas fa-star"></i>{location.state.vote} /10</span>}
                                {location.state.date && <span className='date'>{location.state.date.slice(0, 4)}</span>}
                                <span className='language'>{location.state.lang ? location.state.lang : 'English'}</span>
                            </div>
                            {location.state.cardInfo && <p className='overview'>{location.state.cardInfo}</p>}
                            <span className='btn play-icon' onClick={() => handleClick(location.state.cardTitle)}><i className="fas fa-play"></i> Play</span>

                            <Link to='*' className='btn list-icon'> <i className="fas fa-plus"></i> My List</Link>
                            <button className='like' title='Like'> <i className="fas fa-thumbs-up"></i></button>
                            <button className='like dislike' title='Dislike'> <i className="fas fa-thumbs-down"></i></button>
                            <div className="notFound-msg">{errorMsg}</div>
                            <div className='genres'>
                                <p><strong>Genres: </strong> {location.state.genres[0]}, {location.state.genres[1]}, {location.state.genres[2]} </p>
                                <p><strong>This is: </strong> Exciting</p>
                            </div>
                        </div>
                    </div>
                    <div className="cross-icon" onClick={goBack} title='back'>
                        <img src={cross} alt="back" />
                    </div>
                </div>
                {trailer && <YouTube videoId={trailer} opts={opts} className='trailer-box' />}
            </Container>
            <Footer />
        </>
    )
}
// styling features component 
const Container = styled.div`
position: relative;
.features{
    width: 100%;
    min-height: 100vh;
    overflow: hidden;
    background:rgb(80, 80, 80) url(${props => props.image});
    box-shadow: inset -1rem -5rem 7.3rem -1.3rem rgba(0, 0, 0, 1);
    color: white;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-blend-mode: overlay;
    position: relative;
    overflow-x: hidden;
}
.features-info {
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: left;
    z-index: 9;
    gap: 2rem;
    margin-top: 10rem;
    margin-left: 2rem;
    padding: 1rem;

    @media only screen and (max-width:750px){
        width: 100%;
        margin-left: 0;
    }
}
.features-info .btn {
    background-color: white;
    color: black;
    padding: .9rem 2.5rem;
    font-weight: 500;
    letter-spacing: .5px;
    cursor: pointer;
    margin-right: 2rem;
    transition: all .3s;
}
.features-info .btn .fas {
    margin: 0 .5rem;
}

.features-info .list-icon {
    background-color: transparent;
    border: 1px solid white;
    color: white;
}

.features-info .play-icon{
    background-color: #f40612;
    border: 1px solid #f40612;
    color: white;
    &:hover{
        background-color: #ff232e;
    }
}


.features-info .list-icon:hover {
    background-color: rgba(255, 255, 255, 0.4);
}
.features-info div h1 {
    font-family: 'Roboto', sans-serif;
    font-size: 6rem;
    font-weight: bold;
    letter-spacing: .5px;
    margin-bottom: 1rem;
}

.features-info div .overview {
    font-size: 1.7rem;
    word-spacing: .1rem;
    margin-bottom: 2.5rem;
    margin-top: 2.5rem;
    line-height: 2rem;

}

.features-info div span,a {
    font-size: 1.7rem;
}
.like{
    background-color: transparent;
    color: white;
    border: 1px solid white;
    border-radius: 50%;
    padding: .5rem .6rem;
    font-size: 1.6rem;
    margin: 0 .5rem;
    cursor: pointer;
}

/* movie info div styling  */
.movie-info{
    display: flex;
    align-items: center;
    margin-bottom: 1rem;

    .language{
        background-color: rgba(101, 101, 101, 0.53);
        display: inline-block;
        color: white;
        padding: .2rem .4rem;
        margin-left: 2rem;
        letter-spacing: .1rem;
        border: .2px solid white;
    }
    .ratings{
        font-size:1.8rem;
        letter-spacing: .1rem;
        margin: 0 .2rem;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        .fas{
            margin: 0 .2rem;
            font-size: 1.7rem;
        }
}
    .date{
        font-size: 1.8rem;
        letter-spacing: .1rem;
        margin-left: 1.5rem;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}}

.features-info .genres p{
    font-size: 1.5rem;
    color: #fff;
}
.genres{
    margin-top: 3rem;
}
.logo{
    width: 15rem;
    margin: 2rem 1rem;
    img{
        width: 100%;
    }
}
.cross-icon{
    width: 5rem;
    position: absolute;
    top: 3%;
    right: 2%;
    cursor: pointer;
    padding:.3rem;
    img{
        width: 100%;
        filter: invert(1);
        rotate: 45deg;
    }
}
.trailer-box{
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50% ,-50%);
}
.notFound-msg{
    color: yellow;
    font-size: 1.6rem;
    margin-top: 2rem;
}
`;

export default Features