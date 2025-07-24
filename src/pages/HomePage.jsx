import React from 'react'
import { Link } from 'react-router-dom';
function HomePage() {
    // const form = document.querySelector('form')
    const input = document.querySelector("#search-input");
    const searchInputRef = React.useRef(null)
    const [searchResults, setSearchResults] = React.useState(null)
    const section_results = document.querySelector(".section-results");
    let first_user_search = true;

    // form.addEventListener('submit', getResults)
    /* ----------------------- Search functionality -----------------------  */
    function handleSubmit(e) {
        e.preventDefault();

        const promise = window.fetch(
            "https://api.tvmaze.com/search/shows?q=" + e.target.value,
            { method: "Get" });


        promise.then((data) => {
            const json = data.json();
            json.then(function (data) {
                let html_injection = [];
                if (data.length !== 0) {
                    for (var i = 0; i < data.length; i++) {
                        const show = data[i].show
                        const image_string = show.image !== null ? show.image.medium : "images/error.png"
                        let genre_string = show.genres.join(", ");

                        html_injection.push(
                            <Link to={`http://localhost:5173/show/${show.id}`} className="card">
                                <div>
                                    <img className="card-poster" src={image_string} />
                                </div>
                                <div className="card-info">
                                    <h3 className="card-title">{show.name}</h3>
                                    <div className="card-genre-tags">{genre_string}</div>
                                </div>
                            </Link>)

                    }
                    // if (first_user_search === true) {
                    //     html_injection = <div className='container-cards'>{...html_injection}</div>;
                    //     //Have to wait for animation (to finish) before injecting html
                    //     // searchAnimation(html_injection);
                    //     first_user_search = false;
                    // } else {
                    html_injection = <div className='container-cards'>{...html_injection}</div>;
                    setSearchResults(html_injection)
                    // section_results.innerHTML = html_injection;

                    // }
                }
                else {
                    html_injection = <h2 className='search-error-text'>No results, please try again </h2>
                    section_results.innerHTML = html_injection;
                }
            });
        });
    };
    return (
        <>
            <div className="background-image"></div>
            <div className="index-page-body">
                <div className="section-search">
                    <div className="container-search">
                        <div className="headings-search">
                            <h1 id="heading-search">Search Your <span className="heading-gradient"> Favourite TV Shows </span>
                                In Seconds
                            </h1>
                            <p id="subheading-search">Give it a try below! You'll love it :)</p>
                        </div>
                        <form className="search-bar" onSubmit={handleSubmit}>
                            <div className="search-icon-div"> <img className="search-icon" src="images/search.svg" alt="" /></div>
                            <input id="search-input" />
                            <button id="search-button" type="submit">Search</button>
                        </form>
                        <div className="search-bar-placeholder"></div>
                    </div>
                </div>
                {/* <!-- HTML INJECTION HERE --> */}
                <div className="section-results">
                    {searchResults}
                </div>
            </div>


        </>
    )
}

export default HomePage
