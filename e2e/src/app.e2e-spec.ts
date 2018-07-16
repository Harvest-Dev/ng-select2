import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('the source code of the demo', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('the source code of the demo');
  });
});
