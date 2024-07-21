import NavBar from "../NavBar"
import Footer from "../Footer"
import "./index.css"

const Salads = () => {
    return(
        <div className="salad-container-main">
            <NavBar />
            <h1 className="salad-heading">Salads</h1>
            <ul className="salad-container-list">
                <li className="salad-item">
                    <img className="salad-img" src="https://i.pinimg.com/236x/23/0b/10/230b102fb4c18c7091d951d13d610ad5.jpg" alt="mango salad" />
                    <h2 className="salad-name">Mango Salad</h2>
                    <p className="salad-price">RS.<span>250</span></p>
                </li>
            </ul>
            <Footer />
        </div>
    )
}

export default Salads