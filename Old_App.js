import "./App.css";
import React from "react";
import ReactFCCtest from "react-fcctest";

// I was mostly focusing a lot on the CSS and the layout of the page than refractoring my code and making it more efficient. 
// this code is not very DRY and I know that.
// I will be working on that in the future...

const nums = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
const ops = ["/", "*", "-", "+"];

class App extends React.Component {
  state = {
    lastPressed: undefined,
    calc: '0',
    operation: undefined,
  };


handleClick = (e) => {
    const { innerText } = e.target;
    const {lastPressed, calc } = this.state;
     switch (innerText) {
      case "AC": {
        this.setState({
           calc: "0",
        });
        break;
      }
      case '=': {
        const evaluated = eval(calc);
        this.setState({
      
          calc: evaluated
        });
        break;
      }

      case '.':{
        const splitted = calc.split(/[\+\-\*\/]/);
        const last = splitted.slice(-1)[0];
        
        if(!last.includes('.')) {
          this.setState({
            calc: calc+'.'
          })
        }

         break;
      }
      default:{
         let e = undefined;
         //ops of the ops object at the start not the innertext operators
   
         if(ops.includes(innerText)){
          if(ops.includes(lastPressed) &&  innerText != '-'){
            const lastNumberIdx = calc.split('').reverse()
                .findIndex(char => char !== ' ' && nums.includes(+char)); 
            e = calc.slice(0, calc.length - lastNumberIdx) + ` ${innerText} `;
         } else {
           e = `${calc} ${innerText} `;
         }
        
        } else{
          e  = (calc === "0") ? innerText : (calc + innerText);
        }
          this.setState({
            calc: e
            
          });
        }
      }
    

       
    this.setState({
      lastPressed: innerText
    })
   

  };
  render() {
    const { currentNumber, calc } = this.state;
    return (
      <div className="box">
        <div>
          <ReactFCCtest />
        </div>
        {/* <p style={{ position: "absolute", top: 0 }}>
          {JSON.stringify(this.state, null, 2)}{" "}
        </p> */}
        <div className="calculatrice">
          <div className="calculator__sun-container">
            <div className="calculator__sun-battery"></div>
            <div>
              <h2 className="brand">
                JS Super<span>90's</span>
              </h2>
            </div>
          </div>

          <div className="calculator__screen-container">
            <input id="display"
              type="text"
              className="calculator__screen"
              value={calc}
            ></input>
          </div>
          {/* this is really redundant but I decided to use grids for the styling  */}
          <div className="button_container">
            <button onClick={this.handleClick} className="reset" id="clear">
              AC
            </button>
            <button onClick={this.handleClick} className="ce">
              CE
            </button>
            <button onClick={this.handleClick} className="operation" id="divide">
              /
            </button>
            <button onClick={this.handleClick} className="multi" id="multiply">
              *
            </button>
            <button onClick={this.handleClick} className="sept" id="seven">
              7
            </button>
            <button onClick={this.handleClick} className="huit" id="eight">
              8
            </button>
            <button onClick={this.handleClick} className="neuf" id="nine">
              9
            </button>
            <button onClick={this.handleClick} className="minus" id="subtract">
              -
            </button>
            <button onClick={this.handleClick} className="quatre" id="four">
              4
            </button>
            <button onClick={this.handleClick} className="cinq" id="five">
              5
            </button>
            <button onClick={this.handleClick} className="six" id="six">
              6
            </button>
            <button onClick={this.handleClick} className="plus" id="add">
              +
            </button>
            <button onClick={this.handleClick} className="un" id="one">
              1
            </button>
            <button onClick={this.handleClick} className="deux" id="two">
              2
            </button>
            <button onClick={this.handleClick} className="trois" id="three">
              3
            </button>
            <button onClick={this.handleClick} className="zero" id="zero">
              0
            </button>
            <button onClick={this.handleClick} className="point" id="decimal">
              .
            </button>
            <button onClick={this.handleClick} className="equal" id="equals">
              =
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;