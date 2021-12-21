import React from "react";

class App extends React.Component{

  state = {
    nome: ''
  }

  modificarNome = (event) => {
    this.setState({
      nome: event.target.value
    })
  }

  criarComboBox = () => {
    const opcoes = [ 'Fulano', 'Cicrano' ]
    const comboBoxOpcoes = opcoes.map(opcao => <option>{opcao}</option>)

    return (
      <select>
        {comboBoxOpcoes}
      </select>
    )
  }

  render(){
    return(
      <>
        <input type="text" value={this.state.nome} onChange={this.modificarNome} />
        <h1>Hello: {this.state.nome}</h1>
        { this.criarComboBox() }
      </>
    )
  }
}

export default App;
