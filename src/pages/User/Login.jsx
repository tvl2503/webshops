import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import Grid from '../../components/Grid'
import "./User.scss"
import { isValidEmail, isValidPassword } from '../../utils/validate'
import { useState } from 'react'
const Login = () => {
    const initialValues = { email: "", password: ""}
    const [formValues, setFormValues] = useState(initialValues)
    const [formErrors, setFormErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)
    const handleChange = ({ currentTarget: input }) => {
        setFormValues({...formValues,[input.name]: input.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setFormErrors(validate(formValues));
        setIsSubmit(true)
    }
    useEffect(() => {
        console.log(formErrors)
        if(Object.keys(formErrors).length === 0 && isSubmit){
            console.log(formValues);
        }
    }, [formErrors])
    const validate = (values) => {
        const errors = {}
        if(!values.email){
            errors.email = "Vui lòng nhập email!"
        }
        else if(!isValidEmail(values.email)){
            errors.email = "Vui lòng nhập đúng email!"
        }
        if(!values.password){
            errors.password = "Vui lòng nhập password!"
        }
        else if(!isValidPassword(values.password)){
            errors.password = "Mật khẩu ít nhất 6 ký tự!"

        }
        return errors
    }
  return (
    <div className='login'>
               <div className="login__title">
                   <h1>Đăng nhập</h1>
               </div>
               <div className="login__content">
                   <div className="login__content__form">
                       <form onSubmit={handleSubmit} >
                        <div className="field">
                           <input type="text" placeholder='Email' name = "email" value={formValues.email} onChange={handleChange} />
                           {formErrors.email && <p>{formErrors.email}</p>}
                        </div>
                        <div className="field">
                           <input type="password" placeholder='Mật khẩu' name = "password"  value={formValues.password}  onChange={handleChange} />
                           {formErrors.password && <p>{formErrors.password}</p>}

                        </div>
                           <Button>Đăng nhập</Button>
                       </form>
                       <div className="forgot--password">
                           <Link to = "/forgot--password">Quên mật khẩu?</Link>
                       </div>
                       <div className="forgot--password">
                           <Link to = "/user/register">Đăng ký</Link>
                       </div>
                   </div>
                   <div className="divider">
                    <span>Hoặc</span>
                   </div>
                   <div className="login-social">
                    <Link to = "/user/login">
                        <i class="fab fa-facebook"></i>
                        <span>Đăng nhập bằng tài khoản facebook</span>
                    </Link>
                   </div>
                   <div className="login-social login-google">
                    <Link to = "/user/login">
                        <i class="fab fa-google"></i>
                        <span>Đăng nhập bằng tài khoản gmail</span>
                    </Link>
                   </div>
            </div>
    </div>
  )
}

export default Login