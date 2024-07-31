import React from "react";
import './Contact.css'

function Contact(){
    return(
        <>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
           <div className="ContactSection">
            <div className="Address">
                <h3>Contact Us</h3>
                <h1>GET IN TOUCH WITH US</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius tempor incididunt ut labore et dolore magna aliqua. Ut enim adiqua minim veniam quis nostrud exercitation ullamco</p>

                <div className="addr">
                <i class="fa-solid fa-house"></i>
                    <div>
                        <h3>Our Location</h3>
                        <p>99 S.t Jomblo Park Pekanbaru 28292. Indonesia</p>
                    </div>
                </div>

                <div className="addr">
                <i class="fa-solid fa-phone"></i>
                    <div>
                        <h3>Phone Number</h3>
                        <p>(+62)81 414 257 9980</p>
                    </div>
                </div>

                <div className="addr">
                <i class="fa-solid fa-envelope"></i>
                    <div>
                        <h3>Email Address</h3>
                        <p>info@yourdomain.com</p>
                    </div>
                </div>

            </div>

            <div className="form">
               <input type="text" placeholder="Your Name"/>
               <input type="text" placeholder="Email" />
               <input type="text" placeholder="Phone Number"/>
               <textarea name="" id="" placeholder="Message"></textarea>
               <input type="text" />
            </div>
            
            </div>   
    
        </>
    )
}
export default Contact;