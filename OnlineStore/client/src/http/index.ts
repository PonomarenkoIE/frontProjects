import axios, { AxiosHeaders, AxiosRequestConfig, InternalAxiosRequestConfig } from "axios";

type AdaptAxiosRequestConfig = AxiosRequestConfig & {headers: AxiosHeaders}

const $host = axios.create({
  baseURL: process.env.REACT_APP_API_URL

})

const $authHost = axios.create({
  baseURL: process.env.REACT_APP_API_URL
  
})

const authInterceptor = (config: AdaptAxiosRequestConfig): AdaptAxiosRequestConfig  => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
  return config
}

$authHost.interceptors.request.use(authInterceptor)

export {
  $host,
  $authHost
}