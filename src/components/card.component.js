import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtCard } from 'taro-ui'

export default class CardComponent extends Component {
    render() {
        const {
            note,
            contents,
            title,
            thumb = ''
        } = this.props;
        return (
            <AtCard
                note={note}
                title={title}
                thumb={thumb}
            >
                {contents}
            </AtCard>
        )
    }
}