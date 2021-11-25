const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { 
    Cookies: { CookiesComponent },
    Newsletters: { NewsletterRegistrationComponent, NewsletterEmail, NewsletterConfirmationPage }
} = inject();

Feature('newsletter-subscription');

Scenario.only('I can subscribe to the newsletters with an email', ({ I }) => {
    I.amOnPage('/login');
    CookiesComponent.acceptCookies();
    NewsletterRegistrationComponent.registerToNewsletters();
    I.wait(3);
    I.waitForVisible(NewsletterRegistrationComponent.newslettersSubscriptionConfirmation);
});

Scenario('I can confirm the newsletters subscription', async ({ I }) => {
    I.amOnPage('/login');
    CookiesComponent.acceptCookies();

    I.say('I see the newsletters subscription input and I submit my email');
    I.waitForVisible(NewsletterRegistrationComponent.newslettersInput);
    const mailbox = await I.haveNewMailbox();
    I.fillField(NewsletterRegistrationComponent.newslettersEmailInputField, mailbox.emailAddress);
    I.click(NewsletterRegistrationComponent.newslettersSubscriptionButton);

    I.say('I see the newsletters subscription input and I submit my email');
    I.openMailbox(mailbox);
    await I.waitForLatestEmail();
    const email = await I.waitForLatestEmail();

    I.say('I click on the confirmation button in the email');
    const dom = new JSDOM(email.body);
    const url = dom.window.document.querySelector(NewsletterEmail.confirmationLink).getAttribute('href');
    I.amOnPage(url);
    I.wait(3);
    I.waitForVisible(NewsletterConfirmationPage.confirmationNewsletterRegistrationText);
});

