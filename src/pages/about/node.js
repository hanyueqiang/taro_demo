import './about.scss'
import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
export default class React extends Component {
  config = {
    navigationBarTitleText: 'Node'
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
        <View>
          <Text>关于</Text>
          <View className='info'>
            <Text>关于about</Text>
            <View onClick={this.navigateBack}>返回</View> 
          </View>
        </View>
      </View>
    )
  }
}
