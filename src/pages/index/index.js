import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtButton } from 'taro-ui'
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
        <View className='index'>
         <AtButton type='primary'>按钮文案</AtButton>
        </View>
      </View>
    )
  }
}

