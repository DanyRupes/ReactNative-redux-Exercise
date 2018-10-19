// import slectedData from '
// should rerurn value not undefined

// if state is undefined we return null
export default (state = null, action)=>{  // reducers alwawys called with state object .. last state object 

    switch(action.type) {
        case 'select_library': {

            return action.payload;
        }
        default : {
            
            return state;  // retunr what ever state we returned lastly  
        }
    }
}