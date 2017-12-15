console.log('JS loaded');

//variables for sound 
var menuMusic = new Audio('../assets/audio/menu.wav');
var menuNoise = new Audio('../assets/audio/office.wav');
//variables for document selectors

//** Starting Screen Selectors
var header = $("header");
var startScreen = $("#start-screen");
var chairmanTitle = $("#chairman-title");
var playButton = $("#start");
var instructionsButton = $("#info");
var instructionDiv = $("#instructions-div");
var exitInstructions = $("#return-to-menu");
//** Game selectors 
var gameScreen = $("#game-div");
var scenarioDiv = $("#scenario-div");
var scenarioP = $("#scenario-text");
var resultDiv = $("#result-div");
var resultP = $("#result-text");
var actionsDiv = $("#actions");
var actionButtons = $(".action-button");
var scoresDiv = $("#scores");
var weekLi = $("#week");
var jobLi = $("#job");
var confidenceLi = $("#confidence");
var brownieLi = $("#brownie-points");
// selectors for action buttons
var actionsDiv = $("#actions-div");
//variables for scores, week counter for promotion
var weekCount = 0;
var confidenceCount = 0;
var brownieCount = 0;
// Starts job position at mail clerk.
var jobIndex = 0;
// For referencing scenario
var sceneIndex = 0;
// For referencing choice made
var actionIndex = 0;

// For button for next scene 
var nextScene = $('<button class="action-button" id="nextButton">Next scene</button> or ');

// For button for promotions
var promotionButton = $('<button class="action-button" id="promotionButton">Try for promotion?</button>');
var confidenceButton = $('<button class="action-button" id="use-confidence">Use confidence points,<br> i\'ll take my chances.</button>');
var brownieButton = $('<button class="action-button" id="use-brownie">Use brownie points!</button>');
var nextJob = $('<button class="action-button" id="next-job">Start your new job!</button>');
var startOver = $('<button class="action-button" id="start-over">Reincarnate as the ' + jobPositions[jobIndex].title + '</button>');