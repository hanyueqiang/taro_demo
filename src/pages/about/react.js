import './about.scss'
import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtCard } from 'taro-ui'
export default class React extends Component {
  config = {
    navigationBarTitleText: 'React'
  }

  constructor () {
    super(...arguments)
  }

  componentDidMount () {
    console.log('about mount')
  }

  componentDidShow () {
    console.log('about show')
  }

  componentDidHide () {
    console.log('about hide')
  }

  componentWillUnmount () {
    console.log('about unmount')
  }

  navigateBack () {
    Taro.navigateBack({
      delta: 1
    })
  }

  render () {
    return (
      <View className='about'>
        <View className='js-base'>
          <AtCard
            note='组件'
            title='1、受控组件与非控制的组件区别？'
            thumb=''
          >
            <View className="js-card-gutter">受控组件是React控制的组件，也是表单数据的唯一真理来源</View>
            <View className="js-card-gutter">不受控制( uncontrolled component )的组件是您的表单数据由 DOM 处理，而不是您的 React 组件</View>
            <View className="js-card-gutter">虽然不受控制的组件通常更容易实现，因为您只需使用引用从DOM获取值，但是通常建议您通过不受控制的组件来支持受控组件，主要原因是受控组件 支持即时字段验证 ，允许您有条件地禁用/启用按钮，强制输入格式</View>
          </AtCard>
          <View className='js-base-card'>
            <AtCard
              note='生命周期'
              title='2、在哪个生命周期中会发 AJAX 请求，为什么？'
              thumb=''
            >
              <View className="js-card-gutter">AJAX 请求应该在 componentDidMount 生命周期事件中。 在组件挂载之前，AJAX请求将无法 resolve。如果这样做，那意味着你会尝试在一个未挂载的组件上设置 StState，这不仅不会起作用，反而出现各种问题。 在 componentDidMount 中执行 AJAX 将保证至少有一个要更新的组件</View>
            </AtCard>
          </View>
          <View className='js-base-card'>
            <AtCard
              note='shouldComponentUpdate'
              title='3、shouldComponentUpdate 在性能优化方面为什么很重要？'
              thumb=''
            >
              <View className="js-card-gutter">根据新的状态更新用户界面”。如果我们知道我们的用户界面（UI）的某一部分不会改变，那么没有理由让 React 很麻烦地试图去弄清楚它是否应该渲染。通过从 shouldComponentUpdate 返回 false，React 将假定当前组件及其所有子组件将保持与当前组件相同</View>
            </AtCard>
          </View>
          <View className='js-base-card'>
            <AtCard
              note='refs'
              title='4、什么是 React 的 refs'
              thumb=''
            >
              <View className="js-card-gutter">refs就像是一个逃生舱口，允许您直接访问DOM元素或组件实例。为了使用它们，您可以向组件添加一个 ref 属性，该属性的值是一个回调函数，它将接收底层的 DOM 元素或组件的已挂接实例，作为其第一个参数</View>
              <View className="js-card-gutter">经常误解的是，您需要使用类组件才能使用 ref ，但 ref 也可以通过利用 JavaScript 中的 闭包 与 功能组件( functional components )一起使用</View>
            </AtCard>
          </View>
          <View className='js-base-card'>
            <AtCard
              note='虚拟dom'
              title='5、为什么虚拟dom会提高性能?'
              thumb=''
            >
              <View className="js-card-gutter">虚拟dom相当于在js和真实dom中间加了一个缓存，利用dom diff算法避免了没有必要的dom操作，从而提高性能。具体实现步骤如下：</View>
              <View className="js-card-gutter">用 JavaScript 对象结构表示 DOM 树的结构；然后用这个树构建一个真正的 DOM 树，插到文档当中</View>
              <View className="js-card-gutter">当状态变更的时候，重新构造一棵新的对象树。然后用新的树和旧的树进行比较，记录两棵树差异，把记录的差异应用到步骤1所构建的真正的DOM树上，视图就更新了</View>
            </AtCard>
          </View>
          <View className='js-base-card'>
            <AtCard
              note='flux'
              title='6、简述flux 思想'
              thumb=''
            >
              <View className="js-card-gutter">Flux 的最大特点，就是数据的"单向流动"</View>
              <View className="js-card-gutter">用户访问 View  》 View 发出用户的 Action 》 Dispatcher 收到 Action，要求 Store 进行相应的更新  》 Store 更新后，发出一个"change"事件 》 View 收到"change"事件后，更新页面</View>
            </AtCard>
          </View>
          <View className='js-base-card'>
            <AtCard
              note='中间件'
              title='7、redux中间件'
              thumb=''
            >
              <View className="js-card-gutter">中间件提供第三方插件的模式，自定义拦截 action -> reducer 的过程。变为 action -> middlewares -> reducer 。这种机制可以让我们改变数据流，实现如异步 action ，action 过滤，日志输出，异常报告等功能</View>
              <View className="js-card-gutter">常见的中间件：</View>
              <View className="js-card-gutter">redux-logger：提供日志输出</View>
              <View className="js-card-gutter">redux-thunk：处理异步操作</View>
              <View className="js-card-gutter">redux-promise：处理异步操作，actionCreator的返回值是promise</View>
            </AtCard>
          </View>
          <View className='js-base-card'>
            <AtCard
              note='setState'
              title='8、react中setState以后发生了什么'
              thumb=''
            >
              <View className="js-card-gutter">在调用setState以后：</View>
              <View className="js-card-gutter">react会将传入的参数对象跟当前的state合并，触发调和过程</View>
              <View className="js-card-gutter">调和以后，react会高效的根据新的状态构建react元素树</View>
              <View className="js-card-gutter">生成react元素树以后，通过diff算法可以得到新树和老树的节点差异</View>
              <View className="js-card-gutter">根据这些差异，可以精确的实现按需更新</View>
            </AtCard>
          </View>
          <View className='js-base-card'>
            <AtCard
              note='keys'
              title='9、React 中 keys 的作用是什么？'
              thumb=''
            >
              <View className="js-card-gutter">Keys 是 React 用于追踪哪些列表中元素被修改、被添加或者被移除的辅助标识</View>
              <View className="js-card-gutter">在开发过程中，我们需要保证某个元素的 key 在其同级元素中具有唯一性</View>
              <View className="js-card-gutter">React Diff 算法中 React 会借助元素的 Key 值来判断该元素是新近创建的还是被移动而来的元素，从而减少不必要的元素重渲染</View>
              <View className="js-card-gutter">React 还需要借助 Key 值来判断元素与本地状态的关联关系，因此我们绝不可忽视转换函数中 Key 的重要性</View>
            </AtCard>
          </View>
          <View className='js-base-card'>
            <AtCard
              note='vue、react'
              title='10、vue和react的区别'
              thumb=''
            >
              <View className="js-card-gutter">react严格上针对的是mvc模式的view层，vue则是mvvm模式</View>
              <View className="js-card-gutter">操作dom的方式不同，vue使用的是指令操作dom，react是通过js进行操作</View>
              <View className="js-card-gutter">数据绑定不同，vue实现的是双向绑定，react的数据流动是单向的</View>
              <View className="js-card-gutter">react中state是不能直接改变的，需要使用setState改变。vue中的state不是必须的，数据主要是由data属性在vue对象中管理的</View>
            </AtCard>
          </View>
        </View>
      </View>
    )
  }
}
