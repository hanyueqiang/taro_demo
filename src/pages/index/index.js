import Taro, { Component } from '@tarojs/taro'
import { View, Text, Input, Button } from '@tarojs/components'
import './index.scss'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }
  state = {
    value: ''
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  inputChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }
  delAllHandle = () => {
    this.setState({
      value: ''
    })
  }
  
  navigateTo () {
    Taro.navigateTo({
      url: '/pages/about/about'
    })
  }

  render () {
    return (
      <View className='index'>
        <View className='todo'>
          <Input className='todo-input' value={this.state.value} type='text' placeholder='请输入内容' onInput={this.inputChange}/>
          <Button className='btn-max-w todo-addBtn' plain onClick={this.delAllHandle}>清除</Button>
        </View>
        <View className='show-value'>{this.state.value}</View>
        <View className='show-value' onClick={this.navigateTo}>下一页</View>
      </View>
    )
  }
}

