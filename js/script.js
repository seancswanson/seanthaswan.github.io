(function() {
  // ----------
  window.swanson = {

    $textBox: $(document).find('.main-home-textbox'),
    
    $textBoxAbout: $(document).find('.main-about-textbox'),
    
    $firstMainParagraph: $(document).find('.main--paragraph__first'),
    
    $secondMainParagraph: $(document).find('.main--paragraph__second'),
    
    $portfolioContentArea: $(document).find('.main-content-container'),
    
    projects: [{
      links: [
      '//seancswanson.com/chairman-of-the-board',
      '//mndfll-js.herokuapp.com/',
      '//use-hue.herokuapp.com',
      '//pigmentation-presumption.glitch.me/',
      '//github.com/seanthaswan/express-pokedex'
    ],
      screenshots: [
        'assets/chairman-sm.png',
        'assets/mndfll-sm.png',
        'assets/hue-sm.png',
        'assets/pigmentation-sm.png',
        'assets/poke-sm.png'
      ],
      alt: [
        'Chairman of the Board',
        'Mndf.ll',
        'Hue',
        'Pigmentation Presumption',
        'PokéDex'
      ],
      titles: [
        'Chairman of the Board',
        'Mndf.ll',
        'Hue',
        'Pigmentation Presumption',
        'PokéDex'
      ],
      descriptions: [
        'A retro front-end corporate ladder simulator game. I reimagined a game that my father had programmed in BASIC in the 80\'s to bring it up to modern specs!',
        'A full-stack daily journaling & goal tracking app featuring user auth and database utilization.',
        'A MERN-stack color detection utility for designers featuring cloud uploading & asynchronous operations.',
        'A front-end color guessing game to help sharpen your eye for color! Soon to add HEX code challenge for the elites.',
        'A PEN-stack Pokèmon encyclopedia as a study of RESTful API architecture and artistic design.'
      ],
      badges: [
        ['JavaScript', 'jQuery', 'HTML', 'CSS'],
        ['JavaScript', 'Node', 'Express', 'PostgreSQL', 'HTML', 'CSS'],
        ['JavaScript', 'Node', 'React', 'Express', 'MongoDB', 'HTML', 'CSS'],
        ['JavaScript', 'HTML', 'CSS'],
        ['JavaScript', 'Node', 'Express', 'PostgreSQL', 'HTML', 'CSS']
      ]
    }],


    // ----------
    init: function() {
      this.textBoxController();
      window.location.href.indexOf("portfolio") > -1 ? this.createProjects() : '';
    },

    createProjects: function() {
      var projects = this.projects[0];
      for (var i = 0; i <= projects.links.length - 1; i++) {
        var card = document.createElement('div');
        card.classList = 'card';
        this.$portfolioContentArea.append(card);
        
        var cardImageContainer = document.createElement('div');
        cardImageContainer.classList = 'card-image-container';
        card.append(cardImageContainer);
        
        var cardImageLink = document.createElement('a');
        cardImageLink.classList = 'card-image-link';
        cardImageLink.setAttribute('href', projects.links[i]);
        cardImageLink.style.backgroundImage = "url('" + projects.screenshots[i] + "')";
        cardImageContainer.append(cardImageLink);
        
        // var cardImage = document.createElement('img');
        // cardImage.classList = 'card';
        // cardImage.setAttribute('src', projects.screenshots[i]);
        // cardImage.setAttribute('alt', projects.alt[i]);
        // cardImageLink.append(cardImage);
        
        var cardInfo = document.createElement('div');
        cardInfo.classList = 'card-info';
        card.append(cardInfo);
        
        var cardTitle = document.createElement('p');
        cardTitle.classList = 'card-title';
        cardTitle.textContent = projects.titles[i];
        cardInfo.append(cardTitle);
        
        var cardDescription = document.createElement('p');
        cardDescription.classList = 'card-description';
        cardDescription.textContent = projects.descriptions[i];
        cardInfo.append(cardDescription);
        
        var cardTech = document.createElement('p');
        cardTech.classList = 'card-tech';
        cardInfo.append(cardTech);
        
        for (var j = 0; j <= projects.badges[i].length - 1; j++) {
          var cardTechBadge = document.createElement('span');
          cardTechBadge.classList = 'card-tech-badge';
          cardTechBadge.textContent = projects.badges[i][j];
          cardTech.append(cardTechBadge);
        }
      }
    },

    textBoxController: function() {
      var self = this;
        self.$firstMainParagraph.toggleClass('hidden');

      this.$textBox.on('click', function() {
        self.$firstMainParagraph.toggleClass('hidden');
        self.$secondMainParagraph.toggleClass('hidden');
      });

      this.$textBoxAbout.on('click', function() {
        self.$firstMainParagraph.toggleClass('hidden');
        self.$secondMainParagraph.toggleClass('hidden');
      });
    }
  }

  swanson.init();
})()
