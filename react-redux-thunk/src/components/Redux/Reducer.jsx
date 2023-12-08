const initialState = {
    user: []
}

const reducer = (state=initialState,action) => {
    switch(action.type){
        case "ADD_USER": return {
            user: action.payload
        }
    }
}

export default reducer