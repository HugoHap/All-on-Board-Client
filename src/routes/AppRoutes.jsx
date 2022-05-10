import { Routes, Route } from "react-router-dom";
import MatchesListPage from '../pages/MatchListPage/MatchListPage'

const AppRoutes = () => {

    return (
        <Routes>
            <Route path='/match' element={<MatchesListPage />} />
        </Routes>
    )
}

export default AppRoutes