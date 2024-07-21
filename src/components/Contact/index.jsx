import NavBar from "../NavBar"
import Footer from "../Footer"
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import "./index.css"

const Contact = () => {
    return (
        <div className="contact-container">
            <NavBar />
                <h1 className="contact-heading">Contact Us</h1>
                <img src="https://i.pinimg.com/236x/41/fa/a3/41faa3508a7b1210a03d8b6265ed7848.jpg" alt="contact" className="contact-img" />
                <div className="contact-bottom-container">
                    <div className="contact-container2">
                        <FaPhoneAlt className="icon" />
                        <p className="contact-para">98765xxxxx</p>
                    </div>

                    <div className="contact-container2">
                        <IoIosMail className="icon" />
                        <p className="contact-para">foodmunch@orderfood.com</p>
                    </div>

                    <div className="contact-container2">
                        <FaLocationDot className="icon" />
                        <p className="contact-para">123 Any Where... Any City...</p>
                    </div>
                </div>
            <Footer />
        </div>
    )
}

export default Contact