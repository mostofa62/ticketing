import { Publisher, Subjects, TicketUpdatedEvent } from '@mostofa62/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
