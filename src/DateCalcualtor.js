// @flow

import React, {Component} from 'react';
import moment from 'moment';
import './App.css';

type Props = {

};

type State = {
  calculatedText: string,
}

// js 영역
class DateCalcualtor extends Component<Props, State> {
  // state가 어떤 구조를 가지고있는 데이터, {}
  // {}구조 안에 calculatedText 라는 key, "" value를 가지고있다
  state = {
    calculatedText: "" ,
  };

  mimi: Function;

  constructor(props: any) {
    super(props);

    this.mimi = this.mimi.bind(this);
  }

  mimi() {
    // js 영역
    // js 영역에서의 {} -> 구조체
    let anniversaryMoment: moment = moment(document.getElementById("anniversary").value);
    let todayMoment: moment = moment();
    let result: number = todayMoment.diff(anniversaryMoment,"days") + 1;


    this.setState({
      calculatedText: `${result} days`,
    });
  }

  render() {
    // 뭔가를 쓰면 js let

    return (
      // html 영역
      <div className="App">
        <br/>
        YourAnniversary: <input type="date" id={"anniversary"} name={"YourAnniversary"} value="2017-10-11" /> <br/>
        <input type={"submit"} value={"Tada"} onClick={this.mimi}/>
        <br/> <br/>
        {/* js 변수를 꼭 쓰고싶어 -> {} 표시, {}안에 있는 녀석이 js let */}
        result: {this.state.calculatedText}
      </div>
      // html
    );
  }
}

export default DateCalcualtor;
