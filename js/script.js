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
      '//chroma-chameleon.glitch.me/',
      '//github.com/seanthaswan/express-pokedex',
      'assets/cabin-eularetta-pixel-lg.jpg',
      'assets/hat-redd-pixel-lg.jpg',
      'assets/redbag-lux-pixel-lg.jpg',
      'assets/redhouse-elliasen-pixel-lg.jpg',
      'assets/valley-johannes-pixel-lg.jpg'
    ],
      screenshots: [
        'assets/chairman-sm.png',
        'assets/mndfll-sm.png',
        'assets/hue-sm.png',
        'assets/pigmentation-sm.png',
        'assets/chroma-sm.png',
        'assets/poke-sm.png',
        'assets/cabin-eularetta-pixel-sm.jpg',
        'assets/hat-redd-pixel-sm.jpg',
        'assets/redbag-lux-pixel-sm.jpg',
        'assets/redhouse-elliasen-pixel-sm.jpg',
        'assets/valley-johannes-pixel-sm.jpg'
      ],
      alt: [
        'Chairman of the Board',
        'Mndf.ll',
        'Hue',
        'Pigmentation Presumption',
        'Chroma Chameleon',
        'PokéDex',
        'Quiet Cabin',
        'Alpine Acquiesce',
        'Summit Sublimity',
        'Stiled Seculusion',
        'Valley of Virtue'
      ],
      titles: [
        'Chairman of the Board',
        'Mndf.ll',
        'Hue',
        'Pigmentation Presumption',
        'Chroma Chameleon',
        'PokéDex',
        'Quiet Cabin',
        'Alpine Acquiesce',
        'Summit Sublimity',
        'Stilted Seculusion',
        'Valley of Virtue'
      ],
      descriptions: [
        'A retro front-end corporate ladder simulator game. I reimagined a game that my father had programmed in BASIC in the 80\'s to bring it up to modern specs!',
        'A full-stack daily journaling & goal tracking app featuring user auth and database utilization.',
        'A MERN-stack color detection utility for designers featuring cloud uploading & asynchronous operations.',
        'A front-end color guessing game to help sharpen your eye for color! Soon to add HEX code challenge for the elites.',
        'A front-end painting app resembling the nostalgic simplicity of MSPaint... Soon to add full shape, importing, selection functionalities.',
        'A PEN-stack Pokèmon encyclopedia as a study of RESTful API architecture and artistic design.',
        '8-Bit PNW Series: 1/5 - Adapted from eularetta (unsplash)',
        '8-Bit PNW Series: 2/5 - Adapted from @reddangelo (unsplash)',
        '8-Bit PNW Series: 3/5 - Adapted from @lux17 (unsplash)',
        '8-Bit PNW Series: 4/5 - Adapted from @onesixtieth (unsplash)',
        '8-Bit PNW Series: 5/5 - Adapted from @jlu (unsplash)'
      ],
      badges: [
        ['JavaScript', 'jQuery', 'HTML', 'CSS'],
        ['JavaScript', 'Node', 'Express', 'PostgreSQL', 'HTML', 'CSS'],
        ['JavaScript', 'Node', 'React', 'Express', 'MongoDB', 'HTML', 'CSS'],
        ['JavaScript', 'HTML', 'CSS'],
        ['JavaScript', 'HTML', 'CSS'],
        ['JavaScript', 'Node', 'Express', 'PostgreSQL', 'HTML', 'CSS'],
        ['Photoshop', 'Color Indexing', 'Level Manipulation', 'Pixel Art'],
        ['Photoshop', 'Color Indexing', 'Level Manipulation', 'Pixel Art'],
        ['Photoshop', 'Color Indexing', 'Level Manipulation', 'Pixel Art'],
        ['Photoshop', 'Color Indexing', 'Level Manipulation', 'Pixel Art'],
        ['Photoshop', 'Color Indexing', 'Level Manipulation', 'Pixel Art']
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
