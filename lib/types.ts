// lib/types.ts

export interface Appointment {
  id: string;
  name: string;
  email: string;
  date: string;
  dentistId: string;
  dentistName: string;
  time: string;
}

export interface Dentist {
  id: string;
  name: string;
  specialty: string;
  photo: string;
  bio: string;
  experience: string;
  rating: string;
}

export interface Service {
  id: string;
  name: string;
  photo: string;
  description: string;
}
