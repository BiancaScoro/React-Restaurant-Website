import React from 'react'
import Restaurant from '../assets/restaurant.jpg'
import '../styles/contact.css'

function Contact() {
    return(
        <div className="contact" >
            <div className="leftSide" style={{ backgroundImage: `url(${Restaurant})` }}></div>
            <div className="rightSide">
                <h1>Contact Us</h1>

                <form id="contact-form" method="POST">
                    <label htmlFor="name">Full Name</label>
                    <input name="name" placeholder="Enter full name..." type="text"/>
                    <label htmlFor="email">Email</label>
                    <input name="email" placeholder="Enter email address..." type="email"/>
                    <label htmlFor="message">Message</label>
                    <textarea rows="6" placeholder="Enter message..." name="message" required></textarea>
                    <button type="submit"> Send Message</button>
                </form>
            </div>
        </div>
    )
}

export default Contact