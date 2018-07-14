import React,{Component} from 'react'
import '../css/toolone.css'


class Toolone extends Component{
    render(){
        return <div className='toolone'>
            <h1>工具箱</h1>
            <dl>
                <dt></dt>
                <dd>
                    <h4>账号管理</h4>
                    <p>在中国产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在着很多类似的页面和组件，阿和谐雷神的组件会被抽离成一套标准规范。</p>
                </dd>
            </dl>
            <dl>
                <dt></dt>
                <dd>
                    <h4>客户管理</h4>
                    <p>在中国产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在着很多类似的页面和组件，阿和谐雷神的组件会被抽离成一套标准规范。</p>
                </dd>
            </dl>
        </div>
    }
}

export default Toolone