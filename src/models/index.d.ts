import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type ProductMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type FeaturesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Product {
  readonly id: string;
  readonly address?: string;
  readonly price?: number;
  readonly image_url?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Product, ProductMetaData>);
  static copyOf(source: Product, mutator: (draft: MutableModel<Product, ProductMetaData>) => MutableModel<Product, ProductMetaData> | void): Product;
}

export declare class Features {
  readonly id: string;
  readonly name?: string;
  readonly describe?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Features, FeaturesMetaData>);
  static copyOf(source: Features, mutator: (draft: MutableModel<Features, FeaturesMetaData>) => MutableModel<Features, FeaturesMetaData> | void): Features;
}