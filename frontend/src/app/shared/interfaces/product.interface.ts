export interface Product {
  product_id: string;
  product_name: string;
  price: number;
  description?: string;
  // quantity: 1;
  status: string; //instock,outofstock

  choice?: {
    color?: string;
    pattern?: string;
    size?: string;
  };

  isOrdered?: boolean;
  isProsessing?: boolean;
  isDeliverd?: boolean;

  stockData?: {
    stock_id: string;
    quantity: number;
    noOfSales?: number;
    rating: any; //0to5
    discount: string; //15%orBuy2get1
    additionalData?: {};//sameasstock
    choices?: {};
    reviews?: any[];
  };
}
