var express = require('express');
var router = express.Router();
const { Register , Login } = require('../controller/LoginController');
const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
router.use(cors(corsOptions));
router.post('/register',Register);
router.post('/login',Login);                


module.exports = router;
