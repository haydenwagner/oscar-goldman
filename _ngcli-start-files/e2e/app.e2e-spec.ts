import { OscarGoldmanPage } from './app.po';

describe('oscar-goldman App', function() {
  let page: OscarGoldmanPage;

  beforeEach(() => {
    page = new OscarGoldmanPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
