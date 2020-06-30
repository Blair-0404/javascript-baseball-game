const baseball = {}; // Q. object이므로 const로 선언했는데 적절한지 모르겠다.

baseball.currentScore = {
  strike: 0,
  ball: 0,
  hit: 0,
  out: 0
};


baseball.selectRandomResult = function () {
  let randomResult = Math.floor(Math.random() * 4);

  switch (randomResult) {
    case 0:
      this.getStrike();
      break;
    case 1:
      this.getBall();
      break;
    case 2:
      this.getHit();
      break;
    case 3:
      this.getOut();
      break;
    default:
      console.error('error');
  }
};

baseball.getStrike = function () {
  this.showMessage.strikeMessage();
  this.currentScore.strike++;

  if (this.currentScore.strike === 3) {
    this.resetStrikeAndBall();
    this.currentScore.out++; // Q. 15,16 이 둘은 과연 동시에 일어날까?

    if (this.currentScore.out === 3) {
      return this.getThreeOut();
    } else {
      this.showMessage.outMessage();
      this.showMessage.nextPayerMessage();
    }
  }

  this.showMessage.currentScoreMessage()
};


baseball.getBall = function () {
  this.showMessage.ballMessage();
  this.currentScore.ball++;

  if (this.currentScore.ball === 4) {
    this.resetStrikeAndBall();
    this.currentScore.hit++;
  }

  this.showMessage.currentScoreMessage()
};


baseball.getHit = function () {
  this.showMessage.hitMessage();
  this.showMessage.nextPayerMessage();
  this.resetStrikeAndBall();
  this.currentScore.hit++;
  this.showMessage.currentScoreMessage()
};


baseball.getOut = function () {
  this.resetStrikeAndBall();
  this.currentScore.out++;
  this.getThreeOut();
};


baseball.getThreeOut = function () {

  if (this.currentScore.out === 3) {
    this.showMessage.outMessage();
    this.showMessage.currentScoreMessage();
    this.showMessage.gameOverMessage();
  } else {
    this.showMessage.outMessage();
    this.showMessage.nextPayerMessage();
    this.resetStrikeAndBall();
    this.showMessage.currentScoreMessage()
  }
};


baseball.resetStrikeAndBall = function () {
  this.currentScore.strike = 0;
  this.currentScore.ball = 0;
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
    let strike = baseball.currentScore.strike; // let strike =this.currentScore.strike 으로 접근불가 -> 공부해보기
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
  this.showMessage.startMessage();
  while (this.currentScore.out < 3) {
    this.selectRandomResult();
  }
};


baseball.playGame();

