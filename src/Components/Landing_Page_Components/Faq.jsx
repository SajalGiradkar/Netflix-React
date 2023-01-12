import React, { useState } from 'react'
import styled from 'styled-components';

const Faq = () => {
    const [btnState1, setBtnState1] = useState(false);
    const [btnState2, setBtnState2] = useState(false);
    const [btnState3, setBtnState3] = useState(false);
    const [btnState4, setBtnState4] = useState(false);
    const [btnState5, setBtnState5] = useState(false);
    const [btnState6, setBtnState6] = useState(false);

    const FaqFunc1 = () => {
        setBtnState1(btnState => !btnState);
    };
    const FaqFunc2 = () => {
        setBtnState2(btnState2 => !btnState2);
    };
    const FaqFunc3 = () => {
        setBtnState3(btnState3 => !btnState3);
    };
    const FaqFunc4 = () => {
        setBtnState4(btnState4 => !btnState4);
    };
    const FaqFunc5 = () => {
        setBtnState5(btnState5 => !btnState5);
    };
    const FaqFunc6 = () => {
        setBtnState6(btnState6 => !btnState6);
    };
    let isVisible1 = btnState1 ? 'isVisible' : 'isNotVisible';
    let isVisible2 = btnState2 ? 'isVisible' : 'isNotVisible';
    let isVisible3 = btnState3 ? 'isVisible' : 'isNotVisible';
    let isVisible4 = btnState4 ? 'isVisible' : 'isNotVisible';
    let isVisible5 = btnState5 ? 'isVisible' : 'isNotVisible';
    let isVisible6 = btnState6 ? 'isVisible' : 'isNotVisible';




    return (
        <Wrapper
            rotate1={btnState1}
            rotate2={btnState2}
            rotate3={btnState3}
            rotate4={btnState4}
            rotate5={btnState5}
            rotate6={btnState6}
        >
            <div className="faq-section">
                <h1>Frequently Asked Questions</h1>
                <div className="faqs-box">
                    <div className="faq faq-1">
                        <button type="button" id="que1" onClick={FaqFunc1}>What is Netflix?
                            <img src={"Images/plus.png"}
                                id="plus-img1" /></button>
                        <p className={`ans1 ${isVisible1}`}>Netflix is a streaming service that offers a wide variety of award-winning TV
                            shows, movies,
                            anime, documentaries and more - on thousands of internet-connected devices. <br /> <br />
                            You can watch as much as you want, whenever you want, without a single ad - all for one low
                            monthly price. There's always something new to discover, and new TV shows and movies are
                            added
                            every week!</p>
                    </div>
                    <div className="faq faq2">
                        <button type="button" id="que2" onClick={FaqFunc2}>How much does Netflix cost?
                            <img
                                src={"Images/plus.png"} id="plus-img2" /> </button>
                        <p className={`ans2 ${isVisible2}`}> Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming
                            device, all for one
                            fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.
                        </p>
                    </div>
                    <div className="faq faq3">
                        <button type="button" id="que3" onClick={FaqFunc3}>Where can I watch?
                            <img src={"Images/plus.png"} id="plus-img3" /></button>
                        <p className={`ans3 ${isVisible3}`}> Watch anywhere, anytime. Sign in with your Netflix account to watch instantly
                            on the web at
                            netflix.com from your personal computer or on any internet-connected device that offers the
                            Netflix app, including smart TVs, smartphones, tablets, streaming media players and game
                            consoles. <br /> <br />
                            You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use
                            downloads to watch while you're on the go and without an internet connection. Take Netflix
                            with
                            you anywhere.</p>

                    </div>
                    <div className="faq faq4">
                        <button type="button" id="que4" onClick={FaqFunc4}>How do I cancel?
                            <img src={"Images/plus.png"} id="plus-img4" /></button>

                        <p className={`ans4 ${isVisible4}`}> Netflix is flexible. There are no annoying contracts and no commitments. You
                            can easily
                            cancel your account online in two clicks. There are no cancellation fees - start or stop your
                            account anytime.</p>

                    </div>
                    <div className="faq faq5">
                        <button type="button" id="que5" onClick={FaqFunc5}>What can I watch on Netflix?
                            <img src={"Images/plus.png"} id="plus-img5" /></button>

                        <p className={`ans5 ${isVisible5}`}> Netflix has an extensive library of feature films, documentaries, TV shows,
                            anime,
                            award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</p>

                    </div>
                    <div className="faq faq6">
                        <button type="button" id="que6" onClick={FaqFunc6}>Is Netflix good for Kids?
                            <img src={"Images/plus.png"} id="plus-img6" /></button>
                        <p className={`ans6 ${isVisible6}`}> The Netflix Kids experience is included in your membership to give parents
                            control while
                            kids enjoy family-friendly TV shows and films in their own space. <br /> <br />
                            Kids profiles come with PIN-protected parental controls that let you restrict the maturity
                            rating of content kids can watch and block specific titles you don't want kids to see.</p>
                    </div>

                    <div className="faq-last-div">
                        <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                        <form className="input">
                            <input type="email" placeholder=" Email address" required />
                            <button type="submit"><span></span>Get Started <i
                                className="fas fa-chevron-right"></i></button>
                        </form>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    .faq button #plus-img1{
      transform: ${props => props.rotate1 ? 'rotate(45deg)' : null}
    }
    .faq button #plus-img2{
      transform: ${props => props.rotate2 ? 'rotate(45deg)' : null}
    }
    .faq button #plus-img3{
      transform: ${props => props.rotate3 ? 'rotate(45deg)' : null}
    }
    .faq button #plus-img4{
      transform: ${props => props.rotate4 ? 'rotate(45deg)' : null}
    }
    .faq button #plus-img5{
      transform: ${props => props.rotate5 ? 'rotate(45deg)' : null}
    }
    .faq button #plus-img6{
      transform: ${props => props.rotate6 ? 'rotate(45deg)' : null}
    }
`;

export default Faq