import Handlebars from 'handlebars';
import * as Components from './components';
import * as Pages from './pages';

Object.entries(Components).forEach(([name, template]) => {
  Handlebars.registerPartial(name, template)
})

const pages = {
  'login': Pages.pageLogin,
  'signin': Pages.pageSignin,
  'profile': Pages.pageProfile,
  'chat': Pages.pageChat,
  'page404': Pages.page404,
  'page500': Pages.page500,
}

function navigate(page: string): void {
  const source = (pages as Record<string, string>)[page];
  const render = Handlebars.compile(source);

  const appDiv = document.querySelector('#app');
  if (appDiv) appDiv.innerHTML = render('');
}

document.addEventListener('DOMContentLoaded', () => navigate('chat'));

document.addEventListener('click', (e) => {
  if (!e) return;
  
  e.preventDefault;

  const page = (e.target as HTMLInputElement).getAttribute('page');
  
  if (page) navigate(page);
})
