export type PlanCardType = "Starter" | "Professional" | "Organization";

export interface PlanCard {
  type: PlanCardType;
  price: number;
  advantages?: string[];
}

export const advantages = {
  starter: [
    "Up to 1 users",
    "Analytics platform",
    "30-day free trial",
    "Team libraries",
  ],
  professional: [
    "Up to 20 users",
    "Smart analytics platform",
    "30-day free trial",
    "Team libraries",
    "Chat support 24/7",
  ],
  organization: [
    "Unlimited users",
    "System analytics",
    "30-day free trial",
    "Team libraries",
    "Chat support 24/7",
    "Advanced support services",
  ],
};

export const PLANS: PlanCard[] = [
  {
    type: "Starter",
    price: 9,
    advantages: advantages.starter,
  },
  {
    type: "Professional",
    price: 12,
    advantages: advantages.professional,
  },
  {
    type: "Organization",
    price: 20,
    advantages: advantages.organization,
  },
];