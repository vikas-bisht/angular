import { AppPage } from './app.po';

<<<<<<< HEAD
describe('helloangular App', () => {
=======
describe('first App', () => {
>>>>>>> 8921b66414c827a6d507459bbe1075b44504269e
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
