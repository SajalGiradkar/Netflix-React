import React from 'react'

const Fourth_page = () => {
    return (
        <div className=" wrapper">
            <div className="fourth-section">
                <div className=" content-4">
                    <h1>Watch Everywhere</h1>
                    <p>Stream unlimited movies and TV shows on <br /> your phone, tablet, laptop, and TV.</p>
                </div>
                <div className=" image-4">
                    <img src={"Images/computer.png"} />
                    <video src={"Videos/video2.m4v"} autoPlay muted loop></video>
                </div>
            </div>
        </div>
    )
}

export default Fourth_page