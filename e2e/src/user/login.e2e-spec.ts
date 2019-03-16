import { browser, by, element } from 'protractor';

describe('the user try to login', () => {
  it('should login to event page', async () => {
    await browser.get('/user/login');
    await element(by.id('userName')).sendKeys('John');
    await element(by.id('password')).sendKeys('123456');
    await element(by.buttonText('登入')).click();
    await browser.waitForAngular();
    const url = await browser.getCurrentUrl();
    console.log('url: ' + url);
    expect(url).toBe(browser.baseUrl + 'events');
  });
});
