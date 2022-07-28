import { BASE_URL } from "../constants/api";
import axios from 'axios'
let token = null;
function serialize(object) {
    const params = [];
  
    for (const param in object) {
      if (Object.hasOwnProperty.call(object, param) && object[param] != null) {
        params.push(`${param}=${encodeURIComponent(object[param])}`);
      }
    }
  
    return params.join('&');
  }
  
const agent = async (url, body, method = "GET") => {
    const headers  = new Headers();
    if (token) {
        headers.set('Authorization', `Bearer ${token}`);
    }
    try{
        const {data} = await axios({
            method: method,
            url: `${BASE_URL}${url}`,
            headers : headers || {},
            data: body? body: undefined
        });
       return data
    }catch(error){
        console.log(error);
        throw error 
    }
}

const requests = {
    del : (url) => agent(url, undefined, "DELETE"),
    get: (url, query = {}) => {
        if (Number.isSafeInteger(query?.page)) {
            query.limit = query.limit ? query.limit : 10;
            query.offset = query.page * query.limit;
          }
          delete query.page;
          const isEmptyQuery = query == null || Object.keys(query).length === 0;
      
          return agent(isEmptyQuery ? url : `${url}?${serialize(query)}`);
    }, 
    put: (url, body) => agent(url, body, "PUT"),
    post: (url, body) => agent(url, body, "POST")
}

const Auth = {
    current: () => requests.get('/user'),
    login: (email, password) => {
        requests.post('auth/login', {user: {email, password}})
    },
    register: (name, email, password, phone) =>
        requests.post('auth/register', { user: { name, email, password, phone } }),
    save: (user) => requests.put('/user', { user }),
}
const Product = {
    getProductByID: (id) => requests.get('product/' + id),
    getProductByCate: (cate) => requests.get('product?cate=' + cate )
}
const Category = {
    getAllCategory: (id) => requests.get("category")
}
export default {
    Auth,
    Product,
    Category,
    setToken: (_token) => {
        token = _token;
      },
};