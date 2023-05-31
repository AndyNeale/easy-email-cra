import { BasicType } from 'packages/easy-email-core/constants';
import { Button, IButton } from './Button';
import { Carousel, ICarousel } from './Carousel';
import { Column, IColumn } from './Column';
import { Divider, IDivider } from './Divider';
import { Group, IGroup } from './Group';
import { Hero, IHero } from './Hero';
import { IImage, Image } from './Image';
import { INavbar, Navbar } from './Navbar';
import { IPage, Page } from './Page';
import { IRaw, Raw } from './Raw';
import { ISection, Section } from './Section';
import { ISocial, Social } from './Social';
import { ISpacer, Spacer } from './Spacer';
import { ITemplate, Template } from './Template';
import { IText, Text } from './Text';
import { IWrapper, Wrapper } from './Wrapper';

import { Accordion, IAccordion } from './Accordion';
import { AccordionElement, IAccordionElement } from './AccordionElement';
import { AccordionText, IAccordionText } from './AccordionText';
import { AccordionTitle, IAccordionTitle } from './AccordionTitle';
import { ITable, Table } from './Table';

export const standardBlocks = {
  [BasicType.PAGE]: Page,
  [BasicType.SECTION]: Section,
  [BasicType.COLUMN]: Column,
  [BasicType.TEXT]: Text,
  [BasicType.IMAGE]: Image,
  [BasicType.GROUP]: Group,
  [BasicType.BUTTON]: Button,
  [BasicType.DIVIDER]: Divider,
  [BasicType.WRAPPER]: Wrapper,
  [BasicType.SPACER]: Spacer,
  [BasicType.RAW]: Raw,
  [BasicType.CAROUSEL]: Carousel,
  [BasicType.HERO]: Hero,
  [BasicType.NAVBAR]: Navbar,
  [BasicType.SOCIAL]: Social,

  // spacial block, render string
  [BasicType.TEMPLATE]: Template,

  // TODO:

  [BasicType.ACCORDION]: Accordion,
  [BasicType.ACCORDION_ELEMENT]: AccordionElement,
  [BasicType.ACCORDION_TITLE]: AccordionTitle,
  [BasicType.ACCORDION_TEXT]: AccordionText,

  [BasicType.TABLE]: Table,
};

export type {
  IPage,
  ISection,
  IWrapper,
  IColumn,
  IGroup,
  IText,
  ITable,
  IImage,
  IButton,
  IDivider,
  ISpacer,
  ICarousel,
  IHero,
  ISocial,
  INavbar,
  IRaw,
  IAccordion,
  IAccordionElement,
  IAccordionTitle,
  IAccordionText,
  ITemplate,
};
