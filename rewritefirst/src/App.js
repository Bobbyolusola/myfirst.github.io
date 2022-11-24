import logo from './logo.svg';
import './App.css';
import Button from './Component/Button';



const Ihor = () => {
    console.log("Ihor");
    const handleButtonClick = () => {
        alert('CLICK')
    }


  return (
    <div className="App">
        <h1>Hello</h1>
        <div className="wrapper">
            <h3>Ihor's Page</h3>
            <span>ihor's first changes</span>
            <Button title='Click me' handleClick={handleButtonClick}/>
        </div>
        <div>
            <span>This is my new page</span>
        </div>
    </div>
  );
}

export default Ihor;
