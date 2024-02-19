import React from "react";
import "./Home.css";

function Home() {
    return (
        <div>
            <div>
                {/* Home Section */}
                <section class="section-home" id="home">
                    <div class="logo">
                        <img class="logo" src="./images/logo.png" alt="Logo" />
                    </div>
                    <div class="left-content">
                        <h1>Hi There!</h1>
                        <p class="typewriter" style="font-size: 50px; font-weight: bold">
                            I am a Web Developer
                        </p>
                        <p style="font-size: 35px; font-weight: 100">
                            I make the complex simple.
                        </p>
                        <button class="button">Contact Me</button>
                    </div>
                    <div>
                        <nav class="nav">
                            <ul>
                                <li><a href="#home">Home</a></li>
                                <li><a href="#about">About</a></li>
                                <li><a href="#skills">Skills</a></li>
                                <li><a href="#projects">Projects</a></li>
                                <li><a href="#services">Services</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul>
                        </nav>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Home;
