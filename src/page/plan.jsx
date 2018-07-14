import React,{Component} from 'react'
import '../css/plan.css'
import echarts from 'echarts'
import { DatePicker } from 'antd';
import '../css/datacenter.css'
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
//import http from '../until/http.jsx'
class Plan extends Component{
    render(){
        return (<div>
                <div className='mon'>
                    <i className='iconfont pay-circle'></i>
                    <span>现金账户</span>
                    <b>￥126.560.00</b>
                </div>
                <div  className='mon mons'>
                    <i className='iconfont pay-circle'></i>
                    <span>今日消耗</span>
                    <b>￥5.400</b>
                </div>
                <div className='bottom'>
                    <div className='head'>
                        <h3>整体情况</h3>
                        <RangePicker className='data' onChange={this.onChange} />
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
                    <div className='ech' ref='ech'> </div>
                </div>

        </div>)
    }
    componentDidMount(){
        let echs = echarts.init(this.refs.ech);
        let option = {
            xAxis: {
                type: 'category',
                data: ['2016/10', '2016/11', '2016/12', '2017/01', '2017/02']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [1100, 1200, 1300, 1400, 1500, 1600, 1700],
                type: 'line'
            }]
        };
        echs.setOption(option)
        window.onresize = function(){
            echs.resize()
        }
        //http.get('url')
    }
    onChange(date, dateString) {
        console.log(date,dateString);
       // this.setDate(dateString)
       console.log(moment)
       let d = moment.duration(moment(dateString[1])-moment(dateString[0])).asDays();
        console.log(d)
    }
    setDate(date){
        let d = moment.duration(moment(date[1])-moment(date[0])).asDays();
        console.log(d)
    }
}

export default Plan


