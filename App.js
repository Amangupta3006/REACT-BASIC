//------event handler------
function handleClick(){
  alert('button clicked');
}

export function My(){
  return(
    <h1>hello</h1>
  );
}

function Button(){
  return(
    <button onClick={handleClick}>Click me!</button>
  );
}

export default Button;