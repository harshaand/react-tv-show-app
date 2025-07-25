import React from 'react'
import { useLoaderData } from 'react-router-dom';

function ShowPage() {
    const show = useLoaderData();
    console.log(show)
    return (
        <>

            <body id="show-id" className="show-page-body">


                <div className="section-show-overview">
                    <div className="section-background-div" style={{ backgroundImage: 'url("/src/assets/images/The_Bear_2022_FX.png")' }}>
                        <div className="container-show-overview">

                            <div className="show-name-poster-fav">
                                <a href="index.html" className="back-button">BACK</a>
                                <div className="show-poster-div">
                                    <img className="show-poster" src="/src/assets/images/The_Bear_2022_FX.png" alt="" />
                                </div>
                                <div className="show-information">
                                    <div className="show-title-fav">
                                        <h1 className="show-title">{show.name}</h1>
                                        <div className="show-fav">
                                            <button id="fav-btn" className="show-fav-btn">
                                                <svg className="star-svg" width="24" height="24" viewBox="0 0 24 24">
                                                    <path id='starrr' className="star" fill="black" stroke="red"

                                                        d="M10.2135354,0.441329894 L12.5301907,5.09668871 C12.6437709,5.3306716 12.8673229,5.49423715 13.1274534,5.53368599 L18.3127795,6.28282419 C18.5232013,6.31151358 18.713271,6.4218659 18.8407265,6.58934431 C18.9681821,6.75682272 19.0224584,6.9675444 18.9914871,7.17465538 C18.9654336,7.34490401 18.8826605,7.50177662 18.7562018,7.62057098 L15.0006864,11.2592422 C14.8108765,11.4385657 14.7257803,11.7002187 14.7744505,11.9548706 L15.679394,17.0828999 C15.7448774,17.5054355 15.4552147,17.9019154 15.0278347,17.9747311 C14.8516089,18.001936 14.6711642,17.9738576 14.5120169,17.8944663 L9.88775575,15.4776038 C9.65675721,15.3522485 9.37670064,15.3522485 9.1457021,15.4776038 L4.49429266,17.9123029 C4.1040442,18.1096521 3.62530757,17.962958 3.41740993,17.5823254 C3.33635184,17.4288523 3.30778438,17.2536748 3.33596502,17.0828999 L4.24090849,11.9548706 C4.28467865,11.7005405 4.20030563,11.441111 4.01467262,11.2592422 L0.23200891,7.62057098 C-0.0773363034,7.31150312 -0.0773363034,6.81484985 0.23200891,6.50578199 C0.358259148,6.3905834 0.515216648,6.31324177 0.684480646,6.28282419 L5.86980673,5.53368599 C6.12870837,5.49136141 6.35105151,5.32868032 6.46706943,5.09668871 L8.78372471,0.441329894 C8.87526213,0.25256864 9.04026912,0.108236628 9.24131794,0.0410719808 C9.44236677,-0.0260926667 9.66241783,-0.0103975019 9.85155801,0.0845974179 C10.0076083,0.16259069 10.1343954,0.287540724 10.2135354,0.441329894 Z"
                                                        transform="translate(2.5 3)"></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="show-description show-description-tablet">Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do
                                        eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                                        in
                                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                        occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                                        laborum.
                                    </div>
                                </div>
                                <div className="show-description show-description-mobile">Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do
                                    eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </div>


                                {/* <!-- <div className="show-fav-div"><img className="show-fav" src="images/starpng.png" alt=""/></div> --> */}
                            </div>
                            <div className="show-description show-description-desktop">Lorem ipsum dolor sit amet, consectetur
                                adipiscing
                                elit,
                                sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </div>
                        </div>
                    </div>
                </div>



                <div className="section-show-information">

                    <div className="container-show-info">
                        <h2 className="heading-show-info">Cast</h2>
                        <div id='cast-container' className="container-cards-show-info">
                            <button id="cast-left-btn" className="slider-btn left-btn">&#8249;</button>
                            {/*  HTML INJECTION HERE  */}
                            <div id="cast-slider" className="slider"></div>
                            <button id="cast-right-btn" className="slider-btn right-btn">&#8250;</button>
                        </div>
                    </div>

                    <div className="container-show-info">
                        <h2 className="heading-show-info">Seasons</h2>
                        <div id='seasons-container' className="container-cards-show-info">
                            <button id="seasons-left-btn" className="slider-btn left-btn">&#8249;</button>
                            {/*  HTML INJECTION HERE  */}
                            <div id="seasons-slider" className="slider"></div>
                            <button id="seasons-right-btn" className="slider-btn right-btn">&#8250;</button>
                        </div>

                    </div>
                </div>

            </body>





            <svg version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <symbol id="error-svg" viewBox="12 0 8 32">

                    <g>
                        <g>
                            <path d=" M21.5,14.75c0.41,0,0.75,0.34,0.75,0.75s-0.34,0.75-0.75,0.75s-0.75-0.34-0.75-0.75
        S21.09,14.75,21.5,14.75z" fill="#263238" />
                            <path
                                d="M10.5,14.75c0.41,0,0.75,0.34,0.75,0.75s-0.34,0.75-0.75,0.75s-0.75-0.34-0.75-0.75    S10.09,14.75,10.5,14.75z"
                                fill="#263238" />
                        </g>

                        <g>
                            <g>
                                <polyline fill="none" points="     21.5,1.5 4.5,1.5 4.5,30.5 27.5,30.5 27.5,7.5    "
                                    stroke="#455A64" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" />
                                <polyline fill="none" points="     21.5,1.5 27.479,7.5 21.5,7.5 21.5,4    " stroke="#455A64"
                                    stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" />
                                <path d="     M14.5,18.5c0-0.83,0.67-1.5,1.5-1.5s1.5,0.67,1.5,1.5" fill="none" stroke="#455A64"
                                    stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" />
                                <g>
                                    <path
                                        d="      M20.75,15.5c0,0.41,0.34,0.75,0.75,0.75s0.75-0.34,0.75-0.75s-0.34-0.75-0.75-0.75S20.75,15.09,20.75,15.5z"
                                        fill="none" stroke="#455A64" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-miterlimit="10" />
                                    <path
                                        d="      M11.25,15.5c0,0.41-0.34,0.75-0.75,0.75s-0.75-0.34-0.75-0.75s0.34-0.75,0.75-0.75S11.25,15.09,11.25,15.5z"
                                        fill="none" stroke="#455A64" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-miterlimit="10" />
                                </g>
                            </g>
                            <g>
                                <polyline fill="none" points="     21.5,1.5 4.5,1.5 4.5,30.5 27.5,30.5 27.5,7.5    "
                                    stroke="#263238" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" />
                                <polyline fill="none" points="     21.5,1.5 27.479,7.5 21.5,7.5 21.5,4    " stroke="#263238"
                                    stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" />
                                <path d="     M14.5,18.5c0-0.83,0.67-1.5,1.5-1.5s1.5,0.67,1.5,1.5" fill="none" stroke="#263238"
                                    stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" />
                                <g>
                                    <path
                                        d="      M20.75,15.5c0,0.41,0.34,0.75,0.75,0.75s0.75-0.34,0.75-0.75s-0.34-0.75-0.75-0.75S20.75,15.09,20.75,15.5z"
                                        fill="none" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-miterlimit="10" />
                                    <path
                                        d="      M11.25,15.5c0,0.41-0.34,0.75-0.75,0.75s-0.75-0.34-0.75-0.75s0.34-0.75,0.75-0.75S11.25,15.09,11.25,15.5z"
                                        fill="none" stroke="#263238" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-miterlimit="10" />
                                </g>
                            </g>
                        </g>
                    </g>
                </symbol>
            </svg>
        </>
    )
}

export default ShowPage
