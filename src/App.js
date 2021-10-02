import Navbar from './Navbar';
import Home from './Home';
function App() {
  // const title='Welcome to the new blog!';  //similarly we can print numbers, strings and arrays but not objects or bool
  // const link='https://www.google.com';
  return (
    <div className="App">
      <Navbar />  
      {/* //simply a self closing tag, we can open and close it too */}
      <div className="cont">
        <Home />
      </div>
    </div>
  );
}   
      //components (could be navbar, article, sidebar etc) contain templates and logic, they are essentially functions that return something which is a jsx template (transpiled by babel) 
export default App;
