import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../containers/Home'
import DefaultLayout from "../containers/Layout/DefaultLayout";
import Movies from "../containers/Movies";
import Series from '../containers/Series'
import Detalhes from "../containers/Detail";


function MyRoutes (){
    return(
        <Router>
            <Routes>
                <Route element={<DefaultLayout/>} >
                <Route path="/" element={<Home/>}/>
                <Route path="/filmes" element={<Movies/>}/>
                <Route path="/series" element={<Series/>}/>
                <Route path="/details/:id" element={<Detalhes/>}/>

                </Route>
            </Routes>
        </Router>
    )
}

export default MyRoutes