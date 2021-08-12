import React, { Component } from "react";

class Calculation extends Component {
  constructor() {
    super();
    this.state = {
      operator: 1,
      result:0,
      x:0,
      y:0,
      sign:"click toggle to change"
    }
  }
  render(){
    const handleOperator=()=>{
        if(this.state.operator<4)
            this.setState(state=>({operator:this.state.operator+1}))
        else
            this.setState(state=>({operator:1}))
      }
      const handleResult=()=>{
        console.log(this.state.result,this.state.x,this.state.y)
        switch(this.state.operator){
            case 1:
                this.setState(state=>({result:Number(this.state.x)+Number(this.state.y),sign:"+"}))
                break
            case 2:
                this.setState(state=>({result:this.state.x-this.state.y,sign:"-"}))
                break;
            case 3:
                this.setState(state=>({result:this.state.x*this.state.y,sign:"X"}))
                break;
            case 4:
                this.setState(state=>({result:this.state.x/this.state.y,sign:"/"}))
                break;
        }
      }
      return(
          <div style={{margin:"20px"}}>
              <input type="number" onChange={e=>this.setState(state=>({x:e.target.value}))} />
              {this.state.sign}
              <input type="number" onChange={e=>this.setState(state=>({y:e.target.value}))} />
              ={this.state.result}
              <br/>
              <button onClick={()=>{handleOperator();handleResult()}}>Toggle</button>
          </div>
      )
  }
}
export default Calculation;
