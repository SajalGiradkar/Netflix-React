import React from 'react'

const Third_page = () => {
    return (
        <div className=" wrapper">
            <div className="third-section">
                <div className="image-3">
                    <img src={"Images/download.jpg"} alt="" />
                    <div className="download-div">
                        <div className="boxshot">
                            <img src={"Images/boxshot.png"} />
                        </div>
                        <div className="downlaoding">
                            <h3>Stranger Things</h3>
                            <a href="#">Downloading...</a>
                        </div>
                        <div className="download-icon">
                            <img src={"Videos/download-icon.gif"} />
                        </div>
                    </div>
                </div>
                <div className="content-3">
                    <h1>Download your shows <br /> to watch offline.</h1>
                    <p>Save your favourites easily and always have something to watch.</p>
                </div>
            </div>
        </div>
    )
}

export default Third_page