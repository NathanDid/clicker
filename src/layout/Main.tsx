import { Link, Outlet } from 'react-router-dom'

const Main = () => {
    return (
        <>
            <header><h1>Mon jeu !</h1></header>
            <Outlet />
            <footer>
                <ul>
                    <li><Link to="/gitcoin/nathan">Play</Link></li>
                    <li><Link to="/settings">Settings</Link></li>
                </ul>
                App faite par Nathan D.
            </footer>
        </>
    )
}

export default Main