import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = { one: 0, two: 0, ans: 0,err: '' };
    }
    render() {
        
        return (
            <div className="ui container" style={{ height: '600px', width: '800px', backgroundColor: 'aliceblue', marginTop: '100px', marginLeft: '300px' }}>
     

     
              
  
                <h1 className="ui huge header" style={{ marginLeft: '260px' }}>BASIC CALCULATOR</h1>
                <form style={{ marginTop: '20px' }} className="ui form">
                    <center>
                        <label className="ui massive label" style={{ backgroundColor:'lightblue' }}>Number1</label><br/><br/>
                    <input className="ui input" type="number" value={this.state.one} onChange={this.inputOne}/><br/><br/><br/>
                        <label className="ui massive label" style={{ backgroundColor: 'lightblue' }}>Number2</label><br/><br/>
                    <input className="ui input" type="number" value={this.state.two} onChange={this.inputTwo} /><br /><br /><br /></center>
                    <button style={{ marginLeft: '120px', backgroundColor:'lightblue' }} className="ui massive button" onClick={this.addBtn} >ADD</button>&nbsp;&nbsp;&nbsp;&nbsp;
                    <button style={{ backgroundColor: 'lightblue'}} className="ui massive button" onClick={this.subBtn}>SUB</button>&nbsp;&nbsp;&nbsp;&nbsp;
                    <button style={{ backgroundColor: 'lightblue' }} className="ui massive button" onClick={this.mulBtn}>MUL</button>&nbsp;&nbsp;&nbsp;&nbsp;
                     <button style={{ backgroundColor: 'lightblue' }} className="ui massive button" onClick={this.divBtn}>DIV</button>&nbsp;&nbsp;&nbsp;&nbsp;
                </form><br /><br />
                <Answer one={this.state.one} two={this.state.two} ans={this.state.ans} err={this.state.err} />
            </div>
            
            );
    }
            

    inputOne=(event)=> {
        console.log(event.target.value);
        this.setState({ one: event.target.value });
       
    }
    inputTwo = (event) => {
        console.log(event.target.value);
        this.setState({ two: event.target.value });

    }
    addBtn = (event) => {

        event.preventDefault();
         this.setState({ ans:  Number(this.state.one)  +  Number(this.state.two)  });
    }
    subBtn = (event) => {

        event.preventDefault();
        this.setState({ ans: Number(this.state.one) - Number(this.state.two) });
    }
    mulBtn = (event) => {

        event.preventDefault();
        this.setState({ ans: Number(this.state.one) * Number(this.state.two) });
    }
    divBtn = (event) => {

        event.preventDefault();
        if (this.state.two != 0)
            this.setState({ ans: Number(this.state.one) / Number(this.state.two) });
        else {
            this.setState({ err: "denominator should not be zero" });
        }
    }
}
const Answer = (props) => {
    if (!props.err)
        return (
            <div>

                <h1 clasName="ui header" style={{ marginLeft: '200px' }}> Answer is:{props.ans}</h1>
            </div>




        );
    else
       return (
            <div>

               <h1 className="ui header" style={{ marginLeft: '200px' }}>  is:{props.err}</h1>
           </div>
        );
    
    
}


ReactDOM.render(<App />, document.querySelector('#root'));