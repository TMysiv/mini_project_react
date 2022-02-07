import axiosService from "./axios.service";
import {urls} from "../configs/urls";

const discoverService ={
    getAll:()=>axiosService.get(urls.discover).then(value => value.data)
}

export default discoverService