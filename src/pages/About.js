import React from "react";
import Oven from "../assets/oven.jpg";
import '../styles/About.css';

function About() {
    return (
        <div className="about">
            <div className="aboutTop"
            style={{ backgroundImage: `url(${Oven})` }}></div>
            <div className="aboutBottom">
                <h1>About Us</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et dapibus lacus. Nunc facilisis dolor eu ipsum aliquam rutrum sed quis sapien. Sed vel est erat. Pellentesque id porta quam.  Nunc vestibulum ornare tellus quis dignissim. Curabitur nec nisi placerat, vulputate leo quis, ullamcorper neque. Nam id varius eros. Aliquam tristique auctor risus ut euismod.
                Morbi ac orci vitae felis dapibus sagittis ut ut nunc. Donec faucibus ex libero, sagittis placerat eros convallis id. In a laoreet leo, in fringilla orci. Fusce aliquet risus vel est placerat suscipit. Cras vitae lectus in quam ornare molestie eu non lectus. Morbi imperdiet bibendum nisl. Donec elementum venenatis commodo.</p>
            </div>
        </div>
    )
}

export default About;