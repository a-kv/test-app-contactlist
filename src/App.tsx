import React from 'react';
import './App.css';
import Login from './components/Login/Login';
import {Route} from "react-router-dom";
import SearchAppBar from "./components/MainPage/Header/Header";
import ContactList from "./components/MainPage/ContactList/ContactList";

function App() {

    return (
        <div className="App">
            <SearchAppBar/>
            <div>
                <Route path='/login' render={() => <Login/>}/>
                <Route path='/contactsList' render={() => <ContactList/>}/>
            </div>
        </div>
    );
}

export default App;