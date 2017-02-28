import { TestyAppPage } from './app.po';

describe('testy-app App', function() {
  let page: TestyAppPage;

  beforeEach(() => {
    page = new TestyAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
