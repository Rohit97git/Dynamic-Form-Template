export interface FormModel {
  type: string;
  label: string;
  model: string;
  required?: boolean;
  options?: string[];
  constraints?: {
    noFutureDate?: boolean;
    pattern?: string;
  };
}
