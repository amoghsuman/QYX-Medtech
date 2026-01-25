
import React from 'react';

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface MarketData {
  name: string;
  size2023: number;
  forecast2030: number;
  cagr: string;
}

export interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: string;
}

export interface CompetitorData {
  feature: string;
  qyx: string;
  competitor1: string;
  competitor2: string;
}