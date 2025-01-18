
import React from "react";
import { Provider } from 'react-redux';
import './../styles/App.css';
import { store } from "../redux/store";
import UserInformation from './userInformation';

const App = () => {
  return (
    <Provider store={store}>
        {/* Do not remove the main div */}
        <UserInformation />
    </Provider>
  )
}

export default App
