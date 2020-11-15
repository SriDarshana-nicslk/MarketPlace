export interface Buyer {
  buyer_id: string;
  buyer_name: string;
  email: string;
  password: string; //encrypt
  phone: string;

  buyerAdditionalData?: {
    rating: any;
    orderedList?: any[];
    pendingList?: any[];
    recievedList?: any[];
    messages?: any[]; //message_id;msg;datetime;
    status?: string; //active,blocked
    activityLog: any[];
  };
}
