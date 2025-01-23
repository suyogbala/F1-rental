import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import FeaturesTitle from "../FeaturesTitle/FeaturesTitle"

const Home = () => {
    return (
        <div className="home">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <h1>Find Your Perfect Home</h1>
                    <p>
                        Simplify your housing search with F1 Rental. Whether you're an international student or a first-time renter, we've got you covered.
                    </p>
                    <Link to="/student">
                        <button className="cta-button">Explore Listings</button>
                    </Link>
                </div>
                <div className="hero-image">
                    <img
                        src="https://www.cubesmart.com/blog/wp-content/uploads/washington-dc-1606276_1920-1-1-1024x633.jpg"
                        alt="Beautiful apartment"
                    />
                </div>
            </section>

            {/* About Section */}
            <section className="about">
                <div className="about-content">
                    <h2>About Us</h2>
                    <p>
                        At F1 Rental, we make it easy for students to find housing that fits
                        their needs without worrying about credit history or SSN. Let us
                        guide you to your perfect home.
                    </p>
                    <Link to="/about">
                        <button className="learn-more-button">Learn More</button>
                    </Link>
                </div>
            </section>

            {/* Features Section */}
            <section className="FeaturesSection">
                <h2>Why Choose Us?</h2>
                <div className="FeaturesGrid">
                    <FeaturesTitle
                        image="https://cdn.wallethub.com/images/best-credit-cards/logo-1582322056_1654v.png"
                        title="No SSN Required"
                        subtitle="Secure your apartment without the hassle of SSN or credit checks."
                        buttonTitle="Learn More"
                        buttonLink="#"
                    />
                    <FeaturesTitle
                        image="https://thumbs.dreamstime.com/b/verified-stamp-round-isolated-transparent-background-347664485.jpg"
                        title="Verified Listings"
                        subtitle="Browse apartments vetted for safety and quality."
                        buttonTitle="View Listings"
                        buttonLink="/Student"
                    />
                    <FeaturesTitle
                        image="https://media.istockphoto.com/id/1497787762/photo/receptionist-assists-client-at-spa.jpg?s=612x612&w=0&k=20&c=8Q4L-IpWTRjsU0DZ-Ekibom2rC93Y3oh4JFm8HUCgHU="
                        title="Personalized Support"
                        subtitle="We assist you every step of the way in your housing journey."
                        buttonTitle="Get Help"
                        buttonLink="#"
                    />
                </div>
            </section>


            {/* Call to Action */}
            <section className="cta">
                <h2>Find Your Dream Apartment Today</h2>
                <p>Get started with a few clicks and move into your perfect space hassle-free.</p>
                <Link to="/student"> <button className="cta-button">Get Started</button> </Link>
            </section>
        </div>
    );
};

export default Home;
