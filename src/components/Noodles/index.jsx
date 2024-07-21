import NavBar from "../NavBar"
import Footer from "../Footer"
import "./index.css"

const Noodles = () => {
    return(
        <div className="soup-container-main">
            <NavBar />
            <h1 className="soup-heading">Noodles</h1>
            <ul className="soup-container-list">
                <li className="soup-item">
                    <img className="soup-img" src="https://i.pinimg.com/236x/2e/ac/a3/2eaca366537c4cbb3c573ab63cfd7e05.jpg" alt="soy sauce" />
                    <h2 className="soup-name">Soy Sauce Noodles</h2>
                    <p className="soup-price">RS.<span>250</span></p>
                </li>

                <li className="soup-item">
                    <img className="soup-img" src="https://i.pinimg.com/236x/a0/7b/e5/a07be5fcd6b3499d2b62175b92db9340.jpg" alt="chow mein" />
                    <h2 className="soup-name">Chow Mein</h2>
                    <p className="soup-price">RS.<span>280</span></p>
                </li>

                <li className="soup-item">
                    <img className="soup-img" src="https://i.pinimg.com/236x/54/05/ff/5405ffa90d3c66eefd0a732cf13728f2.jpg" alt="noodle soup" />
                    <h2 className="soup-name">Noodle Soup</h2>
                    <p className="soup-price">RS.<span>170</span></p>
                </li>

                <li className="soup-item">
                    <img className="soup-img" src="https://i.pinimg.com/236x/63/99/53/639953f2dd33c3e9bc64be5188fbd558.jpg" alt="chicken noodles" />
                    <h2 className="soup-name">Chicken Noodles</h2>
                    <p className="soup-price">RS.<span>350</span></p>
                </li>

                <li className="soup-item">
                    <img className="soup-img" src="https://i.pinimg.com/236x/7b/69/ea/7b69ea839992e50e1d570d2c56bf70ab.jpg" alt="garlic noodles" />
                    <h2 className="soup-name">Garlic Noodles</h2>
                    <p className="soup-price">RS.<span>140</span></p>
                </li>
            </ul>
            <Footer />
        </div>
    )
}

export default Noodles