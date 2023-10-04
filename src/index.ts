import Handlebars from 'handlebars';
import * as Components from './components';
import * as Pages from './pages';
import { registerComponent } from './utils/registerComponents';
import { navigation } from './utils/navigation';

// const formAuth = `{{> @partial-block }}`;     // Обертка
// const page = `<div>                           
//                  {{#> FormAuth}}
//                      {{>Spacer height="50" }}
//                  {{/FormAuth}}
//                </div>
//      `;                                       // Страница

// const template = `<div class="spacer" style="height: {{height}}px"></div>`;
// const name = "Spacer"                         // Компонент

//Handlebars.registerPartial('FormAuth', formAuth)
// Handlebars.registerPartial(name, template)

// Handlebars.registerHelper(name, function(this: unknown, { hash, data, fn }: HelperOptions) {
//   console.log('In register Helper');
//   console.log('hash', hash);
//   console.log('hash', data);
//   console.log('fn', fn);

//   const contents = fn ? fn(this) : ''; 
//   return `<div>${contents}</div>`
// });

// const html = Handlebars.compile(page)({height: 50});
// console.log(html);

// const divApp = document.querySelector('#app');
// if (divApp) divApp.innerHTML = html;


// console.log('Register Partials');
// Object.entries(Components).forEach(([name, template]) => {
//   console.log(`Partial:`, name);
//   Handlebars.registerPartial(name, template)
// })

console.log('Handlebars.helpers');
console.dir(Handlebars.helpers);

registerComponent('Avatar', Components.Avatar);
registerComponent('Button', Components.Button);
registerComponent('ChatContact', Components.ChatContact);
registerComponent('ChatMessage', Components.ChatMessage);
registerComponent('Dataline', Components.Dataline);
registerComponent('Datalink', Components.Datalink);
registerComponent('Field', Components.Field);
registerComponent('Link', Components.Link);
registerComponent('Num', Components.Num);
registerComponent('Spacer', Components.Spacer);

document.addEventListener('DOMContentLoaded', () => navigation('chat'));

document.addEventListener('click', (e) => {
  if (!e) return;
  
  e.preventDefault;

  const page = (e.target as HTMLInputElement).getAttribute('page');
  
  if (page) navigation(page);
})