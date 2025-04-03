
export interface PersonalInfo {
  name: string;
  phone: string;
  email: string;
  linkedin: string;
  github: string;
  location: string;
}

export interface Education {
  institution: string;
  degree: string;
  graduationDate: string;
  gpa: string;
}

export interface Skill {
  category: string;
  skills: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  link: string;
}

export interface Language {
  language: string;
  proficiency: string;
}

export interface ResumeData {
  personalInfo: PersonalInfo;
  objective: string;
  education: Education[];
  skills: Skill[];
  certifications: Certification[];
  languages: Language[];
}
