// Interface automatically generated by schemas-to-ts

import { Media } from '../../../../common/schemas-to-ts/Media';
import { Category } from '../../../category/content-types/category/category';
import { User } from '../../../../common/schemas-to-ts/User';
import { Category_Plain } from '../../../category/content-types/category/category';
import { User_Plain } from '../../../../common/schemas-to-ts/User';
import { AdminPanelRelationPropertyModification } from '../../../../common/schemas-to-ts/AdminPanelRelationPropertyModification';

export interface Article {
  id: number;
  attributes: {
    title: string;
    picture?: { data: Media };
    content: string;
    likes?: number;
    views?: number;
    category?: { data: Category };
    slug?: string;
    author?: { data: User };
  };
}
export interface Article_Plain {
  id: number;
  title: string;
  picture?: Media;
  content: string;
  likes?: number;
  views?: number;
  category?: Category_Plain;
  slug?: string;
  author?: User_Plain;
}

export interface Article_NoRelations {
  id: number;
  title: string;
  picture?: number;
  content: string;
  likes?: number;
  views?: number;
  category?: number;
  slug?: string;
  author?: number;
}

export interface Article_AdminPanelLifeCycle {
  id: number;
  title: string;
  picture?: AdminPanelRelationPropertyModification<Media>;
  content: string;
  likes?: number;
  views?: number;
  category?: AdminPanelRelationPropertyModification<Category_Plain>;
  slug?: string;
  author?: AdminPanelRelationPropertyModification<User_Plain>;
}
