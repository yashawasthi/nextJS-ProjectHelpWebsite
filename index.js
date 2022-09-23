//if-else
function UserSignIn(props) {  
    return <h1>Welcome back!</h1>;  
  }  
  function GuestSignIn(props) {  
    return <h1>Please sign up.</h1>;  
  }  
  function SignUp(props) {  
    const isSignIn = props.isSignIn;  
    if (isSignIn) {  
      return <UserSignIn />;  
    }  
    return <GuestSignIn />;  
  }    
  ReactDOM.render(  
    <SignUp isSignIn={false} />,  
    document.getElementById('root')  
  );  
  //Ternary Operator
       render() {  
    const isSignIn = this.state.isSignIn;  
    return (  
      <div>  
        Welcome {isSignIn ? 'Back' : 'Please login first'}.  
      </div>  
    );  
  }  
  //Logical Operator
    render(){
          return (
      <div> 
            {(20>5)&& alert("20 is greater than 5")}
  </div>
  )}
  