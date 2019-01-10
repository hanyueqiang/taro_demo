import './about.scss'
import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtCard } from 'taro-ui'
export default class Vue extends Component {
  config = {
    navigationBarTitleText: 'Vue'
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
            note='MVVM'
            title='1、什么是MVVM？'
            thumb=''
          >
            <View className="js-card-gutter">MVVM是Model-View-ViewModel的缩写。MVVM是一种设计思想。Model 层代表数据模型，也可以在Model中定义数据修改和操作的业务逻辑；View 代表UI 组件，它负责将数据模型转化成UI 展现出来，ViewModel 是一个同步View 和 Model的对象</View>
            <View className="js-card-gutter">在MVVM架构下，View 和 Model 之间并没有直接的联系，而是通过ViewModel进行交互，Model 和 ViewModel 之间的交互是双向的， 因此View 数据的变化会同步到Model中，而Model 数据的变化也会立即反应到View 上</View>
            <View className="js-card-gutter">ViewModel 通过双向数据绑定把 View 层和 Model 层连接了起来，而View 和 Model 之间的同步工作完全是自动的，无需人为干涉，因此开发者只需关注业务逻辑，不需要手动操作DOM, 不需要关注数据状态的同步问题，复杂的数据状态维护完全由 MVVM 来统一管理</View>
          </AtCard>
          <View className='js-base-card'>
            <AtCard
              note='mvvm、mvc'
              title='2、mvvm和mvc区别？'
              thumb=''
            >
              <View className="js-card-gutter">mvc和mvvm其实区别并不大。都是一种设计思想。主要就是mvc中Controller演变成mvvm中的viewModel。mvvm主要解决了mvc中大量的DOM 操作使页面渲染性能降低，加载速度变慢，影响用户体验</View>
            </AtCard>
          </View>
          <View className='js-base-card'>
            <AtCard
              note='vue优点'
              title='3、vue的优点是什么？'
              thumb=''
            >
              <View className="js-card-gutter">低耦合。视图（View）可以独立于Model变化和修改，一个ViewModel可以绑定到不同的"View"上，当View变化的时候Model可以不变，当Model变化的时候View也可以不变</View>
              <View className="js-card-gutter">可重用性。你可以把一些视图逻辑放在一个ViewModel里面，让很多view重用这段视图逻辑</View>
              <View className="js-card-gutter">独立开发。开发人员可以专注于业务逻辑和数据的开发（ViewModel），设计人员可以专注于页面设计</View>
            </AtCard>
          </View>
          <View className='js-base-card'>
            <AtCard
              note='vuex'
              title='4、vuex有哪几种属性？'
              thumb=''
            >
              <View className="js-card-gutter">有五种，分别是 State、 Getter、Mutation 、Action、 Module</View>
            </AtCard>
          </View>
          <View className='js-base-card'>
            <AtCard
              note='Vuex'
              title='5、不用Vuex会带来什么问题？'
              thumb=''
            >
              <View className="js-card-gutter">可维护性会下降，想修改数据要维护三个地方</View>
              <View className="js-card-gutter">可读性会下降，因为一个组件里的数据，根本就看不出来是从哪来的</View>
              <View className="js-card-gutter">增加耦合，大量的上传派发，会让耦合性大大增加，本来Vue用Component就是为了减少耦合，现在这么用，和组件化的初衷相背</View>
            </AtCard>
          </View>
          <View className='js-base-card'>
            <AtCard
              note='v-show、v-if'
              title='6、v-show和v-if指令的共同点和不同点'
              thumb=''
            >
              <View className="js-card-gutter">v-show指令是通过修改元素的display的CSS属性让其显示或者隐藏</View>
              <View className="js-card-gutter">v-if指令是直接销毁和重建DOM达到让元素显示和隐藏的效果</View>
            </AtCard>
          </View>
          <View className='js-base-card'>
            <AtCard
              note='生命周期'
              title='7、请列举出3个Vue中常用的生命周期钩子函数'
              thumb=''
            >
              <View className="js-card-gutter">created: 实例已经创建完成之后调用,在这一步,实例已经完成数据观测, 属性和方法的运算, watch/event事件回调. 然而, 挂载阶段还没有开始, $el属性目前还不可见</View>
              <View className="js-card-gutter">mounted: el被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子。如果 root 实例挂载了一个文档内元素，当 mounted 被调用时 vm.$el 也在文档内</View>
              <View className="js-card-gutter">activated: keep-alive组件激活时调用</View>
            </AtCard>
          </View>
          <View className='js-base-card'>
            <AtCard
              note='生命周期'
              title='8、vue生命周期总共有几个阶段'
              thumb=''
            >
              <View className="js-card-gutter">可以总共分为8个阶段：创建前/后, 载入前/后,更新前/后,销毁前/销毁后</View>
            </AtCard>
          </View>
          <View className='js-base-card'>
            <AtCard
              note='v-if、v-for'
              title='9、为什么避免 v-if 和 v-for 用在一起'
              thumb=''
            >
              <View className="js-card-gutter">当 Vue 处理指令时，v-for 比 v-if 具有更高的优先级，通过v-if 移动到容器元素，不会再重复遍历列表中的每个值。取而代之的是，我们只检查它一次，且不会在 v-if 为否的时候运算 v-for</View>
            </AtCard>
          </View>
          <View className='js-base-card'>
            <AtCard
              note='生命周期钩子'
              title='10、简单描述每个周期具体适合哪些场景'
              thumb=''
            >
              <View className="js-card-gutter">beforecreate : 可以在这加个loading事件，在加载实例时触发</View>
              <View className="js-card-gutter">created : 初始化完成时的事件写在这里，如在这结束loading事件，异步请求也适宜在这里调用</View>
              <View className="js-card-gutter">mounted : 挂载元素，获取到DOM节点</View>
              <View className="js-card-gutter">updated : 如果对数据统一处理，在这里写上相应函数</View>
              <View className="js-card-gutter">beforeDestroy : 可以做一个确认停止事件的确认框</View>
              <View className="js-card-gutter">nextTick : 更新数据后立即操作dom</View>
            </AtCard>
          </View>
        </View>
      </View>
    )
  }
}
