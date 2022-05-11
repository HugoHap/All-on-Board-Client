import { Routes, Route } from "react-router-dom"
import BoardgamesDetailsPage from "../pages/BoardgameDetailsPage/BoardgameDetailsPage"
import BoardgamesListPage from "../pages/BoardgameListPage/BoardgameListPage"
import MatchesListPage from '../pages/MatchListPage/MatchListPage'
import IndexPage from "../pages/HomePage/HomePage"
import LoginPage from "../pages/LoginPage/LoginPage"
import SignupPage from "../pages/SignupPage/SignupPage"
import UserProfilePage from "../pages/UserProfilePage/UserProfilePage"
import CreateBoardGamePage from "../pages/CreateBoardGamePage/CreateBoardGamePage"

const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<IndexPage />} />

            <Route path="/boardgames" element={<BoardgamesListPage />} />
            <Route path="/boardgames/:id" element={<BoardgamesDetailsPage />} />

            <Route path='/match' element={<MatchesListPage />} />

            <Route path="/signup" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />

            <Route path="/profile" element={<UserProfilePage />} />
            <Route path="/boardgame/create" element={<CreateBoardGamePage />} />

            <Route path="*" element={<h1>Esto es un 404 jeje</h1>} />
        </Routes>
    )
}

export default AppRoutes