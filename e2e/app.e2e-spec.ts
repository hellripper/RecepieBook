import { RecepieBookPage } from './app.po';

describe('recepie-book App', () => {
  let page: RecepieBookPage;

  beforeEach(() => {
    page = new RecepieBookPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
