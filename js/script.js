(function() {

  window.swanson = {

    // ----------
    init: function() {
      this.$textBox = $(document).find('.main-home-textbox');
      this.$textBoxAbout = $(document).find('.main-about-textbox');
      console.log(this.$textBox);

      this.textBoxController();

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