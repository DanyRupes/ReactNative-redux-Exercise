import React, {Component} from 'react'
import { Text, Platform,UIManager,
      TouchableWithoutFeedback,
      View,
      LayoutAnimation } from 'react-native'
import { connect } from 'react-redux' // window to the whole world react-redux. using for calling ActionCreator
import { CardSection } from './common'
import * as actions from '../actions/index'  //* import many things from an file.. #getAll

// needs to know selcted. if title current and title matched
class ListItem extends Component {

    // this.props.libraryProp   => will get the librarry prop from libraryList
        componentWillUpdate() {
            if (Platform.OS === 'android') {
                UIManager.setLayoutAnimationEnabledExperimental &&   UIManager.setLayoutAnimationEnabledExperimental(true);
            }
            LayoutAnimation.spring()
            // spring: 
            // linear: 
            // easeInEaseOut:
            // easeIn:
            // easeOut: 
        }

        

    renderDescription() {
        const { libraryProp, expanded } = this.props

        if(expanded) {  
            return(
                <CardSection >
                    <Text style={{flex:1}}>
                        {libraryProp.description}
                    </Text>
                </CardSection>
            )
        }
    }


    render() {
        const { titleStyle } = styles
        const { id, title } = this.props.libraryProp
        return(
        <TouchableWithoutFeedback
            onPress={()=> this.props.selectedLibrary(id)}
        >
            <View>
                <CardSection>  
                    <Text style={titleStyle}>
                        {title}
                    </Text>
                </CardSection>
                {this.renderDescription()}
            </View>
        </TouchableWithoutFeedback>
        )    
    }
}

const styles = {
    titleStyle : {
        fontSize: 18,
        paddingLeft: 15,
    }
}

 //called with our application state 
const mapStateToProps = (state, ownProps) => {  
    // a plain object for as a prop to our compoonent
    const expanded = state.selectedLibraryId === ownProps.libraryProp.id

    return { expanded}// specifically @Reducers index defined SlectedLibraryId 
}

// first param - maps state to ptops
// second bind ActionCreators to components 
export default connect(mapStateToProps, actions) (ListItem); // passing all actions to this listitem.js
// automatic binding