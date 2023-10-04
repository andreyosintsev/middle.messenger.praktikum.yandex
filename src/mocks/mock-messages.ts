import { IMessageList } from '../utils/Intefaces';

// export interface IMessage {
//   inOut: "inbox" | "outbox",
//   content: string,
//   image?: string,
//   time: string,
//   read: boolean
// }

const MockMessages: IMessageList = [
  {
    inOut: "inbox",
    content: "Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой. Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.",
    time: "11:56",
    read: true
  },
  {
    inOut: "inbox",
    content: "Фотоаппарат Хассельблад",
    image: "message.png",
    time: "11:58",
    read: true
  },
  {
    inOut: "outbox",
    content: "Круто! Напоминает дедушкин фотоаппарат \"Салют\" мохнатого года выпуска",
    time: "12:03",
    read: true
  },
  {
    inOut: "outbox",
    content: "Фотоаппарат Салют",
    image: "message2.png",
    time: "12:05",
    read: true
  },
  {
    inOut: "inbox",
    content: "И правда очень похож... ",
    time: "12:07",
    read: true
  },
];

export { MockMessages }