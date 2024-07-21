import NavBar from "../NavBar"
import Footer from "../Footer"
import "./index.css"

const Soups = () => {
    return(
        <div className="soup-container-main">
            <NavBar />
            <h1 className="soup-heading">Soups</h1>
            <ul className="soup-container-list">
                <li className="soup-item">
                    <img className="soup-img" src="https://i.pinimg.com/236x/fc/2d/c9/fc2dc9d937bb680d3b183a683fe3a2cf.jpg" alt="tomato soup" />
                    <h2 className="soup-name">Tomato Soup</h2>
                    <p className="soup-price">RS.<span>100</span></p>
                </li>

                <li className="soup-item">
                    <img className="soup-img" src="https://i.pinimg.com/236x/7f/45/83/7f4583b10fae89c72f5b5c5f73b72b3a.jpg" alt="veg soup" />
                    <h2 className="soup-name">Veg Soup</h2>
                    <p className="soup-price">RS.<span>150</span></p>
                </li>

                <li className="soup-item">
                    <img className="soup-img" src="https://i.pinimg.com/236x/90/b3/45/90b3451b207bb8f084c996703a407797.jpg" alt="corn soup" />
                    <h2 className="soup-name">Chicken Corn Soup</h2>
                    <p className="soup-price">RS.<span>450</span></p>
                </li>

                <li className="soup-item">
                    <img className="soup-img" src="https://i.pinimg.com/236x/a4/12/12/a412128a531c1b0cec3872a8e01e04d9.jpg" alt="carrot soup" />
                    <h2 className="soup-name">Carrot Soup</h2>
                    <p className="soup-price">RS.<span>200</span></p>
                </li>

                <li className="soup-item">
                    <img className="soup-img" src="https://i.pinimg.com/236x/fc/3d/d8/fc3dd8e101ee74115f0377a58e88ff6b.jpg" alt="mashroom soup" />
                    <h2 className="soup-name">MashRoom Soup</h2>
                    <p className="soup-price">RS.<span>150</span></p>
                </li>

                <li className="soup-item">
                    <img className="soup-img" src="https://i.pinimg.com/236x/88/42/1d/88421dfef2f0f8ee3e3d741ef00877b0.jpg" alt="beef soup" />
                    <h2 className="soup-name">Beef Barley Soup</h2>
                    <p className="soup-price">RS.<span>300</span></p>
                </li>

            </ul>
            <Footer />
        </div>
    )
}

export default Soups