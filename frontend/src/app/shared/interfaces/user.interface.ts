export interface User {
  user_id: string;
  user_name: string;
  email: string;
  password: string; //encrypt
  phone: string;
  userRole: string; //admin etc

  userAdditionalData?: {
    status: string; //online,offline
    activityLog: any[];
    notifications?: any[];
  };
}
