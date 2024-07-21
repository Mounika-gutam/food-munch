import NavBar from "../NavBar"
import Footer from "../Footer"
import "./index.css"

const Desserts = () => {
    return(
        <div className="dessert-container-main">
            <NavBar />
            <h1 className="dessert-heading">Desserts</h1>
            <ul className="dessert-container-list">
                <li className="dessert-item">
                    <img className="dessert-img" src="https://i.pinimg.com/236x/ab/87/0e/ab870e5f0b00d08f91fc4ed74e03adcc.jpg" alt="strawberry cheesecake" />
                    <h2 className="dessert-name">Strawberry Cheesecake</h2>
                    <p className="dessert-price">RS.<span>350</span></p>
                </li>

                <li className="dessert-item">
                    <img className="dessert-img" src="https://i.pinimg.com/236x/04/3e/f8/043ef80ed6c4c1ad98be030f1c5afead.jpg" alt="gulab jamun" />
                    <h2 className="dessert-name">Gulab Jamun</h2>
                    <p className="dessert-price">RS.<span>150</span></p>
                </li>

                <li className="dessert-item">
                    <img className="dessert-img" src="https://i.pinimg.com/236x/18/c2/e2/18c2e221e3ae668e421bb56ba3397f31.jpg" alt="eggless brownies" />
                    <h2 className="dessert-name">Eggless Brownies</h2>
                    <p className="dessert-price">RS.<span>230</span></p>
                </li>

                <li className="dessert-item">
                    <img className="dessert-img" src="https://i.pinimg.com/236x/a2/6b/7a/a26b7a863469cfaaa489e60503d80f10.jpg" alt="fruit custard" />
                    <h2 className="dessert-name">Fruit Custard</h2>
                    <p className="dessert-price">RS.<span>400</span></p>
                </li>
            </ul>
            <Footer />
        </div>
    )
}

export default Desserts