import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import Grid from '../../components/Grid'
import Helmet from '../../components/Helmet'
import { isValidEmail, isValidPassword } from '../../utils/validate'

import "./User.scss"

const Register = () => {
    const initialValues = {fullName: "", email: "", password: "", phone: ""}
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
        const errors = {};
        if(!values.fullName){
            errors.fullName = "Vui lòng nhập họ và tên";
        }
        if(!values.email){
            errors.email = "Vui lòng nhập email";
        }
        else if(!isValidEmail(values.email)){
            errors.email = "Vui lòng nhập đúng email!"
        }
        if(!values.password){
            errors.password = "Vui lòng nhập password";
        }
        else if(!isValidPassword(values.password)){
            errors.password = "Mật khẩu ít nhất 6 ký tự!"

        }
        if(!values.phone){
            errors.phone = "Vui lòng nhập số điện thoại";
        }
        return errors
    }
  return (
    <Helmet title = "Đăng ký" >

    <div className='login'>
               <div className="login__title">
                   <h1>Đăng Ký</h1>
               </div>
               <div className="login__content">
                   <div className="login__content__form">
                       <form onSubmit={handleSubmit}>
                           <div className="field">
                                <input type="text" 
                                name = "fullName" 
                                value={formValues.fullName} 
                                placeholder='Họ và Tên'  
                                onChange={handleChange}  />
                                {formErrors.fullName && <p>{formErrors.fullName}</p>}
                           </div>
                           <div className="field">
                                <input type="text" placeholder='Email' name = "email" value={formValues.email}    onChange={handleChange} />
                                {formErrors.email && <p>{formErrors.email}</p>}
                            </div>
                           <div className="field">
                                 <input type="password" placeholder='Mật khẩu' name = "password" value={formValues.password}  onChange={handleChange}  />
                                 {formErrors.password && <p>{formErrors.password}</p>}
                            </div>
                           <div className="field">
                                <input type="text" name = "phone"  placeholder='Điện Thoại' onChange={handleChange}  />
                                {formErrors.phone && <p>{formErrors.phone}</p>}
                            </div>
                           <Button>Đăng Ký</Button>
                       </form>
                       <div className="forgot--password">
                           <Link to = "/user/login"><i class="fal fa-arrow-left"></i>Đã có tài khoản</Link>
                       </div>
                   </div>
            </div>
    </div>
    </Helmet>
  )
}

export default Register