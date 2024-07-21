import NavBar from "../NavBar"
import Footer from "../Footer"
import "./index.css"

const SeaFood = () => {
    return(
        <div className="sea-container-main">
            <NavBar />
            <h1 className="sea-heading">Fish & Sea Foods</h1>
            <ul className="sea-container-list">
                <li className="sea-item">
                    <img className="sea-img" src="https://i.pinimg.com/236x/7c/39/08/7c3908ce4eb3614f80dac0d973b56ac5.jpg" alt="red snapper" />
                    <h2 className="sea-name">Red Snapper</h2>
                    <p className="sea-price">RS.<span>300</span></p>
                </li>

                <li className="sea-item">
                    <img className="sea-img" src="https://i.pinimg.com/236x/ee/c9/8f/eec98fb63940ccc154e4f58cb72c0de6.jpg" alt="fish tikka" />
                    <h2 className="sea-name">Fish Tikka</h2>
                    <p className="sea-price">RS.<span>550</span></p>
                </li>

                <li className="sea-item">
                    <img className="sea-img" src="https://i.pinimg.com/236x/81/aa/e6/81aae6f0158d696bd6a26b3f7cdb95b5.jpg" alt="tandoori fish" />
                    <h2 className="sea-name">Tandoori Fish</h2>
                    <p className="sea-price">RS.<span>400</span></p>
                </li>

                <li className="sea-item">
                    <img className="sea-img" src="https://i.pinimg.com/236x/42/1e/7e/421e7eec0f10ac9fba18aa2ea7233cac.jpg" alt="garlic shrimp" />
                    <h2 className="sea-name">Garlic Shrimp</h2>
                    <p className="sea-price">RS.<span>450</span></p>
                </li>

                <li className="sea-item">
                    <img className="sea-img" src="https://i.pinimg.com/236x/57/e2/49/57e2491968486c48c04be256193571ec.jpg" alt="prawn curry" />
                    <h2 className="sea-name">Prawn Curry</h2>
                    <p className="sea-price">RS.<span>550</span></p>
                </li>

                <li className="sea-item">
                    <img className="sea-img" src="https://i.pinimg.com/236x/ba/5c/fc/ba5cfcacb87f89371dfac2fd40e86b5c.jpg" alt="pomfret curry" />
                    <h2 className="sea-name">Pomfret Curry</h2>
                    <p className="sea-price">RS.<span>250</span></p>
                </li>


                <li className="sea-item">
                    <img className="sea-img" src="https://i.pinimg.com/236x/76/5a/16/765a16ec7218f39f959c452207cea30f.jpg" alt="fish fry" />
                    <h2 className="sea-name">Fish Fry</h2>
                    <p className="sea-price">RS.<span>300</span></p>
                </li>
            </ul>
            <Footer />
        </div>
    )
}

export default SeaFood