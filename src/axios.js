import axios from 'axios'
import {baseUrl} from './constents/constent'

const instance = axios.create({
    baseURL: baseUrl,
  
  });
  export default instance