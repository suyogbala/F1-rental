import React from "react";
import "./About.css";
import ceoImage from "../../images/founder.jpeg"

const About = () => {
    return (
        <div className="about-page">
            {/* Hero Section */}
            <section className="about-hero">
                <h1>Welcome to F1 Rental</h1>
                <p>
                    Simplifying housing for international students and first-time renters.
                    A platform designed to make your transition smooth and hassle-free.
                </p>
            </section>

            {/* Grid Section: What, Do, Story */}
            <section className="about-grid">
                {/* What is F1 Rental */}
                <div className="about-card">
                    <h2>What is F1 Rental?</h2>
                    <p>
                        F1 Rental is a platform dedicated to helping international students
                        find suitable housing near their universities. We address challenges
                        like SSN and credit history requirements, providing a seamless experience.
                    </p>
                </div>

                {/* What Do We Do */}
                <div className="about-card">
                    <h2>What Do We Do?</h2>
                    <p>
                        We connect students with verified housing options tailored to their
                        needs. From finding listings to moving in, our platform ensures a
                        smooth housing journey.
                    </p>
                </div>

                {/* Story Behind F1 Rental */}
                <div className="about-card">
                    <h2>Our Mission</h2>
                    <p>
                        Our mission is to ensure every international student can find a safe
                        and suitable home without unnecessary barriers. We aim to make
                        relocating to a new country as stress-free and welcoming as possible.
                    </p>
                </div>
            </section>

            {/* What We Offer */}
            <section className="about-offer">
                <h2>What We Offer</h2>
                <div className="offer-cards">
                    <div className="offer-card">
                        <h3>Verified Listings</h3>
                        <p>Access apartments that are vetted for safety and quality.</p>
                    </div>
                    <div className="offer-card">
                        <h3>No SSN or Credit Required</h3>
                        <p>Secure your home without worrying about SSN or credit history.</p>
                    </div>
                    <div className="offer-card">
                        <h3>Personalized Support</h3>
                        <p>We guide you through every step of the housing process.</p>
                    </div>
                    <div className="offer-card">
                        <h3>Transparent Pricing</h3>
                        <p>See clear, upfront pricing for all housing options.</p>
                    </div>
                </div>
            </section>

            <section className="about-ceo">
                <div className="ceo-container">
                    <div className="ceo-image">
                        <img
                            src={ceoImage} // Update path based on your folder structure
                            alt="CEO of F1 Rental"
                        />
                    </div>
                    <div className="ceo-text">
                        <h2>Message from Our CEO</h2>
                        <p>
                            "When I first came to the U.S. as an international student, finding
                            housing was one of the most challenging experiences. Without an SSN
                            or credit history, it felt nearly impossible to secure a safe and
                            comfortable place to live. I realized that many students face the
                            same difficulties, and this inspired me to create F1 Rental."
                        </p>
                        <p>
                            "Our mission is to ensure that every international student can find
                            a home without unnecessary barriers. F1 Rental was built to simplify
                            the housing process, allowing students to focus on their education
                            and dreams."
                        </p>
                        <p>- CEO & Founder, Sachin Bala</p>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default About;
