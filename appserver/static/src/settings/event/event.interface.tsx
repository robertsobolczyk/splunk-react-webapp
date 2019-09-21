export interface EventInterface {
  _key: string;
  eventId: string; //unique 16 char
  description: string;
  invocationDate: number;
  revocationDate: number;
  user: string;
  _createdAt: number;
  _updatedAt: number;
}
