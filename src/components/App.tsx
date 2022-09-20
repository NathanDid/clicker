import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Main from "../layout/Main";
import Game from "./Game";
import Home from "./Home";
import Settings from "./Settings"

import { Provider } from 'react-redux'
import createStore from '../configureStore'
import saga from '../saga'

const store = createStore(saga)

const App = () => {
    return (
        <>
            <Provider store={store}>
                <BrowserRouter>
                    <Routes>
                    <Route path="/" element={<Main />}>
                        <Route index element={<Home />} />
                        <Route path="gitcoin/:name" element={<Game />} />
                        <Route path="settings" element={<Settings />} />
                    </Route>
                    </Routes>
                </BrowserRouter>
            </Provider>
        </>
    )
}

export default App