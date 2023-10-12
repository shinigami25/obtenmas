import axios from "axios";

const obtenmasApi = axios.create( {
    baseURL : 'https://dev.obtenmas.com/catom/api'
});

export default obtenmasApi;
