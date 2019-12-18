import {setGlobal ,addCallback} from 'reactn';

addCallback(global => {
    console.log(global)
})

setGlobal({
    user:{}
})
