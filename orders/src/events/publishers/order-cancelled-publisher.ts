import { Subjects, Publisher, OrderCancelledEvent } from '@mostofa62/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
