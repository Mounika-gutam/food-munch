import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import "./index.css"

const Footer = () => {
    return (
        <div className="footer-bg-container">
            <img src="https://i.pinimg.com/564x/0a/cf/48/0acf483ad17088f7d92536604f5296a5.jpg" alt="footer" className="footer-image" />
            <p className="footer-name">food munch</p>
            <div>
                <FaTwitter className="icon" />
                <FaInstagramSquare className="icon" />
                <FaFacebookSquare className="icon" />
            </div>
            <p className="website">foodmunch@orderfood.com</p>
        </div>
    )
}

export default Footer
