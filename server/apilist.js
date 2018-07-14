const fs = require('fs')
const path = require('path')
const jwt = require('jsonwebtoken')

//定义接口
module.exports = function(app){
    app.post('/api/user/login',(req,res)=>{  //登录接口
        let user = fs.readFileSync(__dirname + '/user/user.json',{encoding:'utf-8'});
        user=JSON.parse(user);
        let login = req.body;
        console.log(login)
        // let userpath = path.resolve(__dirname+'/user.json')
        // userlist.forEach(item=>{
        //      if(item.username===req.body.username&&item.password===req.body.password){
        //          flag=true;
        //      }
        // })
        // if(flag){
        //     let token = jwt.sign(req.body,'1601E',{expiresIn:60*60*60})
        //     res.json({
        //         msg:'sucess',
        //         code:1,
        //         token
        //     })
        // }else{
        //      res.json({
        //         msg:'用户名或密码错误',
        //         code:0
        //     })
        // }
        
    })
}
