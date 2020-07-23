/* eslint-disable react/button-has-type */
import React from 'react';
import { Link } from 'react-router-dom'
import '../assets/styles/components/Register.scss'

const Register = () => (
  <section className='register'>
    <div className='register__container'>
      <h2>Regístrate</h2>
      <form action='' className='register__container--form'>
        <input type='text' placeholder='Nombre' />
        <input type='text' placeholder='Correo' />
        <input type='password' placeholder='Contraseña' />
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

export default Register
