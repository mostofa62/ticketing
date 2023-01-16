import { Publisher, OrderCreatedEvent, Subjects } from '@mostofa62/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
