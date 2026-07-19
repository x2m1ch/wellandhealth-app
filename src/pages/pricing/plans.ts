export type PlanCardType = "Starter" | "Professional" | "Organization";

export interface PlanCard {
  type: PlanCardType;
  price: number;
  advantages?: string[];
}

interface AdvantagesChecks {
  name: string;
  starter: boolean;
  professional: boolean;
  organization: boolean;
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

export const namesRows = [
  "30-day free trial",
  "Team libraries",
  "Smart analytics platform",
  "Chat support 24/7",
  "System analytics",
  "Advanced support services",
];

export const advantagesChecks: AdvantagesChecks[] = [
  {
    name: "30-day free trial",
    starter: true,
    professional: true,
    organization: true,
  },
  {
    name: "Team libraries",
    starter: true,
    professional: true,
    organization: true,
  },
  {
    name: "Smart analytics platform",
    starter: false,
    professional: true,
    organization: true,
  },
  {
    name: "Chat support 24/7",
    starter: false,
    professional: true,
    organization: true,
  },
  {
    name: "System analytics",
    starter: false,
    professional: false,
    organization: true,
  },
  {
    name: "Advanced support services",
    starter: false,
    professional: false,
    organization: true,
  },
];

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
