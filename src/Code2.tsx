// import React, { Component } from 'react'; 

// class Counter extends Component { 
//   state = {
//     count: 0
//   };

//   increment = () => {
//     this.setState({ count: this.state.count + 1 }); 
//   };

//   render() { 
//     return (
//       <div> 
//         <p>Count: {this.state.count}</p> 
//         <button onClick={this.increment}>Increment</button> 
//       </div>
//     );
//   }
// } 

// export default Counter;


//Conversion 


import React, { Component } from 'react';

// Define the types for the component's state
interface CounterState {
  count: number;
}

// Define the `Counter` class as extending `Component`.

class Counter extends Component<{}, CounterState> {
  
  //Initialize the component's state with the `count` property set to 0.
    state: CounterState = {
    count: 0
  };

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;



