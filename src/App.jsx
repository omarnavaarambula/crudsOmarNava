import React from 'react'
import UsersList from './components/UsersList'
import Header from './components/Header'
import UserForm from './components/UserForm'
import axios from 'axios'
import { useEffect, useState } from 'react'

const CrudUsers = () => {

  const [users, setUsers] = useState()
  const [isShowing, setIsShowing] = useState(false)
  const [userTarget, setUserTarget] = useState(null)
  const [objectForm, setObjectForm] = useState({})

  const getUsers = () =>{
    const URL = ('https://users-crud1.herokuapp.com/users/' )
    axios.get(URL)
      .then(({data}) => setUsers(data))
      .catch(err => console.log(err))
  }

  const deleteUser = id => {
    const URL = (`https://users-crud1.herokuapp.com/users/${id}/`)
    axios.delete(URL)
      .then(() => getUsers())
      .catch(err => console.log(err))
  }

  const createUser = user => {
    const URL = ('https://users-crud1.herokuapp.com/users/')
    axios.post(URL, user)
    .then(() => getUsers())
    .catch(err => console.log(err))
  }

  const updateUser = (id, userUpdate) => {
    const URL = (`https://users-crud1.herokuapp.com/users/${id}/`)
    axios.patch(URL, userUpdate)
      .then()
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getUsers()
  },[])

  return (
    <div className='app-container'>
      <Header
        setIsShowing={setIsShowing}
        setObjectForm={setObjectForm}
        setUserTarget={setUserTarget}
      />
      {
        isShowing &&
          <UserForm 
            createUser={createUser}
            setIsShowing={setIsShowing}
            userTarget={userTarget}
            objectForm={objectForm}
            updateUser={updateUser}
          />
      }
      <UsersList
        deleteUser={deleteUser}
        users={users}
        setIsShowing={setIsShowing}
        setUserTarget={setUserTarget}
        setObjectForm={setObjectForm}
      />
    </div>
  )
}

export default CrudUsers