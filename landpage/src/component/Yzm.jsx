import React from 'react'

export default class Yzm extends React.Component{
  constructor (props) {
    super(props);
    this.state = {
      timer: 60,
      btnLoading: false
    }
    this.btnClick = () => {
      this.setState({btnLoading: true})
      var interval = setInterval(() => {
        let timer = this.state.timer
        timer--
        if (timer < 1) {
          clearInterval(interval)
          this.setState({timer: 60, btnLoading: false})
        } else {
          this.setState({timer: timer})
        }
      }, 1000)
    }
  }
  render () {
    const btnCss = {
      float: 'right',
      width: this.props.width || '2.1rem',
      background: this.state.btnLoading ? '#ccc' : this.props.background || '#ffb81e',
      height: this.props.height || '.9rem',
      display: 'block',
      margin: '0 auto',
      color: this.props.color || '#fff',
      border: this.props.border || 'none',
      fontSize: this.props.fontSize || '.26rem',
      borderRadius: this.props.borderRadius || '0'
    }
    return (
      <button style={btnCss} onClick={this.btnClick} disabled={this.state.btnLoading}>
        {this.state.btnLoading ? `${this.state.timer}S` : '发送验证码'}
      </button>
    )
  }
}
