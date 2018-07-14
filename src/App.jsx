//react 组件怎么定义？
   // 1.纯函数组件（无状态组件）  2.类组件 （createClass）
//这两种定义组件方式最大的区别，函数组件没有周期函数也没有state、props
import React,{Component} from 'react'

class App extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return <div>
            {this.props.children}
        </div>
    }   
}
export default App

// 无状态组件
// 1.组件不会被实例化，整体渲染性能得到提升
// 2.因为组件被精简成一个render方法的函数来实现的，由于是无状态组件，所以无状态组件就不会在有组件实例化的过程，无实例化过程也就不需要分配多余的内存，从而性能得到一定的提升。
// 组件不能访问this对象
// 3.无状态组件由于没有实例化过程，所以无法访问组件this中的对象，例如：this.ref、this.state等均不能访问。若想访问就不能使用这种形式来创建组件
// 组件无法访问生命周期的方法
// 因为无状态组件是不需要组件生命周期管理和状态管理，所以底层实现这种形式的组件时是不会实现组件的生命周期方法。所以无状态组件是不能参与组件的各个生命周期管理的。
// 4.无状态组件只能访问输入的props，同样的props会得到同样的渲染结果，不会有副作用
// 无状态组件被鼓励在大型项目中尽可能以简单的写法来分割原本庞大的组件，未来React也会这种面向无状态组件在譬如无意义的检查和内存分配领域进行一系列优化，所以只要有可能，尽量使用无状态组件。

// createClass
// React.Component都是创建有状态的组件，这些组件是要被实例化的，并且可以访问组件的生命周期方法。但是随着React的发展，React.createClass形式自身的问题暴露出来：
// React.createClass会自绑定函数方法（不像React.Component只绑定需要关心的函数）导致不必要的性能开销，增加代码过时的可能性。
// React.createClass的mixins不够自然、直观；React.Component形式非常适合高阶组件（Higher Order Components--HOC）,它以更直观的形式展示了比mixins更强大的功能，并且HOC是纯净的JavaScript，不用担心他们会被废弃。HOC可以参考无状态组件(Stateless Component) 与高阶组件。