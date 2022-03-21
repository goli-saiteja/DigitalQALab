import axios from 'axios'
import apiConfig from './apiConfig'
import AuthService from 'services/authService'

const api = axios.create(apiConfig)

api.interceptors.request.use(
  requestConfig => {
    if (!!requestConfig.isPrivate) {
      requestConfig.headers = {
        ...requestConfig.headers,
        ...AuthService.getAuthHeader()
      }
    }
    requestConfig.url = `${requestConfig.baseURL}${requestConfig.url}`
    return requestConfig
  },
  error => Promise.reject(error)
)

// Add a response interceptor
api.interceptors.response.use(
  res => {
    let response = res.data
    let error
    if (!!response && response.error) {
      error = response.error || {}
      response = {
        error: {
          status: 'ERROR',
          code: error.errorCode || 'Unknown',
          message: error.description || 'Unknown Error'
        }
      }
    }

    return response
  },
  error => {
    let err = error.response || {}
    let code = err.status
    let message
    let status = 'ERROR'
    let errorObj
    if (err.status === 401) {
      if (!!err.data && !!err.data.detail) {
        if (err.data.detail === 'Signature has expired.') {
          AuthService.signOut()
        }
        message = err.data.detail
      } else {
        message = 'Unauthorized'
      }
    } else if (!!err.data && !!err.data.message) {
      message = err.data.message
    } else if (err.status === 404) {
      message = 'Item not found'
    } else if(!!err.data){
      message = err.data;
    } else {
      message = 'Unexpected error occurred. Please contact system administrator.'
    }
    errorObj = {
      status,
      code,
      message
    }

    return Promise.reject(errorObj)
  }
)

export default api
