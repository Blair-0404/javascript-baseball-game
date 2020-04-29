const baseball = {}; // Q. object이므로 const로 선언했는데 적절한지 모르겠다.

baseball.currentScore = {
  strike: 2,
  ball: 0,
  hit: 0,
  out: 0
};

baseball.selectRandomResult = function() {
  // todo 1~4중 하나가 랜덤으로 나오게
  // todo 나온 값에 따른 switch / case 실행문 코딩하기
};

baseball.resetStrikeAndBall = function() {
  this.currentScore.strike = 0;
  this.currentScore.ball = 0;
};

baseball.getStrike = function () {
  this.showMessage.strikeMessage();
  this.currentScore.strike++;

  if (this.currentScore.strike === 3) {
    this.resetStrikeAndBall();
    this.currentScore.out++; // Q. 15,16 이 둘은 과연 동시에 일어날까?

    if (this.currentScore.out === 3) {
      // todo 3아웃인지 조건걸고 3아웃이면 경기종료!
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

  this.baseball.getThreeOut();
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
  this.showMessage.startMessage();

};


baseball.playGame();

