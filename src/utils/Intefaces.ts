export interface IContact {
  name: string,
  avatar?: string,
  reply?: IContact,
  lastMessage?: IMessage,
  num?: number,
  current?: boolean
}

export interface IContactList extends Array<IContact>{};

export interface IMessage {
  inOut: "inbox" | "outbox",
  content: string,
  image?: string,
  time: string,
  read: boolean
}

export interface IMessageList extends Array<IMessage>{};