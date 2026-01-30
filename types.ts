import React from 'react';

export interface NavItem {
  label: string;
  path: string;
}

export interface HistoryItem {
  year: string;
  events: string[];
}

export interface ServiceItem {
  title: string;
  description: string;
  details: string[];
  icon: React.ReactNode;
}

export interface Client {
  name: string;
  logoText: string;
}

export interface Benefit {
  category: string;
  items: string[];
  icon: React.ReactNode;
}