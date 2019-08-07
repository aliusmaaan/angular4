import { MyAppUsmanPage } from './app.po';

describe('my-app-usman App', () => {
  let page: MyAppUsmanPage;

  beforeEach(() => {
    page = new MyAppUsmanPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
