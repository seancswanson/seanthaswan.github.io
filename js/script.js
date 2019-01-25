(function() {
  //----------
  window.App = {
    //----------
    state: {
      section: 'home',
      menuToggled: false
    },

    greetings: [
      'Oh, hello there!',
      'Goeie dag!',
      'Tungjatjeta!',
      'Ahlan bik!',
      'Nomoskar!',
      'Selam!',
      'Mingala ba!',
      'Nín hao!',
      'Zdravo!',
      'Nazdar!',
      'Hallo!',
      'Helo!',
      'Hei!',
      'Bonjour!',
      'Guten Tag!',
      'Geia!',
      'Kumusta!',
      'Shalóm!',
      'Namasté!',
      'Szia!',
      'Hai!',
      'Kiana!',
      'Dia is muire dhuit!',
      'Buongiorno!',
      'Kónnichi wa!',
      'Annyeonghaseyo!',
      'Sabai dii!',
      'Ave!',
      'Es milu tevi!',
      'Selamat petang!',
      'sain baina uu!',
      'Namaste!',
      'Salâm!',
      'Witajcie!',
      'Olá!',
      'Salut!',
      'Privét!',
      'Talofa!',
      'ćao!',
      'Nazdar!',
      'Zdravo!',
      'Hola!',
      'Jambo!',
      'Hej!',
      'Halo!',
      'Sàwàtdee kráp!',
      'Merhaba!',
      'Pryvít!',
      'Adaab arz hai!',
      'Chào!'
    ],

    //----------
    init: function() {
      var self = this;

      this.hamburger = $('.hamburger-patty');
      this.homeHeading = $('#home-heading');
      this.aboutHeading = $('#about-heading');
      this.projectsHeading = $('#projects-heading');
      this.cvHeading = $('#cv-heading');
      this.connectHeading = $('#connect-heading');
      this.navItem = $('.nav-item');
      this.mobileNav = $('.nav-mobile');
      this.mobileNavItem = $('.nav-mobile-item');
      this.abstractBio = $('.abstract-bio');
      this.expandoBio = $('.expando-bio');
      this.expandoButton = $('.expando-button');
      this.aboutContent = $('.about-content-grid');
      this.pageMain = $('.page-main');
      this.pageSectionsPos = {
        home: this.getSectionPos(this.homeHeading),
        about: this.getSectionPos(this.aboutHeading),
        project: this.getSectionPos(this.projectsHeading),
        cv: this.getSectionPos(this.cvHeading),
        connect: this.getSectionPos(this.connectHeading)
      };

      this.setGreeting();

      this.hamburger.on('click', function() {
        self.handleHamburgerClick();
      });

      this.expandoButton.on('click', function() {
        self.handleBioExpand();
      });

      $('.nav-item, .nav-mobile-item, .section-btn').click(function(e) {
        self.handleNavClick(e);
      });

      this.pageMain.on('scroll', function(e) {
        var mainScrollY = $(e.target).scrollTop();
        $('li.selected').removeClass('selected');
        if (mainScrollY < self.pageSectionsPos.about.y) {
          $(
            '.nav-item[data-id="home"], .nav-mobile-item[data-id="home"]'
          ).addClass('selected');
        } else if (
          mainScrollY > self.pageSectionsPos.about.y &&
          mainScrollY < self.pageSectionsPos.project.y
        ) {
          $(
            '.nav-item[data-id="about"], .nav-mobile-item[data-id="about"]'
          ).addClass('selected');
        } else if (
          mainScrollY > self.pageSectionsPos.project.y &&
          mainScrollY < self.pageSectionsPos.cv.y - 100
        ) {
          $(
            '.nav-item[data-id="project"], .nav-mobile-item[data-id="project"]'
          ).addClass('selected');
        } else if (
          mainScrollY + 100 > self.pageSectionsPos.cv.y &&
          mainScrollY < self.pageSectionsPos.connect.y - 700
        ) {
          $('.nav-item[data-id="cv"], .nav-mobile-item[data-id="cv"]').addClass(
            'selected'
          );
        } else if (mainScrollY < self.pageSectionsPos.connect.y) {
          $(
            '.nav-item[data-id="connect"], .nav-mobile-item[data-id="connect"]'
          ).addClass('selected');
        }
      });
    },

    //----------
    setGreeting: function() {
      var self = this;
      setInterval(function() {
        var randomGreeting = self.greetings[
          Math.floor(Math.random() * self.greetings.length)
        ];
        self.homeHeading.text(randomGreeting);
        self.homeHeading.css('opacity', '1');
        setTimeout(function() {
          self.homeHeading.css('opacity', '0');
        }, 2500);
      }, 3000);
    },

    //----------
    handleNavClick: function(e) {
      var self = this;

      var targetSection = e.currentTarget.dataset.id;

      $(self.pageMain).animate(
        {
          scrollTop: self.pageSectionsPos[targetSection].y
        },
        500
      );
    },

    //----------
    handleBioExpand: function() {
      this.abstractBio.toggleClass('hidden');
      this.expandoBio.toggleClass('hidden');
      this.aboutContent.removeClass('about-content-grid');
    },

    //----------
    handleHamburgerClick: function() {
      var self = this;
      this.state.menuToggled ?
        this.mobileNav.css('opacity', '0') :
        this.mobileNav.css('opacity', '1');
      this.state.menuToggled = !this.state.menuToggled;
    },

    //----------
    getSectionPos: function(el) {
      return {
        x: $(el).offset().left,
        y: $(el).offset().top
      };
    }
  };
})();

App.init();
