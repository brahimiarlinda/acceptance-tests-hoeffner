const { I } = inject();

class NewsletterEmail {
  constructor() {
    this.confirmationLink = 'a[title="Jetzt Anmeldung abschließen"]';
  }
}
module.exports = new NewsletterEmail();
