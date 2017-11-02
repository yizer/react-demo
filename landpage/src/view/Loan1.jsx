import React, { Component } from 'react';
import Xbutton from '../component/Xbutton'
import Yzm from '../component/Yzm'
import Caseinfo from '../component/Caseinfo'
import bgImg from '../assets/img/login_bg.png';
import Tool from '../utils/Tool';
const checkForm = {name: '姓名', telephone: '手机号', yzm: '验证码'}

export default class Loan1 extends Component {
  constructor (props) {
    super(props)
    this.state = {
      btnLoading: false,
      form: {
        name: '',
        telephone: '',
        yzm: ''
      }
    }
    this.getInputVal = (e) =>{
      let form = this.state.form
      form[e.target.name] = e.target.value
      this.setState({form: form})
    }
  }
  save () {
    for (let key in checkForm) {
      if (this.state.form[key] === '') {
        Tool.toast(`请输入${checkForm[key]}`)
        return
      }
    }
    this.setState({btnLoading: true})
    Tool.ajax({
      url: '/cpQuery/animation/templateList',
      data: this.state.form,
      success (res) {
        alert('保存成功')
        this.setState({btnLoading: false})
      }
    })
  }
  render() {
    return (
      <div className="app">
        <div>
          <img src={bgImg} className="top-bg" alt="logo" />
        </div>
        <div className="form">
          <div className="input-item input-item1">
            <input placeholder="请填写您的姓名" className="input" maxLength="4" onChange={this.getInputVal} name="name"/>
          </div>
          <div className="input-item input-item2">
            <input placeholder="请输入您的手机号码" className="input" maxLength="11" onChange={this.getInputVal} name="telephone"/>
          </div>
          <div className="yzm-wrap">
            <div className="yzm-input-w"><input placeholder="请输入手机验证码" maxLength="8" onChange={this.getInputVal} name="yzm"/></div>
            <Yzm background="#e8e8e8" borderRadius=".08rem" width="2rem" border="1px solid #c9c9c9" color="#7d7e7f"/>
          </div>
        </div>
        <Xbutton background='#ffb81e' width="5.6rem" borderRadius=".08rem" fontSize=".32rem" btnClick={this.save.bind(this)} text="立即申请" btnLoading={this.state.btnLoading} loadingTxt="申请中..."/>
        <div className="protocol">同意<a id="JS-protocol">《小小金融服务协议》</a></div>
        <div className="case">
          <div className="case-title">
  					<div className="line"></div>
  					<p>成功案例</p>
  				</div>
          <Caseinfo/>
        </div>
      </div>
    )
  }
}
