import { appInfor } from "../contants/appInfor"
import axiosClient from "./axiosClient"

class AuthAPI {
    HandleAuthentication = async(
        url: string,
        data?: any,
        method?: 'get' | 'post' | 'put' | 'delete' | 'patch'
    ) => {
        return await axiosClient(`${appInfor.BASE_URL}/auth${url}`, {
            method: method ?? 'get',
            data,
        })
    }
}

const authenticationAPI = new AuthAPI();
export default authenticationAPI;