import {Link} from "react-router-dom"
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'


import Footer from "../Footer"
import NavBar from "../NavBar"
import "./index.css"

const Home = () => {
    const settings = {
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    return(
        <div className="home-bg-container">
            <NavBar />
            <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img className='slider-image' src="https://www.foodiesfeed.com/wp-content/uploads/2023/07/healthy-foods.jpg" alt="food" />
        </div>
        <div>
        <img className='slider-image' src="https://c0.wallpaperflare.com/preview/13/60/32/vietnam-ho-chi-minh-city-noodle-foodphotography.jpg" alt="food" />
        </div>
        <div>
        <img className='slider-image' src="https://media.istockphoto.com/id/1316145932/cs/fotografie/stoln%C3%AD-pohled-na-ko%C5%99en%C4%9Bn%C3%A9-j%C3%ADdlo.jpg?s=612x612&w=0&k=20&c=6aSQ-BkS56O2w2lf5noFfHQXQGo3OI-0UCUSsL8wJKs=" alt="food" />
        </div>
      </Slider>
    </div>
            <h1 className='home-heading'>Food Munch</h1>
            <ul className='home-h-card-container'>
                <li className='card-item'>
                    <img src="https://i.pinimg.com/236x/26/c0/23/26c023e833ca1b08a20176868996f7d1.jpg" className='card-image' alt="service" />
                    <h2 className='card-item-heading'>Food Service</h2>
                    <p className='card-item-descrption'>Experience fine dining at the comfort of your home. All our orders are carefully packed and arranged to give you the nothing less than perfect.</p>
                </li>

                <li className='card-item'>
                    <img src="https://i.pinimg.com/564x/94/bf/34/94bf3444f7683e20d2b78693f09e9c31.jpg" className='card-image' alt="food" />
                    <h2 className='card-item-heading'>Fresh Food</h2>
                    <p className='card-item-descrption'>The Fresh Food group provides fresh-cut fruits and vegetables directly picked from our partner farms and farm houses so that you always get them tree to plate.</p>
                </li>

                <li className='card-item'>
                    <img src="https://i.pinimg.com/564x/08/5c/e4/085ce45b150e212696f283050d5d1062.jpg" className='card-image' alt="offers" />
                    <h2 className='card-item-heading'>Best Offers</h2>
                    <p className='card-item-descrption'>Food Coupons & Offers upto 50% OFF and Exclusive Promo Codes on All Online Food Orders.</p>
                </li>
            </ul>

            <div>
                <h1 className='menu-heading'>Menu</h1>
                <hr className='line' />
                <ul className="menu-container-list">
                    <Link to="/non-veg-starters"><li className="menu-item">
                        <img src="https://i.pinimg.com/736x/5c/29/32/5c293236309ef9098f58e50f80b94adb.jpg" className="menu-card-image" alt="non-veg" />
                        <h2 className="menu-item-heading">Non-Veg Starters</h2>
                    </li> </Link>

                    <Link to="/veg-starters"><li className="menu-item">
                        <img src="https://i.pinimg.com/564x/34/22/68/3422686b9cd65276d259af766cba86d4.jpg" className="menu-card-image" alt="veg" />
                        <h2 className="menu-item-heading">Veg Starters</h2>
                    </li></Link>

                    <Link to="/soups"><li className="menu-item">
                        <img src="https://i.pinimg.com/236x/60/af/9f/60af9fc7e37c7acb1d66c1e6bc1e5b1a.jpg" className="menu-card-image" alt="soups" />
                        <h2 className="menu-item-heading">Soups</h2>
                    </li></Link>

                    <Link to="/fish-sea-foods"><li className="menu-item">
                        <img src="https://i.pinimg.com/236x/bc/a2/ac/bca2acd9329ec7bb2050f52a3293d0e5.jpg" className="menu-card-image" alt="fish & sea foods" />
                        <h2 className="menu-item-heading">Fish & Sea Foods</h2>
                    </li></Link>

                    <Link to="/main-course"><li className="menu-item">
                        <img src="https://i.pinimg.com/236x/82/6e/f5/826ef52690c866181b0320fb76dd7414.jpg" className="menu-card-image" alt="main course" />
                        <h2 className="menu-item-heading">Main Course</h2>
                    </li></Link>

                    <Link to="/noodles"><li className="menu-item">
                        <img src="https://i.pinimg.com/236x/2e/ac/a3/2eaca366537c4cbb3c573ab63cfd7e05.jpg" className="menu-card-image" alt="noodles" />
                        <h2 className="menu-item-heading">Noodles</h2>
                    </li></Link>

                    <Link to="/salads"><li className="menu-item">
                        <img src="https://i.pinimg.com/236x/71/34/32/713432f14f6cbb70a232d3152d2eaeb8.jpg" className="menu-card-image" alt="salads" />
                        <h2 className="menu-item-heading">Salads</h2>
                    </li></Link>

                    <Link to="/desserts"><li className="menu-item">
                        <img src="https://i.pinimg.com/236x/d4/c7/c7/d4c7c73bfd24b01935b74af137b7c142.jpg" className="menu-card-image" alt="desserts" />
                        <h2 className="menu-item-heading">Desserts</h2>
                    </li></Link>
                </ul>
            </div>
            <Footer />
        </div>
    )
}

export default Home;