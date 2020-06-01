import React, { createContext, useReducer } from 'react';
import Routes from './routes/Routes';
import RoutesNoAuth from './routes/RoutesNoAuth';
import Reducer from './reducers';

// Context for Authentication values
export const AuthContext = createContext();

const initialState = {
    isAuthenticated: null,
    email: ""
};

const App = () => {

    const [state, dispatch] = useReducer(Reducer, initialState);

    return (
        <AuthContext.Provider 
            value={{
            state,
            dispatch
            }}>
            <div className="App">
                {!state.isAuthenticated ?           
                <RoutesNoAuth /> :
                <Routes /> }

                {/* Route only for development. Uncomment this Route */}
                <Routes />
            </div>
        </AuthContext.Provider>
    );
}

export default App;