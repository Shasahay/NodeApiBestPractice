import * as express from 'express'
export const route = express.Router();
export{route as userRoute}

route.get('/', (req, res) =>{
    res.send("Hello From User route");
})

route.get('/users',(req, res) =>{
 res.send("Get the list of users")
})

