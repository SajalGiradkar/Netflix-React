import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// Carousel 
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// const genres = `${base_url}/genre/movie/list?api_key=${Api_key}&language=en-US`;
// skeleton loading 
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


const imgUrl = 'https://image.tmdb.org/t/p/original';

// large row component 
const Row_large = ({ rowTitle, arr = [] }) => {
  const [isSkeleton, setIsSkeleton] = useState(true);
  const navigate = useNavigate();
  const cardFeatures = (cardId, cardInfo, cardImg, cardTitle, cardVote, releaseDate, language, genres) => {
    navigate(`/features?id=${cardId}/${cardTitle.replaceAll(' ', '')}`, {
      state: {
        cardId: cardId,
        cardInfo: cardInfo,
        cardImg: `${imgUrl}/${cardImg}`,
        cardTitle: cardTitle,
        vote: cardVote,
        date: releaseDate,
        lang: language,
        genres: genres
      }
    });
  };
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 12,
      slidesToSlide: 4 // optional, default to 1.
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 9,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 4,
      slidesToSlide: 2 // optional, default to 1.
    }
  };
  useEffect(() => {
    const skeleton = setTimeout(() => {
      setIsSkeleton(false);
    }, 1500);

    return () => {
      clearTimeout(skeleton);
    }
  }, [])

  return (
    <>
      <div className="row row-large">
        <h2>{isSkeleton ? <Skeleton width={300} /> : rowTitle}</h2>

        <div className='card-slider'>
          <Carousel
            responsive={responsive}
            swipeable={true}
            keyBoardControl={true}
            draggable={false}
            customTransition="all .5s"
          >

            {
              arr.map((items) => {
                return (

                  <div className="card-large" key={items.id}
                    onClick={() => cardFeatures(items.id, items.overview, items.backdrop_path, items.title || items.name, items.vote_average, items.release_date, items.original_language, items.genre_ids)}>
                    {
                      isSkeleton ?
                        <Skeleton height='24rem' /> :
                        <img src={`${imgUrl}/${items.poster_path}`} alt="Image" />
                    }
                  </div>
                )
              })
            }


          </Carousel>
        </div>
      </div>
    </>
  )
};
export default Row_large