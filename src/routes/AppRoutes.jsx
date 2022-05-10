import { Routes, Route } from "react-router-dom"
import MatchesListPage from '../pages/MatchListPage/MatchListPage'
import IndexPage from "../pages/HomePage/HomePage"
import LoginPage from "../pages/LoginPage/LoginPage"
import SignupPage from "../pages/SignupPage/SignupPage"

const AppRoutes = () => {

    return (
        <Routes>
            <Route path='/match' element={<MatchesListPage />} />
            <Route path="/" element={<IndexPage />} />
            {/* <Route path="/galeria" element={<CoastersPage />} />
            <Route path="/detalles/:coaster_id" element={<CoasterDetailsPage />} /> */}
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="*" element={<h1>Esto es un 404 jeje</h1>} />
        </Routes>
    )
}

export default AppRoutes