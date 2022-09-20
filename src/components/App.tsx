import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Main from "../layout/Main";
import Game from "./Game";
import Home from "./Home";

import { Provider } from 'react-redux'
import createStore from '../configureStore'

const store = createStore()

// import your route components too

const App = () => {
    return (
        <>
            <Provider store={store}>
                <BrowserRouter>
                    <Routes>
                    <Route path="/" element={<Main />}>
                        <Route index element={<Home />} />
                        <Route path="gitcoin/:name" element={<Game />} />
                    </Route>
                    </Routes>
                </BrowserRouter>
            </Provider>
        </>
    )
}

export default App