import { BlockManager } from 'packages/easy-email-core';
import { BlockAttributeConfigurationManager } from 'packages/easy-email-extensions';
import {
  ProductRecommendation,
  Panel as ProductRecommendationPanel,
} from './ProductRecommendation';
import { CustomBlocksType } from './constants';

BlockManager.registerBlocks({
  [CustomBlocksType.PRODUCT_RECOMMENDATION]: ProductRecommendation,
});

BlockAttributeConfigurationManager.add({
  [CustomBlocksType.PRODUCT_RECOMMENDATION]: ProductRecommendationPanel,
});
