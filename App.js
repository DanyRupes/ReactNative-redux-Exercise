import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';  //  for working complete with react
import { createStore } from 'redux'; // not only created for react 
import reducers from './src/reducers'
import { Header } from './src/Components/common'
import LibraryList from './src/Components/libraryList';

class App extends Component {

  render() {
    const { container } = styles
    return (
      <Provider store={createStore(reducers)}> 
        <View style={container}> 
          <Header headerText={"Library Menu"}/>
            <LibraryList />
           
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, //plese fill as much as space as possible
    backgroundColor: '#fff',

  },
});

export default App;