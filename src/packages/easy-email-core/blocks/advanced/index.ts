import { AdvancedType } from 'packages/easy-email-core/constants';
import {
  AdvancedAccordion,
  AdvancedButton,
  AdvancedCarousel,
  AdvancedColumn,
  AdvancedDivider,
  AdvancedGroup,
  AdvancedHero,
  AdvancedImage,
  AdvancedNavbar,
  AdvancedSection,
  AdvancedSocial,
  AdvancedSpacer,
  AdvancedText,
  AdvancedWrapper,
} from './blocks';
import {
  AdvancedBlock,
  ICondition,
  IConditionGroup,
  IConditionGroupItem,
  Operator,
  OperatorSymbol,
} from './generateAdvancedBlock';

export const advancedBlocks = {
  [AdvancedType.TEXT]: AdvancedText,
  [AdvancedType.BUTTON]: AdvancedButton,
  [AdvancedType.IMAGE]: AdvancedImage,
  [AdvancedType.DIVIDER]: AdvancedDivider,
  [AdvancedType.SPACER]: AdvancedSpacer,
  [AdvancedType.NAVBAR]: AdvancedNavbar,
  [AdvancedType.ACCORDION]: AdvancedAccordion,
  [AdvancedType.CAROUSEL]: AdvancedCarousel,
  [AdvancedType.SOCIAL]: AdvancedSocial,

  [AdvancedType.WRAPPER]: AdvancedWrapper,
  [AdvancedType.SECTION]: AdvancedSection,
  [AdvancedType.GROUP]: AdvancedGroup,
  [AdvancedType.COLUMN]: AdvancedColumn,
  [AdvancedType.HERO]: AdvancedHero,
};

export { Operator, OperatorSymbol };
export type { AdvancedBlock, ICondition, IConditionGroup, IConditionGroupItem };
