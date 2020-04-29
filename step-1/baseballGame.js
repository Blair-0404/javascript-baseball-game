const baseball = {}; // object이므로 const로 선언했는데 적절한지 모르겠다.

baseball.currentScore = {
  strike: 2,
  ball: 0,
  hit: 0,
  out: 0
};



baseball.showMessage = {
  startMessage: function () {
    console.log("첫 번째 타자가 타석에 입장했습니다.")
  },
  strikeMessage: function () {
    console.log("스트라이크!")
  },
  ballMessage: function () {
    console.log("볼!")
  },
  hitMessage: function () {
    console.log("안타!")
  },
  outMessage: function () {
    console.log("아웃!")
  },
  nextPayerMessage: function () {
    console.log("다음 타자가 타석에 입장했습니다.")
  },
  currentScoreMessage: function () {
    let strike = baseball.currentScore.strike;
    let ball = baseball.currentScore.ball;
    let out = baseball.currentScore.out;
    console.log(`[ 현재스코어 = ${strike}S ${ball}B ${out}O ]`);
  },
  gameOverMessage: function () {
    let hit = baseball.currentScore.hit;
    console.log(`[ 최종 안타수 = ${hit} ] \n\ -GAME OVER-`);
  }
};


baseball.playGame = function () {
  this.getStrike();


};


baseball.playGame();

