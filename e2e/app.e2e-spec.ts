import { EscortDatabasePage } from './app.po';

describe('escort-database App', function() {
  let page: EscortDatabasePage;

  beforeEach(() => {
    page = new EscortDatabasePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
