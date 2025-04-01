import type { SectionHeadline, LinkItem } from "~/types/common";

export type ContactItem = LinkItem;

export type ContactFormField = {
  id: string;
  label: string;
  placeholder: string;
  required?: boolean;
  rows?: number;
  type: 'text' | 'email' | 'textarea';
  colSpan?: 'full' | 'half';
};

export type ContactFormConfig = {
  button: {
    label: string;
  };
  fields: ContactFormField[];
};

export type ContactContent = {
  headline: SectionHeadline;
  contacts: ContactItem[];
  formConfig: ContactFormConfig;
};
