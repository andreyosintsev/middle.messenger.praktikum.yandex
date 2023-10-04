import { IContactList } from '../utils/Intefaces';

// export interface IContact {
//   name: string,
//   avatar?: string,
//   reply?: IContact,
//   lastMessage?: IMessage,
//   num?: number,
//   current: boolean
// }

// export interface IMessage {
//   inOut: "inbox" | "outbox",
//   content: string,
//   image?: string,
//   time: string,
//   read: boolean
// }

const MockContacts: IContactList = [
  {
  name: "Андрей",
  lastMessage: {
    inOut: "inbox",
    content: "стикер",
    time: "12:00",
    read: true
  },
  reply: {
    name: "Вы"
  },
  num: 2,
  current: false
},
{
  name: "Киноклуб",
  lastMessage: {
    inOut: "inbox",
    content: "стикер",
    time: "12:00",
    read: true
  },
  reply: {
    name: "Вы"
  },
  num: 2
}, 
{
  name: "Илья",
  lastMessage: {
    inOut: "inbox",
    content: "Друзья, у меня для вас особенный выпуск новостей!",
    time: "15:12",
    read: true
  },
  num: 3
}, 
{
  name: "Вадим",
  lastMessage: {
    inOut: "inbox",
    content: "И правда очень похож...",
    time: "Пт",
    read: true,
  },
  reply: {
    name: "Вы",
  },
  num: 4,
  current: true
}, 
{
  name: "тет-а-теты",
  lastMessage: {
    inOut: "inbox",
    content: "И Human Interface Guidelines и Material Design рекомендуют",
    time: "Ср",
    read: true
  },
  num: 4,
}, 
{
  name: "1, 2, 3",
  lastMessage: {
    inOut: "inbox",
    content: "Миллионы россиян ежедневно проводят десятки часов свое",
    time: "Пн",
    read: true
  },
  num: 6,
}, 
{
  name: "Design Destroyer",
  lastMessage: {
    inOut: "inbox",
    content: "В 2008 году художник Jon Rafman  начал собирать всякую фигню",
    time: "Пн",
    read: true,
  },
  num: 2,
}, 
{
  name: "Day",
  lastMessage: {
    inOut: "inbox",
    content: "Так увлёкся работой по курсу, что совсем забыл его анонсировать",
    time: "1 Мая 2020",
    read: true,
  },
}, 
{
  name: "Стас Рогозин",
  lastMessage: {
    inOut: "inbox",
    content: "Можно или сегодня или завтра вечером.",
    time: "12 Апр 2020",
    read: true,
  },
},
{
  name: "Босоногий Геннадий",
  lastMessage: {
    inOut: "inbox",
    content: "Приходите ко мне вечером смотреть новый сезон сериала Чернобыль",
    time: "Пн",
    read: true,
  },
},
{
  name: "Витаминка",
  reply: {
    name: "Вы"
  },
  lastMessage: {
    inOut: "inbox",
    content: "Ты - вся моя любовь. С первым апреля!",
    time: "1 Апр 2020",
    read: true,
  },
  num: 1
},
{
  name: "Несчастлиffчик",
  reply: {
    name: "Вы"
  },
  lastMessage: {
    inOut: "inbox",
    content: "Угораздило же меня родиться 29 февраля.",
    time: "29 Фев 2020",
    read: true,
  }
}, 
]

export { MockContacts }
