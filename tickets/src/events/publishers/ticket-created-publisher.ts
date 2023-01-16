import { Publisher, Subjects, TicketCreatedEvent } from '@mostofa62/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
