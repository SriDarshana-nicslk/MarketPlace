/**
 *
 * product is an individual item of same stock
 */
export interface Stock {
  stock_id: string; //unique
  stock_name: string;
  quantity: number;
  price: number; //totalifquantity>1
  discount: string; //15%orBuy2get1
  description?: string;
  noOfSales?: number; //calculate&update
  rating: any; //0to5

  additionalData?: {
    categories?: any[];
    demension?: string; //demension
    weight?: string;
    type?: string;
    brand?: string;
    model?: string;
    condition?: string; //new,used
    features?: any[];
    location?: string;
    buyingFormat?: any[]; //buyitnow,auction etc
    deliveryOption?: string; //freeshipping etc
    paymentMethods?: any[];
    tags?: any[]; //bestselling,handmade etc
    manufactureAt?: Date;
    expireAt?: Date;
  };

  choices?: {
    colors?: any[];
    pattern?: any[];
    sizes?: any[]; //M/L/XL
  };
  stockOtherData?: {
    notifyWhen: number; //toset action when less than noOfItems
    activityLog: any[]; //when added,ordered etc
    reviews?: any[];
  };
}
