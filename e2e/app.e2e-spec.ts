import { Adv.Sess1assign3Page } from './app.po';

describe('adv.sess1assign3 App', () => {
  let page: Adv.Sess1assign3Page;

  beforeEach(() => {
    page = new Adv.Sess1assign3Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
