
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
function App() {
  return (
    <>
   
<Navbar title="Text" about="AbouUs"/>
<div className="Container">

<TextForm heading="Enter the text to analyse"/>
</div>
    </>
   
  );
}
export default App;
