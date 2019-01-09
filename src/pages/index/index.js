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

  navigateTo(e) {
    let url = '/pages/about/jsbase';
    // if (e == 'js') {

    // }else if() {

    // }
    Taro.navigateTo({
      url: '/pages/about/jsbase'
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
            <AtButton type='primary' className='index-button' onClick={this.navigateTo.bind(this, 'js')}>JS基础 >></AtButton>
          </View>
          <View className='index-aBtn'>
            <AtButton type='primary' className='index-button' onClick={this.navigateTo.bind(this, 'vue')}>Vue >></AtButton>
          </View>
          <View className='index-aBtn'>
            <AtButton type='primary' className='index-button' onClick={this.navigateToReact.bind(this, 'react')}>React >></AtButton>
          </View>
          <View className='index-aBtn'>
            <AtButton type='primary' className='index-button' onClick={this.navigateToVue.bind(this, 'node')}>NodeJs >></AtButton>
          </View>
        </View>
      </View>
    )
  }
}

