import React, {useCallback,useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { selectUser, logout } from '../../../service/auth/authSlice'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import { getAllProducts } from '../../../assets/data/product';
const HeaderTop = () => {
    const user = useSelector(selectUser)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [products, setProducts] = useState({});
    const [keyword, setKeyword] = useState('')
    const handeChange = (e) => {
        setKeyword(e.target.value)
  
    }
    const handleSearch = useCallback(
        () => {
          let product = []
          if(keyword !== '')
            product = getAllProducts().filter(item => item.name.toLowerCase().includes(keyword.toLowerCase()))
          setProducts(product)
        }, [keyword]
      );
    useEffect(() => {
        handleSearch()
    }, [keyword])
    const handleLogout = () => {
        dispatch(logout())
        navigate('/user/login')
        toast.success("Đăng xuất thành công!")
    }
  return (
    
    <div className="header__top">
            <div className="header__top__info">
                <div className="header__top__info__email">
                    <p>Email:</p>
                    <span>volinhh1804@gmail.com</span>
                </div>
                <div className="header__top__info__hotline">
                    <p>Hotline:</p>
                    <span>0392280138</span>
                </div>
            </div>
            <div className="header__top__search">
                <form action="">
                    <button type='submit'>
                        <i className="fas fa-search"></i>
                    </button>
                    <input type="text" name = "q" onChange={handeChange} value = {keyword} placeholder='Tìm kiếm sản phẩm' />
                </form>
                <div className="list__product">
                    {/* {products &&
                        products.map((item, index) => (
                            <Link to={"/"} key = {index}>
                                <div className="product">
                                    <div className="img">
                                        <img src = {item.img} />
                                    </div>
                                    <div className="content">
                                        <div className="name">{item.name}</div>
                                        <div className="price">{item.price}</div>
                                    </div>
                                </div>
                            </Link>
                        ))
                    } */}
                </div>
            </div>
            <div className="header__top__user">
                {
                    !user && <>
                   
                        <Link to = "/user/login">
                            <div className="header__top__user__item">
                                Đăng nhập
                            </div>
                        </Link>
                        
                        <Link to = "/user/register">
                            <div className="header__top__user__item">
                                Đăng ký
                            </div>
                        </Link>
                    </>
                }
                {
                    user &&
                    <>
                        <p>Xin chào, {user.fullname}</p>
                        <div className="logout" onClick={handleLogout}>Đăng xuất</div>
                    </> 
                }   
            </div>
        </div>
  )
}

export default HeaderTop