import React,{Component} from 'react'
import '../css/aside.css'
import {
    Link
} from 'react-router-dom'
import { Menu, Icon, Button , Layout} from 'antd';
const SubMenu = Menu.SubMenu;
const { Header, Sider, Content } = Layout;

class Index extends Component{
    constructor(){
        super()
        this.state = {
            collapsed:false
        }
    }
    render(){
        return <div className='box'>
            <div className='aside' style={{width:'240px'}}>
                <h2 className='toptit'>智能投放系统</h2>
                <p className='add'><Link to='/addadv'>添加广告</Link></p>
                    <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                    >
                    <Menu.Item key="1">
                        <Icon type="pie-chart" />
                        <span>首页概览</span>
                    </Menu.Item>
                    <SubMenu key="sub2" title={<span><Icon type="mail" /><span>广告管理</span></span>}>
                        <Menu.Item key="5"><Link to='/index/plan'>广告计划</Link></Menu.Item>
                        <Menu.Item key="6"><Link to='/index/until'>广告单元</Link></Menu.Item>
                        <Menu.Item key="7"><Link to='/index/idea'>广告创意</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub3" title={<span><Icon type="appstore" /><span>数据中心</span></span>}>
                        <Menu.Item key="9"><Link to='/index/datacenter'>Option 9</Link></Menu.Item>
                        <Menu.Item key="10">Option 10</Menu.Item>
                        <SubMenu key="sub4" title="Submenu">
                            <Menu.Item key="11">Option 11</Menu.Item>
                            <Menu.Item key="12">Option 12</Menu.Item>
                        </SubMenu>
                    </SubMenu>
                    <SubMenu key="sub5" title={<span><Icon type="appstore" /><span>工具箱</span></span>}>
                        <Menu.Item key="13"><Link to='/index/toolone'>工具箱1</Link></Menu.Item>
                        <Menu.Item key="14">Option 14</Menu.Item>
                        <SubMenu key="sub6" title="Submenu">
                        <Menu.Item key="15">Option 15</Menu.Item>
                        <Menu.Item key="16">Option 16</Menu.Item>
                        </SubMenu>
                    </SubMenu>
                </Menu>
            </div>
            <Layout>
                <Header style={{ background: '#fff', padding: 0 }}>
                    <Icon
                    className="trigger"
                    type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                    onClick={this.toggle}
                    />
                </Header>
                <Content style={{ padding: 24, background: '#eee', minHeight: 280 }}>
                    {this.props.children}
                </Content>
            </Layout>
        </div>
    }
}

export default Index