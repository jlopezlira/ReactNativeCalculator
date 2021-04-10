export enum Variants {
  alt = 'alt',
  warning = 'warning',
}

export interface Props {
  action: (value: string) => void;
  label: string;
  large?: boolean;
  variant?: Variants;
}

export enum Operations {
  divide,
  minus,
  multiply,
  plus,
  reset,
}
