import './App.css';

function App() {
  const handleClickFunction = () => {
    document.body.style.background = result.value
  };  

  return (
    <div className="container d-flex flex-column align-items-center">
      <h3 id='h3'>Pick any color:</h3>
      <input type="color" className='form-control form-control-color' id='result'/><br />
      <button type="button" className="btn" onClick={handleClickFunction}>
        Click Here!
      </button>
      <h3 className="subhead">Let the colors take over your screen! 🎨</h3>
    </div>
  );
}

export default App;