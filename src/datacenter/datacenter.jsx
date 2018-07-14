import React,{Component} from 'react'
import { DatePicker } from 'antd';
import '../css/datacenter.css'

const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

class Datacenter extends Component{
    render(){
        return <div className='datacenter'>
                <h2>
                    数据中心
                </h2>
                <h2>
                    时间
                </h2>
                时间范围：<RangePicker onChange={this.onChange} /><br /><br />
                时间粒度：<button>不限</button><button>制定年龄段</button><br /><br /><br />
                <h2>
                    数据
                </h2>
                数据范围：<button>签约公司</button><button>客户</button><br /><br />
                时间粒度：<button>广告计划</button><button>广告单元</button><button>广告创意</button><br /><br /><br />
                <button>预览报告</button><button>生成并下载</button>
            </div>
    }
    onChange(date, dateString) {
        console.log(date, dateString);
    }
}

export default Datacenter