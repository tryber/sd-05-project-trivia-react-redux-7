// referencia https://github.com/brix/crypto-js
// plantao e slack Pedro Calado
import { MD5 } from 'crypto-js';

const API = 'https://www.gravatar.com/avatar/';

const imagem = 'https://www.gravatar.com/avatar/2d3bf5b67282f5f466e503d7022abcf3';

const login = (email) => {
    console.log(`${API}${MD5(email.toLowerCase())}`);
    return fetch(`${API}${MD5(email.toLowerCase())}`)
        .then((response) => (
            response
                .json())
                .then((json) => json)
                .catch((error) => error)
        )
}

export default login;
