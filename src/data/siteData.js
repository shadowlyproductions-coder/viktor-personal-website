import {
  BadgeCheck,
  BookOpenText,
  Dumbbell,
  Headphones,
  Languages,
  MapPin,
  ScanLine,
  ShieldCheck,
  UserRoundCheck,
} from "lucide-react";

export const personalInfo = {
  name: "Viktor Stojanoski",
  location: "Zagreb, Croatia",
  email: "stojanoskiv24@gmail.com",
  phone: "+385 95 3606 329",
};

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Direction", href: "#direction" },
  { label: "Contact", href: "#contact" },
];

export const highlights = [
  { label: "Zagreb, Croatia", icon: MapPin },
  { label: "Advanced English", icon: Languages },
  { label: "Security and Hospitality", icon: ShieldCheck },
  { label: "Strength and Discipline", icon: Dumbbell },
];

export const experience = [
  {
    role: "Airport Security Officer",
    company: "Securitas Group",
    location: "Zagreb Airport, Croatia",
    status: "Current Role",
    responsibilities: [
      "Passenger, staff, and luggage screening",
      "X ray machine operation",
      "Restricted area access control",
      "Following strict airport safety procedures",
      "Calm response to incidents and irregular situations",
      "Professional interaction with passengers and airport staff",
    ],
  },
  {
    role: "Security Operator",
    company: "Johnson Matthey",
    location: "Skopje, North Macedonia",
    status: "Previous Role",
    responsibilities: [
      "Security monitoring and operational support",
      "Following procedures in a controlled environment",
      "Supporting site safety and access control",
      "Working with responsibility and attention to detail",
    ],
  },
  {
    role: "Front Desk / Guest Experience Expert",
    company: "Marriott Hotels",
    location: "Skopje, North Macedonia",
    status: "Previous Role",
    responsibilities: [
      "Guest check in and check out",
      "Reservation support",
      "Billing and guest communication",
      "Handling guest requests professionally",
      "Coordinating with hotel departments",
      "Delivering high quality customer service",
    ],
  },
  {
    role: "Sales / Stationery Assistant",
    company: "Charlie's Stationery",
    location: "Malta",
    status: "Previous Role",
    responsibilities: [
      "Customer service",
      "Sales support",
      "Product assistance",
      "Communication with customers in an international environment",
    ],
  },
];

export const skillGroups = [
  {
    title: "Security and Operations",
    icon: ScanLine,
    skills: [
      "Airport screening",
      "X ray operation",
      "Access control",
      "Procedure compliance",
      "Risk awareness",
      "Incident response",
    ],
  },
  {
    title: "Customer Service",
    icon: Headphones,
    skills: [
      "Guest relations",
      "Professional communication",
      "Problem solving",
      "Calm under pressure",
      "Multicultural communication",
      "Conflict handling",
    ],
  },
  {
    title: "Personal Strengths",
    icon: BadgeCheck,
    skills: [
      "Discipline",
      "Reliability",
      "Adaptability",
      "Fast learning",
      "Physical fitness",
      "Strong work ethic",
    ],
  },
  {
    title: "Career Development",
    icon: BookOpenText,
    skills: [
      "TESOL and TEFL learning",
      "Copywriting practice",
      "iGaming risk and fraud interest",
      "IT and cybersecurity self study",
    ],
  },
];

export const brandStats = [
  { label: "Training Mindset", value: "Consistent" },
  { label: "Work Style", value: "Calm" },
  { label: "Standard", value: "Professional" },
  { label: "Direction", value: "Forward" },
];

export const profilePillars = [
  { label: "Discipline", icon: Dumbbell },
  { label: "Reliability", icon: UserRoundCheck },
  { label: "Procedure", icon: ShieldCheck },
];
