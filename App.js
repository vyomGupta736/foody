import React from 'react';
import {View,Text} from 'react-native';
import Routes from './src/Routes';
import { persistor, store } from './src/Store/Index';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

export default class App extends React.Component{
  render()
  {
    return(
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor} >
            <Routes/>
        </PersistGate>
      </Provider>
    

    )
  }
}