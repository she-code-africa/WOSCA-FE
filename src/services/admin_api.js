import Axios from "axios"
export default new (class Http {
  API_URL = "https://wosca-backend.herokuapp.com/api/v1"


  AxiosSetup = () => {
    const token = localStorage.getItem("token")
    const axiosInstance = Axios.create({
      baseURL: this.API_URL,
    })
    axiosInstance.defaults.headers.common.Authorization = "Bearer " + token;
    axiosInstance.interceptors.response.use(
      (response) => {
        return response
      },
      (error) => {
        return Promise.reject(error)
      }
    )
    return axiosInstance
  }

  post = async (urlpath, data, config) => {
    try {
      const response = await this.AxiosSetup().post(urlpath, data, config)
      if (
        response.data.errorMsg !== null
      ) {
        localStorage.removeItem("jwt_token")
        // window.location.reload()
      }
      return response
    } catch (err) {
      return err
    }
  }

  put = async (urlpath, data, config) => {
    try {
      const response = await this.AxiosSetup().put(urlpath, data, config)
      if (
        response.data.errorMsg !== null
      ) {
        localStorage.removeItem("jwt_token")
        // window.location.reload()
      }
      return response
    } catch (err) {
      return err
    }
  }

  get = async (urlpath) => {
    const url = `${urlpath}`
    try {
      const response = await this.AxiosSetup().get(url)
      if (
        response.data.errorMsg !== null
      ) {
        localStorage.removeItem("jwt_token")
        // window.location.reload()
      }
      return response
    } catch (err) {
      return err
    }
  }

  patch = async (urlpath, data, config) => {
    try {
      const response = await this.AxiosSetup().patch(urlpath, data, config)
      if (
        response.data.errorMsg !== null
      ) {
        localStorage.removeItem("jwt_token")
        // window.location.reload()
      }
      return response
    } catch (err) {
      return err
    }
  }

  delete = async (urlpath, data) => {
    try {
      const response = await this.AxiosSetup().delete(urlpath, data)
      if (
        response.data.errorMsg !== null
      ) {
        localStorage.removeItem("jwt_token")
        // window.location.reload()
      }
      return response
    } catch (err) {
      return err
    }
  }
})()