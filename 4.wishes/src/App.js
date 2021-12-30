import "./App.css";

let curr = new Date();
// alert(currTime);
// console.log(currTime)

let yr = curr.getFullYear();
let mnt = curr.getMonth();
let dt = curr.getDate();

let hr = curr.getHours()+1;
let mn = curr.getMinutes();

function getGreet(hr){
  if(hr>4 && hr<12){
    return "Good Night";
  }else if(hr>=12 && hr<=16){
    return "Good Afternoon";
  }else if(hr>17 && hr<21){
    return "Good Evening";
  }else{
    return "Good Night";
  }
}

function App() {
  return (
    <div className="App">
      <h1>The Date is {yr +"."+ (mnt+1) + "."+ dt}</h1>
      <h1>The Time is {(hr-1) +":"+ mn}</h1>
      <h2>{getGreet(hr)}</h2>
    </div>
  );
}

export default App;
