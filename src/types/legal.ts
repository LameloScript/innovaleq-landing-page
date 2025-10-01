export interface LegalSection {
  title: string;
  content: string | string[];
}

export interface LegalPageContent {
  title: string;
  lastUpdated: string;
  sections: LegalSection[];
}

export interface CompanyInfo {
  name: string;
  legalForm: string;
  address: string;
  phone: string;
  email: string;
  siret?: string;
  director?: string;
}