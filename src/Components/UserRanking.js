// https://stackoverflow.com/questions/48492577/
// how-to-sort-json-data-in-reactjs/48492631
// peguei a img do Header, talvez tenha que fazer o reducer
// duvida linha 19 img
import React from 'react';

function DadosUser(props) {
  const { picture, index, name, score } = props;
  return (
    <div>
    <img src={picture} alt="Avatar Player Name" />
    <p data-testid={`player-name-${index}`}>{name}</p>
    <p data-testid={`player-score-${index}`}>{score}</p>
  </div>
  );
}

class UserRanking extends React.Component {
  render() {
    const users = JSON.parse(localStorage.getItem('ranking'));
    // usar o sort para organizar o ranking
    // como é decrescente tem que ser b - a
    const userScore = users.sort((a, b) => b.score - a.score);
    return (
      <div>
        <title data-testid="ranking-title">Ranking</title>
        <div>
          {userScore.map((user, index) => (
            <DadosUser index={index} picture={user.picture} name={user.name} score={user.score} />
          ))}
        </div>
      </div>
    )
  }
}

  export default UserRanking;
