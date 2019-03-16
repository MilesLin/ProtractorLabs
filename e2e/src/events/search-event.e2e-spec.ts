import { browser, by, element, ElementFinder } from 'protractor';

fdescribe('search an event', () => {
  let searchTerm: ElementFinder;
  let searchBtn: ElementFinder;

  beforeAll(async () => {
    searchTerm = element(by.name('searchTerm'));
    searchBtn = element(by.buttonText('搜尋'));
  });

  it('should navigate to event page', async () => {
    await browser.get('/events');
    await browser.waitForAngular();
    expect(await browser.getCurrentUrl()).toBe(browser.baseUrl + 'events');
  });

  it('should type in angular', async () => {
    await searchTerm.sendKeys('Angular');
    expect(await searchTerm.getAttribute('value')).toBe('Angular');
  });

  it('should click search and pop up a modal', async () => {
    await searchBtn.click();
    const isDisplayed = await element(by.className('modal-dialog')).isDisplayed();
    expect(isDisplayed).toBe(true);
  });

  it('should click the second search result', async () => {

    await element(by.className('list-group')).element(by.cssContainingText('a', '實戰開發')).click();

    // 驗證第一個 h2 是 「ANGULAR 7 開發實戰：新手入門篇」
    const text = await element(by.tagName('h2')).getText();
    expect(text).toBe('ANGULAR 7 開發實戰：新手入門篇');
  });
});

