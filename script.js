var GAME = { //игровая зона
    colorTop: '#ACF0F4',
    colorDown: '#419365',
    width: 1800,
    height: 900,
    colorText: '#13431D',
    colorGates: '#71586E',
}

var BALL = { //мячик
    color: 'white',
    x: 900,
    x0: 900,
    y: 850,
    y0: 850,
    radius: 35,
    xDirection1: -6,
    yDirection1: -7.68,
    yDirection2: -7.68,
    xDirection3: 6,
    yDirection3: -7.68,
    xDirection4: -6,
    yDirection4: -3.57,
    yDirection5: -5.355,
    xDirection6: 6,
    yDirection6: -3.57,
}

var GOALKEEPER = { //вратарь
    x: 865,
    y: 675,
    width: 70,
    height: 100,
    color: '#7A1927',
    x0: 865,
    y0: 675,
    x1: 465,
    x2: 865,
    x3: 1265,
    x4: 465,
    x5: 865,
    x6: 1265,
    y1: 303,
    y2: 303,
    y3: 303,
    y4: 577,
    y5: 577,
    y6: 577,
    scoreW: 0,
    scoreL: 0,
}

var random_b = 0;
var scoreW = 0;
var scoreL = 0;
const sigma = new Image();
sigma.src = "sigma.png";
const noSigma = new Image();
noSigma.src = "noSigma.png";

//подготовка инструметов рисования
var canvas = document.getElementById('canvas');
var canvasWidth = GAME.width;
var canvasHeight = GAME.height;
canvas.width = canvasWidth;
canvas.height = canvasHeight;
var canvasContext = canvas.getContext('2d');

function getRandomBall(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function drawGoalkeeper() { //отрисовка вратаря
    canvasContext.fillStyle = GOALKEEPER.color;
    canvasContext.fillRect(GOALKEEPER.x, GOALKEEPER.y, GOALKEEPER.width, GOALKEEPER.height);
}

function drawBall() { //отрисовывка мячика
    canvasContext.fillStyle = BALL.color;
    canvasContext.beginPath();
    canvasContext.arc(BALL.x, BALL.y, BALL.radius, 0, 2 * Math.PI);
    canvasContext.fill();
}

function drawStart() { //отрисовка стартового экрана
    canvasContext.fillStyle = GAME.colorTop;
    canvasContext.fillRect(0, 0, GAME.width, 750);
    canvasContext.fillStyle = GAME.colorDown;
    canvasContext.fillRect(0, 750, GAME.width, 150);
    canvasContext.font = "80px serif";
    canvasContext.fillStyle = GAME.colorText;
    canvasContext.fillText("Ты - вратарь сборной России))", 390, 150);
    canvasContext.font = "80px serif";
    canvasContext.fillStyle = GAME.colorText;
    canvasContext.fillText("Успей нажать на клавиатуре", 425, 250);
    canvasContext.font = "80px serif";
    canvasContext.fillStyle = GAME.colorText;
    canvasContext.fillText("номер зоны, в которую летит мячик", 350, 350);
    canvasContext.font = "80px serif";
    canvasContext.fillStyle = GAME.colorText;
    canvasContext.fillText("чтобы не подвести тренера!", 450, 450);
    canvasContext.font = "80px serif";
    canvasContext.fillStyle = GAME.colorText;
    canvasContext.fillText("- а это наш мячик", 950, 875);
    canvasContext.font = "80px serif";
    canvasContext.fillStyle = GAME.colorText;
    canvasContext.fillText("- это вратарь (ты)", 950, 730);
    canvasContext.font = "100px serif";
    canvasContext.fillStyle = GAME.colorText;
    canvasContext.fillText("Если готов, нажми 'S'", 480, 600);
    drawBall();
    drawGoalkeeper();
}

function drawBackground() { //отрисовка заднего фона
    canvasContext.fillStyle = GAME.colorTop;
    canvasContext.fillRect(0, 0, GAME.width, 750);
    canvasContext.fillStyle = GAME.colorDown;
    canvasContext.fillRect(0, 750, GAME.width, 150);
    canvasContext.fillStyle = GAME.colorGates;
    canvasContext.fillRect(275, 200, 1250, 25);
    canvasContext.fillStyle = GAME.colorGates;
    canvasContext.fillRect(275, 200, 25, 550);
    canvasContext.fillStyle = GAME.colorGates;
    canvasContext.fillRect(1500, 200, 25, 550);
    canvasContext.fillStyle = GAME.colorGates;
    canvasContext.fillRect(695, 200, 10, 550);
    canvasContext.fillStyle = GAME.colorGates;
    canvasContext.fillRect(1095, 200, 10, 550);
    canvasContext.fillStyle = GAME.colorGates;
    canvasContext.fillRect(275, 482, 1250, 10);
    canvasContext.font = "100px serif";
    canvasContext.fillStyle = GAME.colorGates;
    canvasContext.fillText("1", 350, 300);
    canvasContext.font = "100px serif";
    canvasContext.fillStyle = GAME.colorGates;
    canvasContext.fillText("2", 750, 300);
    canvasContext.font = "100px serif";
    canvasContext.fillStyle = GAME.colorGates;
    canvasContext.fillText("3", 1150, 300);
    canvasContext.font = "100px serif";
    canvasContext.fillStyle = GAME.colorGates;
    canvasContext.fillText("4", 350, 575);
    canvasContext.font = "100px serif";
    canvasContext.fillStyle = GAME.colorGates;
    canvasContext.fillText("5", 750, 575);
    canvasContext.font = "100px serif";
    canvasContext.fillStyle = GAME.colorGates;
    canvasContext.fillText("6", 1150, 575);
}

function drawSigma() {
    canvasContext.clearRect(0, 0, GAME.width, GAME.height);
    canvasContext.fillStyle = "#B7F6A5";
    canvasContext.fillRect(0, 0, GAME.width, GAME.height);
    canvasContext.font = "80px serif"
    canvasContext.fillStyle = "black"
    canvasContext.fillText("Ты - найстоящий сигма!!", 460, 100)
    canvasContext.font = "80px serif"
    canvasContext.fillStyle = "black"
    canvasContext.fillText("Чтобы сыграть ещё раз, нажми 'R'", 300, 200)
    canvasContext.drawImage(sigma, 600, 260, 600, 600)
}

function drawNoSigma() {
    canvasContext.clearRect(0, 0, GAME.width, GAME.height);
    canvasContext.fillStyle = "#FFDFDF";
    canvasContext.fillRect(0, 0, GAME.width, GAME.height);
    canvasContext.font = "80px serif"
    canvasContext.fillStyle = "black"
    canvasContext.fillText("Он недоволен ТВОЕЙ ИГРОЙ!!", 330, 100)
    canvasContext.fillStyle = "black"
    canvasContext.fillText("Чтобы сыграть ещё раз, нажми 'R'", 300, 200)
    canvasContext.drawImage(noSigma, 300, 240)
}

function initEventsListrners() { //считывание клавиатуры
    window.addEventListener("keydown", onCanvasKeyDown);
}

function onCanvasKeyDown(event) { //управление клавиатурой
    if ((event.key === "S") || (event.key === "Ы") || (event.key === "ы") || (event.key === "s")) {
        play();
    }
    if ((event.key === "R") || (event.key === "r") || (event.key === "К") || (event.key === "к")) {
        location.reload();
    }
    if ((event.key === "1") || (event.key === "!")) {
        bz1();
    }
    if ((event.key === "2") || (event.key === "@") || (event.key === '"')) {
        bz2();
    }
    if ((event.key === "3") || (event.key === "#") || (event.key === '№')) {
        bz3();
    }
    if ((event.key === "4") || (event.key === "$") || (event.key === ';')) {
        bz4();
    }
    if ((event.key === "5") || (event.key === "%")) {
        bz5();
    }
    if ((event.key === "6") || (event.key === "^") || (event.key === ':')) {
        bz6();
    }
    if ((event.key === "0") || (event.key === ")")) {
        naMesto();
    }
}

function naMesto() { //возвращаем вратаря и мячик на место
    GOALKEEPER.x = GOALKEEPER.x0;
    GOALKEEPER.y = GOALKEEPER.y0;
    BALL.x = BALL.x0;
    BALL.y = BALL.y0;
}

function aaaa() { //задаём направление мячика
    if ((BALL.x === BALL.x0) && (BALL.y === BALL.y0)) {
        random_b = getRandomBall(1, 7);
    }
}

function updateBall() { //полёт мячика
    if (random_b === 1) {
        BALL.x += BALL.xDirection1;
        BALL.y += BALL.yDirection1;
        if ((BALL.y < 338) && (BALL.x < 500)) {
            BALL.y = 338;
            BALL.x = 500;
        }
    }
    if (random_b === 2) {
        BALL.y += BALL.yDirection2;
        if ((BALL.y < 338) && (BALL.x === 900)) {
            BALL.y = 338;
            BALL.x = 900;
        }
    }
    if (random_b === 3) {
        BALL.x += BALL.xDirection3;
        BALL.y += BALL.yDirection3;
        if ((BALL.y < 338) && (BALL.x > 1300)) {
            BALL.y = 338;
            BALL.x = 1300;
        }
    }
    if (random_b === 4) {
        BALL.x += BALL.xDirection4;
        BALL.y += BALL.yDirection4;
        if ((BALL.y < 612) && (BALL.x < 500)) {
            BALL.y = 612;
            BALL.x = 500;
        }
    }
    if (random_b === 5) {
        BALL.y += BALL.yDirection5;
        if ((BALL.y < 612) && (BALL.x === 900)) {
            BALL.y = 612;
            BALL.x = 900;
        }
    }
    if (random_b === 6) {
        BALL.x += BALL.xDirection6;
        BALL.y += BALL.yDirection6;
        if ((BALL.y < 612) && (BALL.x > 1300)) {
            BALL.y = 612;
            BALL.x = 1300;
        }
    }
}

function bz1() { //полёт вратаря зона 1
    if ((GOALKEEPER.x === GOALKEEPER.x0) && (GOALKEEPER.y === GOALKEEPER.y0) && (BALL.y != 338)) {
        GOALKEEPER.x = GOALKEEPER.x1;
        GOALKEEPER.y = GOALKEEPER.y1;
    }
}

function bz2() { //полёт вратаря зона 2
    if ((GOALKEEPER.x === GOALKEEPER.x0) && (GOALKEEPER.y === GOALKEEPER.y0) && (BALL.y != 338)) {
        GOALKEEPER.x = GOALKEEPER.x2;
        GOALKEEPER.y = GOALKEEPER.y2;
    }
}

function bz3() { //полёт вратаря зона 3
    if ((GOALKEEPER.x === GOALKEEPER.x0) && (GOALKEEPER.y === GOALKEEPER.y0) && (BALL.y != 338)) {
        GOALKEEPER.x = GOALKEEPER.x3;
        GOALKEEPER.y = GOALKEEPER.y3;
    }
}

function bz4() { //полёт вратаря зона 4
    if ((GOALKEEPER.x === GOALKEEPER.x0) && (GOALKEEPER.y === GOALKEEPER.y0) && (BALL.y != 612)) {
        GOALKEEPER.x = GOALKEEPER.x4;
        GOALKEEPER.y = GOALKEEPER.y4;
    }
}

function bz5() { //полёт вратаря зона 5
    if ((GOALKEEPER.x === GOALKEEPER.x0) && (GOALKEEPER.y === GOALKEEPER.y0) && (BALL.y != 612)) {
        GOALKEEPER.x = GOALKEEPER.x5;
        GOALKEEPER.y = GOALKEEPER.y5;
    }
}

function bz6() { //полёт вратаря зона 6
    if ((GOALKEEPER.x === GOALKEEPER.x0) && (GOALKEEPER.y === GOALKEEPER.y0) && (BALL.y != 612)) {
        GOALKEEPER.x = GOALKEEPER.x6;
        GOALKEEPER.y = GOALKEEPER.y6;
    }
}

function score() { //считаем голы
    if ((GOALKEEPER.x === BALL.x - BALL.radius) && (GOALKEEPER.y === BALL.y - BALL.radius)) {
        scoreW += 1;
        GOALKEEPER.x = GOALKEEPER.x0;
        GOALKEEPER.y = GOALKEEPER.y0;
        BALL.x = BALL.x0;
        BALL.y = BALL.y0;
    }
    if ((BALL.x === 500) && (GOALKEEPER.y != BALL.y - BALL.radius) || (BALL.x === 500) && (GOALKEEPER.x != BALL.x - BALL.radius) || (BALL.x === 900) && (GOALKEEPER.y != BALL.y - BALL.radius) && (GOALKEEPER.x != BALL.x - BALL.radius) || ((BALL.y === 338) && (GOALKEEPER.y === 675)) || ((BALL.y === 612) && (GOALKEEPER.y === 675)) || ((BALL.y === 338) && (GOALKEEPER.y === 577)) || ((BALL.y === 612) && (GOALKEEPER.y === 303)) || (BALL.x === 1300) && (GOALKEEPER.y != BALL.y - BALL.radius) || (BALL.x === 1300) && (GOALKEEPER.x != BALL.x - BALL.radius)) {
        scoreL += 1;
        GOALKEEPER.x = GOALKEEPER.x0;
        GOALKEEPER.y = GOALKEEPER.y0;
        BALL.x = BALL.x0;
        BALL.y = BALL.y0;
    }
}

function drawText() { //пишем очки
    canvasContext.fillStyle = 'green';
    canvasContext.font = "50px serif";
    canvasContext.fillText("Отбил: " + scoreW, 25, 50);
    canvasContext.fillStyle = 'red';
    canvasContext.font = "50px serif";
    canvasContext.fillText("Пропустил: " + scoreL, 25, 110);
}

function endGame() {
    if ((scoreW > scoreL) && (scoreW + scoreL >= 20)) {
        drawSigma();
    }
    if ((scoreW <= scoreL) && (scoreW + scoreL >= 20)) {
        drawNoSigma();
    }
}

function drawFrame() { //отрисовка кадра
    canvasContext.clearRect(0, 0, GAME.width, GAME.heidth);
    drawBackground();
    drawGoalkeeper();
    drawBall();
    drawText();
}

function play() {
    if (scoreW + scoreL < 20) {
        drawFrame();
        requestAnimationFrame(play);
        aaaa();
        updateBall();
        score();
    }
    else {
        score();
        endGame();
    }
}

drawStart();
initEventsListrners();