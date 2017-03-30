import { Angular2GetstartedPage } from './app.po';

describe('angular2-getstarted App', function() {
  let page: Angular2GetstartedPage;

  beforeEach(() => {
    page = new Angular2GetstartedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
