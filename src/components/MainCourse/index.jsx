import NavBar from "../NavBar"
import Footer from "../Footer"
import "./index.css"

const MainCourse = () => {
    return(
        <div className="main-container-main">
            <NavBar />
            <h1 className="main-heading">Main Course</h1>
            <ul className="main-container-list">
                <li className="main-item">
                    <img className="main-img" src="https://i.pinimg.com/236x/c8/0f/15/c80f15e27763822c6057ccb15668acff.jpg" alt="kaju masala" />
                    <h2 className="main-name">Kaju Masala</h2>
                    <p className="main-price">RS.<span>150</span></p>
                </li>

                <li className="main-item">
                    <img className="main-img" src="https://i.pinimg.com/236x/c1/60/66/c160660ab1b8c452f0103ec42360de77.jpg" alt="paneer receipe" />
                    <h2 className="main-name">Paneer Receipe</h2>
                    <p className="main-price">RS.<span>330</span></p>
                </li>

                <li className="main-item">
                    <img className="main-img" src="https://i.pinimg.com/236x/82/6e/f5/826ef52690c866181b0320fb76dd7414.jpg" alt="veg fried rice" />
                    <h2 className="main-name">Veg Fried Rice</h2>
                    <p className="main-price">RS.<span>200</span></p>
                </li>

                <li className="main-item">
                    <img className="main-img" src="https://i.pinimg.com/236x/8a/80/07/8a800766a7b9f6e76b0a10e37a6196cb.jpg" alt="paneer pulao" />
                    <h2 className="main-name">Paneer Pulao</h2>
                    <p className="main-price">RS.<span>350</span></p>
                </li>

                <li className="main-item">
                    <img className="main-img" src="https://i.pinimg.com/564x/0c/f1/29/0cf12989fde8c98c2c27a80c17c06f87.jpg" alt="achari chicken" />
                    <h2 className="main-name">Achari Chicken</h2>
                    <p className="main-price">RS.<span>290</span></p>
                </li>
            </ul>
            <Footer />
        </div>
    )
}

export default MainCourse