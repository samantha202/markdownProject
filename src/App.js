import { Component } from 'react/cjs/react.production.min';
import './App.css';
import {sampleText}  from './sampleText';
import { marked } from 'marked';

class App extends Component{
  state = {
    text: sampleText
  }
  handleChange = event =>{
    const text = event.target.value
    this.setState({text})
  }
  renderText = text =>{
   const __html = marked(text, {sanitize: true})
   return {__html}
  }
  componentDidMount(){
   const text = localStorage.getItem('text')
   
   if(text){
     this.setState({text})
   }else{
     this.setState({text: sampleText})
   }
  }
  componentDidUpdate(){
    const {text } = this.state
    localStorage.setItem('text', text)
  }
  render () {
    return (
      <diV className="container">
        <div className="row">
          <div className="col-sm-6">
            <textarea className='form-control' rows='35' value={this.state.text} onChange= {this.handleChange}>
            </textarea>
          </div>
        <div className='col-sm-6'>
          <div dangerouslySetInnerHTML={this.renderText(this.state.text)}></div>
        </div>
        </div>
      </diV>
    );
  }
}

export default App;
