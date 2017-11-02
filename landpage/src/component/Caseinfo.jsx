import React from 'react'

export default class Caseinfo extends React.Component{
  constructor (props) {
    super(props);
    this.state = {
      list: [
          {
          name: '林小姐',
          work: '房贷组合贷款',
          headImg: 'https://www.xxjr.com/xxkd/images/loan/person3.jpg',
          mount: '150万',
          month: 36,
          time: 7,
          rate: 0.49,
          desc: '林小姐是一家上市公司业务主管，已经在这家公司工作了7年多。现准备自己创办一家新公司，但因缺乏创业资金，准备贷款150万。经核实其名下确实有一套价值200万全款房产可作抵押，从林小姐递交申请到放款仅用7天时间。'
        },
        {
          name: '李先生',
          work: '小额贷款',
          headImg: 'https://www.xxjr.com/xxkd/images/loan/person2.jpg',
          mount: '10万',
          month: 24,
          time: 1,
          rate: 1.2,
          desc: '李先生是一家国企公司雇员，已经稳定工作8年多，打卡工资8000+。现因个人原因急需用钱。联系我司准备贷款10万元。经审核其个人信用为良好，公司当天就完成放款。李先生当然拿到贷款后非常惊讶，直言自己并没有想到会这么快拿到贷款。'
        },
        {
          name: '方先生',
          work: '无抵押贷款',
          headImg: 'https://www.xxjr.com/xxkd/images/loan/person5.jpg',
          mount: '5万',
          month: 24,
          time: 1,
          rate: 1.2,
          desc: '方先生是一名公办学校老师，教书育人已经快10年了，月薪5000+，今年他的第二个儿子出生了。经济压力越来越大，方先生斟酌再三后决定开一家淘宝店做第二职业。因手头资金有限，联系我司申请贷款5万。经核实方先生信用良好，家人也同意其贷款，只用1天时间方先生就收到了贷款。'
        }
      ]
    }
  }
  render () {
    return (
      <div className="case-info">
      {
          this.state.list.map((item, index) => {
            return (<div className="group" key={index}>
                      <div className="group-top clearfix">
                        <div className="person-img fl">
                            <img src={item.headImg} alt="顾问头像"/>
                        </div>
                        <div className="person-info fl">
                          <div className="person-name">{item.name}<i>[{item.work}]</i></div>
                          <div className="loan-info loan-money clearfix">
                            <div className="left fl">贷款金额 <i>{item.mount}</i></div>
                            <div className="right fl">贷款期限 <i>{item.month}个月</i></div>
                          </div>
                          <div className="loan-info clearfix">
                            <div className="left fl">放款时间 <i>{item.time}天</i></div>
                            <div className="right fl">月利率 <i>{item.rate}%</i></div>
                          </div>
                        </div>
                      </div>
                  <div className="group-text group-more">{item.desc}</div>
                </div>)
          })
      }
      </div>
    )
  }
}
