import { Outlet } from 'react-router-dom'

const Main = () => {
    return (
        <>
            <header><h1>Mon jeu !</h1></header>
            <Outlet />
            <footer>App faite par Nathan D.</footer>
        </>
    )
}

export default Main