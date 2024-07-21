import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import NonVegStarters from "./components/NonVegStarters"
import VegStarters from "./components/VegStarters"
import Salads from "./components/Salads"
import Soups from "./components/Soups"
import SeaFood from "./components/SeaFood"
import Noodles from "./components/Noodles"
import MainCourse from "./components/MainCourse"
import Desserts from "./components/Desserts"

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/contact" element={<Contact />} />
                <Route exact path="/non-veg-starters" element={<NonVegStarters />} />
                <Route exact path="/veg-starters" element={<VegStarters />} />
                <Route exact path="/salads" element={<Salads />} />
                <Route exact path="/soups" element={<Soups />} />
                <Route exact path="/fish-sea-foods" element={<SeaFood />} />
                <Route exact path="/noodles" element={<Noodles />} />
                <Route exact path="/main-course" element={<MainCourse />} />
                <Route exact path="/desserts" element={<Desserts />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
