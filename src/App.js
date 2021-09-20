import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['Rubel', 'Bapparaj', 'Koober', 'Bappi', 'Shuvo', 'Omorsani']
  return (
    <div className="App">
      <ul>
        {
          nayoks.map(nayok => <li>{nayok}</li>)
        }
      </ul>
      <Person name={nayoks[0]} nayika='Mousumi'></Person>
      <Person name={nayoks[1]} nayika='Cheka'></Person>
      <Person name={nayoks[2]} nayika='kopila'></Person>
    </div>
  );
}

/*
<p id="title">title</p>
      <Friend phone='01700' address='noyakhali'></Friend>
      <Friend phone='01800' address='Rangpur'></Friend>
      <Friend phone='01600' address='Jessor'></Friend>
      <Friend phone='01900' address='Dhaka'></Friend>
*/

function Person(props) {
  console.log(props);
  const person = {
    backgroundColor: 'skyblue',
    border: '3px solid lightsalmon',
    margin: '20px',
    borderRadius: '10px'
  }
  return (
    <div style={person}>
      <h1>Name: {props.name}</h1>
      <h4>Hero of: {props.nayika}</h4>
    </div >
  )
}

function Friend(props) {
  console.log(props);
  return (
    <div className='person'>
      <h3>Phone: {props.phone} </h3>
      <h5>Address: {props.address} </h5>
    </div>
  );
}

export default App;



/*
<Person name='Rubel' nayika='Mousumi'></Person>
      <Person name='Bapparaj' nayika='Cheka'></Person>
      <Person name='Koober' nayika='kopila'></Person>
*/