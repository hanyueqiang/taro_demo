import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtGrid, AtButton, AtToast } from 'taro-ui'
import './index.scss'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }
  state = {
    value: '',
    isOpened: false
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

  navigateTo(e) {
    let url = '/pages/about/jsbase'
    if (e == 'vue') {
      url = '/pages/about/vue'
    } else if (e == 'react') {
      url = '/pages/about/react'
    } else if (e == 'node') {
      this.setState({
        isOpened: true
      })
      return
      //url = '/pages/about/node'
    }
    Taro.navigateTo({
      url
    })
  }

  render() {
    return (
      <View className='index'>
        <View className='index'>
          <View className='index-title'>
            面试宝典
          </View>
          <View className='index-aBtn'>
            <AtButton type='primary' className='index-button' onClick={this.navigateTo.bind(this, 'js')}>JS基础</AtButton>
          </View>
          <View className='index-aBtn'>
            <AtButton type='primary' className='index-button' onClick={this.navigateTo.bind(this, 'vue')}>Vue</AtButton>
          </View>
          <View className='index-aBtn'>
            <AtButton type='primary' className='index-button' onClick={this.navigateTo.bind(this, 'react')}>React</AtButton>
          </View>
          <View className='index-aBtn'>
            <AtButton type='primary' className='index-button' onClick={this.navigateTo.bind(this, 'node')}>NodeJs</AtButton>
          </View>
        </View>
        <AtToast
          isOpened={this.state.isOpened}
          icon={'clock'}
          duration={2000}
          text={'正在开发中...'}
        ></AtToast>
      </View>
    )
  }
}

