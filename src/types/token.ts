
export interface TokenTransaction {
  id: string;
  user_id: string;
  amount: number;
  description: string;
  transaction_type: 'earn' | 'redeem';
  created_at: string;
  action_type?: 'report' | 'respond' | 'assist' | 'verify' | 'other';
  verified: boolean;
  emergency_id?: string;
}

export interface RedemptionPartner {
  id: string;
  name: string;
  logo: string;
  discount_percentage: number;
  max_discount_percentage: number;
  location: string;
  services: string[];
}
