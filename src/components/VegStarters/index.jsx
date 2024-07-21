import NavBar from "../NavBar"
import Footer from "../Footer"
import "./index.css"

const VegStarters = () => {
    return(
        <div className="veg-container-main">
            <NavBar />
            <h1 className="veg-heading">Veg Starters</h1>
            <ul className="veg-container-list">
                <li className="veg-item">
                    <img className="veg-img" src="https://i.pinimg.com/564x/f0/2c/6a/f02c6ab27e4cbcf08bcf59ade3b78a15.jpg" alt="mashroom roll" />
                    <h2 className="veg-name">Mashroom Roll</h2>
                    <p className="veg-price">RS.<span>100</span></p>
                </li>
                
                <li className="veg-item">
                    <img className="veg-img" src="https://i.pinimg.com/564x/8a/81/16/8a811627d433a6bc8cc3a0d4c280f668.jpg" alt="corn paneer" />
                    <h2 className="veg-name">Corn Paneer</h2>
                    <p className="veg-price">RS.<span>150</span></p>
                </li>

                <li className="veg-item">
                    <img className="veg-img" src="https://i.pinimg.com/564x/43/32/37/433237e9d79bf05d302acd03672df1a1.jpg" alt="cabbage manchurian" />
                    <h2 className="veg-name">Cabbage Manchurian</h2>
                    <p className="veg-price">RS.<span>200</span></p>
                </li>

                <li className="veg-item">
                    <img className="veg-img" src="https://i.pinimg.com/564x/42/98/c7/4298c71e6a6d500684ecc9f38b7f9846.jpg" alt="paneer" />
                    <h2 className="veg-name">Paneer 65</h2>
                    <p className="veg-price">RS.<span>180</span></p>
                </li>

                <li className="veg-item">
                    <img className="veg-img" src="https://i.pinimg.com/564x/3f/36/af/3f36afed5c9024d6aebe182f9eec5844.jpg" alt="cheese chutney" />
                    <h2 className="veg-name">Cheese Chutney Bombs</h2>
                    <p className="veg-price">RS.<span>80</span></p>
                </li>

                <li className="veg-item">
                    <img className="veg-img" src="https://i.pinimg.com/564x/ab/d3/6e/abd36e85ca11276e78c53d02853d88bd.jpg" alt="cheese veg" />
                    <h2 className="veg-name">Cheese Veg Fingers</h2>
                    <p className="veg-price">RS.<span>220</span></p>
                </li>

                <li className="veg-item">
                    <img className="veg-img" src="https://i.pinimg.com/564x/b6/da/f3/b6daf3333a14ab527215697492cce5f9.jpg" alt="chilli basil" />
                    <h2 className="veg-name">Chilli & Basil Paneer</h2>
                    <p className="veg-price">RS.<span>180</span></p>
                </li>

                <li className="veg-item">
                    <img className="veg-img" src="https://i.pinimg.com/564x/ea/8e/9f/ea8e9fb77e02089a1514632b69c1ca23.jpg" alt="honey chilli" />
                    <h2 className="veg-name">Honey Chilli</h2>
                    <p className="veg-price">RS.<span>150</span></p>
                </li>

                <li className="veg-item">
                    <img className="veg-img" src="https://i.pinimg.com/564x/e7/9e/2c/e79e2c7de7b9b16923ebb95b0578f813.jpg" alt="tandoori" />
                    <h2 className="veg-name">Tandoori Gobi Tikka</h2>
                    <p className="veg-price">RS.<span>50</span></p>
                </li>

                <li className="veg-item">
                    <img className="veg-img" src="https://i.pinimg.com/564x/2e/df/8b/2edf8be909102d226ec4941b088ea035.jpg" alt="soya" />
                    <h2 className="veg-name">Soya Manchurian</h2>
                    <p className="veg-price">RS.<span>250</span></p>
                </li>
            </ul>
            <Footer />
        </div>
    )
}

export default VegStarters