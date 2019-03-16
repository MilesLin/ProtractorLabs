import { browser, by, element } from 'protractor';

describe('the user try to login', () => {
  beforeEach(async () => {
    await browser.get('/user/login');
  });

  it('should login to event page', async () => {
    await element(by.id('userName')).sendKeys('John');
    await element(by.id('password')).sendKeys('123456');
    await element(by.buttonText('登入')).click();
    await browser.waitForAngular();
    const url = await browser.getCurrentUrl();
    console.log('url: ' + url);
    expect(url).toBe(browser.baseUrl + 'events');
  });

  it('should show login failed when typing wrong password', async () => {
    await element(by.id('userName')).sendKeys('John');
    await element(by.id('password')).sendKeys('abc');
    await element(by.buttonText('登入')).click();
    const isAlertPresent = await element(by.className('alert-danger')).isPresent();
    expect(isAlertPresent).toBe(true, '錯誤密碼案例驗證失敗');
  });
});
