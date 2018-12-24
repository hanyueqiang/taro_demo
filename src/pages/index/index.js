import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtGrid } from 'taro-ui'
import './index.scss'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }
  state = {
    value: ''
  }

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

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

  navigateTo() {
    Taro.navigateTo({
      url: '/pages/about/about'
    })
  }

  render() {
    return (
      <View className='index'>
        <View className='index'>
        <AtGrid data={
          [
             {
               image: '',
               value: '领取中心'
             },
             {
               image: '',
               value: '找折扣'
             },
             {
               image: '',
               value: '领会员'
             }
           ]
         } />
        </View>
      </View>
    )
  }
}

