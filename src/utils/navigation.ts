import * as Pages from '../pages';

const pages = {
  'login': Pages.PageLogin,
  'signin': Pages.PageSignin,
  'profile': Pages.PageProfile,
  'chat': Pages.PageChat,
  'page404': Pages.Page404,
  'page500': Pages.Page500
}

export function navigation(page: string) {
  const appDiv = document.querySelector('#app');
  if (!appDiv) return;

  appDiv.innerHTML = '';

  //@ts-ignore
  const Component = pages[page];
  console.log('page');
  console.log(page);
  console.log('Component = pages[page]');
  console.log(Component);
  const component = new Component;
  appDiv.append(component.getContent());
}