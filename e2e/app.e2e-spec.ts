import { ParallaxscrollPage } from './app.po';

describe('parallaxscroll App', () => {
  let page: ParallaxscrollPage;

  beforeEach(() => {
    page = new ParallaxscrollPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
