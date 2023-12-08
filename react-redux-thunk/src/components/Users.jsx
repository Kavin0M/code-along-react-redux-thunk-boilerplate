import { createStore,applyMiddleware } from 'redux'
import {thunk} from 'redux-thunk'
import axios from 'axios'
import reducer from './Redux/Reducer'
import { addUser } from './Redux/Action'
import { useState } from 'react'
import Display from './Display'

const store = createStore(reducer, applyMiddleware(thunk))

const fetchUsers = () => {
    return function(dispatch){
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res => {
            const user = res.data
            dispatch(addUser(user))
        })
    }
}

// console.log(store.getState())

function Users() {

    const [data,setData] = useState([])
    store.subscribe(() => {setData(store.getState().user)})


  return (
    <div>
      <button onClick={() => store.dispatch(fetchUsers())}>Fetch Data</button>
      <div>{store.getState() && store.getState().user.map((item,index) => (<Display name={item.name} email={item.email} key={index}/>))}</div>
    </div>
  )
}

export default Users