import axios from 'axios'

//Consts
const dataInicial = {
    array: []
}

//Types
const GET_USERS = 'GET_USERS'

//Reducers
export default function UserReducer(state = dataInicial, action) {
    switch (action.type) {
        case GET_USERS:
            return { ...state, array: action.payload }
        default:
            return state
    }
}

//Actions
export const GetUserAction = () => async (dispatch, getState) => {
    try {
        const res = await axios.get('http://localhost:44380/api/usuario')
        dispatch({
            type: GET_USERS,
            payload: res.data
        })
    }
    catch (e) {
        console.log(e)
    }
}