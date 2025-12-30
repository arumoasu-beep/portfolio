
import React from 'react';

export interface Service {
  id: string;
  title: string;
  titleEn: string;
  description: string;
  icon: React.ReactNode;
  skills: string[];
  color: string;
}

export interface Project {
  id: number;
  category: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
}

export interface Experience {
  year: string;
  title: string;
  description: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}
