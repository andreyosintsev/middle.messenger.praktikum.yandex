import * as Pages from '../pages';

import { MockContacts, MockMessages } from '../mocks';

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
  const component = pages[page];
  let component_compiled;

  if (page === 'chat') {
    component_compiled = new component({
      contactList: MockContacts,
      messageList: MockMessages}
    );
  } else {
    component_compiled = new component();
  }

  //@ts-ignore
    console.log('component_compiled');
    console.log(component_compiled);
    appDiv.append(component_compiled.getContent());
}