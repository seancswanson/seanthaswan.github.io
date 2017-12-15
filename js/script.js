
//** randomize scenarios ** To do >> if I want to incorporate 'wild card' events for a longer game.
// function shuffle(scenarioArray) {
//   var m = scenarioArray.length, t, i;

//   // While there remain elements to shuffle…
//   while (m) {

//     // Pick a remaining element…
//     i = Math.floor(Math.random() * m--);

//     // And swap it with the current element.
//     t = scenarioArray[m];
//     scenarioArray[m] = scenarioArray[i];
//     scenarioArray[i] = t;
//   }

//   return scenarioArray;
// }

// Populates the game-screen with the first job scenario corresponding to that job title.
function careerBegin(jobIndex, sceneIndex) {
    // shuffle(scenarioArray);
    // var scenario = Math.floor(Math.random() * jobPositions[0].scenarios.length)-1;

 		$(actionsDiv).html("");

 		// Sets the game to ask for a promotion after all 4 scenarios are completed.
    if (sceneIndex <= 3) {
        // Grabs the text from a scenario nested in the current job title object
        $(jobLi).text(jobPositions[jobIndex].title);
        $(scenarioP).text(jobPositions[jobIndex].scenarios[sceneIndex].text);
        // For each possible choice, make a button for it.
        for (var i = 0; i < jobPositions[jobIndex].scenarios[sceneIndex].outcomes.length; i++) {
            var choice = $('<button class=action-button id=choice>' + jobPositions[jobIndex].scenarios[sceneIndex].outcomes[i].action + '</button>');
            // Add that choice button to the actionsDiv
            $(actionsDiv).append(choice);
        };
        var actionButtons = $(".action-button");
        // On action click I want to return the index of that button and then 
        // populate the correlated outcome/result text 
        $(actionButtons).on("click", function() {
            actionIndex = $(actionButtons).index(this);
            takeAction();
        });
    } else {
        tryPromotion();
    }
}


// After any action is taken, displays the result, offers to proceed to next scene or week
// or go right for a promotion.
function takeAction() {
    actionsDiv.html("");
    
    var result = $('<p id="result-text">' + jobPositions[jobIndex].scenarios[sceneIndex].outcomes[actionIndex].result + '</p>');
    $(resultDiv).append(result);

    var confidence = jobPositions[jobIndex].scenarios[sceneIndex].outcomes[actionIndex].confidence;
    var confidenceMessage = $('<p class="inline-score" id="result-text">' + 'Confidence +' + confidence + '</p>');
    var confidenceLossMessage = $('<p class="inline-score" id="result-text">' + 'Confidence ' + confidence + '</p>');
    var brownie = jobPositions[jobIndex].scenarios[sceneIndex].outcomes[actionIndex].brownie;
    var brownieMessage = $('<p class="inline-score" id="result-text">' + 'Brownie Points +' + jobPositions[jobIndex].scenarios[sceneIndex].outcomes[actionIndex].brownie + '</p>');
    var brownieLossMessage = $('<p class="inline-score" id="result-text">' + 'Brownie Points ' + brownie + '</p>');
    
    // Determines which score text to display.
    if (confidence >= 0 && brownie > 0) {
        $(resultDiv).append(confidenceMessage).append(brownieMessage);
        updateData(confidence, brownie);
    } else if (confidence >= 0) {
        $(resultDiv).append(confidenceMessage);
        updateData(confidence, brownie);
    } else if (confidence < 0 && brownie < 0) {
        $(resultDiv).append(confidenceLossMessage).append(brownieLossMessage);
        updateData(confidence, brownie);
    } else {
        $(resultDiv).append(confidenceLossMessage);
        updateData(confidence, brownie);
    };

    actionsDiv.append(nextScene).append(promotionButton);
    nextScene.on("click", function() {
        resultDiv.html("");
        this.remove();
        actionsDiv.html("");
        promotionButton.remove();
        careerBegin(jobIndex, sceneIndex);
    });

    // If on the last job title and on the 3rd scenario or further, allow for checkForWin if try for promotion button clicked.
if (jobIndex===3 && sceneIndex >= 3){
    promotionButton.on("click", checkForWin);
} else {
    promotionButton.on("click",tryPromotion);

}
};

// Updates week, confidence, brownie points score
function updateData(confidence, brownie) {
    sceneIndex++;
    weekCount++;
    confidenceCount = confidenceCount + confidence;
    brownieCount = brownieCount + brownie;
    
    $(weekLi).text("Week: " + weekCount)
    $(confidenceLi).text("Confidence: " + confidenceCount);
    $(brownieLi).text("Brownie Points: " + brownieCount);
}


// Offers two choices for promotion, using confidence points or brownie points.
function tryPromotion() {
    $(scenarioP).html("");
    $(resultDiv).html("");
    $(actionsDiv).html("");
    
    actionsDiv.append(confidenceButton).append(brownieButton);
    $(scenarioP).append("Would you like to try for a promotion? You have two ways to move up.");
    $(scenarioP).append("<p>a) Use confidence points to take your chances.</p><p>b) Use brownie points- if you have enough then it will be an instant win... or else you get sent back to the beginning!</p>");

    // If conditions are right for win check then check it!
    if (jobIndex===3 && sceneIndex >= 3){
	    confidenceButton.on("click", checkForWin);
	    brownieButton.on("click", checkForWin);
    } else {
      confidenceButton.on("click", confidencePromotion);
    	brownieButton.on("click", browniePromotion);
    };
}


// Checks for sufficient confidence
function confidencePromotion() {
    console.log("Used Confidence");
    if (jobIndex === 0) {
        var minConfidence = Math.floor(Math.random() * 150);
    } else if (jobIndex === 1) {
        var minConfidence = Math.floor(Math.random() * 300);
    } else if (jobIndex === 2) {
        var minConfidence = Math.floor(Math.random() * 400);
    } else if (jobIndex === 3) {
        var minConfidence = Math.floor(Math.random() * 500);
    };
    console.log(minConfidence);
    if (confidenceCount >= minConfidence) {
        console.log("You got promoted!");
        jobIndex++;
        sceneIndex = 0;
        $(actionsDiv).html("");
        $(scenarioP).html("");
        $(scenarioP).append("You got promoted to: " + jobPositions[jobIndex].title);
        $(scenarioP).append("<p>Congratulations on your level up! You will start your new job next week and be reporting to a new manager.</p><p> Keep up the good work!</p>");
        $(actionsDiv).append(nextJob);
        nextJob.on("click", function() {
            this.remove();
            careerBegin(jobIndex, sceneIndex);
            });
        } else {
        console.log("You didn't get promoted.");
        sceneIndex = 0;
        $(actionsDiv).html("");
        $(scenarioP).html("");
        $(scenarioP).append("<p>You dropped the ball and didn't land your promotion.</p><p>So sorry your path to be the Chairman was thwarted! You will relive the last weeks worked and groundhog day your way to success.</p><p>The chance for corporate glory is nigh!</p>");
        $(actionsDiv).append(startOver);
        startOver.on("click", function() {
            this.remove();
            careerBegin(jobIndex, sceneIndex);
        });
    }

}


// Checks for sufficient brownie points
function browniePromotion() {
    console.log("Used brownie points");
    if (brownieCount >= 3) {
        console.log("You got promoted!");
        jobIndex++;
        brownieCount-=3;
        $(brownieLi).text("Brownie Points: " + brownieCount);
        sceneIndex = 0;
        $(actionsDiv).html("");
        $(scenarioP).html("");
        $(scenarioP).append("You got promoted to: " + jobPositions[jobIndex].title);
        $(scenarioP).append("<p>Congratulations on your level up! Your old manager is giving you mad props and is giddy to help your career climb.</p><p> Keep up the good work!</p>");
        $(actionsDiv).append(nextJob);
        nextJob.on("click", function() {
            this.remove();
            careerBegin(jobIndex, sceneIndex);
          })
        }else {
        console.log("You didn't get promoted.");
        sceneIndex = 0;
        brownieCount--;
       	$(brownieLi).text("Brownie Points: " + brownieCount);
        $(actionsDiv).html("");
        $(scenarioP).html("");
        $(scenarioP).append("<p>You dropped the ball and didn't land your promotion.</p><p>So sorry your path to be the Chairman was thwarted! You will relive the last weeks worked and groundhog day your way to success.</p><p>The chance for corporate glory is nigh!</p>");
        $(actionsDiv).append(startOver);
        startOver.on("click", function() {
            this.remove();
            careerBegin(jobIndex, sceneIndex);
        });
}
}

// Final check for confidence or brownies for the ultimate promotion
function checkForWin(){
	console.log("check for win");
	var minConfidence = Math.floor(Math.random() * 800);
	if (confidenceCount>=minConfidence || brownieCount>=3){
	$(scenarioP).html("");
	$(resultDiv).html("");
	$(actionsDiv).remove();
	$(scenarioP).append("<p>Wow! Well done on your climb up the coroporate ladder! You have achieved the ultimate spot at the top as: <em>Chairman of the Board!</em></p><p>Congratulations! You will start your new job next week and never report to anyone ever again.</p>");
	$(resultDiv).append("<p class='win'>I believe you can make huge changes in this world!</p><p class='win'>Thank you so much for playing! I hope you enjoyed your raucous and perilous journey up the corporate ladder... Stay tuned for more games from Swansong Games!");
	$(resultDiv).append("<img src='../assets/img/Treasures57.png'>");
} 
}
