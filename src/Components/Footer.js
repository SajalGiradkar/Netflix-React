import React from 'react'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-box">
                <h3>Questions? Call <a href="#">000-800-040-1843</a></h3>
                <ul className="footer-links">
                    <div>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Help Centre</a></li>
                        <li><a href="#">Account</a></li>
                        <li><a href="#">Media Centre</a></li>
                    </div>
                    <div>
                        <li><a href="#">Investor Relations</a></li>
                        <li><a href="#">Jobs</a></li>
                        <li><a href="#">Ways to Watch</a></li>
                        <li><a href="#">Terms of Use</a></li>
                    </div>
                    <div>
                        <li><a href="#">Privacy</a></li>
                        <li><a href="#">Cookie Preferences</a></li>
                        <li><a href="#">Corporate Information</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </div>
                    <div>
                        <li><a href="#">Speed Test</a></li>
                        <li><a href="#">Legal Notices</a></li>
                        <li><a href="#">Only on Netflix</a></li>
                    </div>
                </ul>

                <div className="select-elm select-elm2">
                    <select className=" footer-select select-2">
                        <option value="English">English</option>
                        <option value="Hindi">हिन्दी</option>
                    </select>
                </div>
                <div className="India">
                    <p>Netflix India</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer