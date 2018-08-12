(function() {
  // ----------
  window.swanson = {

    $textBox: $(document).find('.main-home-textbox'),
    
    $textBoxAbout: $(document).find('.main-about-textbox'),
    
    $portfolioContentArea: $(document).find('.main-content-container'),
    
    projects: [{
      links: [
      '//seancswanson.com/chairman-of-the-board',
      '//mndfll-js.herokuapp.com/',
      '//use-hue.herokuapp.com',
      '//github.com/seanthaswan/express-pokedex',
      '//pigmentation-presumption.glitch.me/'
    ],
      screenshots: [
        'assets/chairman-sm.png',
        'assets/mndfll-sm.png',
        'assets/hue-sm.png',
        'assets/poke-sm.png',
        'assets/mndfll-sm.png',
      ],
      alt: [
        'Chairman of the Board',
        'Mndf.ll',
        'Hue',
        'PokéDex',
        'Pigmentation Presumption',
      ],
      titles: [
        'Chairman of the Board',
        'Mndf.ll',
        'Hue',
        'Pigmentation Presumption',
        'PokéDex',
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
        
        var cardImageContainer = document.createElement('div');
        cardImageContainer.classList = 'card-image-container';
        
        var cardImageLink = document.createElement('a');
        cardImageLink.setAttribute('href', projects.links[i]);
        
        var cardImage = document.createElement('img');
        cardImage.classList = 'card';
        cardImage.setAttribute('src', projects.screenShots[i]);
        cardImage.setAttribute('alt', projects.alt[i]);
        
        var cardInfo = document.createElement('div');
        cardInfo.classList = 'card-info';
        
        var cardTitle = document.createElement('p');
        cardTitle.classList = 'card-title';
        cardTitle.textContent = projects.titles[i];
        
        var cardDescription = document.createElement('p');
        cardDescription.classList = 'card-description';
        
        var cardTech = document.createElement('p');
        cardTech.classList = 'card-tech';
        
        var cardTechBadge = document.createElement('span');
        cardTechBadge.classList = 'card-tech-badge';
        
        $portfolioContentArea
      }
    },

    textBoxController: function() {
        $(document).find('.main--paragraph__first').toggleClass('hidden');

      this.$textBox.on('click', function() {
        $(document).find('.main--paragraph__first').toggleClass('hidden');
        $(document).find('.main--paragraph__second').toggleClass('hidden');
      });

      this.$textBoxAbout.on('click', function() {
        $(document).find('.main--paragraph__first').toggleClass('hidden');
        $(document).find('.main--paragraph__second').toggleClass('hidden');
      });
    }
  }

  swanson.init();
})()
