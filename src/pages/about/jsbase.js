import './about.scss'
import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtCard } from 'taro-ui'
import CardComponent from '../../components/card.component'
export default class Jsbase extends Component {
  config = {
    navigationBarTitleText: 'Js基础'
  }

  constructor() {
    super(...arguments)
  }

  componentDidMount() {
    console.log('about mount')
  }

  componentDidShow() {
    console.log('about show')
  }

  componentDidHide() {
    console.log('about hide')
  }

  componentWillUnmount() {
    console.log('about unmount')
  }

  navigateBack() {
    Taro.navigateBack({
      delta: 1
    })
  }

  render() {
    return (
      <View className='about'>
        <View className='js-base'>
          <AtCard
            note='数据类型'
            title='1、JavaScript有几种类型的值？'
            thumb=''
          >
            <View className="js-card-gutter">基本数据类型存储在栈中，引用数据类型（对象）存储在堆中，指针放在栈中</View>
            <View className="js-card-gutter">两种类型的区别是：存储位置不同；原始数据类型直接存储在栈中的简单数据段，占据空间小、大小固定，属于被频繁使用数据，所以放入栈中存储；引用数据类型存储在堆中的对象,占据空间大、大小不固定,如果存储在栈中，将会影响程序运行的性能</View>
            <View className="js-card-gutter">引用数据类型在栈中存储了指针，该指针指向堆中该实体的起始地址。当解释器寻找引用值时，会首先检索其在栈中的地址，取得地址后从堆中获得实体</View>
          </AtCard>
          <View className='js-base-card'>
            <AtCard
              note='堆、栈'
              title='2、栈和堆的区别？'
              thumb=''
            >
              <View className="js-card-gutter">栈（stack）：由编译器自动分配释放，存放函数的参数值，局部变量等</View>
              <View className="js-card-gutter">堆（heap）：一般由程序员分配释放，若程序员不释放，程序结束时可能由操作系统释放</View>
            </AtCard>
          </View>
          <View className='js-base-card'>
            <AtCard
              note='this'
              title='3、谈谈this的理解'
              thumb=''
            >
              <View className="js-card-gutter">this总是指向函数的直接调用者（而非间接调用者）</View>
              <View className="js-card-gutter">如果有new关键字，this指向new出来的那个对象</View>
              <View className="js-card-gutter">在事件中，this指向目标元素，特殊的是IE的attachEvent中的this总是指向全局对象window</View>
            </AtCard>
          </View>
          <View className='js-base-card'>
            <AtCard
              note='eval'
              title='4、eval是做什么的？'
              thumb=''
            >
              <View className="js-card-gutter">它的功能是把对应的字符串解析成JS代码并运行；应该避免使用eval，不安全，非常耗性能（2次，一次解析成js语句，一次执行）</View>
            </AtCard>
          </View>
          <View className='js-base-card'>
            <AtCard
              note='document、window'
              title='5、什么是window对象? 什么是document对象？'
              thumb=''
            >
              <View className="js-card-gutter">window对象代表浏览器中打开的一个窗口。document对象代表整个html文档。实际上，document对象是window对象的一个属性</View>
            </AtCard>
          </View>
          <View className='js-base-card'>
            <AtCard
              note='null，undefined'
              title='6、null，undefined的区别？'
              thumb=''
            >
              <View className="js-card-gutter">null表示一个对象被定义了，但存放了空指针，转换为数值时为0</View>
              <View className="js-card-gutter">undefined表示声明的变量未初始化，转换为数值时为NAN</View>
              <View className="js-card-gutter">typeof(null) -- object</View>
              <View className="js-card-gutter">typeof(undefined) -- undefined</View>
            </AtCard>
          </View>
          <View className='js-base-card'>
            <AtCard
              note='use strict'
              title='7、use strict 是什么意思? 使用它区别是什么'
              thumb=''
            >
              <View className="js-card-gutter">除了正常模式运行外，ECMAscript添加了第二种运行模式：“严格模式”</View>
              <View className="js-card-gutter">消除js不合理，不严谨地方，减少怪异行为</View>
              <View className="js-card-gutter">消除代码运行的不安全之处</View>
              <View className="js-card-gutter">提高编译器的效率，增加运行速度</View>
            </AtCard>
          </View>
          <View className='js-base-card'>
            <AtCard
              note='new'
              title='8、new操作符具体干了什么呢?'
              thumb=''
            >
              <View className="js-card-gutter">创建一个空对象，并且 this 变量引用该对象，同时还继承了该函数的原型</View>
              <View className="js-card-gutter">属性和方法被加入到 this 引用的对象中</View>
              <View className="js-card-gutter">新创建的对象由 this 所引用，并且最后隐式的返回 this </View>
            </AtCard>
          </View>
          <View className='js-base-card'>
            <AtCard
              note='延迟加载'
              title='9、JS延迟加载的方式有哪些？'
              thumb=''
            >
              <View className="js-card-gutter">JS的延迟加载有助与提高页面的加载速度</View>
              <View className="js-card-gutter">defer和async、动态创建DOM方式（用得最多）、按需异步载入JS</View>
              <View className="js-card-gutter">defer：延迟脚本。立即下载，但延迟执行（延迟到整个页面都解析完毕后再运行），按照脚本出现的先后顺序执行</View>
              <View className="js-card-gutter">async：异步脚本。下载完立即执行，但不保证按照脚本出现的先后顺序执行</View>
            </AtCard>
          </View>
          <View className='js-base-card'>
            <AtCard
              note='Cookie'
              title='10、什么是Cookie 隔离'
              thumb=''
            >
              <View className="js-card-gutter">通过使用多个非主要域名来请求静态文件，如果静态文件都放在主域名下，那静态文件请求的时候带有的cookie的数据提交给server是非常浪费的，还不如隔离开。因为cookie有域的限制，因此不能跨域提交请求，故使用非主要域名的时候，请求头中就不会带有cookie数据，这样可以降低请求头的大小，降低请求时间，从而达到降低整体请求延时的目的。同时这种方式不会将cookie传入server，也减少了server对cookie的处理分析环节，提高了server的http请求的解析速度</View>
            </AtCard>
          </View>
        </View>
      </View>
    )
  }
}
