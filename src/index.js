// import React from 'react';
// import ReactDOM from 'react-dom';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// 转化为原生JS后的写法

let ref = null

class Hello extends React.Component {
  state = {
    count: 1
  }

  buttonClick = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    console.log('refs', this.refs)
    return <div><button onClick={this.buttonClick}>nihao</button></div>
  }
}

ReactDOM.render(
  <Hello ref={(el) => { ref = el }} toWhat={'haah'}></Hello>,
  document.getElementById('root')
)



// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
