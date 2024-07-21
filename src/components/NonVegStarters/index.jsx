import NavBar from "../NavBar"
import Footer from "../Footer"
import "./index.css"

const NonVegStarters = () => {
    return(
        <div className="nvg-container-main">
            <NavBar />
            <h1 className="nvg-heading">Non Veg Starters</h1>
            <ul className="nvg-container-list">
                <li className="nvg-item">
                    <img className="nvg-img" src="https://i.pinimg.com/564x/86/0a/87/860a871faaad5663969f0958472b7ef5.jpg" alt="popscilss" />
                    <h2 className="nvg-name">Fried Chicken Popsciles</h2>
                    <p className="nvg-price">RS.<span>150</span></p>
                </li>
                
                <li className="nvg-item">
                    <img className="nvg-img" src="https://i.pinimg.com/564x/21/c6/27/21c627cb9b9ee15ab4804e7a4f6ca20c.jpg" alt="chicken fry" />
                    <h2 className="nvg-name">Chicken Fry</h2>
                    <p className="nvg-price">RS.<span>250</span></p>
                </li>

                <li className="nvg-item">
                    <img className="nvg-img" src="https://i.pinimg.com/564x/02/85/38/028538e5932247bf59634ea376682f03.jpg" alt="chicken 65" />
                    <h2 className="nvg-name">Chicken 65</h2>
                    <p className="nvg-price">RS.<span>200</span></p>
                </li>

                <li className="nvg-item">
                    <img className="nvg-img" src="https://i.pinimg.com/564x/cf/d6/57/cfd65721695bd2eceea7c9a127a27c53.jpg" alt="chicken tikka" />
                    <h2 className="nvg-name">Chicken Tikka</h2>
                    <p className="nvg-price">RS.<span>150</span></p>
                </li>

                <li className="nvg-item">
                    <img className="nvg-img" src="https://i.pinimg.com/564x/42/04/df/4204df6ccd9dc93a7ce6eaa53ee94bd7.jpg" alt="wings fry" />
                    <h2 className="nvg-name">Chicken Wings Fry</h2>
                    <p className="nvg-price">RS.<span>350</span></p>
                </li>

                <li className="nvg-item">
                    <img className="nvg-img" src="https://i.pinimg.com/564x/f2/46/79/f24679e2f3d2ddc705bada652d3072fb.jpg" alt="chicken lollipop" />
                    <h2 className="nvg-name">Chicken Lollipop</h2>
                    <p className="nvg-price">RS.<span>550</span></p>
                </li>

                <li className="nvg-item">
                    <img className="nvg-img" src="https://i.pinimg.com/564x/aa/b0/12/aab012cc3dcfe370d79b017ded4168ff.jpg" alt="tandoori chicken" />
                    <h2 className="nvg-name">Tandoori Chicken</h2>
                    <p className="nvg-price">RS.<span>180</span></p>
                </li>

                <li className="nvg-item">
                    <img className="nvg-img" src="https://i.pinimg.com/564x/e9/1a/c0/e91ac05ea8dcbe68d4ce365f34301f3b.jpg" alt="angara kabab" />
                    <h2 className="nvg-name">Chicken Angara Kabab</h2>
                    <p className="nvg-price">RS.<span>150</span></p>
                </li>

                <li className="nvg-item">
                    <img className="nvg-img" src="https://i.pinimg.com/564x/20/ca/a4/20caa4d90fef0d9008847645ece61d4b.jpg" alt="leg fry" />
                    <h2 className="nvg-name">Chicken Leg Fry</h2>
                    <p className="nvg-price">RS.<span>150</span></p>
                </li>

                <li className="nvg-item">
                    <img className="nvg-img" src="https://i.pinimg.com/564x/ea/64/66/ea6466b27103f690095767c32f26b897.jpg" alt="spatchcock" />
                    <h2 className="nvg-name">Roast Spatchcock Chicken</h2>
                    <p className="nvg-price">RS.<span>190</span></p>
                </li>
            </ul>
            <Footer />
        </div>
    )
}

export default NonVegStarters