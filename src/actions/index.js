export const selectedLibrary= (libraryId)=> {
    return {
        type: 'select_library',
        payload: libraryId
    }
}

//... many actions will
// export const selectedLibrary= (libraryId)=> {
//     return {
//         type: 'select_library',
//         payload: libraryId
//     }
// }