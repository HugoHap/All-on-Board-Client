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
        < div className="group" >
            <div className='searchbox'>

                <div className='searchbar'>
                    {/* <svg class="icon" aria-hidden="true" viewBox="0 0 24 24"><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g></svg> */}
                    <input placeholder="Search" type="search" class="input" onChange={handleSearch} />
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
                                        )
                                    })
                                }
                            </div>)
                    }
                </div>
            </div >
        </div>
    )
}

export default SearchBar
