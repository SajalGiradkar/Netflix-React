import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const First_page = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState(false);
    const Navigate = useNavigate();
    const handleSubmit = (event) => {
        if (!email.length == '' && email.length > 12) {
            event.preventDefault();
            Navigate('/netflix/manage-profile');
        } else {
            event.preventDefault();
            setError(true);
        }

    }
    return (

        <div className="main-section">
            <nav className="navbar">
                <div className="logo">
                    <img src={"Images/logo.PNG"} alt="Netflix-logo" />
                </div>
                <div className="right-nav">
                    <div className="select-elm">
                        <select name="language" className="select">
                            <option value="English">English</option>
                            <option value="Hindi">हिन्दी</option>
                        </select>
                    </div>
                    <div>
                        <button className="button sign-in">
                            <Link to="/sign-in">Sign In</Link>
                        </button>
                    </div>
                </div>
            </nav>
            {/* <!-- navbar ends  --> */}
            <div className="main-content">
                <div className="content-box">
                    <h1>Unlimited movies, TV shows and more.</h1>
                    <h2>Watch anywhere. Cancel anytime.</h2>
                    <p>Ready to watch? Enter your email to create or restart your membership.</p>
                </div>
                <form className="input" onSubmit={(e) => handleSubmit(e)}>
                    <input onChange={(e) => setEmail(e.target.value)} id='userEmail' type="email" placeholder=" Email address" />
                    <button type="submit"> Get Started <i className="fas fa-chevron-right"></i>
                    </button>

                </form>
                {error &&
                    <h3 className='validate-msg'>Email is Required.</h3>
                }
            </div>
        </div >
    )
}

export default First_page