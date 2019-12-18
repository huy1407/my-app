import axios from 'axios'
import { setGlobal } from 'reactn'
export const GetUserData = () =>{
    if (localStorage.getItem('token')){
        axios.get('/user')
            .then(res=>{
                console.log(res.data)
                setGlobal({user:res.data})
            }).catch(e=>{
            console.log(e)
        })
    }
}
