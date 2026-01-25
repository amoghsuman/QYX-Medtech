
import React from 'react';
import { 
  ShieldCheck, 
  Smartphone, 
  Stethoscope, 
  Clock, 
  Users, 
  Target, 
  BarChart3, 
  TrendingUp, 
  Zap,
  CheckCircle2,
  Lock,
  MessageSquare
} from 'lucide-react';
import { Feature, TeamMember, MarketData, CompetitorData } from './types';

export const COMPANY_NAME = "QYX MedTech Private Limited";
export const TAGLINE = "Empowering Fertility with Privacy, Precision, and Professional Support.";
export const CONTACT_EMAIL = "qyxmedtech@gmail.com";
export const CONTACT_PHONE = "+91 8077015881";

export const CORE_OFFERINGS: Feature[] = [
  {
    title: "Home-based Male Fertility Kit",
    description: "Easy and hygienic at-home fertility testing with our single-use sample chip and reusable analyzer.",
    icon: <Smartphone className="w-8 h-8 text-orange-500" />
  },
  {
    title: "Instant Digital Reports",
    description: "Receive immediate, clear, and easy-to-understand fertility results delivered straight to your smartphone.",
    icon: <Clock className="w-8 h-8 text-orange-500" />
  },
  {
    title: "Doctor Consultation",
    description: "Optional professional guidance from medical experts for a complete healthcare experience.",
    icon: <Stethoscope className="w-8 h-8 text-orange-500" />
  },
  {
    title: "Privacy & Accessibility",
    description: "Confidential testing without clinic visits, overcoming social stigma and traditional barriers.",
    icon: <ShieldCheck className="w-8 h-8 text-orange-500" />
  }
];

export const UNIQUE_SELLING_POINTS = [
  { id: "01", title: "Private and Convenient", desc: "No clinic visits needed. Immediate results at home.", icon: <Lock className="w-6 h-6"/> },
  { id: "02", title: "Instant Digital Reports", desc: "Real-time, easy-to-understand data visualization.", icon: <BarChart3 className="w-6 h-6"/> },
  { id: "03", title: "Expert Support", desc: "Optional professional medical consultation integration.", icon: <MessageSquare className="w-6 h-6"/> },
  { id: "04", title: "Breaking Stigma", desc: "Encouraging early diagnosis through absolute privacy.", icon: <TrendingUp className="w-6 h-6"/> }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Arun Kumar",
    role: "Founder & Managing Director",
    description: "Arun leads QYX MedTech, overseeing overall operations, strategic planning, product vision, and execution. Holds a B.Pharm (2017).",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
  },
  {
    name: "Munesh Kumar",
    role: "Non-Executive Director",
    description: "Munesh provides strategic and advisory support, contributing to planning and decision-making. Holds a B.Pharm (2017).",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop"
  }
];

export const MARKET_INSIGHTS: MarketData[] = [
  { name: "Global Male Infertility", size2023: 4.0, forecast2030: 5.9, cagr: "4.9%" },
  { name: "Global Fertility Test", size2023: 7.38, forecast2030: 14.74, cagr: "8.1%" },
  { name: "India Male Infertility", size2023: 0.1028, forecast2030: 0.1528, cagr: "5.8%" },
  { name: "India Fertility Services", size2023: 1.5, forecast2030: 4.41, cagr: "12.7%" }
];

export const COMPETITIVE_ANALYSIS: CompetitorData[] = [
  { feature: "Type", qyx: "Digital Kit + Doctor Support", competitor1: "Basic Visual Test", competitor2: "Basic Visual Test" },
  { feature: "Reports", qyx: "Instant Digital + Consult", competitor1: "Basic Visual Result", competitor2: "Basic Visual Result" },
  { feature: "Experience", qyx: "Integrated Digital Ecosystem", competitor1: "Simple Home Use", competitor2: "Simple Home Use" },
  { feature: "Privacy", qyx: "High (Home testing)", competitor1: "High", competitor2: "High" },
  { feature: "Value Add", qyx: "Doctor Consult & AI Insights", competitor1: "Affordable Check", competitor2: "Easy to Use" }
];

export const REVENUE_ALLOCATION = [
  { name: 'Product Development', value: 40 },
  { name: 'Pilot Testing', value: 20 },
  { name: 'Regulatory Approvals', value: 15 },
  { name: 'Marketing & Branding', value: 10 },
  { name: 'Operational Costs', value: 7.5 },
  { name: 'Team Hiring', value: 5 },
  { name: 'Miscellaneous', value: 2.5 }
];
