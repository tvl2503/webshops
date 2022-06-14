import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import Grid from '../../components/Grid'
import "./User.scss"
const Login = () => {
  return (
    <div className='login'>
               <div className="login__title">
                   <h1>Đăng nhập</h1>
               </div>
               <div className="login__content">
                   <div className="login__content__form">
                       <form action="">
                           <input type="email" placeholder='Email' />
                           <input type="password" placeholder='Mật khẩu' />
                           <Button>Đăng nhập</Button>
                       </form>
                       <div className="forgot--password">
                           <Link to = "/forgot--password">Quên mật khẩu</Link>
                       </div>
                       <div className="forgot--password">
                           <Link to = "/forgot--password">Đăng ký</Link>
                       </div>
                   </div>
               </div>
    </div>
  )
}

export default Login