import { browser, by, element } from 'protractor';

describe('the user try to login', () => {
  it('should login to event page', () => {
    browser.get('/user/login');
    element(by.id('userName')).sendKeys('John');
    element(by.id('password')).sendKeys('123456');
    element(by.buttonText('登入')).click();
    browser.waitForAngular();
    expect(browser.getCurrentUrl()).toContain('events');
  });
});
