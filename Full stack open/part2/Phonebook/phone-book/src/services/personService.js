import axios from 'axios';
const baseUrl='http://localhost:3001/api/persons';
const getAll=()=>{
 const req=axios.get(baseUrl);
 console.log(req);
return req.then(res=>res.data);
}
const create=async (newObject)=>{
    const req=axios.post(baseUrl,newObject);
    console.log(req);
    
    const res = await req;
    return res.data;
}
const update=(id,newObject)=>{
    const req=axios.post(`${baseUrl}/${id}`,newObject);
    return req.then(res=>res.data);
}
const deletePer=(id)=>{
    const req=axios.delete(`${baseUrl}/${id}`);
    return req.then(true).catch(false);
}
export default{
    getAll,create,update,deletePer
}