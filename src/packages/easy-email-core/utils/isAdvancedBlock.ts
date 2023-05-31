import { AdvancedType } from 'packages/easy-email-core/constants';

export function isAdvancedBlock(type: any) {
  return Object.values(AdvancedType).includes(type);
}
