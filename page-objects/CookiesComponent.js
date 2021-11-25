const { I } = inject();

class CookiesComponent {
  constructor() {
    this.cookiesPopUp = '.consentForm__acceptButton';
    this.acceptAllCookiesButton = '.consentForm__acceptButton .button';
  }

  async acceptCookies() {
    I.waitForVisible(this.cookiesPopUp);
    I.click(this.acceptAllCookiesButton);
  }
}

module.exports = new CookiesComponent();
