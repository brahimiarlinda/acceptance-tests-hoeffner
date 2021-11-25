const { I } = inject();

class NewsletterRegistrationComponent {
  constructor() {
    this.newslettersInput = '.footerNewsletter__container';
    this.newslettersEmailInputField = '#email';
    this.newslettersSubscriptionButton = '#newsletterFormSubmitBtn';
    this.newslettersSubscriptionConfirmation = '.footerNewsletter__confirmation';
  }

  async registerToNewsletters() {
    I.waitForVisible(this.newslettersInput);
    I.fillField(this.newslettersEmailInputField, 'random@email.com');
    I.click(this.newslettersSubscriptionButton);
  }

}
module.exports = new NewsletterRegistrationComponent();
