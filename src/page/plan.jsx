import React,{Component} from 'react'
import '../css/plan.css'


class Plan extends Component{
    render(){
        return <div>
                <div className='mon'>
                    <i className='iconfont pay-circle'></i>
                    <span>现金账户</span>
                    <b>￥126.560.00</b>
                </div>
                <div className='mon mons'>
                    <i className='iconfont pay-circle'></i>
                    <span>今日消耗</span>
                    <b>￥5.400</b>
                </div>
                <div className='bottom'>
                    <div className='head'>
                        <h3>整体情况</h3>
                    </div>
                    <div className='mon1'>
                        <p>点击量（次）</p>
                        <h2>278，456</h2>
                    </div>
                    <div className='mon1'>
                        <p>点击量（次）</p>
                        <h2>278，456</h2>
                    </div>
                    <div className='mon1'>
                        <p>点击量（次）</p>
                        <h2>278，456</h2>
                    </div>
                    <div className='mon1'>
                        <p>点击量（次）</p>
                        <h2>278，456</h2>
                    </div>
                    <div> 

                       

                    </div>
                </div>

        </div>
    }
}

export default Plan