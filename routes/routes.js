
const { PrismaClient } = require('@prisma/client');

const cors = require('cors');
const bodyParser = require('body-parser');


var express=require('express');
const prisma = new PrismaClient();
const app = express();


app.use(bodyParser.json());
app.use(cors());

var router = require("express").Router();

const controller=require('../controller/controller.js')

var middleware=require('../middleware/middleware')

//public routes

//router.get('/posts');

router.get('/combined-data', controller.combineddata);
router.get('/getposts',controller.getposts);
router.get('/getusers',controller.getusers);
router.get('/user/:id/stats',controller.postandcommentbyid);
router.get('/getcomments',controller.getcomments)

//private routes
router.get('/getuser', controller.getuserbytoken)
router.post('/createusers',controller.createusers)
router.get('/singleUsers/:id',controller.getuserbyid)
router.post('/login',controller. login)
router.put('/updateUsers/:id',controller.getuserupdaterbyid)
router.delete('/deleteUsers/:id',controller. deleteUserbyid)


router.get('/image/:id',controller.imagebyid)
router.post('/createcomment',controller.createcomment)
router.post('/publicComment',controller.publiccomment)
router.get('/protected',middleware.verifyToken,controller.protected)
router.post('/createpost', middleware.verifyToken,controller.createpost);
router.post('/forgot-password', controller.forgotpassword);
router.post('/reset-password', controller.forgotpassword);
router.post('/reset-passwordd', controller.forgotpasswordd);

router.get('/post-headers', controller.postheaders);
router.post('/logout',controller.logout)



module.exports=router;




















