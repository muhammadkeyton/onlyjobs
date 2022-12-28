import axios from "axios";

const API = axios.create({
    baseURL: '/api',
    headers: {
      'content-type': 'application/json',
    }

});


export const generateWorkerTags = (text:string) => API.post('/getStartedPage/workerJobTags',text)