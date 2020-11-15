export interface Order {
  order_id: string;
  products: any[];//{productname,quantity,productIds}
  totalQuantity: number;
  totalPrice: number;
  note?: string;
  paymentMethod: string;//cash,creditcard etc
  isPaymentDone?: boolean;
}
