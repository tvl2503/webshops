import { publicRequest } from "../requestMethod";

export const loginApi = async (dispatch, formValues) => {
    try{
        const res = await publicRequest.post("auth/login", formValues)
        return res.data
    }catch(err){
        return {err}
    }
}