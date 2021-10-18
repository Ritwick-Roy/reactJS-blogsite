import Navbar from './Navbar';
import Home from './Home';
function App() {
  return (
    <div className="App">
      <Navbar />  
      <div className="cont">
        <Home />
      </div>
    </div>
  );
}   
export default App;
//state of component basically means data being used in that component at that moment of time (array,boolean etc)
