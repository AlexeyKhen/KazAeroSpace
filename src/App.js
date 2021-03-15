import React from "react";
import {Provider} from 'react-redux'
import store from "./store";
import BottomNav from "./components/bottom_nav/bottomNav";
import ViewerShow from "./components/viewer/viewer";


const App = () => (
    <Provider store={store}>
        <BottomNav/>
        <ViewerShow/>
    </Provider>
);
export default App;
