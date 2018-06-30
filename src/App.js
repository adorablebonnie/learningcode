// @flow

import React, {Component} from 'react';
import './App.css';
import DateCalcualtor from './DateCalcualtor';

type Props = {
};

type State = {
}

// js 영역
class App extends Component<Props, State> {
  constructor(props: any) {
    super(props);

  }

  render() {
    // 뭔가를 쓰면 js let

    return (
      // html 영역
      <div className="App">
        <DateCalcualtor />
      </div>
      // html
    );
  }
}

export default App;
