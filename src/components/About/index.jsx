import NavBar from "../NavBar"
import Footer from "../Footer"
import "./index.css"

const About = () => {
    return(
        <div className="about-container">
            <NavBar />
            <h1 className="about-heading">About Us</h1>
            <div className="poster-container">
                <div className="mini-container">
                    <p className="mini-heading">Healthy & Tasty Food</p>
                    <h1 className="heading">Delicious food at low cost</h1>
                    <button className="button" type="button">explore more</button>
                </div>
                <img className="poster-img" src="https://i.pinimg.com/236x/ff/b3/28/ffb328a663f7f8fe979206826f3b3348.jpg" alt="img" />
            </div>

            <div className="poster-container">
                <div className="mini-container">
                    <p className="mini-heading">Welcome To FoodZone</p>
                    <h1 className="heading">Best food in town awaits you</h1>
                    <button className="button" type="button">explore more</button>
                </div>
                <img className="poster-img" src="https://i.pinimg.com/236x/ce/68/2a/ce682a97579081bc5341b10b44ba5709.jpg" alt="img" />
            </div>

            <div className="poster-container">
                <div className="mini-container">
                    <p className="mini-heading">Services</p>
                    <h1 className="heading">We serve best quality food</h1>
                    <button className="button" type="button">explore more</button>
                </div>
                <img className="poster-img" src="https://i.pinimg.com/236x/12/ac/60/12ac606896dfc98f4806b7acababed67.jpg" alt="img" />
            </div>

            <Footer />
        </div>
    )
}

export default About