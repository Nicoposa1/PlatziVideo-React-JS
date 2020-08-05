/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { connect } from 'react-redux'
import { registerRequest } from '../actions'
import { Link } from 'react-router-dom'
import '../assets/styles/components/Register.scss'

const Register = props => {
  const [form, setValues] = useState({
    email: '',
    name: '',
    password: '',
  })

  const handleInput = event => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = event => {
    event.preventDefault();
    props.registerRequest(form);
    props.history.push('/')
  }
  return (
    <section className='register'>
      <div className='register__container'>
        <h2>Regístrate</h2>
        <form action='' className='register__container--form' onSubmit={handleSubmit}>
          <input
            name='name'
            className='input'
            type='text'
            placeholder='Nombre'
            onChange={handleInput}
          />
          <input
            name='email'
            className='input'
            type='text'
            placeholder='Correo'
            onChange={handleInput}
          />
          <input
            name='password'
            className='input'
            type='password'
            placeholder='Contraseña'
            onChange={handleInput}
          />
          <button className='button'>Registrarme</button>
        </form>
        <div className='register__container--in'>
          <Link to='/Login'>
            Iniciar Sesión
          </Link>
        </div>
      </div>
    </section>
  )
}

const mapDispathToProps = {
  registerRequest,
}

export default connect(null, mapDispathToProps)(Register)
