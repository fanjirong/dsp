import React,{Component} from 'react'
import '../css/login.css'
import http from '../until/http.js'
import {getCookie} from '../until/util.js'

class Login extends Component{
    constructor(props){
        super(props)
        this.state={
            username:'',
            password:'',
            num:'',
            info:''
        }
    }
    render(){
        return(
            <div className='box'>
                <div className='form'>
                    <h2>账户登录</h2>
                    <h4>{this.state.info}</h4>
                    <input type="text" name='username' placeholder='用户名' value={this.state.username} onChange={this.onChange.bind(this)}/><br />
                    <input type="text" name='password' placeholder='密码' value={this.state.password} onChange={this.onChange.bind(this)}/><br />
                    <p><input type="text" name='num' className='nums' placeholder='验证码' value={this.state.num} onChange={this.onChange.bind(this)}/><img src="http://e.zuoyebang.com/dsp-admin/captcha.jpg" alt=""/><br /></p>
                    <button onClick={this.login.bind(this)}>登录</button>
                </div>
            </div>
        ) 
    }
    onChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    login(){
      
       if(!this.state.num){
           this.setState({
               info:'验证码为空'
           })
       }
       if(!this.state.password){
           this.setState({
               info:'密码为空'
           })
       }
       if(!this.state.username){
           this.setState({
               info:'用户名为空'
           })
       }
       if(this.state.username&&this.state.password&&this.state.num){
           this.setState({
               info:''
           })
        }
        console.log(http)
         http.post('/api/user/login',{
            token:getCookie('token'),
            user:this.state.username,
            pass:this.password,
            num:this.state.num
        }).then(res=>{
            console.log(res)
        })
    }
}
export default Login
