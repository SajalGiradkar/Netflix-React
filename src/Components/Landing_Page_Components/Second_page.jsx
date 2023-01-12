import React from 'react'

const Second_page = () => {
    return (
        <div className=" wrapper">
            <div className="second-section">
                <div className="content-2">
                    <h1>Enjoy on your TV.</h1>
                    <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
                </div>
                <div className="image-2">
                    <img src={"Images/tv.PNG"}  />
                    <video src={"Videos/video1.m4v"} autoPlay muted loop > </video>
                </div>
            </div>

        </div>
    )
}

export default Second_page