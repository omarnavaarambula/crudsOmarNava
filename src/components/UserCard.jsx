import React from 'react'
import birthday from '../assets/birthday.png'
import remove from '../assets/trash.png'
import edit from '../assets/edit.png'
import swal from 'sweetalert'

const UserCard = ({user, deleteUser, setIsShowing, setUserTarget, setObjectForm}) => {

  const clickUpdateUser = () => {
    setObjectForm({
      title: 'Edit User',
      text_button: 'Update'
    })
    setIsShowing(true)
    setUserTarget(user)
  }
  const alertDelate =() =>{
    swal( "User Delate Successfully " );
  }

  return (
    <article className='card-user'>
      <h2 className='user-name'>{user.first_name} {user.last_name}</h2>
      <ul className='list-container'>
        <li className='element-list'>
          <span className='element-title'>Email</span>
          <p className='element-paragraph'>{user.email}</p>
        </li>
        <li className='element-list'>
          <span className='element-title'>Birthday</span>
          <img className='birthday-icon' src={birthday} alt="icon birthday cake" />
          <p className='element-paragraph date-birthday'>{user.birthday}</p>
        </li>
      </ul>
      <footer className='icon-crud-container'>
        <img className='icon-crud' src={remove} alt="icon trash" onClick={() => {alertDelate(); deleteUser(user.id);}} />
        <img onClick={clickUpdateUser} className='icon-crud' src={edit} alt="icon edit" />
      </footer>
    </article>
  )
}

export default UserCard