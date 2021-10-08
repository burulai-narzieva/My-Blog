import React from "react"
import { Route } from 'react-router'
import Footer from "../components/Footer/index.jsx"
import Header from "../components/Header/index.jsx"


const MainLayouts = ({ component: Component }) => {
    return <Route>
        <Header />
        <Component />
        <Footer />
    </Route>
}

export default MainLayouts;