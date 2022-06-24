import logo from './img/lucas.jpg';
import './App.css';

function App() {
  
  const onClickBotao = () => {
    alert('Boa noite.')
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Bem-vindo ao meu primeiro projeto React!</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Me chamo Lucas Ferreira e tenho 23 anos.
        </p>
        <button onClick = {onClickBotao}>CLIQUE AQUI!</button>
      </header>
    </div>
  );
}

export default App;
