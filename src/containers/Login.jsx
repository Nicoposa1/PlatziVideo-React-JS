/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
import React from 'react';
import { Link } from 'react-router-dom'
import '../assets/styles/components/Login.scss'
import googleIcon from '../assets/static/google-icon.png'
import twitterIcon from '../assets/static/twitter-icon.png'

const Login = () => (
  <section className='login'>
    <div className='login__container'>
      <h2>Inicia Sesión</h2>
      <form action='' className='login__container--form'>
        <input aria-label='correo' className='input' type='text' placeholder='Correo' />
        <input aria-label='contraseña' className='input' type='password' placeholder='Contraseña' />
        <button className='button'>Iniciar sesón</button>
        <div className='login__container--remember-me'>
          <label>
            <input type='checkbox' id='cbox1' value='checkbox' />
            Recuerdame
          </label>
          <a href='#'>Olvidé mi contraseña</a>
        </div>
      </form>
      <section className='login__container--social-media'>
        <div>
          <img src={googleIcon} alt='Google' />
          Inicia sesión con Google
        </div>
        <div>
          <img src={twitterIcon} alt='Twitter' />
          Inicia sesión con Twitter
        </div>
      </section>
      <p className='login__container--register'>
        No tienes ninguna cuenta
        <Link to='/Register'>
          Regístrate
        </Link>
      </p>
    </div>
  </section>
);

export default Login
