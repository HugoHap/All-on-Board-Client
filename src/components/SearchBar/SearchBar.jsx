import { useState } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import boardgameService from '../../services/boardgame.service'
import './SearchBar.css'

const SearchBar = () => {

    const [search, setSearch] = useState([])

    const handleSearch = e => {

        if (e.target.value === '') {
            setSearch([])
        } else {
            boardgameService
                .getBoardgameByName(e.target.value)
                .then(({ data }) => {
                    setSearch(data)
                })
                .catch(err => console.log(err))
        }
    }
    console.log(search)

    return (
        <div className='searchbox'>
            <div className='searchbar'>
                <input type='text' placeholder='Search games...' onChange={handleSearch} />
                {/* <Link to={'/search-boardgame-by-name/:input'}>
                    <Button className='button btn-dark'>Search</Button>
                </Link> */}
            </div>
            <div>
                {
                    search.length !== 0 && (
                        <div className='dropdown'>
                            {
                                search.map(game => {
                                    return (
                                        <Link key={game?.id} to={`/boardgames/${game._id}`}>
                                            <p className='search'><img src={game.gameImg} alt={game.name} />{game.name}</p>
                                        </Link>
                                        // <Link key={game?.id} to={`/boardgames/${id}`}>
                                        //     <p key={game?.id}>{game?.name}</p>
                                        // </Link>
                                    )
                                })
                            }
                        </div>)
                }
            </div>
        </div >
    )
}

export default SearchBar