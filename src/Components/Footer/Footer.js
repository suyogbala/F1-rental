import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Logo and About Section */}
                <div className="footer-section">
                    <h2>F1 Rental</h2>
                    <p>Your trusted platform for finding the perfect home near your university.</p>
                </div>

                {/* Quick Links Section */}
                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/student">International Students</Link></li>
                        <li><Link to="/propertyowner">Property Owners</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>

                {/* Contact Section */}
                <div className="footer-section">
                    <h3>Contact Us</h3>
                    <ul>
                        <li>Email: sachin1bala1@wmich.com</li>
                        <li>Facebook: Sachin Bala </li>
                        <li>Phone/whatsapp: +1 2697799757</li>
                        <li>Address: 10346 blue bluff road, Austin, TX</li>
                    </ul>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="footer-bottom">
                <p>© 2025 F1 Rental. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
