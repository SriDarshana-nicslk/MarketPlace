export interface Seller {
  seller_id: string;
  seller_name: string;
  email: string;
  password: string; //encrypt
  phone: string;

  sellerAdditionalData?: {
    rating: any;
    reviews?: any[];
    status?: string; //active,blocked
    stocks?: any[];//stockids
    messages?: any[]; //message_id;msg;datetime;
    activityLog: any[];
  };
}
