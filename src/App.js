import './App.css';
import Chart from './Components/Charts/Chart';
import NavBar from './Components/Navbar/Nav';
import Price from './Components/Pricing/Price';



function App() {

  return (
    <div className="App">
      <NavBar></NavBar>
      <h4 className='text-4xl font-bold underline'>Hi this is Reshad</h4>
      <p className='text-2pxl font-bold'>This the text on for the basic concept of the</p>
      <Price></Price>
      <Chart></Chart>
    </div>
  );
}

export default App;
