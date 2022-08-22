import React from 'react'
import { useForm } from 'react-hook-form'
import { useEffect } from 'react'

const UserForm = ({setIsShowing, createUser, userTarget, objectForm, updateUser}) => {

  const {register, handleSubmit, reset} = useForm()

  const defaultValues = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    birthday: ''
  }
  
  useEffect(() => {
    if(userTarget !== null){
      reset(userTarget)
    } else {
      reset(defaultValues)
    }
  },[userTarget])

  const submit = data => {
    if(objectForm.title === 'New User'){
      createUser(data)
      reset(defaultValues)
      setIsShowing(false)
    } else {
      data.id = userTarget.id
      updateUser(userTarget.id, data)
      reset(defaultValues)
      setIsShowing(false)
    }
  }

  return (
    <div className='background-form'>
      <article className='form-container'>
        <h2 className='title-form'>{objectForm.title}</h2>
        <div className='equis' onClick={() => setIsShowing(false)}>x</div>
        <form className='form' onSubmit={handleSubmit(submit)}>
         
<div className='contenderName'>
    <div >
            <label htmlFor="name"></label>
            <input
              className='input-form-name'
              type="text"
              id='name'
              placeholder='Frist Name'
              {...register('first_name')}
            />

  <label htmlFor="last-name"></label>
            <input
              className='input-form-last'
              type="text"
              id='last-name'
              placeholder="Last Name"
              {...register('last_name')}
            />
          
          </div>
</div>

        
        


          <div className='section-form-container'>
            <label className='label-form' htmlFor="email"></label>
            <input
              className='input-form'
              type="text"
              id='email'
              placeholder="Email"
              {...register('email')}
            />
          </div>
          <div className='section-form-container'>
            <label className='label-form' htmlFor="password"></label>
            <input
              className='input-form'
              type="password"
              id='password'
              placeholder='Password'
              {...register('password')}
            />
          </div>
          <div className='section-form-container'>
            <label className='label-form' htmlFor="birthday"></label>
            <input
              className='input-form'
           
              id='birthday'
              placeholder="Brithday"
              {...register('birthday')}
            />
          </div>
          <button className='button-form'>{objectForm.text_button}</button>
          <div className='cancel' onClick={() => setIsShowing(false)}>Cancel</div>
        </form>
      </article>
    </div>
  )
}

export default UserForm