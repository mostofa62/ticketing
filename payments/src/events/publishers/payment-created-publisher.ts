import { Subjects, Publisher, PaymentCreatedEvent } from '@mostofa62/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
