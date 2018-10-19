import React, {Component} from 'react';
import { ListView,ScrollView } from 'react-native'; //  the ListView  resuing same component and changing Data 
import { connect } from 'react-redux'
import ListItem from './listItem'

class LibraryList extends Component {
    
   
    componentWillMount() {
        const ds = new ListView.DataSource({
          rowHasChanged: (r1, r2) => r1 !== r2
        });
    
        this.dataSource = ds.cloneWithRows(this.props.libraries);
      }

    renderRow(library) {  //the single item (model) like . please show this item
        return( // each item like this
          <ScrollView>
            <ListItem libraryProp={library} />  
            </ScrollView>
        )
    }
    render() {
        return (
          <ListView
            dataSource={this.dataSource}
            renderRow={this.renderRow}
          />
        );
      }
    }

const mapStateToProps = state => {
    return { libraries: state.libraries };
  }; //state.libraries in state

// two step process #fancy Stuff
export default connect(mapStateToProps)(LibraryList);  //calls the fun connec then it return another function then immeditely call the function with libraryList
