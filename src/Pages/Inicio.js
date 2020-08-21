// ref botao https://stackoverflow.com/questions/29951322/how-i-can-do-that
// -login-button-disappear-when-i-login-jquery
// ref geral - Grupo 10
import React from 'react';

class Inicio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      jogador: '',
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { login, jogador } = this.state;
    return (
      <div>
        <label htmlFor="name">Name</label>
        <input name='jogador' type="text" data-testid="input-player-name" onChange={(event) => this.handleChange(event)} />
        <label htmlFor="email">Email</label>
        <input name='login' type="email" data-testid="input-gravatar-email" onChange={(event) => this.handleChange(event)} />
        <button id="playButton" data-testid="btn-play">Jogar</button>
        <button id="settings" data-testid="btn-settings">Configurações</button>
      </div>
    )
  }
}

export default Inicio;
<<<<<<< HEAD

/* O botão "Jogar" deve ser desabilitado caso email e/ou nome não estejam preenchidos
A pessoa que joga deve ter acesso à tela de configurações através da tela inicial

O botão que leva a pessoa a tela de configurações deve possuir o atributo data-testid com o valor btn-settings
A tela de configurações deve possuir um título com o atributo data-testid contendo o valor settings-title
A pessoa jogadora deve iniciar um jogo

Após clicar no botão "Jogar", a pessoa deve ser redirecionada para a tela do jogo
Ao clicar no botão "Jogar", um requisição para a API do Trivia deve ser feita para obter o token de jogador
O token deve ser armazenado na aplicação e enviado em todas as requisições seguintes.
Salve no LocalStorage o token recebido utilizando a chave token */
=======
*/
>>>>>>> f8fb509b479d014de6ba7cea69ae7226b85c30b1
