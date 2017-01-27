import { PollAppPage } from './app.po';

describe('poll-app App', function() {
  let page: PollAppPage;

  beforeEach(() => {
    page = new PollAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
