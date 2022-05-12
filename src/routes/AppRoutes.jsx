import { Routes, Route } from "react-router-dom"
import BoardgamesDetailsPage from "../pages/BoardgameDetailsPage/BoardgameDetailsPage"
import BoardgamesListPage from "../pages/BoardgameListPage/BoardgameListPage"
import MatchesListPage from '../pages/MatchListPage/MatchListPage'
import IndexPage from "../pages/HomePage/HomePage"
import LoginPage from "../pages/LoginPage/LoginPage"
import SignupPage from "../pages/SignupPage/SignupPage"
import MatchDetailsPage from "../pages/MatchDetailsPage/MatchDetailsPage"
import UserProfilePage from "../pages/UserProfilePage/UserProfilePage"
import CreateBoardGamePage from "../pages/CreateBoardGamePage/CreateBoardGamePage"
import EditMatchPage from "../pages/EditMatchPage/EditMatchPage"
import EditBoardGamePage from "../pages/EditBoardGamePage/EditBoardGame"
import EditProfilePage from "../pages/EditProfilePage/EditProfilePage"
import BoardgameRentPage from "../pages/BoardgameRent/BoardgameRentPage"

const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="/boardgames" element={<BoardgamesListPage />} />
            <Route path="/boardgames/:id" element={<BoardgamesDetailsPage />} />
            <Route path="/boardgames/:id/booking" element={<BoardgameRentPage />} />
            <Route path='/match' element={<MatchesListPage />} />
            <Route path='/match/:id' element={<MatchDetailsPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/profile" element={<UserProfilePage />} />
            <Route path="/match/:id/edit" element={<EditMatchPage />} />
            <Route path="/boardgames/:id/edit" element={<EditBoardGamePage />} />
            <Route path="/edit" element={<EditProfilePage />} />
            <Route path="/boardgames/create" element={<CreateBoardGamePage />} />

            <Route path="*" element={<h1>Esto es un 404 jeje</h1>} />
        </Routes>
    )
}

export default AppRoutes