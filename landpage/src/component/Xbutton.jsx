import React from 'react'

export default class Xbutton extends React.Component{
  render () {
    const btnCss = {
      width: this.props.width || '6.4rem',
      background: this.props.btnLoading ? '#ccc' : this.props.background || '#ffb81e',
      height: this.props.height || '.9rem',
      display: 'block',
      margin: '0 auto',
      color: this.props.color || '#fff',
      border: 'none',
      fontSize: this.props.fontSize || '.26rem',
      borderRadius: this.props.borderRadius || '0'
    }
    return (
      <button style={btnCss} onClick={this.props.btnClick} disabled={this.props.btnLoading}>
        {this.props.btnLoading ? this.props.loadingTxt : this.props.text}
      </button>
    )
  }
}
// 使用方法
// <Xbutton background='#ffb81e' btnClick={this.btnClick.bind(this)} text="提交" btnLoading={this.state.btnLoading} loadingTxt="保存中..."/>
