export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** An RFC-3339 compliant Full Date Scalar */
  Date: any;
  /** An RFC-3339 compliant DateTime Scalar */
  DateTime: any;
  /** JSON Scalar Type */
  JSON: any;
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: any;
  /** Integers that will have a value greater than 0. */
  PositiveInt: any;
  /** Represents NULL values */
  Void: any;
};

export type ActivateUserInput = {
  id: Scalars['String'];
};

export type AdGroup = {
  __typename?: 'AdGroup';
  clicks?: Maybe<Scalars['Float']>;
  cpc?: Maybe<CurrencyDto>;
  cpv?: Maybe<CurrencyDto>;
  ctr?: Maybe<Scalars['Float']>;
  externalAdGroupId: Scalars['String'];
  externalCampaignId: Scalars['String'];
  impressions?: Maybe<Scalars['Float']>;
  name: Scalars['String'];
  platform: PlatformEnum;
  totalSpend?: Maybe<CurrencyDto>;
  viewRate?: Maybe<Scalars['Float']>;
  views?: Maybe<Scalars['Float']>;
};

/** An engagement metric for an adgroup. */
export type AdGroupEngagementMetric = {
  __typename?: 'AdGroupEngagementMetric';
  /** The ad group to which the metric applies. */
  adGroup: AdGroupWithMetrics;
  /** The date interval to which this metric applies. */
  interval: Interval;
  /** The value for common metrics, like likes, reactions, shares. */
  metric: CommonEngagementMetric;
};

/** A performance metric for an adgroup. */
export type AdGroupPerformanceMetric = {
  __typename?: 'AdGroupPerformanceMetric';
  /** The ad group to which the metric applies. */
  adGroup: AdGroupWithMetrics;
  /** The date interval to which this metric applies. */
  interval: Interval;
  /** The value for common metrics, like clicks, impressions, or conversions. */
  metric: CommonPerformanceMetric;
};

/** An Ad Group. */
export type AdGroupWithMetrics = {
  __typename?: 'AdGroupWithMetrics';
  /** The adgroup id. */
  id: Scalars['ID'];
  /** The adgroup name. */
  name: Scalars['String'];
};

export type AdMixCampaign = {
  __typename?: 'AdMixCampaign';
  budget: Scalars['Float'];
  id: Scalars['Float'];
  monthlyBudget: Array<Scalars['Float']>;
  name: Scalars['String'];
  platformAllocations: Array<PlatformAllocation>;
  proposalId: Scalars['Float'];
  status: Scalars['String'];
};

/** A performance metric for an ad. */
export type AdPerformanceMetric = {
  __typename?: 'AdPerformanceMetric';
  /** The campaign to which the metric applies. */
  ad: AdWithMetrics;
  /** The date interval to which this metric applies. */
  interval: Interval;
  /** The value for common metrics, like clicks, impressions, or conversions. */
  metric: CommonPerformanceMetric;
};

/** An Ad. */
export type AdWithMetrics = {
  __typename?: 'AdWithMetrics';
  /** The creative associated with the ad. */
  creative?: Maybe<Creative>;
  /** The ad id. */
  id: Scalars['ID'];
  /** The ad platform. */
  platform: Platform;
};

/** Response type for `mutation addAllocationToLineItem`. */
export type AddAllocationToLineItemResponse = {
  __typename?: 'AddAllocationToLineItemResponse';
  /** The allocation that was added to the line item. */
  allocation: LineItemAllocation;
  /** The line item that had the allocation added. */
  lineItem: LineItem;
};

/** Input for `AddContentToCreative` mutation. */
export type AddContentToCreativeInput = {
  /** The type of the creative */
  contentType: CreativeContentType;
  /** The dapi files creative id to add the content to */
  creativeId: Scalars['ID'];
  /** The url of the content */
  url: Scalars['String'];
};

export type AddMessageInput = {
  body?: InputMaybe<Scalars['String']>;
  conversationId: Scalars['Int'];
  fileIds?: InputMaybe<Array<Scalars['Int']>>;
  isInternal?: InputMaybe<Scalars['Boolean']>;
  notificationData?: InputMaybe<NotificationDataInput>;
  title?: InputMaybe<Scalars['String']>;
};

export type AddMessageToConversationInput = {
  authToken?: InputMaybe<ConversationAuthInput>;
  body: Scalars['String'];
  conversationId: Scalars['Float'];
  fileIds?: InputMaybe<Array<Scalars['Int']>>;
  isInternal?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
};

export type AddMessageToConversationsInput = {
  authToken?: InputMaybe<ConversationAuthInput>;
  /** The author of the message. Can only be used when authenticated via internal request token. */
  authorId?: InputMaybe<Scalars['ID']>;
  messages: Array<AddMessageInput>;
};

export type AdditionalReport = {
  __typename?: 'AdditionalReport';
  advertiserId: Scalars['Int'];
  created: Scalars['DateTime'];
  id: Scalars['PositiveInt'];
  iframeUrl: Scalars['String'];
  name: Scalars['String'];
  updated: Scalars['DateTime'];
};

/** An advertiser. */
export type Advertiser = {
  __typename?: 'Advertiser';
  additionalReports: Array<AdditionalReport>;
  created: Scalars['DateTime'];
  createdBy?: Maybe<User>;
  createdUserId?: Maybe<Scalars['String']>;
  /**
   * The guid of the Advertiser.  The guid is a wrapper for either the advertiser.id or the advertiser.mongoId
   * in the hierarchy-service.  We're using this value because it streamlines the usage of 'ID!' in the schema.
   */
  guid: Scalars['ID'];
  hierarchy?: Maybe<Hierarchy>;
  hierarchyId: Scalars['Float'];
  /** The advertiser id. */
  id: Scalars['Float'];
  industry: Scalars['String'];
  keywords: Array<Scalars['String']>;
  locations?: Maybe<Array<Location>>;
  logoFile?: Maybe<File>;
  logoFileId?: Maybe<Scalars['Float']>;
  /** @deprecated Use logoFile, which is federated and resolved through the subGraph */
  logoUri?: Maybe<Scalars['String']>;
  microIndustries: Array<Scalars['String']>;
  mongoId?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  productRates: Array<ProductRateResponse>;
  proposals: Array<ProposalType>;
  updated: Scalars['DateTime'];
  website: Scalars['String'];
};

/** An advertiser. */
export type AdvertiserProductRatesArgs = {
  effectiveDate: Scalars['DateTime'];
  productTypes: Array<ProductTypeEnum>;
};

/** A performance metric for an advertiser. */
export type AdvertiserPerformanceMetric = {
  __typename?: 'AdvertiserPerformanceMetric';
  /** The advertiser to which the metric applies. */
  advertiser: Advertiser;
  /** The date interval to which this metric applies. */
  interval: Interval;
  /** The value for common metrics, like clicks, impressions, or conversions. */
  metric: CommonPerformanceMetric;
};

/** Federated `AdvertiserProductListing` entity. */
export type AdvertiserProductListing = {
  __typename?: 'AdvertiserProductListing';
  /** The ID of the advertiser the product is listed for. */
  advertiserId: Scalars['ID'];
  /** The goal types when ordered for the advertiser. */
  goalTypes: Array<AllocationGoalType>;
  /**
   * The name to display to end users.
   * The original product name is located at `product.name`.
   */
  name: Scalars['String'];
  /** The product. */
  product: ProductResponse;
  /** The ID of the product. */
  productId: Scalars['ID'];
  /** The rates when ordered for the advertiser. */
  rateCard: RateCard;
  /** The ID of the rate card. */
  rateCardId: Scalars['ID'];
  /** When `ENABLED`, the product can be ordered for the advertiser. */
  status: HierarchyProductStatus;
};

/** Filter input for `advertiserProductListings` query. */
export type AdvertiserProductListingsFilterInput = {
  /** Select product listings for the specified advertiser ID. */
  advertiserId: Scalars['ID'];
  /** Select product listings where the product has any of the specified classes. */
  advertisingProductClasses?: InputMaybe<Array<Scalars['String']>>;
  /** Select product listings where the product has any of the specified lines. */
  advertisingProductLines?: InputMaybe<Array<Scalars['String']>>;
  /** Select product listings where the product has any of the specified lines. */
  advertisingProductTypes?: InputMaybe<Array<Scalars['String']>>;
  /** Select product listings for the specified products. */
  productIds?: InputMaybe<Array<Scalars['ID']>>;
  /** Filter product listings with a `product.name` similar to this one. */
  query?: InputMaybe<Scalars['String']>;
  /** Select product listings with the specified status. */
  status?: InputMaybe<HierarchyProductStatus>;
};

/** Response type for `advertiserProductListings` query. */
export type AdvertiserProductListingsResponse = {
  __typename?: 'AdvertiserProductListingsResponse';
  /** Information about the page. */
  pageInfo: PageInfo;
  /** The page of results. */
  results: Array<AdvertiserProductListing>;
};

/** Sort input for `advertiserProductListings` query. */
export type AdvertiserProductListingsSortInput = {
  /** The direction of the sorting. */
  direction?: InputMaybe<SortDirection>;
  /** The field by which results are sorted. */
  field?: InputMaybe<ProductListingSortableField>;
};

/** Federated `AdvertisingProduct` entity. */
export type AdvertisingProduct = ProductResponse & {
  __typename?: 'AdvertisingProduct';
  advertisingClass: Scalars['String'];
  advertisingLine: Scalars['String'];
  advertisingType: Scalars['String'];
  category: ProductCategory;
  created: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  legacyProductKeys?: Maybe<Array<Scalars['String']>>;
  name: Scalars['String'];
  platforms: Array<Platform>;
  productForms: Array<ProductForm>;
  type: ProductType;
  updated: Scalars['DateTime'];
};

export type AdvertisingProductRequest = {
  advertisingClass: Scalars['String'];
  advertisingLine: Scalars['String'];
  advertisingType: Scalars['String'];
  description?: InputMaybe<Scalars['String']>;
  legacyProductKeys?: InputMaybe<Array<Scalars['String']>>;
  name: Scalars['String'];
  platforms?: InputMaybe<Array<Platform>>;
  productFormAppIds?: InputMaybe<Array<Scalars['ID']>>;
  type?: InputMaybe<ProductType>;
};

/** Fields that an `AdvertisingProduct` can be sorted by. */
export enum AdvertisingProductSortableField {
  /** Sort by the advertising product class. */
  AdvertisingProductClass = 'ADVERTISING_PRODUCT_CLASS',
  /** Sort by the advertising product line. */
  AdvertisingProductLine = 'ADVERTISING_PRODUCT_LINE',
  /** Sort by the advertising product type. */
  AdvertisingProductType = 'ADVERTISING_PRODUCT_TYPE',
  /** Sort by the date the product was created. */
  Created = 'CREATED',
  /** Sort by the product name. */
  Name = 'NAME',
  /** Sort by the date the product was last updated. */
  Updated = 'UPDATED',
}

/** Ways in which `advertisingProducts` query results can be filtered. */
export type AdvertisingProductsFilterInput = {
  /** Select advertising products where the product has any of the specified classes. */
  advertisingProductClasses?: InputMaybe<Array<Scalars['String']>>;
  /** Select advertising products where the product has any of the specified lines. */
  advertisingProductLines?: InputMaybe<Array<Scalars['String']>>;
  /** Select advertising products where the product has any of the specified lines. */
  advertisingProductTypes?: InputMaybe<Array<Scalars['String']>>;
  /** Select advertising products in the specified list. */
  ids?: InputMaybe<Array<Scalars['ID']>>;
  /** Filter advertising products with query on `name`. */
  query?: InputMaybe<Scalars['String']>;
};

/** Response type for `query advertisingProducts`. */
export type AdvertisingProductsResponse = {
  __typename?: 'AdvertisingProductsResponse';
  /** Information about the page. */
  pageInfo: PageInfo;
  /**
   * The page of results returned.
   * @deprecated Use pageInfo { pageNumber }
   */
  pageNumber: Scalars['Int'];
  /**
   * The number of results returned per page.
   * @deprecated Use pageInfo { pageSize }
   */
  pageSize: Scalars['Int'];
  /** The page of results. */
  results: Array<AdvertisingProduct>;
  /**
   * The total number of results.
   * @deprecated Use pageInfo { totalCount }
   */
  totalCount: Scalars['Int'];
  /**
   * The total number of pages.
   * @deprecated Use pageInfo { totalPages }
   */
  totalPages: Scalars['Int'];
};

/** How to sort `advertisingProducts` query results. */
export type AdvertisingProductsSortInput = {
  /** The direction of the sorting. */
  direction: SortDirection;
  /** The field by which results are sorted. */
  field: AdvertisingProductSortableField;
};

export type AggregateExportJob = {
  __typename?: 'AggregateExportJob';
  aggregateExportJobType: AggregateExportJobTypeEnum;
  completionNotes: Scalars['String'];
  externalId: Scalars['String'];
  jobId: Scalars['Float'];
  requestorId: Scalars['String'];
  status: AggregateExportJobTypeStatusEnum;
};

/** Aggregate export job types */
export enum AggregateExportJobTypeEnum {
  ExportAdvertisingProducts = 'EXPORT_ADVERTISING_PRODUCTS',
  ExportProducts = 'EXPORT_PRODUCTS',
  ExportUsers = 'EXPORT_USERS',
  OrderDetailSavedView = 'ORDER_DETAIL_SAVED_VIEW',
}

/** Status types for determining a given job's state */
export enum AggregateExportJobTypeStatusEnum {
  Completed = 'COMPLETED',
  Error = 'ERROR',
  New = 'NEW',
  Pending = 'PENDING',
}

export type AggregateExportResult = {
  __typename?: 'AggregateExportResult';
  jobId: Scalars['Float'];
};

export enum AllocationGoalSubtype {
  MakeGood = 'MAKE_GOOD',
  None = 'NONE',
  Promotion = 'PROMOTION',
  Renewal = 'RENEWAL',
}

export enum AllocationGoalType {
  Budget = 'BUDGET',
  Click = 'CLICK',
  Impression = 'IMPRESSION',
  View = 'VIEW',
}

/** describes the date range for an analytics value */
export type AnalyticsInterval = {
  __typename?: 'AnalyticsInterval';
  /** inclusive end date */
  endDate: Scalars['Date'];
  /** inclusive start date */
  startDate: Scalars['Date'];
};

/** An type representing a location */
export type AnalyticsLocation = {
  __typename?: 'AnalyticsLocation';
  /** The mapbox boundary */
  boundary?: Maybe<MapboxBoundary>;
  /** The city */
  city?: Maybe<Scalars['String']>;
  /** The country */
  country?: Maybe<Scalars['String']>;
  /** The dma */
  dma?: Maybe<Scalars['String']>;
  /** The mapbox dma boundary */
  dmaBoundary?: Maybe<Dma>;
  /** The dma display name */
  dmaDisplayName?: Maybe<Scalars['String']>;
  /** The location type identifier associated with this location type */
  locationType: AnalyticsLocationTypeIdentifier;
  /** The region */
  region?: Maybe<Scalars['String']>;
  /** The zip code */
  zip?: Maybe<Scalars['String']>;
};

/** A type representing a type of location */
export type AnalyticsLocationType = {
  __typename?: 'AnalyticsLocationType';
  /** The display name for the location type */
  displayName: Scalars['String'];
  /** The location type identifier associated with this location type */
  locationTypeIdentifier: AnalyticsLocationTypeIdentifier;
};

/** A location type representing a specific geo granularity. Typically used for common geo metrics */
export enum AnalyticsLocationTypeIdentifier {
  City = 'CITY',
  Dma = 'DMA',
  Region = 'REGION',
  Zip = 'ZIP',
}

/** Describes the means by which ad content is presented to users. */
export type AnalyticsProductType = {
  __typename?: 'AnalyticsProductType';
  /** A name for the product type that can be presented to end-users. */
  displayName: Scalars['String'];
  /** The identifier for this product type. */
  identifier: AnalyticsProductTypeIdentifier;
};

/** Describes the means by which ad content is presented to users. */
export enum AnalyticsProductTypeIdentifier {
  /** Ad content served through the Google Ad Manager DSP. */
  Admanager = 'ADMANAGER',
  /** Ad content presented to users in alternative venues (e.g., cannabis) through DSPs like StackAdapt. */
  AltNetwork = 'ALT_NETWORK',
  /** Ad content presented to users via the Bing DSP. */
  Bing = 'BING',
  /** Static ad content, usually managed through Tradedesk. */
  Display = 'DISPLAY',
  /** Ad content presented to users through Google Display Network, which is a group of more than 2 million websites, videos, and apps where your Google Ads can appear. Managed by Google Ads. */
  Gdn = 'GDN',
  /** Ad content presented to users among search results, usually managed by Google Ads. */
  Search = 'SEARCH',
  /** Ad content presented to users through social networks like Facebook and Instagram. */
  Social = 'SOCIAL',
  /** Multimedia ad content -- which could be streaming tv, audio, or pre-roll -- usually managed through Tradedesk. */
  Video = 'VIDEO',
  /** Ad content presented to users through YouTube, managed by Google Ads. */
  Youtube = 'YOUTUBE',
}

export enum AnalyticsResolution {
  Day = 'DAY',
  Month = 'MONTH',
  Quarter = 'QUARTER',
  Week = 'WEEK',
  Year = 'YEAR',
}

export enum ApiAnalyticsMediaType {
  Admanager = 'ADMANAGER',
  AltNetwork = 'ALT_NETWORK',
  Bing = 'BING',
  Display = 'DISPLAY',
  Gdn = 'GDN',
  Search = 'SEARCH',
  Social = 'SOCIAL',
  Video = 'VIDEO',
  Youtube = 'YOUTUBE',
}

export type ApproveCampaignData = {
  campaignType: CampaignTypes;
  id: Scalars['Float'];
};

export type BaseAdGroupPerformanceValue = {
  adGroupId: Scalars['String'];
  adGroupName: Scalars['String'];
};

export type BaseBrandValue = {
  brandId?: Maybe<Scalars['String']>;
  clicks: Scalars['Float'];
  ctr: Scalars['Float'];
  impressions: Scalars['Float'];
};

export type BaseCampaignPerformanceValue = {
  campaignId: Scalars['String'];
  campaignName?: Maybe<Scalars['String']>;
};

export type BaseConversionValue = {
  conversions: Scalars['Float'];
  postClickConversions: Scalars['Float'];
  postImpressionConversions: Scalars['Float'];
  trackingLabelName?: Maybe<Scalars['String']>;
  trackingLabelSequence: Scalars['Float'];
};

export type BaseDeviceTypeValue = {
  clicks: Scalars['Float'];
  ctr: Scalars['Float'];
  deviceType: TtdDeviceTypeEnum;
  impressions: Scalars['Float'];
};

export type BaseDisplayPerformanceValue = {
  clicks: Scalars['Float'];
  conversions: Scalars['Float'];
  ctr: Scalars['Float'];
  impressions: Scalars['Float'];
  postClickConversions: Scalars['Float'];
  postImpressionConversions: Scalars['Float'];
};

export type BaseFacebookPerformanceValue = {
  clicks: Scalars['Float'];
  comments: Scalars['Float'];
  conversionRate: Scalars['Float'];
  conversions: Scalars['Float'];
  costPerClick?: Maybe<CurrencyDto>;
  costPerConversion?: Maybe<CurrencyDto>;
  ctr: Scalars['Float'];
  engagements: Scalars['Float'];
  impressions: Scalars['Float'];
  likes: Scalars['Float'];
  shares: Scalars['Float'];
  spend?: Maybe<CurrencyDto>;
  viewRate: Scalars['Float'];
  views: Scalars['Float'];
};

export type BaseGdnPerformanceValue = {
  clicks: Scalars['Float'];
  conversionRate: Scalars['Float'];
  conversions: Scalars['Float'];
  ctr: Scalars['Float'];
  impressions: Scalars['Float'];
};

export type BaseGeoValue = {
  boundary?: Maybe<MapboxBoundary>;
  city?: Maybe<Scalars['String']>;
  clicks: Scalars['Float'];
  conversions: Scalars['Float'];
  coordinates?: Maybe<LatLongType>;
  country: Scalars['String'];
  impressions: Scalars['Float'];
  location: Scalars['String'];
  region: Scalars['String'];
  zip?: Maybe<Scalars['String']>;
};

export type BaseGoogleAdsDto = {
  searchImpressionShare: Scalars['Float'];
};

export type BaseGoogleCreativeValue = {
  adName: Scalars['String'];
  clicks: Scalars['Float'];
  conversionRate: Scalars['Float'];
  conversions: Scalars['Float'];
  creativeId: Scalars['String'];
  ctr: Scalars['Float'];
  impressions: Scalars['Float'];
  view25PctCompletionRate: Scalars['Float'];
  view50PctCompletionRate: Scalars['Float'];
  view75PctCompletionRate: Scalars['Float'];
  viewCompletionRate: Scalars['Float'];
  viewRate: Scalars['Float'];
  views: Scalars['Float'];
  views25PctCompleted: Scalars['Float'];
  views50PctCompleted: Scalars['Float'];
  views75PctCompleted: Scalars['Float'];
  viewsCompleted: Scalars['Float'];
};

export type BaseGoogleDeviceTypeValue = {
  clicks: Scalars['Float'];
  conversionRate: Scalars['Float'];
  conversions: Scalars['Float'];
  ctr: Scalars['Float'];
  deviceType: GoogleDeviceTypeEnum;
  impressions: Scalars['Float'];
  view25PctCompletionRate: Scalars['Float'];
  view50PctCompletionRate: Scalars['Float'];
  view75PctCompletionRate: Scalars['Float'];
  viewCompletionRate: Scalars['Float'];
  viewRate: Scalars['Float'];
  views: Scalars['Float'];
  views25PctCompleted: Scalars['Float'];
  views50PctCompleted: Scalars['Float'];
  views75PctCompleted: Scalars['Float'];
  viewsCompleted: Scalars['Float'];
};

export type BaseMetaCreativeValue = {
  adName: Scalars['String'];
  clicks: Scalars['Float'];
  comments: Scalars['Float'];
  conversionRate: Scalars['Float'];
  conversions: Scalars['Float'];
  costPerClick?: Maybe<CurrencyDto>;
  costPerConversion?: Maybe<CurrencyDto>;
  creativeId: Scalars['String'];
  ctr: Scalars['Float'];
  engagements: Scalars['Float'];
  impressions: Scalars['Float'];
  likes: Scalars['Float'];
  reactions: Scalars['Float'];
  shares: Scalars['Float'];
  spend?: Maybe<CurrencyDto>;
  viewRate: Scalars['Float'];
  views: Scalars['Float'];
};

export type BaseRollupPerformanceValue = {
  clicks: Scalars['Float'];
  conversions: Scalars['Float'];
  ctr: Scalars['Float'];
  impressions: Scalars['Float'];
  viewCompletionRate: Scalars['Float'];
  viewsCompleted: Scalars['Float'];
  viewsStarted: Scalars['Float'];
};

export type BaseSearchPerformanceValue = {
  clicks: Scalars['Float'];
  conversionRate: Scalars['Float'];
  conversions: Scalars['Float'];
  costPerClick?: Maybe<CurrencyDto>;
  costPerConversion?: Maybe<CurrencyDto>;
  ctr: Scalars['Float'];
  impressions: Scalars['Float'];
  spend?: Maybe<CurrencyDto>;
};

export type BaseTimeOfDayResponse = {
  interval: TimeOfDayInterval;
};

export type BaseTimeOfDayValue = {
  clicks: Scalars['Float'];
  ctr: Scalars['Float'];
  impressions: Scalars['Float'];
};

export type BaseTtdCreativeValue = {
  clicks: Scalars['Float'];
  conversions: Scalars['Float'];
  creativeId: Scalars['String'];
  ctr: Scalars['Float'];
  impressions: Scalars['Float'];
  postClickConversions: Scalars['Float'];
  postImpressionConversions: Scalars['Float'];
};

export type BaseVideoPerformanceValue = {
  clicks: Scalars['Float'];
  conversions: Scalars['Float'];
  ctr: Scalars['Float'];
  impressions: Scalars['Float'];
  postClickConversions: Scalars['Float'];
  postImpressionConversions: Scalars['Float'];
  view25PctCompletionRate: Scalars['Float'];
  view50PctCompletionRate: Scalars['Float'];
  view75PctCompletionRate: Scalars['Float'];
  viewCompletionRate: Scalars['Float'];
  views25PctCompleted: Scalars['Float'];
  views50PctCompleted: Scalars['Float'];
  views75PctCompleted: Scalars['Float'];
  viewsCompleted: Scalars['Float'];
  viewsStarted: Scalars['Float'];
};

export type BaseYoutubePerformanceValue = {
  clicks: Scalars['Float'];
  conversionRate: Scalars['Float'];
  conversions: Scalars['Float'];
  costPerClick?: Maybe<CurrencyDto>;
  costPerConversion?: Maybe<CurrencyDto>;
  ctr: Scalars['Float'];
  impressions: Scalars['Float'];
  spend?: Maybe<CurrencyDto>;
  view25PctCompletionRate: Scalars['Float'];
  view50PctCompletionRate: Scalars['Float'];
  view75PctCompletionRate: Scalars['Float'];
  viewCompletionRate: Scalars['Float'];
  viewRate: Scalars['Float'];
  views: Scalars['Float'];
  views25PctCompleted: Scalars['Float'];
  views50PctCompleted: Scalars['Float'];
  views75PctCompleted: Scalars['Float'];
  viewsCompleted: Scalars['Float'];
};

export type BasicTargeting = {
  __typename?: 'BasicTargeting';
  description?: Maybe<Scalars['String']>;
  targets: Array<Scalars['String']>;
};

export type BehavioralTtdTarget = {
  __typename?: 'BehavioralTTDTarget';
  type: Scalars['String'];
  values?: Maybe<Array<TargetValues>>;
};

export enum BillingType {
  Cpm = 'CPM',
  Cpv = 'CPV',
  MonthlyFlatFee = 'MONTHLY_FLAT_FEE',
  MonthlyMgmtFee = 'MONTHLY_MGMT_FEE',
  SetupFee = 'SETUP_FEE',
}

export type Brand = {
  __typename?: 'Brand';
  file?: Maybe<File>;
  id: Scalars['Float'];
  logoFileId?: Maybe<Scalars['String']>;
  name: Scalars['String'];
};

/** A type indicating status of a bulk write. */
export type BulkWriteResult = {
  __typename?: 'BulkWriteResult';
  /** Whether the bulk write was successful. */
  success: Scalars['Boolean'];
};

export type BusinessHour = {
  __typename?: 'BusinessHour';
  closeTime?: Maybe<Scalars['String']>;
  created: Scalars['DateTime'];
  day: Scalars['Int'];
  id: Scalars['Float'];
  locationId: Scalars['Int'];
  openTime?: Maybe<Scalars['String']>;
  updated: Scalars['DateTime'];
};

export type CampaignAggregations = {
  __typename?: 'CampaignAggregations';
  largeScreenCompletionRate?: Maybe<Scalars['Float']>;
  largeScreenImpressions?: Maybe<Scalars['Float']>;
  smallScreenCompletionRate?: Maybe<Scalars['Float']>;
  smallScreenImpressions?: Maybe<Scalars['Float']>;
  totalCompletionRate?: Maybe<Scalars['Float']>;
  totalImpressions?: Maybe<Scalars['Float']>;
};

export type CampaignForecast = {
  __typename?: 'CampaignForecast';
  availableBudget?: Maybe<Scalars['Float']>;
  devices?: Maybe<Range>;
  impressions?: Maybe<Range>;
  isValid?: Maybe<Scalars['Boolean']>;
};

export type CampaignForecastInput = {
  availableBudget?: InputMaybe<Scalars['Float']>;
  devices?: InputMaybe<RangeInput>;
  impressions?: InputMaybe<RangeInput>;
  isValid?: InputMaybe<Scalars['Boolean']>;
};

export type CampaignPace = {
  __typename?: 'CampaignPace';
  campaignId: Scalars['Int'];
  clicks?: Maybe<Scalars['Float']>;
  cpc?: Maybe<CurrencyDto>;
  cpv?: Maybe<CurrencyDto>;
  ctr?: Maybe<Scalars['Float']>;
  externalCampaignId?: Maybe<Scalars['String']>;
  impressions?: Maybe<Scalars['Float']>;
  platform?: Maybe<PlatformEnum>;
  totalSpend?: Maybe<CurrencyDto>;
  viewRate?: Maybe<Scalars['Float']>;
  views?: Maybe<Scalars['Float']>;
};

/** A performance metric for a campaign. */
export type CampaignPerformanceMetric = {
  __typename?: 'CampaignPerformanceMetric';
  /** The campaign to which the metric applies. */
  campaign: CampaignWithMetrics;
  /** The date interval to which this metric applies. */
  interval: Interval;
  /** The value for common metrics, like clicks, impressions, or conversions. */
  metric: CommonPerformanceMetric;
};

/** Possible statuses for a campaign */
export enum CampaignStatus {
  Draft = 'DRAFT',
  ReadyForSale = 'READY_FOR_SALE',
  Sold = 'SOLD',
  UnderReview = 'UNDER_REVIEW',
}

/** All campaign types on a proposal */
export enum CampaignTypes {
  AdMixCampaigns = 'adMixCampaigns',
  ManualCustomCampaigns = 'manualCustomCampaigns',
  ManualDisplayCampaigns = 'manualDisplayCampaigns',
  ManualEmailCampaigns = 'manualEmailCampaigns',
  ManualGeofencingCampaigns = 'manualGeofencingCampaigns',
  ManualSemCampaigns = 'manualSEMCampaigns',
  ManualSeoCampaigns = 'manualSEOCampaigns',
  ManualSocialMediaCampaigns = 'manualSocialMediaCampaigns',
  ManualSpecializedCampaigns = 'manualSpecializedCampaigns',
  ManualStreamingAudioCampaigns = 'manualStreamingAudioCampaigns',
  ManualVideoCampaigns = 'manualVideoCampaigns',
}

/** A campaign. */
export type CampaignWithMetrics = {
  __typename?: 'CampaignWithMetrics';
  /** The campaign id. */
  id: Scalars['ID'];
  /** The campaign name. */
  name: Scalars['String'];
};

/** Ways in which `campaign` query results can be filtered. */
export type CampaignsFilterInput = {
  /** Select campaigns associated with any of the specified line items. */
  lineItemIds?: InputMaybe<Array<Scalars['ID']>>;
};

export type CensusDataType = {
  __typename?: 'CensusDataType';
  allocationOfMortgageStatus?: Maybe<Array<NameValueDataType>>;
  allocationOfRace?: Maybe<Array<NameValueDataType>>;
  allocationOfSex?: Maybe<Array<NameValueDataType>>;
  employmentStatus?: Maybe<Array<NameValueDataType>>;
  householdIncome?: Maybe<Array<NameValueDataType>>;
  householdType?: Maybe<Array<NameValueDataType>>;
  householdTypeBySize?: Maybe<Array<NameValueDataType>>;
  medianAgeBySex?: Maybe<Array<NameValueDataType>>;
  sexByEducationalAttainment?: Maybe<Array<NameValueDataType>>;
  tenure?: Maybe<Array<NameValueDataType>>;
  totalPopulation?: Maybe<Scalars['Float']>;
  yearStructureBuilt?: Maybe<Array<NameValueDataType>>;
};

export type CensusDataTypeAllocationOfMortgageStatusArgs = {
  locations: Array<Scalars['String']>;
};

export type CensusDataTypeAllocationOfRaceArgs = {
  locations: Array<Scalars['String']>;
};

export type CensusDataTypeAllocationOfSexArgs = {
  locations: Array<Scalars['String']>;
};

export type CensusDataTypeEmploymentStatusArgs = {
  locations: Array<Scalars['String']>;
};

export type CensusDataTypeHouseholdIncomeArgs = {
  locations: Array<Scalars['String']>;
};

export type CensusDataTypeHouseholdTypeArgs = {
  locations: Array<Scalars['String']>;
};

export type CensusDataTypeHouseholdTypeBySizeArgs = {
  locations: Array<Scalars['String']>;
};

export type CensusDataTypeMedianAgeBySexArgs = {
  locations: Array<Scalars['String']>;
};

export type CensusDataTypeSexByEducationalAttainmentArgs = {
  locations: Array<Scalars['String']>;
};

export type CensusDataTypeTenureArgs = {
  locations: Array<Scalars['String']>;
};

export type CensusDataTypeTotalPopulationArgs = {
  locations: Array<Scalars['String']>;
};

export type CensusDataTypeYearStructureBuiltArgs = {
  locations: Array<Scalars['String']>;
};

/** Input for `clearTradedeskCampaignConversionTrackingLabels` mutation. */
export type ClearTradedeskCampaignConversionTrackingLabelsInput = {
  /**
   * A list of Platform Campaign IDs whose locally stored Tradedesk Campaign Conversion Tracking Label Sets should be
   * cleared.
   */
  platformCampaignIds: Array<Scalars['String']>;
};

/** Input for `cloneLineItem`. */
export type CloneLineItemInput = {
  /** The ID of the line item to clone */
  id: Scalars['ID'];
  /**
   * An optional name to assign the cloned line item.
   *
   * When null, the cloned line item will have the name: `(CLONE) - ${original line item name}`
   */
  name?: InputMaybe<Scalars['String']>;
};

/** Input for `cloneOrder`. */
export type CloneOrderInput = {
  /** The ID of the order to clone */
  id: Scalars['ID'];
  /**
   * An optional name to assign the cloned order.
   *
   * When null, the cloned order will have the name: `(CLONE) - ${original order name}`
   */
  name?: InputMaybe<Scalars['String']>;
};

/** An set of common engagement metrics */
export type CommonEngagementMetric = {
  __typename?: 'CommonEngagementMetric';
  /** The total number of comments. */
  comments: Scalars['Int'];
  /** The total number of engagements. */
  engagements: Scalars['Int'];
  /** The total number of likes. */
  likes: Scalars['Int'];
  /** The total number of link clicks. */
  linkClicks: Scalars['Int'];
  /** The total number of reactions */
  reactions: Scalars['Int'];
  /** The total number of shares. */
  shares: Scalars['Int'];
  /** The total number of views. */
  views: Scalars['Int'];
};

/** A common geo metric */
export type CommonGeoMetric = {
  __typename?: 'CommonGeoMetric';
  /** The total number of clicks. */
  clicks: Scalars['Int'];
  /** The conversion rate (conversions / clicks). */
  conversionRate: Scalars['Float'];
  /** The total number of conversions. */
  conversions: Scalars['Float'];
  /** Ad spend per click. */
  costPerClick: Currency;
  /** Ad spend per conversion. */
  costPerConversion: Currency;
  /** The click through rate (clicks / impressions). */
  ctr: Scalars['Float'];
  /** The total number of impressions. */
  impressions: Scalars['Int'];
  /** The total cost of ad spend associated with these metrics. */
  spend: Currency;
};

export type CommonPerformanceMetric = {
  __typename?: 'CommonPerformanceMetric';
  /** The total number of clicks. */
  clicks: Scalars['Int'];
  /** The conversion rate (conversions / clicks). */
  conversionRate: Scalars['Float'];
  /** The total number of conversions. */
  conversions: Scalars['Float'];
  /** Ad spend per click. */
  costPerClick: Currency;
  /** Ad spend per conversion. */
  costPerConversion: Currency;
  /** The click through rate (clicks / impressions). */
  ctr: Scalars['Float'];
  /** The total number of impressions. */
  impressions: Scalars['Int'];
  /** The total cost of ad spend associated with these metrics. */
  spend: Currency;
  /** The view rate (views / views started). */
  viewRate: Scalars['Float'];
  /** The total number of video views. */
  views: Scalars['Int'];
  /** The number of times a video started playback. */
  viewsStarted: Scalars['Int'];
};

export type ContentTtdTarget = {
  __typename?: 'ContentTTDTarget';
  type: Scalars['String'];
  values?: Maybe<Array<Scalars['String']>>;
};

export type Context = {
  /** The default notification data to be sent whenever a message is added to the conversation. */
  notificationData?: InputMaybe<NotificationDataInput>;
  /** The `refereceUrl` for notifications that are sent whenever a message is added to the conversation. */
  referenceUrl?: InputMaybe<Scalars['String']>;
  /** The `subject` for emails that are sent whenever a message is added to the conversation. */
  subject?: InputMaybe<Scalars['String']>;
};

export type ContextNotificationData = {
  __typename?: 'ContextNotificationData';
  /** The default `secondaryText` for user notifications that are created whenever a message is added to the conversation. */
  secondaryText?: Maybe<Array<Scalars['String']>>;
};

export type ContextType = {
  __typename?: 'ContextType';
  conversationId: Scalars['Float'];
  created: Scalars['DateTime'];
  id: Scalars['Int'];
  /** The default notification data for user notifications that are created whenever a message is added to the conversation. */
  notificationData?: Maybe<ContextNotificationData>;
  /** The `refereceUrl` for user notifications that are created whenever a message is added to the conversation. */
  referenceUrl?: Maybe<Scalars['String']>;
  /** The `subject` for emails that are sent whenever a message is added to the conversation. */
  subject?: Maybe<Scalars['String']>;
  updated: Scalars['DateTime'];
};

export type ConversationAuthInput = {
  email: Scalars['String'];
  token: Scalars['String'];
};

export type ConversationInput = {
  authToken?: InputMaybe<ConversationAuthInput>;
  id?: InputMaybe<Scalars['Int']>;
};

/** Federated `ConversationType` entity. */
export type ConversationType = {
  __typename?: 'ConversationType';
  context?: Maybe<ContextType>;
  created: Scalars['DateTime'];
  /** The ID of the conversation */
  id: Scalars['Int'];
  listenerUserEmails: Array<Scalars['String']>;
  listenerUserIds: Array<Scalars['String']>;
  listenerUsers: Array<User>;
  /** Find a single message in the conversation by id */
  message?: Maybe<MessageType>;
  messages: MessagesResponse;
  referenceUrl?: Maybe<Scalars['String']>;
  updated: Scalars['DateTime'];
};

/** Federated `ConversationType` entity. */
export type ConversationTypeMessageArgs = {
  id: Scalars['Int'];
};

/** Federated `ConversationType` entity. */
export type ConversationTypeMessagesArgs = {
  cursor?: InputMaybe<CursorPaginationInput>;
};

export type CreateAdMixCampaignInput = {
  budget: Scalars['Float'];
  monthlyBudget: Array<Scalars['Float']>;
  name: Scalars['String'];
  platformAllocations?: InputMaybe<Array<CreatePlatformAllocationInput>>;
  status: Scalars['String'];
};

export type CreateAdvertiserInput = {
  hierarchyId: Scalars['Float'];
  industry: Scalars['String'];
  keywords?: InputMaybe<Array<Scalars['String']>>;
  microIndustries?: InputMaybe<Array<Scalars['String']>>;
  name: Scalars['String'];
  website: Scalars['String'];
};

export type CreateBusinessHourInput = {
  closeTime?: InputMaybe<Scalars['String']>;
  day: Scalars['Int'];
  openTime?: InputMaybe<Scalars['String']>;
};

/** Input for `createCampaign`. */
export type CreateCampaignInput = {
  /** The ID of the campaign on the external platform. */
  externalCampaignId?: InputMaybe<Scalars['ID']>;
  /** The ID of the line item this campaign should be associated with. */
  lineItemId: Scalars['ID'];
  /** A human readable name for the campaign. */
  name?: InputMaybe<Scalars['String']>;
  /** The name of the platform. */
  platform: Platform;
};

/** Input for `CreateCreativeInput` mutation. */
export type CreateCreativeInput = {
  /** The name of the creative */
  name: Scalars['String'];
  /** The Platform that the creative belongs to */
  platform: Platform;
  /** The third party ID of the creative associated with the platform. */
  platformId: Scalars['ID'];
  /** The type of the creative */
  type: CreativeType;
};

export type CreateDirectHubUserInput = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
};

/** Input for `CreateFile` Mutation. */
export type CreateFileInput = {
  /** The date/time when the files content will be removed and can no longer be downloaded. */
  fileExpiryDate?: InputMaybe<Scalars['DateTime']>;
  /** The extension of the file to store */
  fileExtension: Scalars['String'];
  /** The name of the file to store */
  filename: Scalars['String'];
};

export type CreateHierarchyInput = {
  mongoId?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  ownerId?: InputMaybe<Scalars['String']>;
  parentId: Scalars['Float'];
  shortName?: InputMaybe<Scalars['String']>;
  styleColor1?: InputMaybe<Scalars['String']>;
  styleColor2?: InputMaybe<Scalars['String']>;
  styleLogo?: InputMaybe<Scalars['String']>;
};

/** Input for `createLinkedAdvertiser` mutation. */
export type CreateLinkedAdvertiserInput = {
  /** The internal ID of the Advertiser to link. */
  advertiserId: Scalars['Int'];
  /** The Platform the Advertiser should be linked to. */
  platform: Platform;
  /** The Platform Advertiser ID the Advertiser should be linked to. */
  platformAdvertiserId: Scalars['String'];
  /** The hierarchy whose integration is the source of the external advertiser being linked. */
  sourceHierarchyId: Scalars['ID'];
};

/** Input for `createManagedOrder`. */
export type CreateManagedOrderInput = {
  /** The advertiser ID for which the order is being created for. */
  advertiserId: Scalars['ID'];
  /** The user ID that is assigned to the order. */
  assigneeUserId?: InputMaybe<Scalars['ID']>;
  /** The user ID that created the order. If null, attempts to fallback to the detected user making the request. */
  createdByUserId?: InputMaybe<Scalars['ID']>;
  /** The associated line items to create. */
  lineItems?: InputMaybe<Array<LineItemInput>>;
  /** The name of the order. */
  name: Scalars['String'];
  /** Custom information specific to the order. */
  orderInfo?: InputMaybe<Scalars['JSON']>;
  /**
   * An optional email address that represents the external user that this order was created for.
   * This should only be set when creating an order for an external user that does not exist in our system.
   */
  ownerEmail?: InputMaybe<Scalars['String']>;
  /** The proposed date to end the order. */
  proposedEndDate?: InputMaybe<Scalars['Date']>;
  /** The proposed date to start the order. */
  proposedStartDate?: InputMaybe<Scalars['Date']>;
  /** The requesting user's id. Defaults to the creator of the order if null or empty. */
  requesterUserId?: InputMaybe<Scalars['ID']>;
  /** The source of the order */
  source: OrderSource;
};

export type CreateNotificationInput = {
  createdById?: InputMaybe<Scalars['String']>;
  createdByName?: InputMaybe<Scalars['String']>;
  isRead?: Scalars['Boolean'];
  link?: InputMaybe<Scalars['String']>;
  message: Scalars['String'];
  secondaryText?: InputMaybe<Array<Scalars['String']>>;
  userId: Scalars['String'];
};

export type CreateNotificationResponse = {
  __typename?: 'CreateNotificationResponse';
  count?: Maybe<Scalars['Float']>;
};

export type CreateOrderDetailInput = {
  advertiserLocationIds?: InputMaybe<Array<Scalars['Int']>>;
  assigneeUserId?: InputMaybe<Scalars['String']>;
  budget: Scalars['Float'];
  hierarchyProductId?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  orderId: Scalars['Int'];
  productId?: InputMaybe<Scalars['ID']>;
  productInfo?: InputMaybe<Scalars['JSONObject']>;
  productKey?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<OrderDetailStatusEnum>;
  targeting?: InputMaybe<Scalars['JSONObject']>;
};

export type CreateOrderInput = {
  advertiserId: Scalars['Float'];
  name: Scalars['String'];
  proposedEndDate: Scalars['DateTime'];
  proposedStartDate: Scalars['DateTime'];
};

export type CreatePlatformAllocationInput = {
  allocation?: InputMaybe<Scalars['Float']>;
  behavioralTargets?: InputMaybe<Array<Scalars['String']>>;
  budget?: InputMaybe<Scalars['Float']>;
  contentTargets?: InputMaybe<Array<Scalars['String']>>;
  demographicTargets?: InputMaybe<Array<Scalars['String']>>;
  platform?: InputMaybe<Scalars['String']>;
};

export type CreateProposalInput = {
  adMixCampaigns?: InputMaybe<Array<CreateAdMixCampaignInput>>;
  advertiserId: Scalars['Float'];
  budget: Scalars['Float'];
  end: Scalars['DateTime'];
  externalId?: InputMaybe<Scalars['String']>;
  goal: ProposalGoalType;
  industry: Scalars['String'];
  keywords: Array<Scalars['String']>;
  locations?: InputMaybe<Array<Scalars['String']>>;
  locationsObject?: InputMaybe<ProposalLocationsInput>;
  manualCustomCampaigns?: InputMaybe<Array<SaveManualVideoCampaignInput>>;
  manualDisplayCampaigns?: InputMaybe<Array<SaveManualDisplayCampaignInput>>;
  manualEmailCampaigns?: InputMaybe<Array<SaveManualEmailCampaignInput>>;
  manualGeofencingCampaigns?: InputMaybe<Array<SaveManualGeofencingCampaignInput>>;
  manualSEMCampaigns?: InputMaybe<Array<SaveManualSemCampaignInput>>;
  manualSEOCampaigns?: InputMaybe<Array<SaveManualSeoCampaignInput>>;
  manualSocialMediaCampaigns?: InputMaybe<Array<SaveManualSocialMediaCampaignInput>>;
  manualSpecializedCampaigns?: InputMaybe<Array<SaveManualSpecializedCampaignInput>>;
  manualStreamingAudioCampaigns?: InputMaybe<Array<SaveManualStreamingAudioCampaignInput>>;
  manualVideoCampaigns?: InputMaybe<Array<SaveManualVideoCampaignInput>>;
  microIndustries: Array<Scalars['String']>;
  name: Scalars['String'];
  start: Scalars['DateTime'];
  status: ProposalStatus;
  type: Scalars['String'];
  website: Scalars['String'];
};

/** Input for `createProposedOrder`. */
export type CreateProposedOrderInput = {
  /** The advertiser ID for which the order is being created for. */
  advertiserId: Scalars['ID'];
  /** The user ID that is assigned to the order. */
  assigneeUserId?: InputMaybe<Scalars['ID']>;
  /** The user ID that created the order. If null, attempts to fallback to the detected user making the request. */
  createdByUserId?: InputMaybe<Scalars['ID']>;
  /** The associated line items to create. */
  lineItems?: InputMaybe<Array<LineItemInput>>;
  /** The name of the order. */
  name: Scalars['String'];
  /** Custom information specific to the order. */
  orderInfo?: InputMaybe<Scalars['JSON']>;
  /**
   * An optional email address that represents the external user that this order was created for.
   * This should only be set when creating an order for an external user that does not exist in our system.
   */
  ownerEmail?: InputMaybe<Scalars['String']>;
  /** The proposed date to end the order. */
  proposedEndDate?: InputMaybe<Scalars['Date']>;
  /** The proposed date to start the order. */
  proposedStartDate?: InputMaybe<Scalars['Date']>;
  /** The requesting user's id. Defaults to the creator of the order if null or empty. */
  requesterUserId?: InputMaybe<Scalars['ID']>;
  /** The source of the order */
  source: OrderSource;
};

export type CreateRateCardInput = {
  /** The name of the rate card. */
  name: Scalars['String'];
  /** Rates to create with the rate card. */
  rates?: InputMaybe<Array<CreateRateCardRateInput>>;
};

/** Used specifically when creating a rate card and attaching a rate to it immediately */
export type CreateRateCardRateInput = {
  /** The billing type of the rate. */
  billingType: BillingType;
  /** The description of the rate. */
  description?: InputMaybe<Scalars['String']>;
  /** The flight minimum days amount required to spend for this rate. */
  flightMinimum?: InputMaybe<Scalars['Float']>;
  /** The monthly minimum budget required to spend for this rate. */
  monthlyBudgetMinimum?: InputMaybe<Scalars['Float']>;
  /** The monthly minimum impressions required to spend for this rate. */
  monthlyImpressionMinimum?: InputMaybe<Scalars['Float']>;
  /** The rate's retail amount. */
  retailAmount: Scalars['Float'];
  /** The rate's wholesale amount. */
  wholesaleAmount: Scalars['Float'];
};

export type CreateRateInput = {
  /** The billing type of the rate. */
  billingType: BillingType;
  /** The description of the rate. */
  description?: InputMaybe<Scalars['String']>;
  /** The flight minimum days amount required to spend for this rate. */
  flightMinimum?: InputMaybe<Scalars['Float']>;
  /** The monthly minimum budget required to spend for this rate. */
  monthlyBudgetMinimum?: InputMaybe<Scalars['Float']>;
  /** The monthly minimum impressions required to spend for this rate. */
  monthlyImpressionMinimum?: InputMaybe<Scalars['Float']>;
  /** The rate card id associated with the rate to create. */
  rateCardId: Scalars['ID'];
  /** The rate's retail amount. */
  retailAmount: Scalars['Float'];
  /** The rate's wholesale amount. */
  wholesaleAmount: Scalars['Float'];
};

export type CreateRecommendedProposalInput = {
  advertiserId: Scalars['Float'];
  budget: Scalars['Float'];
  end: Scalars['DateTime'];
  externalId?: InputMaybe<Scalars['String']>;
  goal: ProposalGoalType;
  id?: InputMaybe<Scalars['Float']>;
  industry: Scalars['String'];
  keywords: Array<Scalars['String']>;
  locations?: InputMaybe<Array<Scalars['String']>>;
  locationsObject?: InputMaybe<ProposalLocationsInput>;
  microIndustries: Array<Scalars['String']>;
  name: Scalars['String'];
  recommendationCampaignType: RecommendationCampaignType;
  start: Scalars['DateTime'];
  status: ProposalStatus;
  type: Scalars['String'];
  website: Scalars['String'];
};

export type CreateUserInput = {
  data?: InputMaybe<UserDataInput>;
  email: Scalars['String'];
  firstName?: InputMaybe<Scalars['String']>;
  fullName: Scalars['String'];
  lastName?: InputMaybe<Scalars['String']>;
  middleName?: InputMaybe<Scalars['String']>;
  parentHierarchyIds?: InputMaybe<Array<Scalars['String']>>;
  password?: InputMaybe<Scalars['String']>;
  username: Scalars['String'];
};

/**
 * Response type for `CreatedFile`.
 * Note that this is identical to `File` with the following differences
 * - `uploadUri` is added here since currently we only support uploading the file content when the file is initially created.
 * - `downloadUri` is excluded here since the downloadUri cannot be utilized until the file has been uploaded.
 */
export type CreatedFile = {
  __typename?: 'CreatedFile';
  /** The date/time when the file contents will no longer be available */
  fileExpiryDate?: Maybe<Scalars['DateTime']>;
  /** The extension of the file to store */
  fileExtension: Scalars['String'];
  /** The name of the file to store */
  filename: Scalars['String'];
  id: Scalars['ID'];
  /** The file status describing its availability for download */
  status: FileStatus;
  /**
   * The URI the file can be uploaded to
   * `expiryTimeInSecs` is an optional argument that allows you to provide a custom expiration time
   * for the resulting upload uri. If not provided the default expiry will be used.
   * The maximum value for `expiryTimeInSecs` is 7 days, 604800 seconds. Values greater than this will be rejected!
   * The minimum value must also be greater than 0.
   */
  uploadUri: SignedUri;
};

/**
 * Response type for `CreatedFile`.
 * Note that this is identical to `File` with the following differences
 * - `uploadUri` is added here since currently we only support uploading the file content when the file is initially created.
 * - `downloadUri` is excluded here since the downloadUri cannot be utilized until the file has been uploaded.
 */
export type CreatedFileUploadUriArgs = {
  expiryTimeInSecs?: InputMaybe<Scalars['Int']>;
};

/** A creative */
export type Creative = {
  __typename?: 'Creative';
  /** The contents belonging to the creative */
  contents: Array<CreativeContent>;
  /** The creative id in our system */
  id: Scalars['ID'];
  /** The name of the creative */
  name: Scalars['String'];
  /** The platform */
  platform: Platform;
  /** The platformId */
  platformId: Scalars['ID'];
  /** The type of the creative */
  type?: Maybe<CreativeType>;
};

/** Representation of a Creative Content */
export type CreativeContent = {
  __typename?: 'CreativeContent';
  /** The type of the creative content */
  contentType: CreativeContentType;
  /** The creative id this content belongs to */
  creativeId: Scalars['ID'];
  /** The creative content id in our system */
  id: Scalars['ID'];
  /** The url of the creative content */
  url: Scalars['String'];
};

/** Describes the type of creative content */
export enum CreativeContentType {
  /** Audio creative content */
  Audio = 'AUDIO',
  /** Embeddable video creative content */
  EmbeddableVideo = 'EMBEDDABLE_VIDEO',
  /** Image creative content */
  Image = 'IMAGE',
  /** Thumbnail image creative content */
  ThumbnailImage = 'THUMBNAIL_IMAGE',
  /** Unknown creative content */
  Unknown = 'UNKNOWN',
  /** Video creative content */
  Video = 'VIDEO',
}

/** Describes the type of creative */
export enum CreativeType {
  /** Audio creative */
  Audio = 'AUDIO',
  /** Image creative */
  Image = 'IMAGE',
  /** Unknown creative */
  Unknown = 'UNKNOWN',
  /** Video creative */
  Video = 'VIDEO',
}

/** Describes an amount of currency. */
export type Currency = {
  __typename?: 'Currency';
  /** The amount for this currency. */
  amount: Scalars['Float'];
  /** The three-letter ISO currency code representing the unit for this currency. Examples: "USD", "EUR". */
  currencyUnit: Scalars['String'];
};

export type CurrencyDto = {
  __typename?: 'CurrencyDTO';
  amount: Scalars['Float'];
  currencyUnit: Scalars['String'];
};

export type CursorPageInfo = {
  __typename?: 'CursorPageInfo';
  endCursor?: Maybe<Scalars['Int']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['Int']>;
};

export type CursorPaginationInput = {
  /** Returns the elements in the list that come after the specified cursor. */
  after?: InputMaybe<Scalars['Int']>;
  /** Returns the elements in the list that come before the specified cursor. */
  before?: InputMaybe<Scalars['Int']>;
  /** Returns the first _n_ elements from the list. */
  first?: InputMaybe<Scalars['Int']>;
  /** Returns the last _n_ elements from the list. */
  last?: InputMaybe<Scalars['Int']>;
};

/**
 * An input object for filtering by dates without times. Capable of filtering by a start date, end date, or a combination
 * of both.
 */
export type DateFilter = {
  /**
   * The inclusive ending date. Results with a date after this will be excluded.
   *
   * Example given `end: "2023-05-01"`:
   *
   * ```
   * 2023-04-28 |
   * 2023-04-29 |
   * 2023-04-30 |-- included
   * 2023-05-01 ]
   * 2023-05-02
   * ```
   */
  end?: InputMaybe<Scalars['Date']>;
  /**
   * The inclusive starting date. Results with a date before this will be excluded.
   *
   * Example given `start: "2023-04-30"`:
   *
   * ```
   * 2023-04-28
   * 2023-04-29 ]
   * 2023-04-30 |-- included
   * 2023-05-01 |
   * 2023-05-02 |
   * ```
   */
  start?: InputMaybe<Scalars['Date']>;
};

export type DateFilterCondition = {
  /**
   * Filter by a specific operation. I.E. are we looking for dates less than or greater than the value provided?
   * Example: GTE
   */
  operator: DateFilterOperator;
  /** Filter by the provided date/time value */
  value: Scalars['DateTime'];
};

export enum DateFilterOperator {
  Gte = 'GTE',
  Lte = 'LTE',
}

/**
 * An input object for filtering by dates with times. Capable of filtering by a start date time, end date time, or a combination
 * of both.
 */
export type DateTimeFilter = {
  /**
   * The inclusive ending date time. Results with a date or time after this will be excluded.
   *
   * Example given `end: "2023-04-30 19:00:00"`:
   * ```
   * 2023-04-30 16:00:00 |
   * 2023-04-30 17:00:00 |
   * 2023-04-30 18:00:00 |-- included
   * 2023-04-30 19:00:00 ]
   * 2023-04-30 20:00:00
   * ```
   */
  end?: InputMaybe<Scalars['DateTime']>;
  /**
   * The inclusive starting date time. Results with a date or time before this will be excluded.
   *
   * Example given `start: "2023-04-30 17:00:00"`:
   * ```
   * 2023-04-30 16:00:00
   * 2023-04-30 17:00:00 ]
   * 2023-04-30 18:00:00 |-- included
   * 2023-04-30 19:00:00 |
   * 2023-04-30 20:00:00 |
   * ```
   */
  start?: InputMaybe<Scalars['DateTime']>;
};

export enum DayOfWeekEnum {
  Friday = 'FRIDAY',
  Monday = 'MONDAY',
  Saturday = 'SATURDAY',
  Sunday = 'SUNDAY',
  Thursday = 'THURSDAY',
  Tuesday = 'TUESDAY',
  Wednesday = 'WEDNESDAY',
}

/** Response type for `mutation deleteAllocation`. */
export type DeleteAllocationResponse = {
  __typename?: 'DeleteAllocationResponse';
  /** If an allocation was actually deleted. */
  deleted: Scalars['Boolean'];
  /** The line item that had the allocation deleted. */
  lineItem: LineItem;
};

export type DeleteAndCreateOrderDetailType = {
  __typename?: 'DeleteAndCreateOrderDetailType';
  deleteOrderDetailId: Scalars['Float'];
  newOrderDetail: OrderDetailType;
};

/** Input for `deleteLinkedAdvertiser` mutation. */
export type DeleteLinkedAdvertiserInput = {
  /** The internal ID of the Advertiser. */
  advertiserId: Scalars['Int'];
  /** The Platform the Advertiser is linked to. */
  platform: Platform;
  /** The Platform Advertiser ID the Advertiser is linked to. */
  platformAdvertiserId: Scalars['String'];
};

export type DemographicTtdTarget = {
  __typename?: 'DemographicTTDTarget';
  type: Scalars['String'];
  values: Array<TargetValues>;
};

export type DetailedRecencyResponse = {
  __typename?: 'DetailedRecencyResponse';
  interval: AnalyticsInterval;
  value: DetailedRecencyValue;
};

export type DetailedRecencyValue = {
  __typename?: 'DetailedRecencyValue';
  clicks: Scalars['Float'];
  conversions: Scalars['Float'];
  conversionsByTrackingLabel?: Maybe<Array<RecencyConversionValue>>;
  ctr: Scalars['Float'];
  impressions: Scalars['Float'];
  postClickConversions: Scalars['Float'];
  postImpressionConversions: Scalars['Float'];
  recencyGroup?: Maybe<RecencyGroup>;
};

export type DisabledHierarchyProducts = {
  __typename?: 'DisabledHierarchyProducts';
  disabled: HierarchyProduct;
  disabledDescendantIds: Array<Scalars['ID']>;
};

export type DisplayAdGroupPerformanceMetric = {
  __typename?: 'DisplayAdGroupPerformanceMetric';
  interval: AnalyticsInterval;
  value: DisplayAdGroupPerformanceValue;
};

export type DisplayAdGroupPerformanceMetricsResponse = {
  __typename?: 'DisplayAdGroupPerformanceMetricsResponse';
  metrics: Array<DisplayAdGroupPerformanceMetric>;
};

export type DisplayAdGroupPerformanceSummaryResponse = {
  __typename?: 'DisplayAdGroupPerformanceSummaryResponse';
  metrics: Array<DisplayAdGroupPerformanceMetric>;
  popMetrics?: Maybe<DisplayPopMetrics>;
};

export type DisplayAdGroupPerformanceSummaryResponsePopMetricsArgs = {
  adGroupId?: InputMaybe<Scalars['String']>;
  advertiserId: Scalars['String'];
  campaignId?: InputMaybe<Scalars['String']>;
  endDate: Scalars['Date'];
  resolution?: InputMaybe<AnalyticsResolution>;
  startDate: Scalars['Date'];
};

export type DisplayAdGroupPerformanceValue = BaseAdGroupPerformanceValue &
  BaseDisplayPerformanceValue & {
    __typename?: 'DisplayAdGroupPerformanceValue';
    adGroupId: Scalars['String'];
    adGroupName: Scalars['String'];
    clicks: Scalars['Float'];
    conversions: Scalars['Float'];
    ctr: Scalars['Float'];
    impressions: Scalars['Float'];
    postClickConversions: Scalars['Float'];
    postImpressionConversions: Scalars['Float'];
  };

export type DisplayAdvertiserPerformanceMetric = {
  __typename?: 'DisplayAdvertiserPerformanceMetric';
  interval: AnalyticsInterval;
  value: DisplayAdvertiserPerformanceValue;
};

export type DisplayAdvertiserPerformanceMetricsResponse = {
  __typename?: 'DisplayAdvertiserPerformanceMetricsResponse';
  metrics: Array<DisplayAdvertiserPerformanceMetric>;
};

export type DisplayAdvertiserPerformanceSummaryResponse = {
  __typename?: 'DisplayAdvertiserPerformanceSummaryResponse';
  metrics: Array<DisplayAdvertiserPerformanceMetric>;
  popMetrics?: Maybe<DisplayPopMetrics>;
};

export type DisplayAdvertiserPerformanceSummaryResponsePopMetricsArgs = {
  advertiserId: Scalars['String'];
  endDate: Scalars['Date'];
  resolution?: InputMaybe<AnalyticsResolution>;
  startDate: Scalars['Date'];
};

export type DisplayAdvertiserPerformanceValue = BaseDisplayPerformanceValue & {
  __typename?: 'DisplayAdvertiserPerformanceValue';
  advertiserId: Scalars['String'];
  clicks: Scalars['Float'];
  conversions: Scalars['Float'];
  ctr: Scalars['Float'];
  impressions: Scalars['Float'];
  postClickConversions: Scalars['Float'];
  postImpressionConversions: Scalars['Float'];
};

export type DisplayBrandMetricsResponse = {
  __typename?: 'DisplayBrandMetricsResponse';
  interval: AnalyticsInterval;
  value: DisplayBrandValue;
};

export type DisplayBrandValue = BaseBrandValue & {
  __typename?: 'DisplayBrandValue';
  brand?: Maybe<Brand>;
  brandId?: Maybe<Scalars['String']>;
  clicks: Scalars['Float'];
  ctr: Scalars['Float'];
  impressions: Scalars['Float'];
};

export type DisplayCampaignPerformanceMetric = {
  __typename?: 'DisplayCampaignPerformanceMetric';
  interval: AnalyticsInterval;
  value: DisplayCampaignPerformanceValue;
};

export type DisplayCampaignPerformanceMetricsResponse = {
  __typename?: 'DisplayCampaignPerformanceMetricsResponse';
  metrics: Array<DisplayCampaignPerformanceMetric>;
};

export type DisplayCampaignPerformanceSummaryResponse = {
  __typename?: 'DisplayCampaignPerformanceSummaryResponse';
  metrics: Array<DisplayCampaignPerformanceMetric>;
  popMetrics?: Maybe<DisplayPopMetrics>;
};

export type DisplayCampaignPerformanceSummaryResponsePopMetricsArgs = {
  advertiserId: Scalars['String'];
  campaignId?: InputMaybe<Scalars['String']>;
  endDate: Scalars['Date'];
  resolution?: InputMaybe<AnalyticsResolution>;
  startDate: Scalars['Date'];
};

export type DisplayCampaignPerformanceValue = BaseCampaignPerformanceValue &
  BaseDisplayPerformanceValue & {
    __typename?: 'DisplayCampaignPerformanceValue';
    campaignId: Scalars['String'];
    campaignName?: Maybe<Scalars['String']>;
    clicks: Scalars['Float'];
    conversions: Scalars['Float'];
    ctr: Scalars['Float'];
    impressions: Scalars['Float'];
    postClickConversions: Scalars['Float'];
    postImpressionConversions: Scalars['Float'];
  };

export type DisplayConversionValue = BaseConversionValue & {
  __typename?: 'DisplayConversionValue';
  conversions: Scalars['Float'];
  postClickConversions: Scalars['Float'];
  postImpressionConversions: Scalars['Float'];
  trackingLabelName?: Maybe<Scalars['String']>;
  trackingLabelSequence: Scalars['Float'];
};

export type DisplayConversionsResponse = {
  __typename?: 'DisplayConversionsResponse';
  interval: AnalyticsInterval;
  value: DisplayConversionValue;
};

export type DisplayCreativeMetricsResponse = {
  __typename?: 'DisplayCreativeMetricsResponse';
  interval: AnalyticsInterval;
  value: DisplayCreativeValue;
};

export type DisplayCreativeValue = BaseTtdCreativeValue & {
  __typename?: 'DisplayCreativeValue';
  clicks: Scalars['Float'];
  conversions: Scalars['Float'];
  creative: Creative;
  creativeId: Scalars['String'];
  ctr: Scalars['Float'];
  impressions: Scalars['Float'];
  postClickConversions: Scalars['Float'];
  postImpressionConversions: Scalars['Float'];
};

export type DisplayDeviceTypeMetricsResponse = {
  __typename?: 'DisplayDeviceTypeMetricsResponse';
  interval: AnalyticsInterval;
  value: DisplayDeviceTypeValue;
};

export type DisplayDeviceTypeValue = BaseDeviceTypeValue & {
  __typename?: 'DisplayDeviceTypeValue';
  clicks: Scalars['Float'];
  ctr: Scalars['Float'];
  deviceType: TtdDeviceTypeEnum;
  impressions: Scalars['Float'];
};

export type DisplayGeoMetricsResponse = {
  __typename?: 'DisplayGeoMetricsResponse';
  interval: AnalyticsInterval;
  value: DisplayGeoValue;
};

export type DisplayGeoValue = BaseGeoValue & {
  __typename?: 'DisplayGeoValue';
  boundary?: Maybe<MapboxBoundary>;
  city?: Maybe<Scalars['String']>;
  clicks: Scalars['Float'];
  conversions: Scalars['Float'];
  coordinates?: Maybe<LatLongType>;
  country: Scalars['String'];
  impressions: Scalars['Float'];
  location: Scalars['String'];
  region: Scalars['String'];
  zip?: Maybe<Scalars['String']>;
};

export type DisplayPopMetrics = BaseDisplayPerformanceValue & {
  __typename?: 'DisplayPopMetrics';
  clicks: Scalars['Float'];
  conversions: Scalars['Float'];
  ctr: Scalars['Float'];
  impressions: Scalars['Float'];
  postClickConversions: Scalars['Float'];
  postImpressionConversions: Scalars['Float'];
};

export type DisplayTimeOfDayMetricsResponse = BaseTimeOfDayResponse & {
  __typename?: 'DisplayTimeOfDayMetricsResponse';
  interval: TimeOfDayInterval;
  value: DisplayTimeOfDayValue;
};

export type DisplayTimeOfDayValue = BaseTimeOfDayValue & {
  __typename?: 'DisplayTimeOfDayValue';
  clicks: Scalars['Float'];
  ctr: Scalars['Float'];
  impressions: Scalars['Float'];
};

/** Federated Dma entity */
export type Dma = {
  __typename?: 'Dma';
  boundaries: Array<MapboxBoundary>;
  dma: Scalars['String'];
  dmaBoundaries: Array<DmaCounty>;
  dmaIndex: Scalars['Float'];
  id: Scalars['String'];
};

export type DmaCounty = {
  __typename?: 'DmaCounty';
  county: Scalars['String'];
  featureId: Scalars['String'];
  state: Scalars['String'];
};

export type DmaResponse = PaginatedResponse & {
  __typename?: 'DmaResponse';
  pageNumber: Scalars['Int'];
  pageSize: Scalars['Int'];
  results: Array<Dma>;
  totalCount?: Maybe<Scalars['Int']>;
  totalPages?: Maybe<Scalars['Int']>;
};

export type EmailTarget = {
  __typename?: 'EmailTarget';
  type: Scalars['String'];
  values: Array<Scalars['String']>;
};

/** Possible types for email targeting */
export enum EmailTypeEnum {
  ConsumerInterest = 'CONSUMER_INTEREST',
  ConsumerLifestyle = 'CONSUMER_LIFESTYLE',
  Demographic = 'DEMOGRAPHIC',
}

export type EnabledHierarchyProducts = {
  __typename?: 'EnabledHierarchyProducts';
  enabled: HierarchyProduct;
  enabledDescendantIds: Array<Scalars['ID']>;
};

/**
 * Describes a request for adgroup-level engagement metrics.
 * Note that analytics product type is not currently included, this is because for now only SOCIAL is supported
 */
export type EngagementMetricsByAdGroupInput = {
  /** The adgroup to filter results by. */
  adGroupId?: InputMaybe<Scalars['ID']>;
  /** The advertiser to filter results by. */
  advertiserId: Scalars['ID'];
  /** The campaign to filter results by. */
  campaignId?: InputMaybe<Scalars['ID']>;
  /** The inclusive end date to fetch metrics from. */
  endDate: Scalars['Date'];
  /** The resolution to group metrics by. If not provided the result will be the total/average over the entire date range. */
  resolution?: InputMaybe<IntervalResolution>;
  /** The inclusive start date to fetch metrics from. */
  startDate: Scalars['Date'];
};

/** Summarizes engagement metrics for an advertiser/campaign/ad group. */
export type EngagementSummary = {
  __typename?: 'EngagementSummary';
  /** The value for common engagement metrics, like engagements, likes, or shares. */
  metric: CommonEngagementMetric;
  /** Compares engagement between the current period and the previous period of the same duration. */
  pop: PeriodOverPeriodEngagementMetric;
};

/** Describes a request for a summary of engagement metrics. */
export type EngagementSummaryInput = {
  /** The adgroup to filter results by. */
  adGroupId?: InputMaybe<Scalars['ID']>;
  /** The advertiser to filter results by. */
  advertiserId: Scalars['ID'];
  /** Filter results by how ad content is presented to users. */
  analyticsProductType: AnalyticsProductTypeIdentifier;
  /** The campaign to filter results by. */
  campaignId?: InputMaybe<Scalars['ID']>;
  /** The inclusive end date to fetch metrics from. */
  endDate: Scalars['Date'];
  /** The inclusive start date to fetch metrics from. */
  startDate: Scalars['Date'];
};

/** Possible error codes */
export enum ErrorCodes {
  Forbidden = 'FORBIDDEN',
  Unauthenticated = 'UNAUTHENTICATED',
}

export type ExternalAdGroup = {
  __typename?: 'ExternalAdGroup';
  id: Scalars['ID'];
  name: Scalars['String'];
  platform: Platform;
  platformAdGroupId: Scalars['String'];
  platformAdvertiserId?: Maybe<Scalars['String']>;
  platformCampaignId?: Maybe<Scalars['String']>;
};

/** Paginated External Ad Groups. */
export type ExternalAdGroups = {
  __typename?: 'ExternalAdGroups';
  pageNumber: Scalars['Int'];
  pageSize: Scalars['Int'];
  results: Array<ExternalAdGroup>;
  totalCount: Scalars['Int'];
  totalPages: Scalars['Int'];
};

export type ExternalAdvertiser = {
  __typename?: 'ExternalAdvertiser';
  /** Describes hierarchies and related metadata to associate with the external advertiser. */
  hierarchies: Array<ExternalAdvertiserHierarchy>;
  /** The hierarchy id's associated with the ext advertiser */
  hierarchyIds: Array<Scalars['ID']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  platform: Platform;
  platformAdvertiserId: Scalars['String'];
};

/** Describes a hierarchy and related metadata to associate with the external advertiser. */
export type ExternalAdvertiserHierarchy = {
  __typename?: 'ExternalAdvertiserHierarchy';
  /** The hierarchy associated with the external advertiser. */
  hierarchy: Hierarchy;
  /** The hierarchy id associated with the external advertiser. */
  hierarchyId: Scalars['ID'];
  /** The Improvado account associated with this hierarchy id and external advertiser, if one exists. */
  improvadoAccountId?: Maybe<Scalars['ID']>;
};

/** Describes a hierarchy and related metadata to associate with the external advertiser. */
export type ExternalAdvertiserHierarchyInput = {
  /** The hierarchy id to associate with the external advertiser. */
  hierarchyId: Scalars['ID'];
  /** The Improvado account to associate with this hierarchy id and external advertiser, if one exists. */
  improvadoAccountId?: InputMaybe<Scalars['ID']>;
};

/** Paginated External Advertisers. */
export type ExternalAdvertisers = {
  __typename?: 'ExternalAdvertisers';
  pageNumber: Scalars['Int'];
  pageSize: Scalars['Int'];
  results: Array<ExternalAdvertiser>;
  totalCount: Scalars['Int'];
  totalPages: Scalars['Int'];
};

export type ExternalCampaign = {
  __typename?: 'ExternalCampaign';
  id: Scalars['ID'];
  name: Scalars['String'];
  platform: Platform;
  platformAdvertiserId?: Maybe<Scalars['String']>;
  platformCampaignId: Scalars['String'];
};

/** Data for a campaign that is not linked to an advertiser */
export type ExternalCampaignResponse = {
  __typename?: 'ExternalCampaignResponse';
  /** The ID of the campaign on the external platform. */
  externalCampaignId?: Maybe<Scalars['String']>;
  /** A human readable name for the campaign. */
  name?: Maybe<Scalars['String']>;
  /** The platform where the campaign is hosted. */
  platform: Platform;
};

/** Paginated External Campaigns. */
export type ExternalCampaigns = {
  __typename?: 'ExternalCampaigns';
  pageNumber: Scalars['Int'];
  pageSize: Scalars['Int'];
  results: Array<ExternalCampaign>;
  totalCount: Scalars['Int'];
  totalPages: Scalars['Int'];
};

export type FacebookAdGroupAudience = {
  __typename?: 'FacebookAdGroupAudience';
  audienceTargetingJson?: Maybe<Scalars['String']>;
  platformAdGroupId: Scalars['String'];
  platformAdGroupName: Scalars['String'];
};

/** Paginated Facebook Ad Group Audiences. */
export type FacebookAdGroupAudiences = {
  __typename?: 'FacebookAdGroupAudiences';
  pageNumber: Scalars['Int'];
  pageSize: Scalars['Int'];
  results: Array<FacebookAdGroupAudience>;
  totalCount: Scalars['Int'];
  totalPages: Scalars['Int'];
};

export type FacebookAdGroupPerformanceMetric = {
  __typename?: 'FacebookAdGroupPerformanceMetric';
  interval: AnalyticsInterval;
  value: FacebookAdGroupPerformanceValue;
};

export type FacebookAdGroupPerformanceMetricsResponse = {
  __typename?: 'FacebookAdGroupPerformanceMetricsResponse';
  metrics: Array<FacebookAdGroupPerformanceMetric>;
};

export type FacebookAdGroupPerformanceSummaryResponse = {
  __typename?: 'FacebookAdGroupPerformanceSummaryResponse';
  metrics: Array<FacebookAdGroupPerformanceMetric>;
  popMetrics?: Maybe<FacebookPopMetrics>;
};

export type FacebookAdGroupPerformanceSummaryResponsePopMetricsArgs = {
  adGroupId?: InputMaybe<Scalars['String']>;
  advertiserId: Scalars['String'];
  campaignId?: InputMaybe<Scalars['String']>;
  endDate: Scalars['Date'];
  resolution?: InputMaybe<AnalyticsResolution>;
  startDate: Scalars['Date'];
};

export type FacebookAdGroupPerformanceValue = BaseAdGroupPerformanceValue &
  BaseFacebookPerformanceValue & {
    __typename?: 'FacebookAdGroupPerformanceValue';
    adGroupId: Scalars['String'];
    adGroupName: Scalars['String'];
    clicks: Scalars['Float'];
    comments: Scalars['Float'];
    conversionRate: Scalars['Float'];
    conversions: Scalars['Float'];
    costPerClick?: Maybe<CurrencyDto>;
    costPerConversion?: Maybe<CurrencyDto>;
    ctr: Scalars['Float'];
    engagements: Scalars['Float'];
    impressions: Scalars['Float'];
    likes: Scalars['Float'];
    shares: Scalars['Float'];
    spend?: Maybe<CurrencyDto>;
    viewRate: Scalars['Float'];
    views: Scalars['Float'];
  };

export type FacebookAdvertiserPerformanceMetric = {
  __typename?: 'FacebookAdvertiserPerformanceMetric';
  interval: AnalyticsInterval;
  value: FacebookAdvertiserPerformanceValue;
};

export type FacebookAdvertiserPerformanceMetricsResponse = {
  __typename?: 'FacebookAdvertiserPerformanceMetricsResponse';
  metrics: Array<FacebookAdvertiserPerformanceMetric>;
};

export type FacebookAdvertiserPerformanceSummaryResponse = {
  __typename?: 'FacebookAdvertiserPerformanceSummaryResponse';
  metrics: Array<FacebookAdvertiserPerformanceMetric>;
  popMetrics?: Maybe<FacebookPopMetrics>;
};

export type FacebookAdvertiserPerformanceSummaryResponsePopMetricsArgs = {
  advertiserId: Scalars['String'];
  endDate: Scalars['Date'];
  resolution?: InputMaybe<AnalyticsResolution>;
  startDate: Scalars['Date'];
};

export type FacebookAdvertiserPerformanceValue = BaseFacebookPerformanceValue & {
  __typename?: 'FacebookAdvertiserPerformanceValue';
  advertiserId: Scalars['String'];
  clicks: Scalars['Float'];
  comments: Scalars['Float'];
  conversionRate: Scalars['Float'];
  conversions: Scalars['Float'];
  costPerClick?: Maybe<CurrencyDto>;
  costPerConversion?: Maybe<CurrencyDto>;
  ctr: Scalars['Float'];
  engagements: Scalars['Float'];
  impressions: Scalars['Float'];
  likes: Scalars['Float'];
  shares: Scalars['Float'];
  spend?: Maybe<CurrencyDto>;
  viewRate: Scalars['Float'];
  views: Scalars['Float'];
};

export type FacebookAudienceValue = {
  __typename?: 'FacebookAudienceValue';
  adGroupId: Scalars['String'];
  value: Scalars['String'];
};

export type FacebookCampaignPerformanceMetric = {
  __typename?: 'FacebookCampaignPerformanceMetric';
  interval: AnalyticsInterval;
  value: FacebookCampaignPerformanceValue;
};

export type FacebookCampaignPerformanceMetricsResponse = {
  __typename?: 'FacebookCampaignPerformanceMetricsResponse';
  metrics: Array<FacebookCampaignPerformanceMetric>;
};

export type FacebookCampaignPerformanceSummaryResponse = {
  __typename?: 'FacebookCampaignPerformanceSummaryResponse';
  metrics: Array<FacebookCampaignPerformanceMetric>;
  popMetrics?: Maybe<FacebookPopMetrics>;
};

export type FacebookCampaignPerformanceSummaryResponsePopMetricsArgs = {
  advertiserId: Scalars['String'];
  campaignId?: InputMaybe<Scalars['String']>;
  endDate: Scalars['Date'];
  resolution?: InputMaybe<AnalyticsResolution>;
  startDate: Scalars['Date'];
};

export type FacebookCampaignPerformanceValue = BaseCampaignPerformanceValue &
  BaseFacebookPerformanceValue & {
    __typename?: 'FacebookCampaignPerformanceValue';
    campaignId: Scalars['String'];
    campaignName?: Maybe<Scalars['String']>;
    clicks: Scalars['Float'];
    comments: Scalars['Float'];
    conversionRate: Scalars['Float'];
    conversions: Scalars['Float'];
    costPerClick?: Maybe<CurrencyDto>;
    costPerConversion?: Maybe<CurrencyDto>;
    ctr: Scalars['Float'];
    engagements: Scalars['Float'];
    impressions: Scalars['Float'];
    likes: Scalars['Float'];
    shares: Scalars['Float'];
    spend?: Maybe<CurrencyDto>;
    viewRate: Scalars['Float'];
    views: Scalars['Float'];
  };

export type FacebookCreativeMetricsResponse = {
  __typename?: 'FacebookCreativeMetricsResponse';
  interval: AnalyticsInterval;
  value: FacebookCreativeValue;
};

export type FacebookCreativeValue = BaseMetaCreativeValue & {
  __typename?: 'FacebookCreativeValue';
  adName: Scalars['String'];
  clicks: Scalars['Float'];
  comments: Scalars['Float'];
  conversionRate: Scalars['Float'];
  conversions: Scalars['Float'];
  costPerClick?: Maybe<CurrencyDto>;
  costPerConversion?: Maybe<CurrencyDto>;
  creative: Creative;
  creativeId: Scalars['String'];
  ctr: Scalars['Float'];
  engagements: Scalars['Float'];
  impressions: Scalars['Float'];
  likes: Scalars['Float'];
  reactions: Scalars['Float'];
  shares: Scalars['Float'];
  spend?: Maybe<CurrencyDto>;
  viewRate: Scalars['Float'];
  views: Scalars['Float'];
};

export type FacebookGeoMetricsResponse = {
  __typename?: 'FacebookGeoMetricsResponse';
  interval: AnalyticsInterval;
  value: FacebookGeoValue;
};

export type FacebookGeoValue = {
  __typename?: 'FacebookGeoValue';
  boundary?: Maybe<Dma>;
  clicks: Scalars['Float'];
  ctr: Scalars['Float'];
  dma?: Maybe<GeoDmaValue>;
  impressions: Scalars['Float'];
  location: Scalars['String'];
};

/** A Facebook performance by publisher metric. */
export type FacebookPerformanceByPublisherMetric = {
  __typename?: 'FacebookPerformanceByPublisherMetric';
  /** The total number of clicks. */
  clicks: Scalars['Int'];
  /** The conversion rate (conversions / clicks). */
  conversionRate: Scalars['Float'];
  /** The total number of conversions. */
  conversions: Scalars['Float'];
  /** The click through rate (clicks / impressions). */
  ctr: Scalars['Float'];
  /** The total number of impressions. */
  impressions: Scalars['Int'];
};

/** The interval and publisher of a Facebook performance by publisher metric. */
export type FacebookPerformanceByPublisherMetricInterval = {
  __typename?: 'FacebookPerformanceByPublisherMetricInterval';
  /** The date interval to which this metric applies. */
  interval: Interval;
  /** The Facebook performance metrics for the publisher: clicks, impressions, conversions, ect. */
  metric: FacebookPerformanceByPublisherMetric;
  /** The publisher of the interval metric. */
  publisher: Scalars['String'];
};

/** Input for facebookPerformanceByPublisher. */
export type FacebookPerformanceMetricsByPublisherInput = {
  /** The adgroup to filter results by. */
  adGroupId?: InputMaybe<Scalars['ID']>;
  /** The advertiser to filter results by. */
  advertiserId: Scalars['ID'];
  /** The campaign to filter results by. */
  campaignId?: InputMaybe<Scalars['ID']>;
  /** The inclusive end date to fetch metrics from. */
  endDate: Scalars['Date'];
  /**
   * The resolution to group metrics by.
   * If not provided the result will be the total/average over the entire date range.
   */
  resolution?: InputMaybe<IntervalResolution>;
  /** The inclusive start date to fetch metrics from. */
  startDate: Scalars['Date'];
};

export type FacebookPopMetrics = {
  __typename?: 'FacebookPopMetrics';
  clicks: Scalars['Float'];
  comments: Scalars['Float'];
  conversionRate: Scalars['Float'];
  conversions: Scalars['Float'];
  costPerClick: Scalars['Float'];
  costPerConversion: Scalars['Float'];
  ctr: Scalars['Float'];
  engagements: Scalars['Float'];
  impressions: Scalars['Float'];
  likes: Scalars['Float'];
  shares: Scalars['Float'];
  spend: Scalars['Float'];
  viewRate: Scalars['Float'];
  views: Scalars['Float'];
};

export type FbTarget = {
  __typename?: 'FbTarget';
  type: Scalars['String'];
  values: Array<Scalars['String']>;
};

/** A downloadable `File`. */
export type File = {
  __typename?: 'File';
  /**
   * The URI the file can be downloaded from.
   *
   * `expiryTimeInSecs` is an optional argument that allows you to provide a custom expiration time
   * for the resulting download uri. If not provided the default expiry will be used.
   *
   * - The maximum value for `expiryTimeInSecs` is 7 days, `604800` seconds. Values greater than this will be rejected!
   * - The minimum value must also be greater than `0`.
   */
  downloadUri: SignedUri;
  /** The date/time when the file contents will no longer be available. */
  fileExpiryDate?: Maybe<Scalars['DateTime']>;
  fileExpiryEpochSeconds?: Maybe<Scalars['Float']>;
  /** The extension of the file. */
  fileExtension: Scalars['String'];
  /** @deprecated Use `id` instead. */
  fileId?: Maybe<Scalars['Float']>;
  /** The name of the file. */
  filename: Scalars['String'];
  /** @deprecated Use `downloadUri { uri }` instead. */
  httpSignedDownloadUri?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** The file status describing its availability for download. */
  status: FileStatus;
};

/** A downloadable `File`. */
export type FileDownloadUriArgs = {
  expiryTimeInSecs?: InputMaybe<Scalars['Int']>;
};

/** Describes the status of the file */
export enum FileStatus {
  /** The file is available for download */
  Available = 'AVAILABLE',
  /** The file is pending upload or is currently processing (virus scanning) */
  Processing = 'PROCESSING',
  /** The file has been quarantined and cannot be downloaded */
  Quarantined = 'QUARANTINED',
  /**
   * The file is unavailable, either it was never uploaded or it never was processed correctly and we stopped checking availability.
   * This is a terminal state.
   */
  Unavailable = 'UNAVAILABLE',
}

export type FileUpload = {
  __typename?: 'FileUpload';
  fileExpiryEpochSeconds?: Maybe<Scalars['Float']>;
  fileExtension: Scalars['String'];
  fileId: Scalars['Float'];
  filename: Scalars['String'];
  httpSignedUploadUri: Scalars['String'];
};

/** Ways in which the `files` query results can be filtered. */
export type FilesFilterInput = {
  /** Select files with the specified ids. */
  ids: Array<Scalars['ID']>;
};

/** Response type for `query files`. */
export type FilesResponse = {
  __typename?: 'FilesResponse';
  /** The page information. */
  pageInfo: PageInfo;
  /** The page of results. */
  results: Array<File>;
};

export enum FoldEnum {
  Above = 'ABOVE',
  Below = 'BELOW',
  Unknown = 'UNKNOWN',
}

export type FoldResponse = {
  __typename?: 'FoldResponse';
  interval: AnalyticsInterval;
  value: FoldValue;
};

export type FoldValue = {
  __typename?: 'FoldValue';
  clicks: Scalars['Float'];
  conversions: Scalars['Float'];
  ctr: Scalars['Float'];
  fold: FoldEnum;
  impressions: Scalars['Float'];
  postClickConversions: Scalars['Float'];
  postImpressionConversions: Scalars['Float'];
  viewCompletionRate: Scalars['Float'];
  viewsCompleted: Scalars['Float'];
  viewsStarted: Scalars['Float'];
};

export enum ForecastGeoTypeEnum {
  City = 'CITY',
  Country = 'COUNTRY',
  County = 'COUNTY',
  Dma = 'DMA',
  PostalCode = 'POSTAL_CODE',
  Region = 'REGION',
  Unknown = 'UNKNOWN',
}

export type ForecastResponse = {
  __typename?: 'ForecastResponse';
  availableBudget?: Maybe<Scalars['Float']>;
  devices?: Maybe<Range>;
  impressions?: Maybe<Range>;
};

export type ForgotPasswordInput = {
  email?: InputMaybe<Scalars['String']>;
};

export type FrequencyResponse = {
  __typename?: 'FrequencyResponse';
  interval: AnalyticsInterval;
  value: FrequencyValue;
};

export type FrequencyValue = {
  __typename?: 'FrequencyValue';
  frequencyPerPerson: Scalars['Float'];
  uniquePersons: Scalars['Float'];
};

export type GdnAdGroupPerformanceMetric = {
  __typename?: 'GdnAdGroupPerformanceMetric';
  interval: AnalyticsInterval;
  value: GdnAdGroupPerformanceValue;
};

export type GdnAdGroupPerformanceMetricsResponse = {
  __typename?: 'GdnAdGroupPerformanceMetricsResponse';
  metrics: Array<GdnAdGroupPerformanceMetric>;
};

export type GdnAdGroupPerformanceSummaryResponse = {
  __typename?: 'GdnAdGroupPerformanceSummaryResponse';
  metrics: Array<GdnAdGroupPerformanceMetric>;
  popMetrics?: Maybe<GdnPopMetrics>;
};

export type GdnAdGroupPerformanceSummaryResponsePopMetricsArgs = {
  adGroupId?: InputMaybe<Scalars['String']>;
  advertiserId: Scalars['String'];
  campaignId?: InputMaybe<Scalars['String']>;
  endDate: Scalars['Date'];
  resolution?: InputMaybe<AnalyticsResolution>;
  startDate: Scalars['Date'];
};

export type GdnAdGroupPerformanceValue = BaseAdGroupPerformanceValue &
  BaseGdnPerformanceValue & {
    __typename?: 'GdnAdGroupPerformanceValue';
    adGroupId: Scalars['String'];
    adGroupName: Scalars['String'];
    clicks: Scalars['Float'];
    conversionRate: Scalars['Float'];
    conversions: Scalars['Float'];
    ctr: Scalars['Float'];
    impressions: Scalars['Float'];
  };

export type GdnAdvertiserPerformanceMetric = {
  __typename?: 'GdnAdvertiserPerformanceMetric';
  interval: AnalyticsInterval;
  value: GdnAdvertiserPerformanceValue;
};

export type GdnAdvertiserPerformanceMetricsResponse = {
  __typename?: 'GdnAdvertiserPerformanceMetricsResponse';
  metrics: Array<GdnAdvertiserPerformanceMetric>;
};

export type GdnAdvertiserPerformanceSummaryResponse = {
  __typename?: 'GdnAdvertiserPerformanceSummaryResponse';
  metrics: Array<GdnAdvertiserPerformanceMetric>;
  popMetrics?: Maybe<GdnPopMetrics>;
};

export type GdnAdvertiserPerformanceSummaryResponsePopMetricsArgs = {
  advertiserId: Scalars['String'];
  endDate: Scalars['Date'];
  resolution?: InputMaybe<AnalyticsResolution>;
  startDate: Scalars['Date'];
};

export type GdnAdvertiserPerformanceValue = BaseGdnPerformanceValue & {
  __typename?: 'GdnAdvertiserPerformanceValue';
  advertiserId: Scalars['String'];
  clicks: Scalars['Float'];
  conversionRate: Scalars['Float'];
  conversions: Scalars['Float'];
  ctr: Scalars['Float'];
  impressions: Scalars['Float'];
};

export type GdnCampaignPerformanceMetric = {
  __typename?: 'GdnCampaignPerformanceMetric';
  interval: AnalyticsInterval;
  value: GdnCampaignPerformanceValue;
};

export type GdnCampaignPerformanceMetricsResponse = {
  __typename?: 'GdnCampaignPerformanceMetricsResponse';
  metrics: Array<GdnCampaignPerformanceMetric>;
};

export type GdnCampaignPerformanceSummaryResponse = {
  __typename?: 'GdnCampaignPerformanceSummaryResponse';
  metrics: Array<GdnCampaignPerformanceMetric>;
  popMetrics?: Maybe<GdnPopMetrics>;
};

export type GdnCampaignPerformanceSummaryResponsePopMetricsArgs = {
  advertiserId: Scalars['String'];
  campaignId?: InputMaybe<Scalars['String']>;
  endDate: Scalars['Date'];
  resolution?: InputMaybe<AnalyticsResolution>;
  startDate: Scalars['Date'];
};

export type GdnCampaignPerformanceValue = BaseCampaignPerformanceValue &
  BaseGdnPerformanceValue & {
    __typename?: 'GdnCampaignPerformanceValue';
    campaignId: Scalars['String'];
    campaignName?: Maybe<Scalars['String']>;
    clicks: Scalars['Float'];
    conversionRate: Scalars['Float'];
    conversions: Scalars['Float'];
    ctr: Scalars['Float'];
    impressions: Scalars['Float'];
  };

export type GdnCreativeMetricsResponse = {
  __typename?: 'GdnCreativeMetricsResponse';
  interval: AnalyticsInterval;
  value: GdnCreativeValue;
};

export type GdnCreativeValue = BaseGoogleCreativeValue & {
  __typename?: 'GdnCreativeValue';
  adName: Scalars['String'];
  clicks: Scalars['Float'];
  conversionRate: Scalars['Float'];
  conversions: Scalars['Float'];
  creative: Creative;
  creativeId: Scalars['String'];
  ctr: Scalars['Float'];
  impressions: Scalars['Float'];
  view25PctCompletionRate: Scalars['Float'];
  view50PctCompletionRate: Scalars['Float'];
  view75PctCompletionRate: Scalars['Float'];
  viewCompletionRate: Scalars['Float'];
  viewRate: Scalars['Float'];
  views: Scalars['Float'];
  views25PctCompleted: Scalars['Float'];
  views50PctCompleted: Scalars['Float'];
  views75PctCompleted: Scalars['Float'];
  viewsCompleted: Scalars['Float'];
};

export type GdnFbTarget = {
  __typename?: 'GdnFbTarget';
  type: Scalars['String'];
  values: Array<Scalars['String']>;
};

export type GdnGeoMetricsResponse = {
  __typename?: 'GdnGeoMetricsResponse';
  interval: AnalyticsInterval;
  value: GdnGeoValue;
};

export type GdnGeoValue = BaseGeoValue & {
  __typename?: 'GdnGeoValue';
  boundary?: Maybe<MapboxBoundary>;
  city?: Maybe<Scalars['String']>;
  clicks: Scalars['Float'];
  conversions: Scalars['Float'];
  coordinates?: Maybe<LatLongType>;
  country: Scalars['String'];
  impressions: Scalars['Float'];
  location: Scalars['String'];
  region: Scalars['String'];
  zip?: Maybe<Scalars['String']>;
};

export type GdnPopMetrics = {
  __typename?: 'GdnPopMetrics';
  clicks: Scalars['Float'];
  conversionRate: Scalars['Float'];
  conversions: Scalars['Float'];
  ctr: Scalars['Float'];
  impressions: Scalars['Float'];
};

export type GdnTarget = {
  __typename?: 'GdnTarget';
  type: Scalars['String'];
  values: Array<Scalars['String']>;
};

export type GeoData = {
  country: Scalars['String'];
  search: Array<Scalars['String']>;
  type: ForecastGeoTypeEnum;
};

export type GeoDmaValue = {
  __typename?: 'GeoDmaValue';
  name?: Maybe<Scalars['String']>;
  normalizedName?: Maybe<Scalars['String']>;
};

/** Contains multiple types of geo locations. */
export type GeoLocations = {
  __typename?: 'GeoLocations';
  /** Federated feature entities */
  boundaries: Array<MapboxBoundary>;
  /** Internal DMA UUIDs */
  dmaNames: Array<Scalars['String']>;
  /** Federated DMA entities */
  dmas: Array<Dma>;
  /** Mapbox feature IDs */
  featureIds: Array<Scalars['String']>;
  /** Misc places such as cities */
  places: Array<Scalars['String']>;
  /** Zip codes */
  zipcodes: Array<Scalars['String']>;
};

/** Input for geoLocations on UpdateLineItem */
export type GeoLocationsInput = {
  /** DMA values such as `"ALBUQUERQUE (NM) - SANTA FE (NM) - DMA"` */
  dmaNames?: InputMaybe<Array<Scalars['String']>>;
  /** Mapbox feature IDs */
  featureIds?: InputMaybe<Array<Scalars['String']>>;
  /** Misc places such as cities */
  places?: InputMaybe<Array<Scalars['String']>>;
  /** Zip codes */
  zipcodes?: InputMaybe<Array<Scalars['String']>>;
};

/** An geo metric with common metrics pertaining to a location */
export type GeoMetric = {
  __typename?: 'GeoMetric';
  /** The interval. */
  interval: Interval;
  /** The location. */
  location: AnalyticsLocation;
  /** The location type */
  locationType: AnalyticsLocationTypeIdentifier;
  /** The common geo metric. */
  metric: CommonGeoMetric;
};

/** Describes a request for geo metrics. */
export type GeoMetricsInput = {
  /** The adgroup to filter results by. */
  adGroupId?: InputMaybe<Scalars['ID']>;
  /** The advertiser to filter results by. */
  advertiserId: Scalars['ID'];
  /** Filter results by a specific product type */
  analyticsProductType: AnalyticsProductTypeIdentifier;
  /** The campaign to filter results by. */
  campaignId?: InputMaybe<Scalars['ID']>;
  /** The inclusive end date to fetch metrics from. */
  endDate: Scalars['Date'];
  /** Filter results by a specific location type (i.e., geo granularity) */
  locationType: AnalyticsLocationTypeIdentifier;
  /** The inclusive start date to fetch metrics from. */
  startDate: Scalars['Date'];
};

export type GeoTargeting = {
  __typename?: 'GeoTargeting';
  description?: Maybe<Scalars['String']>;
  fileId: Scalars['ID'];
};

/** Input for `file` Query. */
export type GetFileInput = {
  /** The id of the file to retrieve. */
  id: Scalars['ID'];
};

export type GoogleAdsAdGroupDto = BaseGoogleAdsDto & {
  __typename?: 'GoogleAdsAdGroupDTO';
  popMetrics: GoogleAdsPopMetrics;
  searchImpressionShare: Scalars['Float'];
};

export type GoogleAdsAdGroupDtoPopMetricsArgs = {
  adGroupId: Scalars['String'];
  advertiserId: Scalars['String'];
  campaignId: Scalars['String'];
  endDate: Scalars['Date'];
  startDate: Scalars['Date'];
};

export type GoogleAdsAdvertiserDto = BaseGoogleAdsDto & {
  __typename?: 'GoogleAdsAdvertiserDTO';
  popMetrics: GoogleAdsPopMetrics;
  searchImpressionShare: Scalars['Float'];
};

export type GoogleAdsAdvertiserDtoPopMetricsArgs = {
  advertiserId: Scalars['String'];
  endDate: Scalars['Date'];
  startDate: Scalars['Date'];
};

export type GoogleAdsCampaignDto = BaseGoogleAdsDto & {
  __typename?: 'GoogleAdsCampaignDTO';
  popMetrics: GoogleAdsPopMetrics;
  searchImpressionShare: Scalars['Float'];
};

export type GoogleAdsCampaignDtoPopMetricsArgs = {
  advertiserId: Scalars['String'];
  campaignId: Scalars['String'];
  endDate: Scalars['Date'];
  startDate: Scalars['Date'];
};

export type GoogleAdsPopMetrics = BaseGoogleAdsDto & {
  __typename?: 'GoogleAdsPopMetrics';
  searchImpressionShare: Scalars['Float'];
};

export type GoogleAudienceResponse = {
  __typename?: 'GoogleAudienceResponse';
  interval: AnalyticsInterval;
  value: GoogleAudienceValue;
};

export type GoogleAudienceValue = {
  __typename?: 'GoogleAudienceValue';
  audience: Scalars['String'];
  clicks: Scalars['Float'];
  conversionRate: Scalars['Float'];
  conversions: Scalars['Float'];
  ctr: Scalars['Float'];
  impressions: Scalars['Float'];
  view25PctCompletionRate: Scalars['Float'];
  view50PctCompletionRate: Scalars['Float'];
  view75PctCompletionRate: Scalars['Float'];
  viewCompletionRate: Scalars['Float'];
  viewRate: Scalars['Float'];
  views: Scalars['Float'];
  views25PctCompleted: Scalars['Float'];
  views50PctCompleted: Scalars['Float'];
  views75PctCompleted: Scalars['Float'];
  viewsCompleted: Scalars['Float'];
};

export enum GoogleDeviceTypeEnum {
  ConnectedTv = 'CONNECTED_TV',
  Desktop = 'DESKTOP',
  Mobile = 'MOBILE',
  Other = 'OTHER',
  Tablet = 'TABLET',
}

export type GoogleDeviceTypeMetricsResponse = {
  __typename?: 'GoogleDeviceTypeMetricsResponse';
  interval: AnalyticsInterval;
  value: GoogleDeviceTypeValue;
};

export type GoogleDeviceTypeValue = BaseGoogleDeviceTypeValue & {
  __typename?: 'GoogleDeviceTypeValue';
  clicks: Scalars['Float'];
  conversionRate: Scalars['Float'];
  conversions: Scalars['Float'];
  ctr: Scalars['Float'];
  deviceType: GoogleDeviceTypeEnum;
  impressions: Scalars['Float'];
  view25PctCompletionRate: Scalars['Float'];
  view50PctCompletionRate: Scalars['Float'];
  view75PctCompletionRate: Scalars['Float'];
  viewCompletionRate: Scalars['Float'];
  viewRate: Scalars['Float'];
  views: Scalars['Float'];
  views25PctCompleted: Scalars['Float'];
  views50PctCompleted: Scalars['Float'];
  views75PctCompleted: Scalars['Float'];
  viewsCompleted: Scalars['Float'];
};

export type GoogleTimeOfDayMetricsResponse = {
  __typename?: 'GoogleTimeOfDayMetricsResponse';
  interval: TimeOfDayInterval;
  value: GoogleTimeOfDayValue;
};

export type GoogleTimeOfDayValue = {
  __typename?: 'GoogleTimeOfDayValue';
  clicks: Scalars['Float'];
  conversionRate: Scalars['Float'];
  conversions: Scalars['Float'];
  ctr: Scalars['Float'];
  impressions: Scalars['Float'];
};

export enum GrantType {
  Application = 'APPLICATION',
  Hierarchy = 'HIERARCHY',
}

export type GrantsResponse = {
  __typename?: 'GrantsResponse';
  entityId?: Maybe<Scalars['String']>;
  grantType: GrantType;
  hierarchyId?: Maybe<Scalars['String']>;
  hierarchyType?: Maybe<Scalars['String']>;
  permissions: Array<Scalars['String']>;
};

export type Hierarchies = {
  __typename?: 'Hierarchies';
  hierarchies: Array<Hierarchy>;
  parentId?: Maybe<Scalars['Float']>;
};

export type HierarchiesByEntityIds = {
  __typename?: 'HierarchiesByEntityIds';
  faEntityId: Scalars['String'];
  hierarchyId: Scalars['String'];
};

export type HierarchiesByEntityIdsInput = {
  faEntityIds: Array<Scalars['String']>;
};

export type HierarchiesByEntityIdsResponse = {
  __typename?: 'HierarchiesByEntityIdsResponse';
  results: Array<HierarchiesByEntityIds>;
};

export type HierarchiesInput = {
  hierarchyId: Scalars['String'];
  hierarchyType: HierarchyType;
  permissions?: InputMaybe<Array<Scalars['String']>>;
};

/** A hierarchy. */
export type Hierarchy = {
  __typename?: 'Hierarchy';
  assignee?: Maybe<User>;
  childAdvertiserIds?: Maybe<Array<Scalars['Int']>>;
  childHierarchyIds?: Maybe<Array<Scalars['Int']>>;
  created: Scalars['DateTime'];
  createdBy?: Maybe<User>;
  createdUserId?: Maybe<Scalars['String']>;
  /** The hierarchy id. */
  guid: Scalars['ID'];
  id: Scalars['Float'];
  logoFile?: Maybe<File>;
  /** @deprecated Use logoFile, which is federated and resolved through the subGraph */
  logoUri?: Maybe<Scalars['String']>;
  mongoId?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  ownerId?: Maybe<Scalars['String']>;
  parent?: Maybe<Hierarchy>;
  parentId?: Maybe<Scalars['Float']>;
  productRates: Array<ProductRateResponse>;
  shortName?: Maybe<Scalars['String']>;
  styleLogo?: Maybe<Scalars['String']>;
  updated: Scalars['DateTime'];
};

/** A hierarchy. */
export type HierarchyProductRatesArgs = {
  effectiveDate: Scalars['DateTime'];
  productTypes: Array<ProductTypeEnum>;
};

export type HierarchyChildIdsResponse = {
  __typename?: 'HierarchyChildIdsResponse';
  advertiserId?: Maybe<Scalars['Float']>;
  advertiserMongoId?: Maybe<Scalars['String']>;
  childAdvertiserIds: Array<Scalars['Float']>;
  childAdvertiserMongoIds: Array<Scalars['String']>;
  childHierarchyIds: Array<Scalars['Float']>;
  childHierarchyMongoIds: Array<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
  mongoId?: Maybe<Scalars['String']>;
};

export type HierarchyParentIdsResponse = {
  __typename?: 'HierarchyParentIdsResponse';
  advertiserId?: Maybe<Scalars['Float']>;
  advertiserMongoId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
  mongoId?: Maybe<Scalars['String']>;
  parentHierarchyIds: Array<Scalars['Float']>;
  parentHierarchyMongoIds: Array<Scalars['String']>;
};

/** Federated `HierarchyProduct` entity. */
export type HierarchyProduct = {
  __typename?: 'HierarchyProduct';
  /**
   * The active Rate Card.
   * If the Product has custom rates configured, then `rateCard == activeRateCard`.
   * Else, equal to `rateCard` of the nearest Hierarchy Product ancestor with a _non-null_ `rateCard`.
   */
  activeRateCard: RateCard;
  /**
   * The ID of the active Rate Card.
   * If the Product has custom rates configured, then `rateCardId == activeRateCardId`.
   * Else, equal to `rateCardId` of the nearest Hierarchy Product ancestor with a _non-null_ `rateCardId`.
   */
  activeRateCardId: Scalars['ID'];
  /** The date this Hierarchy Product was created. */
  created: Scalars['DateTime'];
  /** A user defined name for the Product within the Hierarchy. */
  customName?: Maybe<Scalars['String']>;
  /** The name of this Product for use within the Hierarchy. Equal to `customName` when defined, else `product { name }`. */
  displayName: Scalars['String'];
  /**
   * Any IDs in this list have this product specifically enabled for them.
   * Stopgap measure until we can make advertisers first class hierarchy entries.
   */
  enabledAdvertiserIds: Array<Scalars['ID']>;
  /**
   * Any advertisers in this list have the product specifically enabled for them.
   * Resolved via federation.
   */
  enabledAdvertisers: Array<Maybe<Advertiser>>;
  /**
   * Controls if this hierarchy product is enabled for all of its advertiser children.
   * Stopgap measure until we can make advertisers first class hierarchy entries.
   */
  enabledForAllAdvertisers: Scalars['Boolean'];
  /** The AllocationGoalTypes configured for the Product within the hierarchy. */
  goalTypes?: Maybe<Array<AllocationGoalType>>;
  /** The ID of the Hierarchy. */
  hierarchyId: Scalars['ID'];
  id: Scalars['ID'];
  /** The Product associated with the Hierarchy. */
  product: ProductResponse;
  /** The ID of the Product associated with the Hierarchy. */
  productId: Scalars['ID'];
  /** The configured Rate Card. Descendant Hierarchy Products will inherit rates from this Rate Card. */
  rateCard?: Maybe<RateCard>;
  /** The ID of the configured Rate Card. Descendant Hierarchy Products will inherit rates from the Rate Card with this ID. */
  rateCardId?: Maybe<Scalars['ID']>;
  /** The status of the Product within the Hierarchy. */
  status?: Maybe<HierarchyProductStatus>;
  /** The date the Hierarchy Product was last updated. */
  updated: Scalars['DateTime'];
};

/**
 * How a product is configured within a hierarchy.
 * Inheritable fields are resolved by traversing parent hierarchy product configurations until the first non-null value is found.
 */
export type HierarchyProductConfig = {
  __typename?: 'HierarchyProductConfig';
  /** The customized name to display instead of the product name (inheritable). */
  customName?: Maybe<Scalars['String']>;
  /** The name to display to end users. Equal to `customName ?? productName`. */
  displayName: Scalars['String'];
  /** Any IDs in this list have this product specifically enabled for them (inheritable). */
  enabledAdvertiserIds: Array<Scalars['ID']>;
  /** The specific advertisers this product should be enabled for (inheritable). */
  enabledAdvertisers: Array<Advertiser>;
  /** Controls if the product is enabled for all advertisers that are a child of the hierarchy (inheritable). */
  enabledForAllAdvertisers: Scalars['Boolean'];
  /** The goal types configured for the product within the hierarchy (inheritable). */
  goalTypes: Array<AllocationGoalType>;
  /** The hierarchy being configured. */
  hierarchy: Hierarchy;
  /** The ID of the hierarchy being configured. */
  hierarchyId: Scalars['ID'];
  /** Additional metadata describing how inheritable fields were resolved. */
  metadata: HierarchyProductConfigMetadata;
  /** The product being configured. */
  product: ProductResponse;
  /** The ID of the product being configured. */
  productId: Scalars['ID'];
  /** The configured rate card (inheritable). */
  rateCard: RateCard;
  /** The ID of the configured rate card (inheritable). */
  rateCardId: Scalars['ID'];
  /** The status of this product within the hierarchy (inheritable). */
  status: HierarchyProductStatus;
};

/** Metadata describing how a specific inheritable `HierarchyProductConfig` field was resolved. */
export type HierarchyProductConfigFieldMetadata = {
  __typename?: 'HierarchyProductConfigFieldMetadata';
  /** If true, the value of this field was resolved from the `HierarchyProductConfig` for `sourceHierarchyId` */
  isInherited: Scalars['Boolean'];
  /** The hierarchy where the field value was resolved. */
  sourceHierarchy: Hierarchy;
  /** The ID of the hierarchy where the field value was resolved. */
  sourceHierarchyId: Scalars['ID'];
};

/** Metadata describing how inheritable `HierarchyProductConfig` fields were resolved. */
export type HierarchyProductConfigMetadata = {
  __typename?: 'HierarchyProductConfigMetadata';
  /** How `customName` was resolved. */
  customName: HierarchyProductConfigFieldMetadata;
  /** How `enabledAdvertiserIds` was resolved. */
  enabledAdvertiserIds: HierarchyProductConfigFieldMetadata;
  /** How `enabledForAllAdvertisers` was resolved. */
  enabledForAllAdvertisers: HierarchyProductConfigFieldMetadata;
  /** How `goalTypes` was resolved. */
  goalTypes: HierarchyProductConfigFieldMetadata;
  /** How `rateCardId` was resolved. */
  rateCardId: HierarchyProductConfigFieldMetadata;
  /** How `status` was resolved. */
  status: HierarchyProductConfigFieldMetadata;
};

/** Fields that a `HierarchyProductConfig` can be sorted by. */
export enum HierarchyProductConfigSortableField {
  /** Sort by `displayName`. */
  DisplayName = 'DISPLAY_NAME',
  /** Sort by `product { name }`. */
  ProductName = 'PRODUCT_NAME',
}

/** Ways in which `HierarchyProductConfig` query results can be filtered. */
export type HierarchyProductConfigsFilterInput = {
  /** Select hierarchy product configs where the product has any of the specified classes. */
  advertisingProductClasses?: InputMaybe<Array<Scalars['String']>>;
  /** Select hierarchy product configs where the product has any of the specified lines. */
  advertisingProductLines?: InputMaybe<Array<Scalars['String']>>;
  /** Select hierarchy product configs where the product has any of the specified lines. */
  advertisingProductTypes?: InputMaybe<Array<Scalars['String']>>;
  /** Select hierarchy product configs for the specified hierarchy. */
  hierarchyId: Scalars['ID'];
  /** Select hierarchy product configs for the specified products. */
  productIds?: InputMaybe<Array<Scalars['ID']>>;
  /** Filter hierarchy product configs with query on `product.name` or `customName`. */
  query?: InputMaybe<Scalars['String']>;
  /** Select hierarchy product configs with the specified status. */
  status?: InputMaybe<HierarchyProductStatus>;
};

/** Response type for `query hierarchyProductConfigs`. */
export type HierarchyProductConfigsResponse = {
  __typename?: 'HierarchyProductConfigsResponse';
  /** Information about the page. */
  pageInfo: PageInfo;
  /** The page of results. */
  results: Array<HierarchyProductConfig>;
};

/** How to sort `HierarchyProductConfig` query results. */
export type HierarchyProductConfigsSortInput = {
  /** The direction of the sorting. */
  direction?: InputMaybe<SortDirection>;
  /** The field by which results are sorted. */
  field?: InputMaybe<HierarchyProductConfigSortableField>;
};

/** How a Product is listed for sale within a specific Hierarchy. */
export type HierarchyProductListing = {
  __typename?: 'HierarchyProductListing';
  /** The goal types of the product within the hierarchy. */
  goalTypes: Array<AllocationGoalType>;
  /** The ID of the hierarchy the product is listed for. */
  hierarchyId: Scalars['ID'];
  /**
   * The name to display to end users.
   * The original product name is located at `product.name`.
   */
  name: Scalars['String'];
  /** The product. */
  product: ProductResponse;
  /** The ID of the product. */
  productId: Scalars['ID'];
  /** The rates of the product within the hierarchy. */
  rateCard: RateCard;
  /** The ID of the rate card. */
  rateCardId: Scalars['ID'];
  /** The status of the product within the hierarchy. */
  status: HierarchyProductStatus;
};

/** Filter input for `hierarchyProductListings` query. */
export type HierarchyProductListingsFilterInput = {
  /** Select product listings where the product has any of the specified classes. */
  advertisingProductClasses?: InputMaybe<Array<Scalars['String']>>;
  /** Select product listings where the product has any of the specified lines. */
  advertisingProductLines?: InputMaybe<Array<Scalars['String']>>;
  /** Select product listings where the product has any of the specified lines. */
  advertisingProductTypes?: InputMaybe<Array<Scalars['String']>>;
  /** Select product listings for the specified hierarchy ID. */
  hierarchyId: Scalars['ID'];
  /** Select product listings for the specified products. */
  productIds?: InputMaybe<Array<Scalars['ID']>>;
  /** Filter product listings that match the query string. */
  query?: InputMaybe<Scalars['String']>;
  /** Select product listings with the specified status. */
  status?: InputMaybe<HierarchyProductStatus>;
};

/** Response type for `hierarchyProductListings` query. */
export type HierarchyProductListingsResponse = {
  __typename?: 'HierarchyProductListingsResponse';
  /** Information about the page. */
  pageInfo: PageInfo;
  /** The page of results. */
  results: Array<HierarchyProductListing>;
};

/** Sort input for `hierarchyProductListings` query. */
export type HierarchyProductListingsSortInput = {
  /** The direction of the sorting. */
  direction?: InputMaybe<SortDirection>;
  /** The field by which results are sorted. */
  field?: InputMaybe<ProductListingSortableField>;
};

export type HierarchyProductPageResponse = {
  __typename?: 'HierarchyProductPageResponse';
  pageNumber: Scalars['Int'];
  pageSize: Scalars['Int'];
  results: Array<HierarchyProduct>;
  totalCount: Scalars['Int'];
  totalPages: Scalars['Int'];
};

export type HierarchyProductRateResponse = {
  __typename?: 'HierarchyProductRateResponse';
  /** The billing type of the rate. */
  billingType: BillingType;
  /** The date that this rate was created. */
  created: Scalars['DateTime'];
  /** A human-friendly description for this rate. */
  description?: Maybe<Scalars['String']>;
  /** The flight minimum days amount required to spend for this rate. */
  flightMinimum: Scalars['Float'];
  /** The ID of the rate. */
  id: Scalars['ID'];
  /**
   * The minimum amount required to spend for this rate.
   * @deprecated Use monthlyBudgetMinimum, monthlyImpressionMinimum, or flightMinimum instead
   */
  minSpendAmount?: Maybe<Scalars['Float']>;
  /** The monthly budget minimum amount required to spend for this rate. */
  monthlyBudgetMinimum: Scalars['Float'];
  /** The monthly impression minimum amount required to spend for this rate. */
  monthlyImpressionMinimum: Scalars['Float'];
  /** The rate card that owns this rate. */
  rateCard: RateCard;
  /** The retail amount for this rate. */
  retailAmount: Scalars['Float'];
  /** The date that this rate was updated. */
  updated: Scalars['DateTime'];
  /** The wholesale amount for this rate. */
  wholesaleAmount: Scalars['Float'];
};

export type HierarchyProductRatesResponse = {
  __typename?: 'HierarchyProductRatesResponse';
  rates: Array<HierarchyProductRateResponse>;
};

export type HierarchyProductRequest = {
  customName?: InputMaybe<Scalars['String']>;
  goalTypes?: InputMaybe<Array<AllocationGoalType>>;
  hierarchyId: Scalars['ID'];
  productId: Scalars['ID'];
  rateCardId?: InputMaybe<Scalars['ID']>;
};

export enum HierarchyProductStatus {
  Disabled = 'DISABLED',
  Enabled = 'ENABLED',
}

export type HierarchyProducts = {
  __typename?: 'HierarchyProducts';
  results: Array<HierarchyProduct>;
};

export enum HierarchyType {
  Advertiser = 'ADVERTISER',
  Hierarchy = 'HIERARCHY',
}

/**
 * A "linked account" in the Improvado API, which is an organizational unit (usually an advertiser) about which we
 * receive advertising data.
 */
export type ImprovadoAccount = {
  __typename?: 'ImprovadoAccount';
  /** The datasource-specific identifier for the account. For example, a Facebook ad account id. */
  accountId: Scalars['String'];
  /** The datasource-specific name for the account. */
  accountName: Scalars['String'];
  /** The datasource of this account. */
  datasource: ImprovadoDatasource;
  /** A unique, Improvado-specific id. */
  id: Scalars['ID'];
  /** Whether or not report data should be loaded into our data pipeline for this account. */
  v2UploadFlag: Scalars['Boolean'];
};

/** A page of Improvado accounts. */
export type ImprovadoAccounts = {
  __typename?: 'ImprovadoAccounts';
  /** The page information. */
  pageInfo: PageInfo;
  /** The page of results. */
  results: Array<ImprovadoAccount>;
};

/** Criteria by which Improvado accounts may be filtered. */
export type ImprovadoAccountsFilterInput = {
  /** The subagency identifier. */
  datasource: ImprovadoDatasource;
  /** The hierarchy id. */
  hierarchyId: Scalars['ID'];
};

/** Input for starting the Improvado authorization flow. */
export type ImprovadoAuthorizationInput = {
  /** The datasource to be authorized. */
  datasource: ImprovadoDatasource;
  /** The hierarchy id in which the resulting authorization applies. */
  hierarchyId: Scalars['ID'];
};

/**
 * A connected account in Improvado. For example, a Facebook account in which Improvado has been granted access to pull
 * report data.
 */
export type ImprovadoConnection = {
  __typename?: 'ImprovadoConnection';
  /** The datasource of this connection. */
  datasource: ImprovadoDatasource;
  /** A unique identifier for the connection. */
  id: Scalars['ID'];
  /** A human-readable name for this connection. */
  name: Scalars['String'];
  /** The status of this connection. */
  status: Scalars['String'];
};

/**
 * The input to the improvadoConnections query, which finds connected accounts associated with the subagency for the
 * given hierarchy.
 */
export type ImprovadoConnectionsInput = {
  /** If provided, filters the results to those with the given datasource. */
  datasource?: InputMaybe<ImprovadoDatasource>;
  /** The hierarchy id in which to search for connections. */
  hierarchyId: Scalars['ID'];
};

/** Represents a DSP or advertising platform from which we can obtain advertising data (e.g., “Google Ad Manager” or “Facebook”) */
export enum ImprovadoDatasource {
  AdManager = 'AD_MANAGER',
  Bing = 'BING',
  Facebook = 'FACEBOOK',
  Stackadapt = 'STACKADAPT',
}

/** A page of Improvado subagencies. */
export type ImprovadoSubagencies = {
  __typename?: 'ImprovadoSubagencies';
  /** The page information. */
  pageInfo: PageInfo;
  /** The page of results. */
  results: Array<ImprovadoSubagency>;
};

/** The input to the improvadoSubagenciesByAccount query. */
export type ImprovadoSubagenciesByAccountInput = {
  /** A list of account ids for which subagency mappings are desired. */
  accountIds: Array<Scalars['ID']>;
  /** The datasource which all the accountIds apply. */
  datasource: ImprovadoDatasource;
};

/** Criteria by which Improvado subagencies may be filtered. */
export type ImprovadoSubagenciesFilterInput = {
  /** The hierarchy id. */
  hierarchyId?: InputMaybe<Scalars['ID']>;
  /** The subagency identifier. */
  identifier?: InputMaybe<Scalars['String']>;
};

/** A subagency in Improvado, which is associated with a hierarchy. */
export type ImprovadoSubagency = {
  __typename?: 'ImprovadoSubagency';
  /** The date the subagency was created. */
  created: Scalars['DateTime'];
  /** The hierarchy. */
  hierarchy: Hierarchy;
  /** The hierarchy id. */
  hierarchyId: Scalars['ID'];
  /** The unique identifier for this subagency in Improvado. */
  identifier: Scalars['String'];
  /** The date the subagency was most recently updated. */
  updated: Scalars['DateTime'];
};

/** Associates an account id with a list of ImprovadoSubagencies. */
export type ImprovadoSubagencyAccountMapping = {
  __typename?: 'ImprovadoSubagencyAccountMapping';
  /** An Improvado account id. */
  accountId: Scalars['ID'];
  /** The subagencies with access to this Improvado account. */
  subagencies: Array<ImprovadoSubagency>;
};

export type IndustriesResponse = {
  __typename?: 'IndustriesResponse';
  industries: Array<IndustryDto>;
};

export type IndustryDto = {
  __typename?: 'IndustryDTO';
  id: Scalars['Float'];
  microIndustries: Array<MicroIndustryDto>;
  name: Scalars['String'];
};

/** Contains details about starting the Improvado authorization flow. */
export type InitializeImprovadoAuthorizationDetails = {
  __typename?: 'InitializeImprovadoAuthorizationDetails';
  /**
   * An expiring URL for an iframe that can be used to launch the Improvado authorization flow for a
   * single datasource.
   */
  iframeUrl: Scalars['String'];
};

/** A date interval. */
export type Interval = {
  __typename?: 'Interval';
  /** The inclusive interval end date of the result. */
  endDate: Scalars['Date'];
  /** The inclusive interval start date of the result. */
  startDate: Scalars['Date'];
};

/** Interval resolution for grouping analytics data by date. */
export enum IntervalResolution {
  Day = 'DAY',
  Month = 'MONTH',
  Quarter = 'QUARTER',
  Week = 'WEEK',
  Year = 'YEAR',
}

export type JsonPreferenceGroupType = {
  __typename?: 'JsonPreferenceGroupType';
  created: Scalars['DateTime'];
  id: Scalars['ID'];
  key: Scalars['String'];
  updated: Scalars['DateTime'];
  user: User;
  userId: Scalars['String'];
  value: Scalars['JSON'];
};

export type JsonPreferenceType = {
  __typename?: 'JsonPreferenceType';
  created: Scalars['DateTime'];
  id: Scalars['ID'];
  key: Scalars['String'];
  updated: Scalars['DateTime'];
  user: User;
  userId: Scalars['String'];
  value: Scalars['JSON'];
};

export type LatLongType = {
  __typename?: 'LatLongType';
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  region?: Maybe<Scalars['String']>;
};

/** An Order Line Item. */
export type LineItem = {
  __typename?: 'LineItem';
  /** The active rate. */
  activeRate?: Maybe<Rate>;
  /** The id of the active rate. */
  activeRateId?: Maybe<Scalars['ID']>;
  /** The advertiser associated with this line item. */
  advertiser?: Maybe<Advertiser>;
  /** The ID of advertiser associated with this line item. */
  advertiserId?: Maybe<Scalars['ID']>;
  /** The advertiser location IDs associated with this line item. */
  advertiserLocationIds: Array<Scalars['ID']>;
  /** The advertiser locations associated with this line item. */
  advertiserLocations: Array<Maybe<Location>>;
  /** The advertising product being ordered. */
  advertisingProduct?: Maybe<AdvertisingProduct>;
  /** The allocation rollups associated with this line item. */
  allocationRollups: Array<LineItemAllocationRollup>;
  /** The allocations associated with this line item. */
  allocations: Array<LineItemAllocation>;
  /** The user assigned to this line item. */
  assignee?: Maybe<User>;
  /** The ID of the user assigned to this line item. */
  assigneeUserId?: Maybe<Scalars['ID']>;
  /**
   * The amount of dollars allocated.
   * @deprecated This is a legacy concept that has been deprecated by `retailBudget`
   */
  budget?: Maybe<Scalars['Float']>;
  /** The campaigns associated with this line item. */
  campaigns: Array<LineItemCampaign>;
  /** The date and time this line item was created. */
  created: Scalars['DateTime'];
  /** The date the line item became an official order. */
  dateOfOrder?: Maybe<Scalars['Date']>;
  /** The date the line item was added to a proposal. */
  dateOfProposal?: Maybe<Scalars['Date']>;
  /** The date this line item ends. */
  endDate: Scalars['Date'];
  /** The list of flags on the line item. */
  flags: Array<Scalars['String']>;
  /** The IDs of the users following this line item. */
  followerUserIds: Array<Scalars['String']>;
  /** The users following this line item. */
  followers: Array<User>;
  /** Geolocations associated with this line item. */
  geoLocations?: Maybe<GeoLocations>;
  /** The hierarchy product associated with this line item. */
  hierarchyProduct?: Maybe<HierarchyProduct>;
  /** The ID of the hierarchy product associated with this line item. */
  hierarchyProductId?: Maybe<Scalars['ID']>;
  id: Scalars['ID'];
  /** The message conversation associated with this line item. */
  messageConversation?: Maybe<ConversationType>;
  /** The ID of message conversation associated with this line item. */
  messageConversationId?: Maybe<Scalars['ID']>;
  /** The last date and time that the message conversation had an update. */
  messageConversationUpdated?: Maybe<Scalars['DateTime']>;
  /** The name of the line item. */
  name: Scalars['String'];
  /** The notes conversation associated with this line item. */
  notesConversation?: Maybe<ConversationType>;
  /** The ID of notes conversation associated with this line item. */
  notesConversationId?: Maybe<Scalars['ID']>;
  /** The order associated with this line item. */
  order: Order;
  /**
   * The ID of the user that created the order associated with this line item.
   * Equivalent to `order { createdByUserId }`.
   */
  orderCreatedByUserId: Scalars['ID'];
  /** The id of the order associated with this line item. */
  orderId: Scalars['ID'];
  /** The ID product being ordered. */
  productId?: Maybe<Scalars['ID']>;
  /** Information specific to the line item's product (defined by the productKey) */
  productInfo?: Maybe<Scalars['JSON']>;
  /**
   * The legacy product key associated with this line item.
   * @deprecated This is a legacy concept that has been deprecated by the hierarchy product
   */
  productKey?: Maybe<Scalars['String']>;
  /** The product listing being ordered. */
  productListing?: Maybe<AdvertiserProductListing>;
  /** Freeform notes to store additional info about the proposed phase of the line item */
  proposalNotes?: Maybe<Scalars['String']>;
  /** The rate card associated with this line item. */
  rateCard?: Maybe<RateCard>;
  /** The id of the rate card. */
  rateCardId?: Maybe<Scalars['ID']>;
  /** The user requesting this line item. */
  requester?: Maybe<User>;
  /** The ID of the user requesting this line item. */
  requesterUserId?: Maybe<Scalars['ID']>;
  /** The retail budget of the line item, calculated from the sum of retail budgets from `allocations` */
  retailBudget?: Maybe<Scalars['Float']>;
  /** The date this line item starts. */
  startDate: Scalars['Date'];
  /** The status of the line item. */
  status: LineItemStatus;
  /** The targeting information associated with this line item. */
  targeting?: Maybe<LineItemTargeting>;
  /** The date and time this line item was last updated. */
  updated: Scalars['DateTime'];
};

/**
 * The amount allocated to a specific goal for a date range.
 * The units for goal amount are determined by the goal type. This can be dollars, impressions, clicks, ect.
 */
export type LineItemAllocation = {
  __typename?: 'LineItemAllocation';
  /** The start date and end date of this allocation. */
  dateRange: LineItemAllocationDateRange;
  /** The allocation goal amount for the provided goal type and goal subtype. */
  goalAmount: Scalars['Float'];
  /** The goal sub-type of the allocation. Used for identifying special allocation scenarios. */
  goalSubtype: AllocationGoalSubtype;
  /** The goal type of the allocation. */
  goalType: AllocationGoalType;
  id: Scalars['ID'];
  /** The ID of the line item this allocation belongs to. */
  lineItemId: Scalars['ID'];
  /** The allocated retail budget. */
  retailBudget?: Maybe<Scalars['Float']>;
};

export type LineItemAllocationDateRange = {
  __typename?: 'LineItemAllocationDateRange';
  /** The ending date. */
  end: Scalars['Date'];
  /** The starting date. */
  start: Scalars['Date'];
};

export type LineItemAllocationDateRangeInput = {
  /** The ending date. */
  end: Scalars['Date'];
  /** The starting date. */
  start: Scalars['Date'];
};

export type LineItemAllocationInput = {
  /** The allocation's start and end dates. */
  dateRange: LineItemAllocationDateRangeInput;
  /** The allocation goal amount for the provided goal type and goal subtype. If this is not provided, a `retailBudget` must be provided. */
  goalAmount?: InputMaybe<Scalars['Float']>;
  /** The goal sub-type of the allocation. Used for identifying special allocation scenarios. */
  goalSubtype: AllocationGoalSubtype;
  /** The goal type of the allocation. */
  goalType: AllocationGoalType;
  /** The dollar amount budgeted for the allocation. If this is not provided, a `goalAmount` must be provided. */
  retailBudget?: InputMaybe<Scalars['Float']>;
};

/** Represents multiple LineItemAllocations grouped by `dateRange` and `goalSubtype` */
export type LineItemAllocationRollup = {
  __typename?: 'LineItemAllocationRollup';
  allocationIds: Array<Scalars['ID']>;
  allocations: Array<LineItemAllocation>;
  dateRange: LineItemAllocationDateRange;
  goalAmounts: LineItemAllocationRollupGoalAmounts;
  goalSubtype: AllocationGoalSubtype;
  lineItem: LineItem;
  lineItemId: Scalars['ID'];
  retailBudgetSum: Scalars['Float'];
};

/**
 * Contains the amounts for a single allocation goal. Typically, only one field in this object
 * will be present.
 */
export type LineItemAllocationRollupGoalAmounts = {
  __typename?: 'LineItemAllocationRollupGoalAmounts';
  budget?: Maybe<Scalars['Float']>;
  clicks?: Maybe<Scalars['Float']>;
  impressions?: Maybe<Scalars['Float']>;
  views?: Maybe<Scalars['Float']>;
};

/** Contains the amounts for a single allocation goal. Multiple values can be specified to update values across different goal types. */
export type LineItemAllocationRollupGoalAmountsInput = {
  budget?: InputMaybe<Scalars['Float']>;
  clicks?: InputMaybe<Scalars['Float']>;
  impressions?: InputMaybe<Scalars['Float']>;
  views?: InputMaybe<Scalars['Float']>;
};

/** Ways in which `lineItemAllocations` query results can be filtered. */
export type LineItemAllocationsFilterInput = {
  /** Filter line item allocations by the line items they belong to */
  lineItemIds?: InputMaybe<Array<Scalars['ID']>>;
};

/** Response type for `query lineItemAllocations`. */
export type LineItemAllocationsResponse = {
  __typename?: 'LineItemAllocationsResponse';
  /** The page information. */
  pageInfo: PageInfo;
  /** The page of results. */
  results: Array<LineItemAllocation>;
};

export type LineItemBasicTargeting = {
  __typename?: 'LineItemBasicTargeting';
  /** A description of the targets. */
  description?: Maybe<Scalars['String']>;
  /** The targets for this line item. */
  targets?: Maybe<Array<Scalars['String']>>;
};

export type LineItemBasicTargetingInput = {
  /** A description of the targets. */
  description?: InputMaybe<Scalars['String']>;
  /** The targets to assign for this line item. */
  targets?: InputMaybe<Array<Scalars['String']>>;
};

/** The linkage between a line item and a campaign hosted on an external platform. */
export type LineItemCampaign = {
  __typename?: 'LineItemCampaign';
  /** The ID of the campaign on the external platform. */
  externalCampaignId: Scalars['ID'];
  id: Scalars['ID'];
  /** The ID of the line item. */
  lineItemId: Scalars['ID'];
  /** A human readable name for the campaign. */
  name: Scalars['String'];
  /** The platform where the campaign is hosted. */
  platform: Platform;
};

/** Response type for `query campaigns`. */
export type LineItemCampaignsResponse = {
  __typename?: 'LineItemCampaignsResponse';
  /** The page information. */
  pageInfo: PageInfo;
  /** The page of results. */
  results: Array<LineItemCampaign>;
};

/** Ways in which line items can be filtered by date. */
export type LineItemDateFilters = {
  /** Refers to the date that the order became an order. Entries with a null value will never be returned. */
  dateOfOrder?: InputMaybe<Array<InputMaybe<DateFilter>>>;
  /** Refers to the date that the order became a proposal. Entries with a null value will never be returned. */
  dateOfProposal?: InputMaybe<Array<InputMaybe<DateFilter>>>;
  /** Refers to the date time that a line item ends. */
  ended?: InputMaybe<Array<InputMaybe<DateFilter>>>;
  /** Refers to the date time that a line item was purchased (created). */
  purchased?: InputMaybe<Array<InputMaybe<DateTimeFilter>>>;
  /** Refers to the date time that a line item starts. */
  started?: InputMaybe<Array<InputMaybe<DateFilter>>>;
  /** Refers to the date time that a line item was last updated. */
  updated?: InputMaybe<Array<InputMaybe<DateTimeFilter>>>;
};

export type LineItemGeoTargeting = {
  __typename?: 'LineItemGeoTargeting';
  /** A description of the targets. */
  description?: Maybe<Scalars['String']>;
  /** The file ID to associate with the geo targeting for this line item. */
  fileId: Scalars['ID'];
};

export type LineItemGeoTargetingInput = {
  /** A description of the targets. */
  description?: InputMaybe<Scalars['String']>;
  /** The file ID to associate with the geo targeting for this line item. */
  fileId: Scalars['ID'];
};

/** Input for creating a line item. */
export type LineItemInput = {
  /** The advertiser location IDs for this line item. */
  advertiserLocationIds?: InputMaybe<Array<Scalars['ID']>>;
  /**
   * Provide allocations for the line item. When `null`, default allocations will be created.
   *
   * **Default Allocations**
   *
   * An allocation will be created for each month between the order's proposed start date and proposed end date
   * and each goal type of the associated product.
   */
  allocations?: InputMaybe<Array<LineItemAllocationInput>>;
  /** The assignee's user id. An empty string is treated as null. */
  assigneeUserId?: InputMaybe<Scalars['ID']>;
  /** The follower user ids. */
  followerUserIds?: InputMaybe<Array<Scalars['String']>>;
  /** The geo locations for this line item. */
  geoLocations?: InputMaybe<GeoLocationsInput>;
  /** The message conversation ID. */
  messageConversationId?: InputMaybe<Scalars['ID']>;
  /** The name of the line item. */
  name: Scalars['String'];
  /** The notes conversation ID. */
  notesConversationId?: InputMaybe<Scalars['ID']>;
  /** The product this line item pertains to. */
  productId?: InputMaybe<Scalars['ID']>;
  /** Information specific to the line item's product (defined by the productKey). */
  productInfo?: InputMaybe<Scalars['JSON']>;
  /** The requesting user's id. Defaults to the requester of the order if null or empty. */
  requesterUserId?: InputMaybe<Scalars['ID']>;
  /** The status of the line item. */
  status?: InputMaybe<LineItemStatus>;
  /** The targeting information for this line item. */
  targeting?: InputMaybe<LineItemTargetingInput>;
};

/** Fields that a `LineItem` can be sorted by. */
export enum LineItemSortableField {
  Budget = 'BUDGET',
  DateOfOrder = 'DATE_OF_ORDER',
  DateOfProposal = 'DATE_OF_PROPOSAL',
  EndDate = 'END_DATE',
  Flags = 'FLAGS',
  /** Sort by `messageConversationUpdated`. */
  MessageConversationUpdated = 'MESSAGE_CONVERSATION_UPDATED',
  /**
   * Sort by whether `messageConversationUpdated` *is* or *is not* `null`.
   *
   * - When direction is `ASC`, `null` values are returned last.
   * - When direction is `DESC`, `null` values are returned first.
   */
  MessageConversationUpdatedNulls = 'MESSAGE_CONVERSATION_UPDATED_NULLS',
  Name = 'NAME',
  PurchaseDate = 'PURCHASE_DATE',
  RetailBudget = 'RETAIL_BUDGET',
  StartDate = 'START_DATE',
  Status = 'STATUS',
}

export enum LineItemStatus {
  Canceled = 'CANCELED',
  Complete = 'COMPLETE',
  Draft = 'DRAFT',
  Live = 'LIVE',
  New = 'NEW',
  Paused = 'PAUSED',
  Pending = 'PENDING',
  Sold = 'SOLD',
}

export type LineItemTargeting = {
  __typename?: 'LineItemTargeting';
  /** Behavioral targeting. */
  behavioral?: Maybe<LineItemBasicTargeting>;
  /** Content targeting. */
  content?: Maybe<LineItemBasicTargeting>;
  /** Demographic targeting. */
  demographic?: Maybe<LineItemBasicTargeting>;
  /** Geographic targeting. */
  geo?: Maybe<LineItemGeoTargeting>;
};

export type LineItemTargetingInput = {
  /** Behavioral related targeting. */
  behavioral?: InputMaybe<LineItemBasicTargetingInput>;
  /** Content related targeting. */
  content?: InputMaybe<LineItemBasicTargetingInput>;
  /** Demographic related targeting. */
  demographic?: InputMaybe<LineItemBasicTargetingInput>;
  /** Geographic related targeting. */
  geo?: InputMaybe<LineItemGeoTargetingInput>;
};

/** Ways in which `lineItems` query results can be filtered. */
export type LineItemsFilterInput = {
  /** Select line items associated with any of the specified advertisers. */
  advertiserIds?: InputMaybe<Array<Scalars['ID']>>;
  /** Select line items assigned to or followed by the specified user. */
  assigneeUserIdOrFollowerUserId?: InputMaybe<Scalars['String']>;
  /** Select line items assigned to any of the specified users. */
  assigneeUserIds?: InputMaybe<Array<Scalars['String']>>;
  /** Select line items filtered by various dates */
  dates?: InputMaybe<LineItemDateFilters>;
  /**
   * Select line items with any of the specified flags.
   * Example: `["Needs response", "Missing Information"]`
   */
  flags?: InputMaybe<Array<Scalars['String']>>;
  /** Select line items followed by any of the specified users. */
  followerUserIds?: InputMaybe<Array<Scalars['String']>>;
  /**
   * Select line items associated with the specified hierarchy.
   * A line item is _associated_ with a hierarchy if the line item's advertiser belongs to the hierarchy.
   */
  hierarchyId?: InputMaybe<Scalars['ID']>;
  /** Select line items with the specified ids. */
  ids?: InputMaybe<Array<Scalars['ID']>>;
  /** filter by `retailBudget` less than or equal to this value */
  maxRetailBudget?: InputMaybe<Scalars['Float']>;
  /** Select line items associated with any of the specified message conversations. */
  messageConversationIds?: InputMaybe<Array<Scalars['ID']>>;
  /** filter by `retailBudget` greater than or equal to this value */
  minRetailBudget?: InputMaybe<Scalars['Float']>;
  /** Select line items associated with any of the specified orders. */
  orderIds?: InputMaybe<Array<Scalars['ID']>>;
  /** Select line items with any of the specified owner emails. */
  ownerEmails?: InputMaybe<Array<Scalars['String']>>;
  /** Select line items associated with any of the specified products. */
  productIds?: InputMaybe<Array<Scalars['ID']>>;
  /**
   * Select line items filtered by the specified query.
   * Line items with a name that contains `query` OR line items with an id equal to `query` will be returned.
   *
   * ### Examples
   *
   * `query: "Apple"` would match orders with the names:
   * - `Apple`
   * - `Tasty Apple`
   * - `Applesauce`
   *
   * `query: "123"` would match:
   * - An order with id `123`
   * - An order with name `Order for 123 Apples`
   */
  query?: InputMaybe<Scalars['String']>;
  /** Select line items requested by any of the specified users. */
  requesterUserIds?: InputMaybe<Array<Scalars['String']>>;
  /** Select line items with any of the specified statuses. */
  statuses?: InputMaybe<Array<LineItemStatus>>;
  /** Select line items created by any of the specified users. */
  userIds?: InputMaybe<Array<Scalars['String']>>;
};

/** Response type for `query lineItems`. */
export type LineItemsResponse = {
  __typename?: 'LineItemsResponse';
  /** The page information. */
  pageInfo: PageInfo;
  /** The page of results. */
  results: Array<LineItem>;
};

/** How to sort `lineItems` query results. */
export type LineItemsSortInput = {
  /** The direction of the sorting. Defaults to ascending. */
  direction?: InputMaybe<SortDirection>;
  /** The field by which results are sorted. */
  field: LineItemSortableField;
};

/** Associates an "internal" advertiser with an advertiser that exists in a third-party advertising platform. */
export type LinkedAdvertiser = {
  __typename?: 'LinkedAdvertiser';
  /** The advertiser. */
  advertiser: Advertiser;
  /**
   * The id of the advertiser.
   * @deprecated Use advertiser.guid
   */
  advertiserId: Scalars['Int'];
  /** The user who created this linked advertiser. Not always set. */
  createdByUserId?: Maybe<Scalars['ID']>;
  /** The advertiser that exists in a third-party advertising platform. */
  externalAdvertiser: ExternalAdvertiser;
  /** The primary key for this linked advertiser. */
  id: Scalars['ID'];
  /** The hierarchy whose integration is the source of the external advertiser being linked. */
  sourceHierarchyId: Scalars['ID'];
};

/** Paginated Linked Advertisers. */
export type LinkedAdvertisers = {
  __typename?: 'LinkedAdvertisers';
  pageNumber: Scalars['Int'];
  pageSize: Scalars['Int'];
  results: Array<LinkedAdvertiser>;
  totalCount: Scalars['Int'];
  totalPages: Scalars['Int'];
};

/** Input for `linkedAndUnlinkedCampaigns` */
export type LinkedAndUnlinkedCampaignFilterInput = {
  /** The Adcellerant ID of the advertiser */
  advertiserId: Scalars['String'];
  /** The platform to get linked/unlinked campaigns for */
  platform: Platform;
};

export type LinkedAndUnlinkedCampaigns = {
  __typename?: 'LinkedAndUnlinkedCampaigns';
  linked: Array<PlatformCampaign>;
  unlinked: Array<UnlinkedPlatformCampaign>;
};

/** Response type for `query linkedAndUnlinkedCampaignsResponse`. */
export type LinkedAndUnlinkedCampaignsResponse = {
  __typename?: 'LinkedAndUnlinkedCampaignsResponse';
  /** The campaigns that are linked to the advertiser already. */
  linked: Array<LineItemCampaign>;
  /** The campaigns that are not linked to the advertiser already. */
  unlinked: Array<ExternalCampaignResponse>;
};

/** Federated `Location` entity */
export type Location = {
  __typename?: 'Location';
  address: Scalars['String'];
  advertiserId: Scalars['Int'];
  businessHours: Array<BusinessHour>;
  created: Scalars['DateTime'];
  createdBy?: Maybe<User>;
  createdUserId?: Maybe<Scalars['String']>;
  id: Scalars['Float'];
  name: Scalars['String'];
  phoneNumber?: Maybe<Scalars['String']>;
  updated: Scalars['DateTime'];
  websiteUrl?: Maybe<Scalars['String']>;
};

export type LocationInput = {
  city: Scalars['String'];
  country: Scalars['String'];
  region: Scalars['String'];
};

export type LoginInput = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type ManualCustomCampaign = {
  __typename?: 'ManualCustomCampaign';
  budget?: Maybe<Scalars['Float']>;
  details?: Maybe<Scalars['String']>;
  end?: Maybe<Scalars['DateTime']>;
  id: Scalars['Float'];
  isRecommended: Scalars['Boolean'];
  monthlyBudget?: Maybe<Array<Scalars['Float']>>;
  name?: Maybe<Scalars['String']>;
  product?: Maybe<Scalars['String']>;
  proposalId: Scalars['Float'];
  start?: Maybe<Scalars['DateTime']>;
  status?: Maybe<CampaignStatus>;
};

export type ManualDisplayCampaign = {
  __typename?: 'ManualDisplayCampaign';
  behavioralTargets?: Maybe<Array<Scalars['String']>>;
  budget?: Maybe<Scalars['Float']>;
  contentTargets?: Maybe<Array<Scalars['String']>>;
  cpm?: Maybe<Scalars['Float']>;
  demographicTargets?: Maybe<Array<Scalars['String']>>;
  details?: Maybe<Scalars['String']>;
  end?: Maybe<Scalars['DateTime']>;
  forecast?: Maybe<CampaignForecast>;
  id: Scalars['Float'];
  isRecommended: Scalars['Boolean'];
  monthlyBudget?: Maybe<Array<Scalars['Float']>>;
  name?: Maybe<Scalars['String']>;
  nativeTargets?: Maybe<Array<Scalars['String']>>;
  note?: Maybe<Note>;
  product?: Maybe<Scalars['String']>;
  proposalId: Scalars['Float'];
  proposedImpressions?: Maybe<Scalars['Float']>;
  start?: Maybe<Scalars['DateTime']>;
  status?: Maybe<CampaignStatus>;
};

export type ManualEmailCampaign = {
  __typename?: 'ManualEmailCampaign';
  addOns?: Maybe<Array<Scalars['String']>>;
  budget?: Maybe<Scalars['Float']>;
  campaignBudget?: Maybe<Scalars['Float']>;
  consumerInterestTargets?: Maybe<Array<Scalars['String']>>;
  consumerLifestyleTargets?: Maybe<Array<Scalars['String']>>;
  cpm?: Maybe<Scalars['Float']>;
  demographicTargets?: Maybe<Array<Scalars['String']>>;
  flatFee?: Maybe<Scalars['Float']>;
  id: Scalars['Float'];
  isFlatFeeBased?: Maybe<Scalars['Boolean']>;
  isRecommended: Scalars['Boolean'];
  name?: Maybe<Scalars['String']>;
  note?: Maybe<Note>;
  product?: Maybe<Scalars['String']>;
  proposalId: Scalars['Float'];
  proposedSends?: Maybe<Scalars['Float']>;
  start?: Maybe<Scalars['DateTime']>;
  status?: Maybe<CampaignStatus>;
};

export type ManualGeofencingCampaign = {
  __typename?: 'ManualGeofencingCampaign';
  audienceTargeting?: Maybe<Scalars['String']>;
  budget?: Maybe<Scalars['Float']>;
  cpm?: Maybe<Scalars['Float']>;
  details: Scalars['String'];
  end: Scalars['DateTime'];
  id: Scalars['Float'];
  isRecommended: Scalars['Boolean'];
  locationsFileId?: Maybe<Scalars['Float']>;
  locationsFileUri?: Maybe<Scalars['String']>;
  monthlyBudget: Array<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  note?: Maybe<Note>;
  product?: Maybe<Scalars['String']>;
  proposalId: Scalars['Float'];
  proposedImpressions?: Maybe<Scalars['Float']>;
  setupFee?: Maybe<Scalars['Float']>;
  start?: Maybe<Scalars['DateTime']>;
  status?: Maybe<CampaignStatus>;
};

export type ManualSemCampaign = {
  __typename?: 'ManualSEMCampaign';
  adSpend?: Maybe<Scalars['Float']>;
  budget?: Maybe<Scalars['Float']>;
  end?: Maybe<Scalars['DateTime']>;
  id: Scalars['Float'];
  isRecommended: Scalars['Boolean'];
  managementFee?: Maybe<Scalars['Float']>;
  monthlyBudget?: Maybe<Array<Scalars['Float']>>;
  name?: Maybe<Scalars['String']>;
  note?: Maybe<Note>;
  product?: Maybe<Scalars['String']>;
  proposalId: Scalars['Float'];
  start?: Maybe<Scalars['DateTime']>;
  status?: Maybe<CampaignStatus>;
};

export type ManualSeoCampaign = {
  __typename?: 'ManualSEOCampaign';
  budget?: Maybe<Scalars['Float']>;
  end?: Maybe<Scalars['DateTime']>;
  franchiseMultiLocation?: Maybe<Scalars['Boolean']>;
  id: Scalars['Float'];
  isRecommended: Scalars['Boolean'];
  monthsDuration?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  note?: Maybe<Note>;
  numberOfLocations?: Maybe<Scalars['Float']>;
  product?: Maybe<Scalars['String']>;
  proposalId: Scalars['Float'];
  start?: Maybe<Scalars['DateTime']>;
  status?: Maybe<CampaignStatus>;
};

export type ManualSocialMediaCampaign = {
  __typename?: 'ManualSocialMediaCampaign';
  adSpend?: Maybe<Scalars['Float']>;
  behavioralTargets?: Maybe<Array<Scalars['String']>>;
  budget?: Maybe<Scalars['Float']>;
  end?: Maybe<Scalars['DateTime']>;
  id: Scalars['Float'];
  isRecommended: Scalars['Boolean'];
  managementFee?: Maybe<Scalars['Float']>;
  monthlyBudget?: Maybe<Array<Scalars['Float']>>;
  name?: Maybe<Scalars['String']>;
  note?: Maybe<Note>;
  product?: Maybe<Scalars['String']>;
  proposalId: Scalars['Float'];
  proposedImpressions?: Maybe<Scalars['Float']>;
  setupFee?: Maybe<Scalars['Float']>;
  start?: Maybe<Scalars['DateTime']>;
  status?: Maybe<CampaignStatus>;
};

export type ManualSpecializedCampaign = {
  __typename?: 'ManualSpecializedCampaign';
  adSpend?: Maybe<Scalars['Float']>;
  automateTicketCreation?: Maybe<Scalars['Boolean']>;
  budget?: Maybe<Scalars['Float']>;
  cpm?: Maybe<Scalars['Float']>;
  csvFileId?: Maybe<Scalars['Float']>;
  description?: Maybe<Scalars['String']>;
  end?: Maybe<Scalars['DateTime']>;
  id: Scalars['Float'];
  impressions?: Maybe<Scalars['Float']>;
  isCPVBased?: Maybe<Scalars['Boolean']>;
  isRecommended: Scalars['Boolean'];
  managementFee?: Maybe<Scalars['Float']>;
  monthlyBudget?: Maybe<Array<Scalars['Float']>>;
  monthsDuration?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  note?: Maybe<Note>;
  product?: Maybe<Scalars['String']>;
  proposalId: Scalars['Float'];
  start?: Maybe<Scalars['DateTime']>;
  status?: Maybe<CampaignStatus>;
};

export type ManualStreamingAudioCampaign = {
  __typename?: 'ManualStreamingAudioCampaign';
  behavioralTargets?: Maybe<Array<Scalars['String']>>;
  budget?: Maybe<Scalars['Float']>;
  contentTargets?: Maybe<Array<Scalars['String']>>;
  cpm?: Maybe<Scalars['Float']>;
  demographicTargets?: Maybe<Array<Scalars['String']>>;
  end?: Maybe<Scalars['DateTime']>;
  id: Scalars['Float'];
  isRecommended: Scalars['Boolean'];
  monthlyBudget?: Maybe<Array<Scalars['Float']>>;
  name?: Maybe<Scalars['String']>;
  note?: Maybe<Note>;
  product?: Maybe<Scalars['String']>;
  proposalId: Scalars['Float'];
  proposedImpressions?: Maybe<Scalars['Float']>;
  start?: Maybe<Scalars['DateTime']>;
  status?: Maybe<CampaignStatus>;
};

export type ManualVideoCampaign = {
  __typename?: 'ManualVideoCampaign';
  addOns?: Maybe<Array<Scalars['String']>>;
  behavioralTargets?: Maybe<Array<Scalars['String']>>;
  budget?: Maybe<Scalars['Float']>;
  contentTargets?: Maybe<Array<Scalars['String']>>;
  cpm?: Maybe<Scalars['Float']>;
  cpv?: Maybe<Scalars['Float']>;
  demographicTargets?: Maybe<Array<Scalars['String']>>;
  details?: Maybe<Scalars['String']>;
  end?: Maybe<Scalars['DateTime']>;
  id: Scalars['Float'];
  isCPVBased?: Maybe<Scalars['Boolean']>;
  isRecommended: Scalars['Boolean'];
  monthlyBudget?: Maybe<Array<Scalars['Float']>>;
  name?: Maybe<Scalars['String']>;
  note?: Maybe<Note>;
  product?: Maybe<Scalars['String']>;
  proposalId: Scalars['Float'];
  proposedImpressions?: Maybe<Scalars['Float']>;
  start?: Maybe<Scalars['DateTime']>;
  status?: Maybe<CampaignStatus>;
  views?: Maybe<Scalars['Float']>;
};

/** A mapbox boundary subgraph */
export type MapboxBoundary = {
  __typename?: 'MapboxBoundary';
  bounds?: Maybe<Array<Scalars['Float']>>;
  centroid?: Maybe<Array<Scalars['Float']>>;
  /**
   * The city
   * @deprecated field exists solely for ApolloFederation
   */
  city?: Maybe<Scalars['String']>;
  /**
   * The country
   * @deprecated field exists solely for ApolloFederation
   */
  country?: Maybe<Scalars['String']>;
  featureId: Scalars['String'];
  fullyQualifiedName: Scalars['String'];
  layer: MapboxBoundaryLayer;
  layerLabel: Scalars['String'];
  level: Scalars['Float'];
  name: Scalars['String'];
  names?: Maybe<Array<Scalars['String']>>;
  polyLayerName: Scalars['String'];
  polyTilesetName: Scalars['String'];
  /**
   * The region
   * @deprecated field exists solely for ApolloFederation
   */
  region?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  /** The zipcode */
  zipcode?: Maybe<Scalars['String']>;
};

export enum MapboxBoundaryLayer {
  Adm0 = 'adm0',
  Adm1 = 'adm1',
  Adm2 = 'adm2',
  Loc1 = 'loc1',
  Loc2 = 'loc2',
  Pos4 = 'pos4',
}

export type MapboxBoundaryResponse = PaginatedResponse & {
  __typename?: 'MapboxBoundaryResponse';
  pageNumber: Scalars['Int'];
  pageSize: Scalars['Int'];
  results: Array<MapboxBoundary>;
  totalCount?: Maybe<Scalars['Int']>;
  totalPages?: Maybe<Scalars['Int']>;
};

export type MarkNotificationAsUnreadInput = {
  id: Scalars['Float'];
};

export type MessageType = {
  __typename?: 'MessageType';
  author: User;
  authorEmail?: Maybe<Scalars['String']>;
  authorId?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  conversation: ConversationType;
  conversationId: Scalars['Float'];
  created: Scalars['DateTime'];
  fileIds: Array<Scalars['Int']>;
  files: Array<File>;
  id: Scalars['Int'];
  isInternal: Scalars['Boolean'];
  title?: Maybe<Scalars['String']>;
  updated: Scalars['DateTime'];
};

export type MessagesResponse = {
  __typename?: 'MessagesResponse';
  pageInfo: CursorPageInfo;
  results: Array<MessageType>;
};

export type MicroIndustries = {
  __typename?: 'MicroIndustries';
  microIndustries: Array<MicroIndustryDto>;
};

export type MicroIndustryDto = {
  __typename?: 'MicroIndustryDTO';
  id: Scalars['Float'];
  industryId: Scalars['Float'];
  name: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  activateUser: User;
  /** Add a single allocation to a line item. */
  addAllocationToLineItem: AddAllocationToLineItemResponse;
  /** Add Content to Creative */
  addContentToCreative: CreativeContent;
  addFollowersToOrderDetail?: Maybe<OrderDetailType>;
  /** Add geo locations to every line item on an order. */
  addGeoLocationsToOrder: Order;
  /** Add a line item to an order. */
  addLineItem: LineItem;
  addListenerUserEmailsToConversation: ConversationType;
  addListenerUserIdsToConversation: ConversationType;
  /** @deprecated This mutation is deprecated in favor of addMessageToConversations. Allows the ability to message a single or multiple conversations */
  addMessageToConversation: MessageType;
  addMessageToConversations: Array<MessageType>;
  /** @deprecated This mutation is deprecated and will be removed in the future. */
  addMessageToOrderDetailConversation: MessageType;
  addToJsonPreferenceGroup: JsonPreferenceGroupType;
  addUserNotifications: CreateNotificationResponse;
  archiveProposal: ProposalType;
  /**
   * Clears locally stored conversion tracking labels for the given Tradedesk campaigns. The effect is that the next time
   * the labels are requested for the campaign, they will be re-fetched from Tradedesk.
   */
  clearTradedeskCampaignConversionTrackingLabels: Array<TradedeskCampaignConversionTrackingLabelSet>;
  /** Clone a line item. */
  cloneLineItem: LineItem;
  /** Clone an order. */
  cloneOrder: Order;
  cloneProposal: ProposalType;
  /** Clones the rate card with the given ID */
  cloneRateCard: RateCard;
  createAdditionalReport: AdditionalReport;
  createAdvertiser: Advertiser;
  /** Advertising Product Mutations */
  createAdvertisingProduct: AdvertisingProduct;
  /** Create a campaign on a line item. */
  createCampaign: LineItemCampaign;
  createConversation: ConversationType;
  /** Create Creative */
  createCreative: Creative;
  createDirectHubUser: User;
  /** Create a file */
  createFile: CreatedFile;
  /** Create a file upload URI.  If you want the file created to be deleted at some point in the future, pass in a unix timestamp to the `fileExpiryEpochSeconds` field, otherwise leave the field null and the file will be retained permanently. */
  createFileUpload: FileUpload;
  createHierarchy: Hierarchy;
  /** Hierarchy Product Mutations */
  createHierarchyProduct: HierarchyProduct;
  /** Create a Linked Advertiser. */
  createLinkedAdvertiser?: Maybe<LinkedAdvertiser>;
  /**
   * Create a Linked Advertiser, and auto-create an external advertiser if it doesn't exist. The resulting external
   * advertiser's name will be set to the platformAdvertiserId.
   */
  createLinkedAdvertiserAndExternalAdvertiser?: Maybe<LinkedAdvertiser>;
  createLocation: Location;
  /** Create a managed Order */
  createManagedOrder: Order;
  createOrder: OrderType;
  createOrderDetail: OrderDetailType;
  createProposal: ProposalType;
  /** Create a proposed Order */
  createProposedOrder: Order;
  /** Creates a rate with the given input */
  createRate: Rate;
  /** Creates a rate card with the given input */
  createRateCard: RateCard;
  createRecommendedProposal: ProposalType;
  createUser: User;
  /**
   * Create an Order.
   *
   * **Examples**
   *
   * *Create a Draft Order:*
   *
   * ```
   * dapi_createOrder(input: {
   *     dateOfOrder: "2023-01-01" # Usually the current date
   *     source: ORDER_MANAGEMENT
   *     status: DRAFT
   *     name: "..."
   *     proposedStartDate: "2023-01-01"
   *     proposedEndDate: "2023-02-01"
   * }) {
   *     dateOfOrder
   *     dateOfProposal # Will be null
   *     source
   *     status
   *     name
   *     proposedStartDate
   *     proposedEndDate
   * }
   * ```
   *
   * *Create a Draft Proposal:*
   *
   * ```
   * dapi_createOrder(input: {
   *     source: PROPOSAL
   *     status: DRAFT
   *     name: "..."
   *     proposedEndDate: "2023-02-01"
   *     proposedStartDate: "2023-01-01"
   * }) {
   *     dateOfOrder # Will be null
   *     dateOfProposal
   *     source
   *     status
   *     name
   *     proposedStartDate
   *     proposedEndDate
   * }
   * ```
   */
  dapi_createOrder: Order;
  /** Update an existing Order */
  dapi_updateOrder: Order;
  deactivateUser: User;
  deleteAdditionalReport: Scalars['Int'];
  /** Delete an allocation. */
  deleteAllocation: DeleteAllocationResponse;
  deleteAndCreateOrderDetail: DeleteAndCreateOrderDetailType;
  /** Delete a campaign. */
  deleteCampaign?: Maybe<Scalars['Boolean']>;
  /** Delete a file */
  deleteFile: Scalars['Boolean'];
  deleteFromJsonPreferenceGroup: Scalars['Boolean'];
  deleteJsonPreference: Scalars['Boolean'];
  deleteJsonPreferenceGroup: Scalars['Boolean'];
  /** Delete a line item. */
  deleteLineItem?: Maybe<Scalars['Boolean']>;
  /** Delete a Linked Advertiser. */
  deleteLinkedAdvertiser?: Maybe<LinkedAdvertiser>;
  deleteOrderDetail: Scalars['Int'];
  deletePlatformCampaign: Scalars['Float'];
  /** Delete the rate with the given id. */
  deleteRate?: Maybe<Rate>;
  /** Disable a Hierarchy Product and its descendants. */
  disableHierarchyProduct: DisabledHierarchyProducts;
  /**
   * Enable a Hierarchy Product and its descendants if the parent is also enabled.
   * Also deletes any custom rate card associated with this hierarchy product
   * if it is not an organization. Always deletes any custom rate cards on descendants.
   */
  enableHierarchyProduct: EnabledHierarchyProducts;
  /**
   * Enable a product for an organization, *only*.
   *
   * This will result in the product being *enabled for the organization*, but *disabled for descendants*: partner, division, ect.
   * Will error if the hierarchyId provided is not an organization.
   */
  enableProductForOrganizationOnly: HierarchyProduct;
  exportAdvertisingProductsCsv: AggregateExportResult;
  exportProductsCsv: AggregateExportResult;
  exportUsersCsv: AggregateExportResult;
  forgotPassword: Scalars['Boolean'];
  /**
   * When associating a new integration for a particular datasource (aka platform, like "facebook") for a particular
   * hierarchy, this mutation will inform Improvado of this hierarchy, and we will relay a temporary iFrame URL that can
   * be presented to the end-user to provide authentication details. This operation is idempotent.
   */
  initializeImprovadoAuthorization: InitializeImprovadoAuthorizationDetails;
  login: User;
  logout?: Maybe<Scalars['Void']>;
  markAllNotificationsAsRead: Scalars['Int'];
  markNotificationAsRead: NotificationType;
  markNotificationAsUnread: NotificationType;
  markOrderDetailsAsSold: Scalars['Boolean'];
  password: Scalars['Boolean'];
  powerpointFromOrder: File;
  /** Promote an order from a state of PROPOSED to MANAGED */
  promoteOrderToManaged: Order;
  /**
   * Re-applies the line item's conversation context, refreshing things like secondaryText.
   * This does not change the updated date on the line item.
   */
  refreshLineItemConversationContext: LineItem;
  removeFollowersFromOrderDetail?: Maybe<OrderDetailType>;
  removeListenerUserEmailsToConversation: ConversationType;
  removeListenerUserIdsToConversation: ConversationType;
  /**
   * Reset fields of a HierarchyProductConfig.
   *
   * When a field is reset, its value will be inherited from the parent hierarchy.
   */
  resetHierarchyProductConfig: HierarchyProductConfig;
  restoreProposal: ProposalType;
  saveJsonPreference: JsonPreferenceType;
  saveOrderDetailView: AggregateExportResult;
  savePlatformCampaign: PlatformCampaign;
  /** Send a templated email to one or more email addresses. */
  sendTemplatedEmail?: Maybe<Scalars['Boolean']>;
  /** @deprecated Use createFile, which leverages dapiFiles directly, and then update the logoFileId via updateAdvertiser */
  setAdvertiserLogo: FileUpload;
  /** Set a file to be deleted after the unix timestamp passed in as `fileExpiryEpochSeconds`.  If you do not want the file to be deleted, call this mutation without the `fileExpiryEpochSeconds` parameter. */
  setFileToBeDeleted: File;
  /** @deprecated Use createFile, which leverages dapiFiles directly, and then update the styleLogo via updateHierarchy */
  setHierarchyLogo: FileUpload;
  submitApprovedCampaigns: ProposalType;
  submitProposalAsSold: ProposalType;
  submitProposalForReview: ProposalType;
  /**
   * Synchronize the given hierarchy's products with its parent's products. All products that exist for the parent
   * hierarchy will be associated with the given hierarchy, allowing them to be used (assuming they're enabled).
   * All information is preserved except for the rate card, which is set to null - in other words, rates will
   * be inherited from the parent.
   * @deprecated This will become a noop once Hierarchy Product Configs are released.
   */
  synchronizeParentHierarchyProducts: HierarchyProducts;
  /** Unsubscribe from all email subscriptions. */
  unsubscribeAll?: Maybe<Scalars['Boolean']>;
  updateAdditionalReport: AdditionalReport;
  updateAdvertiser: Advertiser;
  /** Update an Advertising Product. */
  updateAdvertisingProduct: AdvertisingProduct;
  /** Update a campaign. */
  updateCampaign: LineItemCampaign;
  updateConversationContext: ConversationType;
  updateConversationReferenceUrl: ConversationType;
  updateConversationSubject: ConversationType;
  /** Update a file */
  updateFile: File;
  updateHierarchy: Hierarchy;
  updateHierarchyProduct: HierarchyProduct;
  /** Update how a product is configured within a hierarchy. */
  updateHierarchyProductConfig: HierarchyProductConfig;
  /** Update a line item. */
  updateLineItem: LineItem;
  updateLocation: Location;
  updateOrder: OrderType;
  updateOrderDetail: OrderDetailType;
  updateOrderDetailsStatus: Array<OrderDetailType>;
  /** Updates requesters on an order and or line items. */
  updateOrderRequesters: Order;
  updateProposal: ProposalType;
  updateProposalRequestor: ProposalType;
  updateProposalStatus: ProposalType;
  /** Updates a rate with the given input */
  updateRate: Rate;
  updateUser: User;
  updateUserAvatar: User;
  updateUserHierarchies: User;
  updateUserPermissions: User;
  /**
   * Add an allocation rollup to a line item, or edit an existing one if it already exists.
   * If an allocation rollup with the same date range and goal subtype is already present, any values given in the input will overwrite it.
   */
  upsertAllocationRollup: LineItemAllocationRollup;
  /** Upsert External Ad Groups. */
  upsertExternalAdGroups?: Maybe<UpsertedExternalAdGroups>;
  /** Upsert External Advertisers. */
  upsertExternalAdvertisers?: Maybe<UpsertedExternalAdvertisers>;
  /** Upsert External Campaigns. */
  upsertExternalCampaigns?: Maybe<UpsertedExternalCampaigns>;
  /** Upsert Facebook Ad Group Audience Metadata. */
  upsertFacebookAdGroupAudiences?: Maybe<BulkWriteResult>;
  /** Bulk Upsert Improvado Settings for Improvado Accounts. Only meant to be called as a devtool. */
  upsertImprovadoAccountSettings: UpsertedImprovadoAccountSettings;
  /** Upsert Tradedesk conversion labels for a set of campaigns. */
  upsertTradedeskCampaignConversionTrackingLabelSets: Array<TradedeskCampaignConversionTrackingLabelSet>;
};

export type MutationActivateUserArgs = {
  activateUserInput: ActivateUserInput;
};

export type MutationAddAllocationToLineItemArgs = {
  input: LineItemAllocationInput;
  lineItemId: Scalars['ID'];
};

export type MutationAddContentToCreativeArgs = {
  input: AddContentToCreativeInput;
};

export type MutationAddFollowersToOrderDetailArgs = {
  followerUserIds: Array<Scalars['String']>;
  orderDetailId: Scalars['Float'];
};

export type MutationAddGeoLocationsToOrderArgs = {
  input: GeoLocationsInput;
  orderId: Scalars['ID'];
};

export type MutationAddLineItemArgs = {
  input: LineItemInput;
  orderId: Scalars['ID'];
};

export type MutationAddListenerUserEmailsToConversationArgs = {
  input: UpdateConversationListenerUserEmailsInput;
};

export type MutationAddListenerUserIdsToConversationArgs = {
  id: Scalars['Int'];
  userIds?: Array<Scalars['String']>;
};

export type MutationAddMessageToConversationArgs = {
  authToken?: InputMaybe<ConversationAuthInput>;
  authorId?: InputMaybe<Scalars['ID']>;
  body?: InputMaybe<Scalars['String']>;
  conversationId: Scalars['Float'];
  fileIds?: InputMaybe<Array<Scalars['Int']>>;
  isInternal?: InputMaybe<Scalars['Boolean']>;
  notificationData?: InputMaybe<NotificationDataInput>;
  title?: InputMaybe<Scalars['String']>;
};

export type MutationAddMessageToConversationsArgs = {
  input: AddMessageToConversationsInput;
};

export type MutationAddMessageToOrderDetailConversationArgs = {
  input: AddMessageToConversationInput;
};

export type MutationAddToJsonPreferenceGroupArgs = {
  key: Scalars['String'];
  value: Scalars['JSON'];
};

export type MutationAddUserNotificationsArgs = {
  emailTemplateId: Scalars['String'];
  notifications: Array<CreateNotificationInput>;
  subject: Scalars['String'];
};

export type MutationArchiveProposalArgs = {
  id: Scalars['Float'];
};

export type MutationClearTradedeskCampaignConversionTrackingLabelsArgs = {
  input: ClearTradedeskCampaignConversionTrackingLabelsInput;
};

export type MutationCloneLineItemArgs = {
  input: CloneLineItemInput;
};

export type MutationCloneOrderArgs = {
  input: CloneOrderInput;
};

export type MutationCloneProposalArgs = {
  id: Scalars['Float'];
  name?: InputMaybe<Scalars['String']>;
};

export type MutationCloneRateCardArgs = {
  id: Scalars['ID'];
};

export type MutationCreateAdditionalReportArgs = {
  advertiserId: Scalars['Int'];
  iframeUrl: Scalars['String'];
  name: Scalars['String'];
};

export type MutationCreateAdvertiserArgs = {
  input: CreateAdvertiserInput;
};

export type MutationCreateAdvertisingProductArgs = {
  request: AdvertisingProductRequest;
};

export type MutationCreateCampaignArgs = {
  input: CreateCampaignInput;
};

export type MutationCreateConversationArgs = {
  context?: InputMaybe<Context>;
  listenerUserEmails?: Array<Scalars['String']>;
  listenerUserIds?: Array<Scalars['String']>;
};

export type MutationCreateCreativeArgs = {
  input: CreateCreativeInput;
};

export type MutationCreateDirectHubUserArgs = {
  input: CreateDirectHubUserInput;
};

export type MutationCreateFileArgs = {
  input: CreateFileInput;
};

export type MutationCreateFileUploadArgs = {
  authToken?: InputMaybe<ConversationAuthInput>;
  fileExpiryEpochSeconds?: InputMaybe<Scalars['Float']>;
  fileExtension: Scalars['String'];
  filename: Scalars['String'];
};

export type MutationCreateHierarchyArgs = {
  input: CreateHierarchyInput;
};

export type MutationCreateHierarchyProductArgs = {
  request: HierarchyProductRequest;
};

export type MutationCreateLinkedAdvertiserArgs = {
  input: CreateLinkedAdvertiserInput;
};

export type MutationCreateLinkedAdvertiserAndExternalAdvertiserArgs = {
  input: CreateLinkedAdvertiserInput;
};

export type MutationCreateLocationArgs = {
  address: Scalars['String'];
  advertiserId: Scalars['Int'];
  businessHours?: InputMaybe<Array<CreateBusinessHourInput>>;
  name: Scalars['String'];
  phoneNumber?: InputMaybe<Scalars['String']>;
  websiteUrl?: InputMaybe<Scalars['String']>;
};

export type MutationCreateManagedOrderArgs = {
  input: CreateManagedOrderInput;
};

export type MutationCreateOrderArgs = {
  order: CreateOrderInput;
};

export type MutationCreateOrderDetailArgs = {
  createOrderDetailInput: CreateOrderDetailInput;
};

export type MutationCreateProposalArgs = {
  input: CreateProposalInput;
};

export type MutationCreateProposedOrderArgs = {
  input: CreateProposedOrderInput;
};

export type MutationCreateRateArgs = {
  input: CreateRateInput;
};

export type MutationCreateRateCardArgs = {
  input: CreateRateCardInput;
};

export type MutationCreateRecommendedProposalArgs = {
  input: CreateRecommendedProposalInput;
};

export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};

export type MutationDapi_CreateOrderArgs = {
  input: Dapi_CreateOrderInput;
};

export type MutationDapi_UpdateOrderArgs = {
  input: UpdateOrderInput;
};

export type MutationDeactivateUserArgs = {
  deactivateUserInput: ActivateUserInput;
};

export type MutationDeleteAdditionalReportArgs = {
  id: Scalars['Float'];
};

export type MutationDeleteAllocationArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteAndCreateOrderDetailArgs = {
  createOrderDetailInput: CreateOrderDetailInput;
  deleteOrderDetailId: Scalars['Float'];
};

export type MutationDeleteCampaignArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteFileArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteFromJsonPreferenceGroupArgs = {
  id: Array<Scalars['Int']>;
  key: Scalars['String'];
};

export type MutationDeleteJsonPreferenceArgs = {
  key: Scalars['String'];
};

export type MutationDeleteJsonPreferenceGroupArgs = {
  key: Scalars['String'];
};

export type MutationDeleteLineItemArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteLinkedAdvertiserArgs = {
  input: DeleteLinkedAdvertiserInput;
};

export type MutationDeleteOrderDetailArgs = {
  id: Scalars['Float'];
};

export type MutationDeletePlatformCampaignArgs = {
  campaignId: Scalars['Float'];
};

export type MutationDeleteRateArgs = {
  id: Scalars['ID'];
};

export type MutationDisableHierarchyProductArgs = {
  id: Scalars['ID'];
};

export type MutationEnableHierarchyProductArgs = {
  id: Scalars['ID'];
};

export type MutationEnableProductForOrganizationOnlyArgs = {
  hierarchyId: Scalars['ID'];
  productId: Scalars['ID'];
};

export type MutationExportAdvertisingProductsCsvArgs = {
  filter?: InputMaybe<Scalars['String']>;
  requestorId: Scalars['String'];
};

export type MutationExportProductsCsvArgs = {
  externalId: Scalars['String'];
  requestorId: Scalars['String'];
};

export type MutationExportUsersCsvArgs = {
  filter?: InputMaybe<Scalars['String']>;
  requestorId: Scalars['String'];
};

export type MutationForgotPasswordArgs = {
  input?: InputMaybe<ForgotPasswordInput>;
};

export type MutationInitializeImprovadoAuthorizationArgs = {
  input: ImprovadoAuthorizationInput;
};

export type MutationLoginArgs = {
  input: LoginInput;
};

export type MutationMarkNotificationAsReadArgs = {
  id: Scalars['Float'];
};

export type MutationMarkNotificationAsUnreadArgs = {
  input: MarkNotificationAsUnreadInput;
};

export type MutationMarkOrderDetailsAsSoldArgs = {
  orderDetailIds: Array<Scalars['Float']>;
  proposalId: Scalars['Float'];
};

export type MutationPasswordArgs = {
  updatePasswordInput: UpdatePasswordInput;
};

export type MutationPowerpointFromOrderArgs = {
  orderId: Scalars['ID'];
};

export type MutationPromoteOrderToManagedArgs = {
  orderId: Scalars['ID'];
};

export type MutationRefreshLineItemConversationContextArgs = {
  lineItemId: Scalars['ID'];
};

export type MutationRemoveFollowersFromOrderDetailArgs = {
  followerUserIds: Array<Scalars['String']>;
  orderDetailId: Scalars['Float'];
};

export type MutationRemoveListenerUserEmailsToConversationArgs = {
  input: UpdateConversationListenerUserEmailsInput;
};

export type MutationRemoveListenerUserIdsToConversationArgs = {
  id: Scalars['Int'];
  userIds?: Array<Scalars['String']>;
};

export type MutationResetHierarchyProductConfigArgs = {
  input: ResetHierarchyProductConfigInput;
};

export type MutationRestoreProposalArgs = {
  id: Scalars['Float'];
};

export type MutationSaveJsonPreferenceArgs = {
  key: Scalars['String'];
  value: Scalars['JSON'];
};

export type MutationSaveOrderDetailViewArgs = {
  externalId: Scalars['String'];
  requestorId: Scalars['String'];
};

export type MutationSavePlatformCampaignArgs = {
  campaignId?: InputMaybe<Scalars['Float']>;
  externalCampaignId: Scalars['String'];
  name: Scalars['String'];
  orderDetailId: Scalars['Float'];
  platform: PlatformEnum;
};

export type MutationSendTemplatedEmailArgs = {
  input: SendTemplatedEmailInput;
};

export type MutationSetAdvertiserLogoArgs = {
  advertiserId: Scalars['Float'];
  fileExtension: Scalars['String'];
  filename: Scalars['String'];
};

export type MutationSetFileToBeDeletedArgs = {
  fileExpiryEpochSeconds?: InputMaybe<Scalars['Float']>;
  fileId: Scalars['Float'];
};

export type MutationSetHierarchyLogoArgs = {
  fileExtension: Scalars['String'];
  filename: Scalars['String'];
  hierarchyId: Scalars['Float'];
};

export type MutationSubmitApprovedCampaignsArgs = {
  campaigns: Array<ApproveCampaignData>;
  proposalId: Scalars['Float'];
};

export type MutationSubmitProposalAsSoldArgs = {
  id: Scalars['Float'];
  orderInsertionDetails: Array<ProposalOrderInsertionDetail>;
  orderInsertionDetailsSem?: InputMaybe<Array<ProposalOrderInsertionDetailSem>>;
  orderInsertionDetailsYouTube?: InputMaybe<Array<ProposalOrderInsertionDetailYouTube>>;
};

export type MutationSubmitProposalForReviewArgs = {
  id: Scalars['Float'];
};

export type MutationSynchronizeParentHierarchyProductsArgs = {
  hierarchyId: Scalars['ID'];
};

export type MutationUnsubscribeAllArgs = {
  input: UnsubscribeInput;
};

export type MutationUpdateAdditionalReportArgs = {
  advertiserId: Scalars['Int'];
  id: Scalars['Int'];
  iframeUrl: Scalars['String'];
  name: Scalars['String'];
};

export type MutationUpdateAdvertiserArgs = {
  input: UpdateAdvertiserInput;
};

export type MutationUpdateAdvertisingProductArgs = {
  input: UpdateAdvertisingProductInput;
};

export type MutationUpdateCampaignArgs = {
  input: UpdateCampaignInput;
};

export type MutationUpdateConversationContextArgs = {
  input: UpdateConversationContextInput;
};

export type MutationUpdateConversationReferenceUrlArgs = {
  id: Scalars['Int'];
  referenceUrl: Scalars['String'];
};

export type MutationUpdateConversationSubjectArgs = {
  id: Scalars['Int'];
  subject: Scalars['String'];
};

export type MutationUpdateFileArgs = {
  input: UpdateFileInput;
};

export type MutationUpdateHierarchyArgs = {
  input: UpdateHierarchyInput;
};

export type MutationUpdateHierarchyProductArgs = {
  id: Scalars['ID'];
  request: UpdateHierarchyProductRequest;
};

export type MutationUpdateHierarchyProductConfigArgs = {
  input: UpdateHierarchyProductConfigInput;
};

export type MutationUpdateLineItemArgs = {
  input: UpdateLineItemInput;
};

export type MutationUpdateLocationArgs = {
  address?: InputMaybe<Scalars['String']>;
  businessHours?: InputMaybe<Array<UpdateBusinessHourInput>>;
  locationId: Scalars['Int'];
  name?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  websiteUrl?: InputMaybe<Scalars['String']>;
};

export type MutationUpdateOrderArgs = {
  order: PatchOrderInput;
};

export type MutationUpdateOrderDetailArgs = {
  orderDetail: PatchOrderDetailInput;
};

export type MutationUpdateOrderDetailsStatusArgs = {
  orderDetailIds: Array<Scalars['Float']>;
  status: Scalars['String'];
};

export type MutationUpdateOrderRequestersArgs = {
  input: UpdateOrderRequestersInput;
};

export type MutationUpdateProposalArgs = {
  input: UpdateProposalInput;
};

export type MutationUpdateProposalRequestorArgs = {
  id: Scalars['Float'];
  requestorId: Scalars['String'];
};

export type MutationUpdateProposalStatusArgs = {
  id: Scalars['Float'];
};

export type MutationUpdateRateArgs = {
  input: UpdateRateInput;
};

export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput;
};

export type MutationUpdateUserAvatarArgs = {
  updateUserAvatarInput: UpdateUserAvatarInput;
};

export type MutationUpdateUserHierarchiesArgs = {
  input: UpdateUserHierarchiesInput;
};

export type MutationUpdateUserPermissionsArgs = {
  updateUserPermissionsInput: UpdateUserPermissionsInput;
};

export type MutationUpsertAllocationRollupArgs = {
  input: UpsertAllocationRollupInput;
};

export type MutationUpsertExternalAdGroupsArgs = {
  input: UpsertExternalAdGroupsInput;
};

export type MutationUpsertExternalAdvertisersArgs = {
  input: UpsertExternalAdvertisersInput;
};

export type MutationUpsertExternalCampaignsArgs = {
  input: UpsertExternalCampaignsInput;
};

export type MutationUpsertFacebookAdGroupAudiencesArgs = {
  input: UpsertFacebookAdGroupAudiencesInput;
};

export type MutationUpsertImprovadoAccountSettingsArgs = {
  input: UpsertImprovadoAccountSettingsInput;
};

export type MutationUpsertTradedeskCampaignConversionTrackingLabelSetsArgs = {
  input: UpsertTradedeskCampaignConversionTrackingLabelSetsInput;
};

export type NameValueDataType = {
  __typename?: 'NameValueDataType';
  name: Scalars['String'];
  value: Scalars['Float'];
};

export type NativeTarget = {
  __typename?: 'NativeTarget';
  type: Scalars['String'];
  values: Array<NativeTargetValues>;
};

export type NativeTargetValues = {
  __typename?: 'NativeTargetValues';
  value?: Maybe<Scalars['String']>;
};

export type Note = {
  __typename?: 'Note';
  body?: Maybe<Scalars['String']>;
  created: Scalars['DateTime'];
  header: Scalars['String'];
  id: Scalars['Int'];
  updated: Scalars['DateTime'];
};

export type NoteInput = {
  body?: InputMaybe<Scalars['String']>;
  header: Scalars['String'];
};

export type NotificationDataInput = {
  /** The default `secondaryText` for user notifications that are created whenever a message is added to the conversation. */
  secondaryText?: InputMaybe<Array<Scalars['String']>>;
};

export type NotificationType = {
  __typename?: 'NotificationType';
  created: Scalars['DateTime'];
  createdBy?: Maybe<User>;
  createdById?: Maybe<Scalars['String']>;
  createdByName?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  isRead: Scalars['Boolean'];
  link?: Maybe<Scalars['String']>;
  message: Scalars['String'];
  secondaryText?: Maybe<Array<Scalars['String']>>;
  updated: Scalars['DateTime'];
  userId: Scalars['String'];
};

export type NotificationsFilter = {
  all?: Scalars['Boolean'];
  isRead?: Scalars['Boolean'];
};

/** An Order. */
export type Order = {
  __typename?: 'Order';
  /** The advertiser the order is being created for. */
  advertiser?: Maybe<Advertiser>;
  /** The ID of the advertiser the order is being created for. */
  advertiserId: Scalars['ID'];
  /** The user that is assigned to the order. */
  assignee?: Maybe<User>;
  /** The ID of the user that is assigned to the order. */
  assigneeUserId?: Maybe<Scalars['ID']>;
  /**
   * The total budget of the order, calculated from the associated line items.
   * @deprecated This is a legacy concept that has been deprecated by `retailBudget`
   */
  budget: Scalars['Float'];
  /** The date-time the order was created. */
  created: Scalars['DateTime'];
  /** The ID of the user that created the order. */
  createdByUserId: Scalars['ID'];
  /** The date that this entity became an official order. */
  dateOfOrder?: Maybe<Scalars['Date']>;
  /** The date that this order was created as a proposal. */
  dateOfProposal?: Maybe<Scalars['Date']>;
  /** The actual end date of the order, calculated from the associated line items. */
  endDate?: Maybe<Scalars['Date']>;
  /**
   * The hierarchy ID for which the order is being created for.
   * @deprecated This is deprecated. The hierarchy is now determined via the hierarchy product
   */
  hierarchyId?: Maybe<Scalars['ID']>;
  id: Scalars['ID'];
  /** The line items associated with this order. */
  lineItems: Array<LineItem>;
  /** The order name. */
  name: Scalars['String'];
  /** Custom information specific to the order. */
  orderInfo?: Maybe<Scalars['JSON']>;
  /**
   * An optional email address that represents the external user that this order was created for.
   * Set when the order was created for an external user that does not exist in our system.
   */
  ownerEmail?: Maybe<Scalars['String']>;
  /** The proposed date to end the order. */
  proposedEndDate?: Maybe<Scalars['Date']>;
  /** The proposed date to start the order. */
  proposedStartDate?: Maybe<Scalars['Date']>;
  /** The requester User. */
  requester?: Maybe<User>;
  /** The ID of the requesting user. */
  requesterUserId?: Maybe<Scalars['ID']>;
  /** The retail budget of the order, calculated from the sum of retail budgets from `lineItems` */
  retailBudget?: Maybe<Scalars['Float']>;
  /** The source of the order. */
  source: OrderSource;
  /** The actual start date of the order, calculated from the associated line items. */
  startDate?: Maybe<Scalars['Date']>;
  /** The state of the order. */
  state: OrderState;
  /**
   * The status of the order.
   * @deprecated Order status is no longer used for anything.
   */
  status: OrderStatus;
  /** The date-time the order was last updated. */
  updated: Scalars['DateTime'];
};

export type OrderBy = {
  direction: PrismaSortOrder;
  field: Scalars['String'];
};

export type OrderDateFilters = {
  /** Refers to the date that the order became an order. Entries with a null value will never be returned. */
  dateOfOrder?: InputMaybe<Array<InputMaybe<DateFilter>>>;
  /** Refers to the date that the order became a proposal. Entries with a null value will never be returned. */
  dateOfProposal?: InputMaybe<Array<InputMaybe<DateFilter>>>;
  /** Refers to the date time that a line item ends. */
  ended?: InputMaybe<Array<InputMaybe<DateFilter>>>;
  /** Refers to the date time that a line item starts. */
  started?: InputMaybe<Array<InputMaybe<DateFilter>>>;
  /** Refers to the date time that a line item was last updated. */
  updated?: InputMaybe<Array<InputMaybe<DateTimeFilter>>>;
};

export type OrderDetailAllocation = {
  __typename?: 'OrderDetailAllocation';
  endDate: Scalars['String'];
  goalAmount: Scalars['Float'];
  goalSubtype: OrderDetailAllocationGoalSubtype;
  goalType: OrderDetailAllocationGoalType;
  id: Scalars['Float'];
  orderDetailId: Scalars['Float'];
  startDate: Scalars['String'];
};

export enum OrderDetailAllocationGoalSubtype {
  MakeGood = 'MAKE_GOOD',
  None = 'NONE',
  Promotion = 'PROMOTION',
  Renewal = 'RENEWAL',
}

export enum OrderDetailAllocationGoalType {
  Budget = 'BUDGET',
  Click = 'CLICK',
  Impression = 'IMPRESSION',
  View = 'VIEW',
}

export enum OrderDetailCategory {
  DisplayNative = 'DISPLAY_NATIVE',
  Email = 'EMAIL',
  Geofencing = 'GEOFENCING',
  Sem = 'SEM',
  Social = 'SOCIAL',
  Ttd = 'TTD',
  Unknown = 'UNKNOWN',
  VideoYoutube = 'VIDEO_YOUTUBE',
}

export type OrderDetailDateFilterParams = {
  endDate?: InputMaybe<Scalars['DateTime']>;
  filterType: OrderDetailDateFilterType;
  rangeType: OrderDetailDateFilterRangeType;
  startDate?: InputMaybe<Scalars['DateTime']>;
};

export enum OrderDetailDateFilterRangeType {
  Currentmonth = 'CURRENTMONTH',
  Custom = 'CUSTOM',
  Lastmonth = 'LASTMONTH',
  Monthtodate = 'MONTHTODATE',
}

export enum OrderDetailDateFilterType {
  Datereceived = 'DATERECEIVED',
  Enddate = 'ENDDATE',
  Liveduring = 'LIVEDURING',
  Startdate = 'STARTDATE',
}

export type OrderDetailError = {
  __typename?: 'OrderDetailError';
  invalidValue?: Maybe<Scalars['Boolean']>;
  message?: Maybe<Scalars['String']>;
  propertyPath?: Maybe<Scalars['String']>;
};

export type OrderDetailPace = {
  __typename?: 'OrderDetailPace';
  averageDailySpend?: Maybe<CurrencyDto>;
  clickPace?: Maybe<Scalars['Float']>;
  clicks?: Maybe<Scalars['Float']>;
  cpc?: Maybe<CurrencyDto>;
  cpv?: Maybe<CurrencyDto>;
  ctr?: Maybe<Scalars['Float']>;
  dailyImpressionsCap?: Maybe<Scalars['Float']>;
  daysLeft?: Maybe<Scalars['Float']>;
  goalDailyBudget?: Maybe<CurrencyDto>;
  impressionPace?: Maybe<Scalars['Float']>;
  impressions?: Maybe<Scalars['Float']>;
  orderDetailId: Scalars['Int'];
  orderedAdSpend?: Maybe<CurrencyDto>;
  orderedClicks?: Maybe<Scalars['Float']>;
  orderedImpressions?: Maybe<Scalars['Float']>;
  orderedViews?: Maybe<Scalars['Float']>;
  projectedSpend?: Maybe<CurrencyDto>;
  projectedSpendDelta?: Maybe<CurrencyDto>;
  spendPace?: Maybe<Scalars['Float']>;
  totalSpend?: Maybe<CurrencyDto>;
  viewPace?: Maybe<Scalars['Float']>;
  viewRate?: Maybe<Scalars['Float']>;
  views?: Maybe<Scalars['Float']>;
};

/** Possible statuses for a order or order detail */
export enum OrderDetailStatusEnum {
  Canceled = 'CANCELED',
  Complete = 'COMPLETE',
  Draft = 'DRAFT',
  Live = 'LIVE',
  New = 'NEW',
  Paused = 'PAUSED',
  Pending = 'PENDING',
  Sold = 'SOLD',
}

export type OrderDetailTargeting = {
  __typename?: 'OrderDetailTargeting';
  behavioral?: Maybe<BasicTargeting>;
  content?: Maybe<BasicTargeting>;
  demographic?: Maybe<BasicTargeting>;
  geo?: Maybe<GeoTargeting>;
};

export type OrderDetailType = {
  __typename?: 'OrderDetailType';
  activeRateId?: Maybe<Scalars['ID']>;
  advertiserLocationIds: Array<Scalars['Int']>;
  advertiserLocations: Array<Location>;
  advertisingProduct?: Maybe<AdvertisingProduct>;
  allocations?: Maybe<Array<OrderDetailAllocation>>;
  approvedBy?: Maybe<Scalars['String']>;
  assignee?: Maybe<User>;
  assigneeUserId?: Maybe<Scalars['String']>;
  budget: Scalars['Float'];
  campaigns: Array<PlatformCampaign>;
  category?: Maybe<OrderDetailCategory>;
  created: Scalars['DateTime'];
  endDate: Scalars['DateTime'];
  flags: Array<Scalars['String']>;
  followerUserIds: Array<Scalars['String']>;
  followers: Array<User>;
  hierarchyProduct?: Maybe<HierarchyProduct>;
  hierarchyProductId?: Maybe<Scalars['ID']>;
  id: Scalars['Float'];
  messageConversation?: Maybe<ConversationType>;
  messageConversationId?: Maybe<Scalars['Float']>;
  messageConversationUpdated?: Maybe<Scalars['DateTime']>;
  mongoId: Scalars['String'];
  name: Scalars['String'];
  notesConversation?: Maybe<ConversationType>;
  notesConversationId?: Maybe<Scalars['Float']>;
  order: OrderType;
  orderDetailPace?: Maybe<OrderDetailPace>;
  orderId: Scalars['Float'];
  product?: Maybe<Product>;
  productId?: Maybe<Scalars['ID']>;
  productInfo?: Maybe<Scalars['JSONObject']>;
  productKey?: Maybe<Scalars['String']>;
  productListing?: Maybe<AdvertiserProductListing>;
  rateCard?: Maybe<RateCard>;
  rateCardId?: Maybe<Scalars['Int']>;
  requester?: Maybe<User>;
  requesterUserId: Scalars['String'];
  startDate: Scalars['DateTime'];
  status: OrderDetailStatusEnum;
  targeting?: Maybe<OrderDetailTargeting>;
  updated: Scalars['DateTime'];
  zendeskId?: Maybe<Scalars['String']>;
  zendeskInfo?: Maybe<Scalars['String']>;
  zendeskLink?: Maybe<Scalars['String']>;
};

export type OrderDetailTypeOrderDetailPaceArgs = {
  endDate?: InputMaybe<Scalars['DateTime']>;
  startDate?: InputMaybe<Scalars['DateTime']>;
};

export type OrderDetailValidation = {
  __typename?: 'OrderDetailValidation';
  errors?: Maybe<Array<OrderDetailError>>;
  id: Scalars['String'];
};

export type OrderDetailValidationResponse = {
  __typename?: 'OrderDetailValidationResponse';
  orderInsertionDetails?: Maybe<Array<OrderDetailValidation>>;
  orderInsertionDetailsSem?: Maybe<Array<OrderDetailValidation>>;
  orderInsertionDetailsYouTube?: Maybe<Array<OrderDetailValidation>>;
};

export type OrderDetailsResponse = PaginatedResponse & {
  __typename?: 'OrderDetailsResponse';
  pageNumber: Scalars['Int'];
  pageSize: Scalars['Int'];
  results?: Maybe<Array<OrderDetailType>>;
  totalCount?: Maybe<Scalars['Int']>;
  totalPages?: Maybe<Scalars['Int']>;
};

/** Possible Order Detail Search sort directions */
export enum OrderDetailsSearchSortDirection {
  Asc = 'ASC',
  Desc = 'DESC',
}

/** Possible Order Detail Search sort fields */
export enum OrderDetailsSearchSortFields {
  Budget = 'BUDGET',
  DateOfOrder = 'DATE_OF_ORDER',
  DateOfProposal = 'DATE_OF_PROPOSAL',
  EndDate = 'END_DATE',
  Flags = 'FLAGS',
  MessageConversationUpdated = 'MESSAGE_CONVERSATION_UPDATED',
  MessageConversationUpdatedNulls = 'MESSAGE_CONVERSATION_UPDATED_NULLS',
  Name = 'NAME',
  PurchaseDate = 'PURCHASE_DATE',
  RetailBudget = 'RETAIL_BUDGET',
  StartDate = 'START_DATE',
  Status = 'STATUS',
}

/** Possible directions for sorting Orders search */
export enum OrderSearchSortDirection {
  Asc = 'ASC',
  Desc = 'DESC',
}

/** Possible fields for sorting Orders search */
export enum OrderSearchSortFields {
  DateOfOrder = 'DATE_OF_ORDER',
  DateOfProposal = 'DATE_OF_PROPOSAL',
  EndDate = 'END_DATE',
  Name = 'NAME',
  PurchaseDate = 'PURCHASE_DATE',
  RetailBudget = 'RETAIL_BUDGET',
  StartDate = 'START_DATE',
}

/** Fields that an `Order` can be sorted by. */
export enum OrderSortableField {
  /** Sort by the date the order was ordered `order.dateOfOrder`. */
  DateOfOrder = 'DATE_OF_ORDER',
  /** Sort by the date the order was proposed `order.dateOfProposal`. */
  DateOfProposal = 'DATE_OF_PROPOSAL',
  EndDate = 'END_DATE',
  Name = 'NAME',
  PurchaseDate = 'PURCHASE_DATE',
  /** Sort by the allocated retail budget of the order `order.retailBudget` */
  RetailBudget = 'RETAIL_BUDGET',
  StartDate = 'START_DATE',
}

export enum OrderSource {
  External = 'EXTERNAL',
  Legacy = 'LEGACY',
  OrderManagement = 'ORDER_MANAGEMENT',
  Proposal = 'PROPOSAL',
}

export enum OrderSourceEnum {
  External = 'EXTERNAL',
  Legacy = 'LEGACY',
  OrderManagement = 'ORDER_MANAGEMENT',
  Proposal = 'PROPOSAL',
}

export enum OrderState {
  Managed = 'MANAGED',
  Proposed = 'PROPOSED',
}

export enum OrderStatus {
  Archived = 'ARCHIVED',
  Canceled = 'CANCELED',
  Complete = 'COMPLETE',
  Draft = 'DRAFT',
  Live = 'LIVE',
  New = 'NEW',
  Paused = 'PAUSED',
  Pending = 'PENDING',
  Sold = 'SOLD',
}

export enum OrderStatusEnum {
  Archived = 'ARCHIVED',
  Canceled = 'CANCELED',
  Complete = 'COMPLETE',
  Draft = 'DRAFT',
  Live = 'LIVE',
  New = 'NEW',
  Paused = 'PAUSED',
  Pending = 'PENDING',
  Sold = 'SOLD',
}

export type OrderType = {
  __typename?: 'OrderType';
  advertiser?: Maybe<Advertiser>;
  advertiserId: Scalars['String'];
  assignee?: Maybe<User>;
  assigneeUserId?: Maybe<Scalars['String']>;
  budget: Scalars['Float'];
  created: Scalars['DateTime'];
  dateOfOrder?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['DateTime']>;
  id: Scalars['Float'];
  name: Scalars['String'];
  orderDetails: Array<OrderDetailType>;
  proposedEndDate?: Maybe<Scalars['DateTime']>;
  proposedStartDate?: Maybe<Scalars['DateTime']>;
  requesterUserId: Scalars['String'];
  requestor?: Maybe<User>;
  source: OrderSourceEnum;
  startDate?: Maybe<Scalars['DateTime']>;
  status: OrderStatusEnum;
  updated: Scalars['DateTime'];
};

/** Ways in which `orders` query results can be filtered. */
export type OrdersFilterInput = {
  /** Select orders associated with any of the specified advertisers. */
  advertiserIds?: InputMaybe<Array<Scalars['ID']>>;
  /** Offers date properties which can be filtered on. */
  dates?: InputMaybe<OrderDateFilters>;
  /**
   * When `true`, select orders where `dateOfOrder != null`.
   *
   * When `false`, select orders where `dateOfOrder == null`.
   */
  hasDateOfOrder?: InputMaybe<Scalars['Boolean']>;
  /**
   * Select orders associated with any of the specified hierarchies.
   * An order is _associated_ with a hierarchy if the order's advertiser belongs to the hierarchy.
   */
  hierarchyIds?: InputMaybe<Array<Scalars['ID']>>;
  /** Select orders that have line items with the specified status. */
  lineItemStatus?: InputMaybe<LineItemStatus>;
  /** filter by `retailBudget` less than or equal to this value */
  maxRetailBudget?: InputMaybe<Scalars['Float']>;
  /** filter by `retailBudget` greater than or equal to this value */
  minRetailBudget?: InputMaybe<Scalars['Float']>;
  /** Select orders with the specified name. Will match any name that contains the provided value. */
  name?: InputMaybe<Scalars['String']>;
  /** Select orders with the specified ids. */
  orderIds?: InputMaybe<Array<Scalars['ID']>>;
  /** Select orders with the specified owner email. */
  ownerEmail?: InputMaybe<Scalars['String']>;
  /** Select orders requested by any of the specified users. */
  requesterUserIds?: InputMaybe<Array<Scalars['ID']>>;
  /** Select orders with the specified source. */
  source?: InputMaybe<OrderSource>;
  /** Select orders with the specified state */
  state?: InputMaybe<OrderState>;
  /** Select orders with the specified status. */
  status?: InputMaybe<OrderStatus>;
};

/** Response type for `query orders`. */
export type OrdersResponse = {
  __typename?: 'OrdersResponse';
  /** The page information. */
  pageInfo?: Maybe<PageInfo>;
  /** The page of results. */
  results: Array<Order>;
};

/** Ways in which `orders` query results can be sorted. */
export type OrdersSortInput = {
  /** The sort direction. Defaults to ascending. */
  direction?: InputMaybe<SortDirection>;
  /** The sort field */
  field: OrderSortableField;
};

/** Pagination information. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** The page number */
  pageNumber: Scalars['Int'];
  /** The page size */
  pageSize: Scalars['Int'];
  /** The total count of results across all pages */
  totalCount: Scalars['Int'];
  /** The total number of pages */
  totalPages: Scalars['Int'];
};

/** Common input for paginated queries. */
export type PageInput = {
  /** The page number */
  pageNumber?: Scalars['Int'];
  /** The page size */
  pageSize?: Scalars['Int'];
};

export type PageNumberPageSizePaginationArgs = {
  pageNumber?: Scalars['Int'];
  pageSize?: Scalars['Int'];
};

export type PaginatedResponse = {
  pageNumber: Scalars['Int'];
  pageSize: Scalars['Int'];
  totalCount?: Maybe<Scalars['Int']>;
  totalPages?: Maybe<Scalars['Int']>;
};

export type PasswordValidationRules = {
  __typename?: 'PasswordValidationRules';
  maxLength: Scalars['Float'];
  minLength: Scalars['Float'];
  requireMixedCase: Scalars['Float'];
  requireNonAlpha: Scalars['Float'];
  requireNumber: Scalars['Float'];
};

export type PatchOrderDetailInput = {
  activeRateId?: InputMaybe<Scalars['Int']>;
  advertiserLocationIds?: InputMaybe<Array<Scalars['Int']>>;
  allocations?: InputMaybe<Array<Scalars['JSONObject']>>;
  assigneeUserId?: InputMaybe<Scalars['String']>;
  budget?: InputMaybe<Scalars['Float']>;
  endDate?: InputMaybe<Scalars['DateTime']>;
  flags?: InputMaybe<Array<Scalars['String']>>;
  followerUserIds?: InputMaybe<Array<Scalars['String']>>;
  id: Scalars['Float'];
  name?: InputMaybe<Scalars['String']>;
  productInfo?: InputMaybe<Scalars['JSONObject']>;
  requesterUserId?: InputMaybe<Scalars['String']>;
  startDate?: InputMaybe<Scalars['DateTime']>;
  status?: InputMaybe<OrderDetailStatusEnum>;
  targeting?: InputMaybe<Scalars['JSONObject']>;
};

export type PatchOrderInput = {
  assigneeUserId?: InputMaybe<Scalars['String']>;
  id: Scalars['Float'];
  name?: InputMaybe<Scalars['String']>;
  requesterUserId?: InputMaybe<Scalars['String']>;
};

/** Describes a request for adgroup-level performance metrics. */
export type PerformanceMetricsByAdGroupInput = {
  /** The adgroup to filter results by. */
  adGroupId?: InputMaybe<Scalars['ID']>;
  /** The advertiser to filter results by. */
  advertiserId: Scalars['ID'];
  /** Filter results by a specific product type */
  analyticsProductType: AnalyticsProductTypeIdentifier;
  /** The campaign to filter results by. */
  campaignId?: InputMaybe<Scalars['ID']>;
  /** The inclusive end date to fetch metrics from. */
  endDate: Scalars['Date'];
  /** The resolution to group metrics by. If not provided the result will be the total/average over the entire date range. */
  resolution?: InputMaybe<IntervalResolution>;
  /** The inclusive start date to fetch metrics from. */
  startDate: Scalars['Date'];
};

/** Describes a request for ad-level performance metrics. */
export type PerformanceMetricsByAdInput = {
  /** The adgroup to filter results by. */
  adGroupId?: InputMaybe<Scalars['ID']>;
  /** The ad to filter results by. */
  adId?: InputMaybe<Scalars['ID']>;
  /** The advertiser to filter results by. */
  advertiserId: Scalars['ID'];
  /** Filter results by a specific product type */
  analyticsProductType: AnalyticsProductTypeIdentifier;
  /** The campaign to filter results by. */
  campaignId?: InputMaybe<Scalars['ID']>;
  /** The inclusive end date to fetch metrics from. */
  endDate: Scalars['Date'];
  /** The resolution to group metrics by. If not provided the result will be the total/average over the entire date range. */
  resolution?: InputMaybe<IntervalResolution>;
  /** The inclusive start date to fetch metrics from. */
  startDate: Scalars['Date'];
};

/** Describes a request for advertiser-level performance metrics. */
export type PerformanceMetricsByAdvertiserInput = {
  /** The advertiser to filter results by. */
  advertiserId: Scalars['ID'];
  /** Filter results by how ad content is presented to users. */
  analyticsProductTypes: Array<AnalyticsProductTypeIdentifier>;
  /** The inclusive end date to fetch metrics from. */
  endDate: Scalars['Date'];
  /** The resolution to group metrics by. If not provided the result will be the total/average over the entire date range. */
  resolution?: InputMaybe<IntervalResolution>;
  /** The inclusive start date to fetch metrics from. */
  startDate: Scalars['Date'];
};

/** Describes a request for campaign-level performance metrics. */
export type PerformanceMetricsByCampaignInput = {
  /** The advertiser to filter results by. */
  advertiserId: Scalars['ID'];
  /** Filter results by a specific product type */
  analyticsProductType: AnalyticsProductTypeIdentifier;
  /** The campaign to filter results by. */
  campaignId?: InputMaybe<Scalars['ID']>;
  /** The inclusive end date to fetch metrics from. */
  endDate: Scalars['Date'];
  /** The resolution to group metrics by. If not provided the result will be the total/average over the entire date range. */
  resolution?: InputMaybe<IntervalResolution>;
  /** The inclusive start date to fetch metrics from. */
  startDate: Scalars['Date'];
};

/** Summarizes performance metrics for an advertiser/campaign/ad group. */
export type PerformanceSummary = {
  __typename?: 'PerformanceSummary';
  /** The value for common metrics, like clicks, impressions, or conversions. */
  metric: CommonPerformanceMetric;
  /** Compares performance between the current period and the previous period of the same duration. */
  pop: PeriodOverPeriodPerformanceMetric;
};

/** Describes a request for a summary of performance metrics. */
export type PerformanceSummaryInput = {
  /** The adgroup to filter results by. */
  adGroupId?: InputMaybe<Scalars['ID']>;
  /** The advertiser to filter results by. */
  advertiserId: Scalars['ID'];
  /** Filter results by how ad content is presented to users. */
  analyticsProductType: AnalyticsProductTypeIdentifier;
  /** The campaign to filter results by. */
  campaignId?: InputMaybe<Scalars['ID']>;
  /** The inclusive end date to fetch metrics from. */
  endDate: Scalars['Date'];
  /** The inclusive start date to fetch metrics from. */
  startDate: Scalars['Date'];
};

/** Compares engagement between the current period and the previous period of the same duration. */
export type PeriodOverPeriodEngagementMetric = {
  __typename?: 'PeriodOverPeriodEngagementMetric';
  /** The period-over-period metric for comments. */
  comments: PeriodOverPeriodMetric;
  /** The period-over-period metric for engagements. */
  engagements: PeriodOverPeriodMetric;
  /** The period-over-period metric for likes. */
  likes: PeriodOverPeriodMetric;
  /** The period-over-period metric for link clicks. */
  linkClicks: PeriodOverPeriodMetric;
  /** The period-over-period metric for reactions. */
  reactions: PeriodOverPeriodMetric;
  /** The period-over-period metric for shares. */
  shares: PeriodOverPeriodMetric;
  /** The period-over-period metric for views. */
  views: PeriodOverPeriodMetric;
};

/** Compares a metric between the current period and the previous period of the same duration. */
export type PeriodOverPeriodMetric = {
  __typename?: 'PeriodOverPeriodMetric';
  /** The signed difference in value. */
  delta: Scalars['Float'];
  /**
   * The signed relative difference (e.g., Relative difference between 2.0 to 3.0 is +0.5, as opposed to percent
   * difference, which would be +50.0%). If the value for the previous period is unknown or zero, then this field is
   * null.
   */
  relativeDifference?: Maybe<Scalars['Float']>;
};

/** Compares performance between the current period and the previous period of the same duration. */
export type PeriodOverPeriodPerformanceMetric = {
  __typename?: 'PeriodOverPeriodPerformanceMetric';
  /** The period-over-period metric for clicks. */
  clicks: PeriodOverPeriodMetric;
  /** The period-over-period metric for conversion rate (conversions / clicks). */
  conversionRate: PeriodOverPeriodMetric;
  /** The period-over-period metric for conversions. */
  conversions: PeriodOverPeriodMetric;
  /** The period-over-period metric for ad spend per click. */
  costPerClick: PeriodOverPeriodMetric;
  /** The period-over-period metric for ad spend per conversion. */
  costPerConversion: PeriodOverPeriodMetric;
  /** The period-over-period metric for click through rate (clicks / impressions). */
  ctr: PeriodOverPeriodMetric;
  /** The period-over-period metric for impressions. */
  impressions: PeriodOverPeriodMetric;
  /** The period-over-period metric for spend. */
  spend: PeriodOverPeriodMetric;
  /** The period-over-period metric for view rate (views / views started). */
  viewRate: PeriodOverPeriodMetric;
  /** The period-over-period metric for video views. */
  views: PeriodOverPeriodMetric;
  /** The period-over-period metric for number of times a video started playback. */
  viewsStarted: PeriodOverPeriodMetric;
};

/** Third-party platforms. */
export enum Platform {
  Adc = 'adc',
  Admanager = 'admanager',
  Bing = 'bing',
  Ctm = 'ctm',
  Eltoro = 'eltoro',
  Facebook = 'facebook',
  Ga = 'ga',
  GoogleAds = 'google_ads',
  Hulu = 'hulu',
  LeadMeMedia = 'lead_me_media',
  Linkedin = 'linkedin',
  Nxs = 'nxs',
  Organic = 'organic',
  Pinterest = 'pinterest',
  Reddit = 'reddit',
  Snapchat = 'snapchat',
  Stackadapt = 'stackadapt',
  Tiktok = 'tiktok',
  Tradedesk = 'tradedesk',
  Twitter = 'twitter',
  Vendasta = 'vendasta',
  Waze = 'waze',
  Yext = 'yext',
}

export type PlatformAllocation = {
  __typename?: 'PlatformAllocation';
  adMixCampaignId: Scalars['Float'];
  allocation: Scalars['Float'];
  behavioralTargets: Array<Scalars['String']>;
  budget?: Maybe<Scalars['Float']>;
  contentTargets: Array<Scalars['String']>;
  demographicTargets: Array<Scalars['String']>;
  id: Scalars['Float'];
  platform: Scalars['String'];
};

export type PlatformCampaign = {
  __typename?: 'PlatformCampaign';
  adGroupPace?: Maybe<Array<AdGroup>>;
  campaignPace?: Maybe<CampaignPace>;
  externalCampaignId: Scalars['String'];
  id: Scalars['Float'];
  name: Scalars['String'];
  orderDetail?: Maybe<OrderDetailType>;
  orderDetailId: Scalars['Float'];
  platform: PlatformEnum;
};

export type PlatformCampaignAdGroupPaceArgs = {
  endDate?: InputMaybe<Scalars['DateTime']>;
  startDate?: InputMaybe<Scalars['DateTime']>;
};

export type PlatformCampaignCampaignPaceArgs = {
  endDate?: InputMaybe<Scalars['DateTime']>;
  startDate?: InputMaybe<Scalars['DateTime']>;
};

export enum PlatformEnum {
  Adc = 'adc',
  Admanager = 'admanager',
  Bing = 'bing',
  Ctm = 'ctm',
  Eltoro = 'eltoro',
  Facebook = 'facebook',
  Ga = 'ga',
  GoogleAds = 'google_ads',
  Hulu = 'hulu',
  LeadMeMedia = 'lead_me_media',
  Linkedin = 'linkedin',
  Nxs = 'nxs',
  Organic = 'organic',
  Pinterest = 'pinterest',
  Reddit = 'reddit',
  Snapchat = 'snapchat',
  Stackadapt = 'stackadapt',
  Tiktok = 'tiktok',
  Tradedesk = 'tradedesk',
  Twitter = 'twitter',
  Vendasta = 'vendasta',
  Waze = 'waze',
  Yext = 'yext',
}

/** Representation of Platform Ids that are not in our system */
export type PlatformIdsNotInDapiResponse = {
  __typename?: 'PlatformIdsNotInDapiResponse';
  /** The platform ids not in our system */
  results: Array<Scalars['ID']>;
};

export enum PrismaSortOrder {
  Asc = 'asc',
  Desc = 'desc',
}

export type Product = {
  __typename?: 'Product';
  billingType: Scalars['String'];
  deprecated: Scalars['Boolean'];
  description: Scalars['String'];
  id: Scalars['Float'];
  key?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  productTeam: Scalars['String'];
  productType: Scalars['String'];
};

export enum ProductCategory {
  Advertising = 'ADVERTISING',
  ProServe = 'PRO_SERVE',
  Software = 'SOFTWARE',
}

export type ProductForm = {
  __typename?: 'ProductForm';
  appId: Scalars['ID'];
  created: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  type: Scalars['String'];
  updated: Scalars['DateTime'];
};

export enum ProductListingSortableField {
  Name = 'NAME',
}

/** Possible products for targeting */
export enum ProductNameEnum {
  Display = 'display',
  Facebook = 'facebook',
  Youtube = 'youtube',
}

export type ProductRateResponse = {
  __typename?: 'ProductRateResponse';
  billingType: Scalars['String'];
  budgetMinimum?: Maybe<Scalars['Float']>;
  description: Scalars['String'];
  key: Scalars['String'];
  monthMinimum?: Maybe<Scalars['Float']>;
  name: Scalars['String'];
  productId: Scalars['Float'];
  productTeam: Scalars['String'];
  productType: Scalars['String'];
  retailRate?: Maybe<Scalars['Float']>;
  retailRateDetails?: Maybe<RateDetail>;
  setupFee?: Maybe<Scalars['Float']>;
  wholesaleRate?: Maybe<Scalars['Float']>;
  wholesaleRateDetails?: Maybe<RateDetail>;
};

export type ProductResponse = {
  category: ProductCategory;
  created: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  legacyProductKeys?: Maybe<Array<Scalars['String']>>;
  name: Scalars['String'];
  productForms: Array<ProductForm>;
  type: ProductType;
  updated: Scalars['DateTime'];
};

export enum ProductType {
  Addon = 'ADDON',
  Standard = 'STANDARD',
}

/** Advertiser-level performance metrics for a given product type. */
export type ProductTypeAdvertiserPerformanceMetric = {
  __typename?: 'ProductTypeAdvertiserPerformanceMetric';
  /** Describes how ad content is presented to users. */
  analyticsProductType: AnalyticsProductType;
  /** Advertiser-level performance metrics. */
  metrics: Array<AdvertiserPerformanceMetric>;
};

export enum ProductTypeEnum {
  Admix = 'ADMIX',
  Audio = 'AUDIO',
  Cannabis = 'CANNABIS',
  Chat = 'CHAT',
  Dfp = 'DFP',
  Did = 'DID',
  Display = 'DISPLAY',
  Email = 'EMAIL',
  Gam = 'GAM',
  Geofencing = 'GEOFENCING',
  IpTargeting = 'IP_TARGETING',
  Ott = 'OTT',
  Search = 'SEARCH',
  Seo = 'SEO',
  Social = 'SOCIAL',
  Specialized = 'SPECIALIZED',
  Video = 'VIDEO',
  WebDev = 'WEB_DEV',
}

export enum ProposalGoalType {
  Branding = 'BRANDING',
  DirectResponse = 'DIRECT_RESPONSE',
  Informational = 'INFORMATIONAL',
}

export type ProposalLocationsInput = {
  boundaryIds?: InputMaybe<Array<Scalars['String']>>;
  dmaIds?: InputMaybe<Array<Scalars['String']>>;
  placeNames?: InputMaybe<Array<Scalars['String']>>;
  zipcodes?: InputMaybe<Array<Scalars['String']>>;
};

export type ProposalLocationsObject = {
  __typename?: 'ProposalLocationsObject';
  boundaries: Array<MapboxBoundary>;
  boundaryIds: Array<Scalars['String']>;
  dmaIds: Array<Scalars['String']>;
  dmas: Array<Dma>;
  placeNames: Array<Scalars['String']>;
  zipcodes: Array<Scalars['String']>;
};

export type ProposalOrderBy = {
  columnName: ProposalSortFields;
  sortDirection: SortDirection;
};

export type ProposalOrderInsertionDetail = {
  adDescription?: InputMaybe<Scalars['String']>;
  adHeadline?: InputMaybe<Scalars['String']>;
  adText?: InputMaybe<Scalars['String']>;
  advertiserAddress?: InputMaybe<Scalars['String']>;
  advertiserWebsite?: InputMaybe<Scalars['String']>;
  assetFileIds?: InputMaybe<Array<Scalars['Float']>>;
  budget: Scalars['Float'];
  callToAction?: InputMaybe<Scalars['String']>;
  campaignGoal?: InputMaybe<Scalars['String']>;
  campaignId: Scalars['String'];
  carbonCopyEmails: Array<Scalars['String']>;
  clickThroughUrls?: InputMaybe<Array<Scalars['String']>>;
  conversionUrls?: InputMaybe<Array<Scalars['String']>>;
  disclaimer?: InputMaybe<Scalars['String']>;
  emailFrom?: InputMaybe<Scalars['String']>;
  emailSubject?: InputMaybe<Scalars['String']>;
  end: Scalars['String'];
  facebookPageUrl?: InputMaybe<Scalars['String']>;
  hasDataRefresh?: InputMaybe<Scalars['Boolean']>;
  hasDomainVerification?: InputMaybe<Scalars['Boolean']>;
  hasFootTrafficReport?: InputMaybe<Scalars['Boolean']>;
  hasMobileOptimization?: InputMaybe<Scalars['Boolean']>;
  isUsingTrackingPixel?: InputMaybe<Scalars['Boolean']>;
  longDescription?: InputMaybe<Scalars['String']>;
  longTitle?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  note: Scalars['String'];
  product: Scalars['String'];
  shortDescription?: InputMaybe<Scalars['String']>;
  shortTitle?: InputMaybe<Scalars['String']>;
  sponsorName?: InputMaybe<Scalars['String']>;
  start: Scalars['String'];
  type: CampaignTypes;
};

export type ProposalOrderInsertionDetailSem = {
  adDescription?: InputMaybe<Scalars['String']>;
  adHeadline?: InputMaybe<Scalars['String']>;
  adText?: InputMaybe<Scalars['String']>;
  advertiserAddress?: InputMaybe<Scalars['String']>;
  advertiserWebsite?: InputMaybe<Scalars['String']>;
  assetFileIds?: InputMaybe<Array<Scalars['Float']>>;
  budget: Scalars['Float'];
  callToAction?: InputMaybe<Scalars['String']>;
  campaignFocus?: InputMaybe<Array<Scalars['String']>>;
  campaignGoal?: InputMaybe<Scalars['String']>;
  campaignId: Scalars['String'];
  carbonCopyEmails: Array<Scalars['String']>;
  clickThroughUrls?: InputMaybe<Array<Scalars['String']>>;
  conversionUrls?: InputMaybe<Array<Scalars['String']>>;
  disclaimer?: InputMaybe<Scalars['String']>;
  emailFrom?: InputMaybe<Scalars['String']>;
  emailSubject?: InputMaybe<Scalars['String']>;
  end: Scalars['String'];
  facebookPageUrl?: InputMaybe<Scalars['String']>;
  formLocationUrls?: InputMaybe<Array<Scalars['String']>>;
  googleMyBusinessEmailAddress?: InputMaybe<Scalars['String']>;
  hasDataRefresh?: InputMaybe<Scalars['Boolean']>;
  hasDomainVerification?: InputMaybe<Scalars['Boolean']>;
  hasFootTrafficReport?: InputMaybe<Scalars['Boolean']>;
  hasFormFills?: InputMaybe<Scalars['Boolean']>;
  hasLocationExtensions?: InputMaybe<Scalars['Boolean']>;
  hasMobileOptimization?: InputMaybe<Scalars['Boolean']>;
  hasOtherTracking?: InputMaybe<Scalars['Boolean']>;
  hasPageViews?: InputMaybe<Scalars['Boolean']>;
  hasPhoneCalls?: InputMaybe<Scalars['Boolean']>;
  isUsingTrackingPixel?: InputMaybe<Scalars['Boolean']>;
  longDescription?: InputMaybe<Scalars['String']>;
  longTitle?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  note: Scalars['String'];
  otherCampaignFocusDescription?: InputMaybe<Scalars['String']>;
  otherTrackingNotes?: InputMaybe<Scalars['String']>;
  pageViewUrls?: InputMaybe<Array<Scalars['String']>>;
  product: Scalars['String'];
  shortDescription?: InputMaybe<Scalars['String']>;
  shortTitle?: InputMaybe<Scalars['String']>;
  sponsorName?: InputMaybe<Scalars['String']>;
  start: Scalars['String'];
  suggestedNegativeKeywords?: InputMaybe<Scalars['String']>;
  trackingPhoneNumbers?: InputMaybe<Array<Scalars['String']>>;
  type: CampaignTypes;
};

export type ProposalOrderInsertionDetailYouTube = {
  adDescription?: InputMaybe<Scalars['String']>;
  adHeadline?: InputMaybe<Scalars['String']>;
  adText?: InputMaybe<Scalars['String']>;
  advertiserAddress?: InputMaybe<Scalars['String']>;
  advertiserWebsite?: InputMaybe<Scalars['String']>;
  assetFileIds?: InputMaybe<Array<Scalars['Float']>>;
  budget: Scalars['Float'];
  callToAction?: InputMaybe<Scalars['String']>;
  campaignGoal?: InputMaybe<Scalars['String']>;
  campaignId: Scalars['String'];
  carbonCopyEmails: Array<Scalars['String']>;
  clickThroughUrls?: InputMaybe<Array<Scalars['String']>>;
  conversionUrls?: InputMaybe<Array<Scalars['String']>>;
  disclaimer?: InputMaybe<Scalars['String']>;
  emailFrom?: InputMaybe<Scalars['String']>;
  emailSubject?: InputMaybe<Scalars['String']>;
  end: Scalars['String'];
  facebookPageUrl?: InputMaybe<Scalars['String']>;
  hasDataRefresh?: InputMaybe<Scalars['Boolean']>;
  hasDomainVerification?: InputMaybe<Scalars['Boolean']>;
  hasFootTrafficReport?: InputMaybe<Scalars['Boolean']>;
  hasMobileOptimization?: InputMaybe<Scalars['Boolean']>;
  isUsingTrackingPixel?: InputMaybe<Scalars['Boolean']>;
  longDescription?: InputMaybe<Scalars['String']>;
  longTitle?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  note: Scalars['String'];
  product: Scalars['String'];
  shortDescription?: InputMaybe<Scalars['String']>;
  shortTitle?: InputMaybe<Scalars['String']>;
  sponsorName?: InputMaybe<Scalars['String']>;
  start: Scalars['String'];
  type: CampaignTypes;
  videoUrls?: InputMaybe<Array<Scalars['String']>>;
};

/** Sort column mapper */
export enum ProposalSortFields {
  Budget = 'BUDGET',
  Created = 'CREATED',
  EndDate = 'END_DATE',
  Name = 'NAME',
  StartDate = 'START_DATE',
  Status = 'STATUS',
}

/** Possible statuses for a proposal */
export enum ProposalStatus {
  Archived = 'ARCHIVED',
  Draft = 'DRAFT',
  ReadyForSale = 'READY_FOR_SALE',
  Sold = 'SOLD',
  UnderReview = 'UNDER_REVIEW',
}

export type ProposalType = {
  __typename?: 'ProposalType';
  adMixCampaigns: Array<AdMixCampaign>;
  advertiser?: Maybe<Advertiser>;
  advertiserId: Scalars['Float'];
  budget: Scalars['Float'];
  consolidatedCampaigns?: Maybe<Array<ShallowCampaign>>;
  created: Scalars['DateTime'];
  createdBy: User;
  createdById: Scalars['String'];
  end: Scalars['DateTime'];
  externalId?: Maybe<Scalars['String']>;
  goal: ProposalGoalType;
  hierarchyLogoUri?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  industry: Scalars['String'];
  keywords: Array<Scalars['String']>;
  /** @deprecated 'locationsObject' is more explicit */
  locations: Array<Scalars['String']>;
  locationsObject: ProposalLocationsObject;
  manualCustomCampaigns: Array<ManualCustomCampaign>;
  manualDisplayCampaigns: Array<ManualDisplayCampaign>;
  manualEmailCampaigns: Array<ManualEmailCampaign>;
  manualGeofencingCampaigns: Array<ManualGeofencingCampaign>;
  manualSEMCampaigns: Array<ManualSemCampaign>;
  manualSEOCampaigns: Array<ManualSeoCampaign>;
  manualSocialMediaCampaigns: Array<ManualSocialMediaCampaign>;
  manualSpecializedCampaigns: Array<ManualSpecializedCampaign>;
  manualStreamingAudioCampaigns: Array<ManualStreamingAudioCampaign>;
  manualVideoCampaigns: Array<ManualVideoCampaign>;
  microIndustries: Array<Scalars['String']>;
  name: Scalars['String'];
  orderId?: Maybe<Scalars['Float']>;
  recommendationCampaignType?: Maybe<RecommendationCampaignType>;
  requestor?: Maybe<User>;
  requestorId: Scalars['String'];
  start: Scalars['DateTime'];
  status: ProposalStatus;
  type?: Maybe<Scalars['String']>;
  updated: Scalars['DateTime'];
  website: Scalars['String'];
  zendeskId?: Maybe<Scalars['String']>;
};

export type ProserveProduct = ProductResponse & {
  __typename?: 'ProserveProduct';
  category: ProductCategory;
  created: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  legacyProductKeys?: Maybe<Array<Scalars['String']>>;
  name: Scalars['String'];
  productForms: Array<ProductForm>;
  type: ProductType;
  updated: Scalars['DateTime'];
};

export enum PublisherEnum {
  AudienceNetwork = 'AUDIENCE_NETWORK',
  Facebook = 'FACEBOOK',
  Instagram = 'INSTAGRAM',
  Messenger = 'MESSENGER',
  Unknown = 'UNKNOWN',
  Unrecognized = 'UNRECOGNIZED',
}

export type PublisherPerformanceMetric = {
  __typename?: 'PublisherPerformanceMetric';
  interval: AnalyticsInterval;
  value: PublisherPerformanceValue;
};

export type PublisherPerformanceValue = {
  __typename?: 'PublisherPerformanceValue';
  clicks: Scalars['Float'];
  comments: Scalars['Float'];
  conversionRate: Scalars['Float'];
  conversions: Scalars['Float'];
  costPerClick?: Maybe<CurrencyDto>;
  costPerConversion?: Maybe<CurrencyDto>;
  ctr: Scalars['Float'];
  engagements: Scalars['Float'];
  impressions: Scalars['Float'];
  likes: Scalars['Float'];
  publisher: PublisherEnum;
  reactions: Scalars['Float'];
  shares: Scalars['Float'];
  spend?: Maybe<CurrencyDto>;
  viewRate: Scalars['Float'];
  views: Scalars['Float'];
};

export type Query = {
  __typename?: 'Query';
  _errorCodes?: Maybe<ErrorCodes>;
  additionalReports: Array<AdditionalReport>;
  advertiser?: Maybe<Advertiser>;
  advertiserLogoUri?: Maybe<Scalars['String']>;
  advertiserPermittedIds?: Maybe<Array<Scalars['Float']>>;
  /** Find a product listing by advertiser and product. */
  advertiserProductListing?: Maybe<AdvertiserProductListing>;
  /** Search product listings for a specific advertiser. */
  advertiserProductListings: AdvertiserProductListingsResponse;
  advertisers: Array<Advertiser>;
  /** Find an Advertising Product. */
  advertisingProduct: AdvertisingProduct;
  /** Return a list of Advertising Product Classes. */
  advertisingProductClasses: Array<Scalars['String']>;
  /** Return a list of Advertising Product Lines. */
  advertisingProductLines: Array<Scalars['String']>;
  /** Return a list of Advertising Product Types. */
  advertisingProductTypes: Array<Scalars['String']>;
  /** Look up advertising products. */
  advertisingProducts: AdvertisingProductsResponse;
  analyticsAdvertiser: Advertiser;
  audienceMetrics: Array<TtdAudienceResponse>;
  /**
   * Find products for a given hierarchy that are available.
   * Available products are those where the parent hierarchy has the same product enabled.
   * Available products can be enabled or disabled without error.
   */
  availableHierarchyProducts: HierarchyProducts;
  behavioralTTDTargeting: BehavioralTtdTarget;
  /** Find a campaign by id. */
  campaign: LineItemCampaign;
  /** Search for campaigns. */
  campaigns: LineItemCampaignsResponse;
  censusData: CensusDataType;
  contentTTDTargeting: ContentTtdTarget;
  conversation?: Maybe<ConversationType>;
  creative?: Maybe<Creative>;
  currentUser?: Maybe<User>;
  demographicTTDTargeting: DemographicTtdTarget;
  displayAdGroupGeoMetrics: Array<DisplayGeoMetricsResponse>;
  displayAdGroupPerformanceMetrics: DisplayAdGroupPerformanceMetricsResponse;
  displayAdGroupPerformanceSummary: DisplayAdGroupPerformanceSummaryResponse;
  displayAdvertiserGeoMetrics: Array<DisplayGeoMetricsResponse>;
  displayAdvertiserPerformanceMetrics: DisplayAdvertiserPerformanceMetricsResponse;
  displayAdvertiserPerformanceSummary: DisplayAdvertiserPerformanceSummaryResponse;
  displayBrandMetrics: Array<DisplayBrandMetricsResponse>;
  displayCampaignGeoMetrics: Array<DisplayGeoMetricsResponse>;
  displayCampaignPerformanceMetrics: DisplayCampaignPerformanceMetricsResponse;
  displayCampaignPerformanceSummary: DisplayCampaignPerformanceSummaryResponse;
  displayConversionMetrics: Array<DisplayConversionsResponse>;
  displayCreativeMetrics: Array<DisplayCreativeMetricsResponse>;
  displayDeviceTypeMetrics: Array<DisplayDeviceTypeMetricsResponse>;
  displayFacebookTargeting: GdnFbTarget;
  displayFoldMetrics: Array<FoldResponse>;
  displayTimeOfDayMetrics: Array<DisplayTimeOfDayMetricsResponse>;
  dmaById?: Maybe<Dma>;
  dmaSearch: DmaResponse;
  dmasById: Array<Dma>;
  emailTargeting: EmailTarget;
  /** Get engagement metrics by ad group */
  engagementMetricsByAdGroup: Array<AdGroupEngagementMetric>;
  /** Get a summary of engagement metrics for an advertiser, campaign, and/or ad group. */
  engagementSummary?: Maybe<EngagementSummary>;
  exportAdvertisingProductsCsvJobStatus: AggregateExportJob;
  exportProductsCsvJobStatus: AggregateExportJob;
  exportUsersCsvJobStatus: AggregateExportJob;
  /** Search External Ad Groups. */
  externalAdGroups?: Maybe<ExternalAdGroups>;
  /** Search External Advertisers. */
  externalAdvertisers?: Maybe<ExternalAdvertisers>;
  /**
   * Unlike the "externalAdvertisers" query, which only searches for already-discovered advertisers, this query
   * requests external advertisers directly from the third-party DSP, if possible. This is supported only for
   * Tradedesk. Otherwise, we continue returning only already-discovered advertisers. USE WITH CAUTION! This should only
   * be used in situations where results MUST include very recently created advertisers. Querying against the third-party
   * DSP is expensive.
   */
  externalAdvertisersEager?: Maybe<ExternalAdvertisers>;
  /** Search External Campaigns. */
  externalCampaigns?: Maybe<ExternalCampaigns>;
  /** Search Facebook Ad Group Audiences. */
  facebookAdGroupAudiences?: Maybe<FacebookAdGroupAudiences>;
  facebookAdGroupPerformanceMetrics: FacebookAdGroupPerformanceMetricsResponse;
  facebookAdGroupPerformanceSummary: FacebookAdGroupPerformanceSummaryResponse;
  facebookAdvertiserPerformanceMetrics: FacebookAdvertiserPerformanceMetricsResponse;
  facebookAdvertiserPerformanceSummary: FacebookAdvertiserPerformanceSummaryResponse;
  facebookAudiences: Array<FacebookAudienceValue>;
  facebookCampaignPerformanceMetrics: FacebookCampaignPerformanceMetricsResponse;
  facebookCampaignPerformanceSummary: FacebookCampaignPerformanceSummaryResponse;
  facebookCreativeMetrics: Array<FacebookCreativeMetricsResponse>;
  facebookGeoMetrics: Array<FacebookGeoMetricsResponse>;
  /** Get Facebook performance metrics by publisher. */
  facebookPerformanceMetricsByPublisher: Array<FacebookPerformanceByPublisherMetricInterval>;
  fbTargeting: FbTarget;
  /** Gets a file */
  file: File;
  /** Gets files */
  files: FilesResponse;
  frequencyMetrics: Array<FrequencyResponse>;
  gdnAdGroupPerformanceMetrics: GdnAdGroupPerformanceMetricsResponse;
  gdnAdGroupPerformanceSummary: GdnAdGroupPerformanceSummaryResponse;
  gdnAdvertiserPerformanceMetrics: GdnAdvertiserPerformanceMetricsResponse;
  gdnAdvertiserPerformanceSummary: GdnAdvertiserPerformanceSummaryResponse;
  gdnAudienceMetrics: Array<GoogleAudienceResponse>;
  gdnCampaignPerformanceMetrics: GdnCampaignPerformanceMetricsResponse;
  gdnCampaignPerformanceSummary: GdnCampaignPerformanceSummaryResponse;
  gdnCreativeMetrics: Array<GdnCreativeMetricsResponse>;
  gdnDeviceTypeMetrics: Array<GoogleDeviceTypeMetricsResponse>;
  gdnGeoMetrics: Array<GdnGeoMetricsResponse>;
  gdnTargeting: GdnTarget;
  gdnTimeOfDayMetrics: Array<GoogleTimeOfDayMetricsResponse>;
  /** Get location geo metrics */
  geoMetrics: Array<GeoMetric>;
  geocodeSearch: MapboxBoundaryResponse;
  geocodesByFeatureId: MapboxBoundaryResponse;
  geocodesByLocation: MapboxBoundaryResponse;
  geocodesByZipcode: MapboxBoundaryResponse;
  getConversation?: Maybe<ConversationType>;
  getFileDownload: File;
  getFiles: Array<File>;
  getInsertionOrderValidation?: Maybe<OrderDetailValidationResponse>;
  getJsonPreference: JsonPreferenceType;
  getJsonPreferenceGroup: Array<JsonPreferenceGroupType>;
  getJsonPreferences: Array<JsonPreferenceType>;
  getLocalSeoUrl?: Maybe<Scalars['String']>;
  getOrder?: Maybe<OrderType>;
  getOrderDetail?: Maybe<OrderDetailType>;
  getOrderDetailsByOrderId?: Maybe<Array<OrderDetailType>>;
  getOrderDetailsForReview: Array<OrderDetailType>;
  getOrders?: Maybe<Array<OrderType>>;
  getPlatformCampaign?: Maybe<PlatformCampaign>;
  getPlatforms: Array<PlatformEnum>;
  getProductRates: Array<ProductRateResponse>;
  getProducts: Array<Product>;
  getProposal: ProposalType;
  getProposals: Array<ProposalType>;
  getTradedeskForecast: ForecastResponse;
  getUserbyEmail?: Maybe<User>;
  googleAdsAdGroupMetrics?: Maybe<GoogleAdsAdGroupDto>;
  googleAdsAdvertiserMetrics?: Maybe<GoogleAdsAdvertiserDto>;
  googleAdsCampaignMetrics?: Maybe<GoogleAdsCampaignDto>;
  hierarchies: Array<Hierarchy>;
  /** @deprecated No longer needed by Fusion Auth */
  hierarchiesByEntityIds: HierarchiesByEntityIdsResponse;
  hierarchiesById: Hierarchies;
  hierarchiesByName: Hierarchies;
  hierarchy?: Maybe<Hierarchy>;
  hierarchyChildIds: HierarchyChildIdsResponse;
  hierarchyParentIds: HierarchyParentIdsResponse;
  /** Find a Hierarchy Product. */
  hierarchyProduct: HierarchyProduct;
  /** Find a hierarchy product config by hierarchy and product. */
  hierarchyProductConfig?: Maybe<HierarchyProductConfig>;
  /** Look up hierarchy product configs. */
  hierarchyProductConfigs: HierarchyProductConfigsResponse;
  /** Search product listings for a specific hierarchy. */
  hierarchyProductListings: HierarchyProductListingsResponse;
  /** @deprecated Use `HierarchyProduct { activeRateCard { rates } }` field instead. */
  hierarchyProductRates: HierarchyProductRatesResponse;
  hierarchyRatesByParentId: Hierarchies;
  /** Finds a list if linked accounts in Improvado that meet the given criteria. */
  improvadoAccounts: ImprovadoAccounts;
  /**
   * Runs our Improvado Connection Health Check. If all connections are healthy, we return true. Otherwise,
   * if even one connection is Unhealthy we return false. Logs an error if any Improvado Connections are Unhealthy.
   */
  improvadoConnectionHealthCheck: Scalars['Boolean'];
  /** Finds connected accounts in Improvado associated with a given hierarchy. */
  improvadoConnections: Array<ImprovadoConnection>;
  /** Finds a list of Improvado subagencies. */
  improvadoSubagencies: ImprovadoSubagencies;
  /**
   * For each in a given list of Improvado account ids, get a mapping of the account id to a known Improvado subagency.
   *
   * Context: account ids can be associated with external advertiser ids. By connecting account ids to
   * ImprovadoSubagencies, which have a hierarchy, we can associate external advertiser ids to hierarchies, which
   * ultimately is useful to show only relevant advertisers to users that belong to only a single hierarchy.
   */
  improvadoSubagenciesByAccount: Array<ImprovadoSubagencyAccountMapping>;
  industriesByName: IndustriesResponse;
  jobStatus: AggregateExportJob;
  /** Find a line item by id. */
  lineItem: LineItem;
  /** Search line item allocations */
  lineItemAllocations: LineItemAllocationsResponse;
  /** Search line items. */
  lineItems: LineItemsResponse;
  /** Search Linked Advertisers. */
  linkedAdvertisers?: Maybe<LinkedAdvertisers>;
  /** Find linked and unlinked campaigns by id. */
  linkedAndUnlinkedCampaigns: LinkedAndUnlinkedCampaignsResponse;
  location: Location;
  locationsById: Array<Location>;
  metaPublisherPerformance: Array<PublisherPerformanceMetric>;
  microIndustriesByName: MicroIndustries;
  nativeTargeting: NativeTarget;
  notifications?: Maybe<Array<NotificationType>>;
  /** Find an order by id */
  order: Order;
  /** Search orders. */
  orders: OrdersResponse;
  passwordValidationRules?: Maybe<PasswordValidationRules>;
  /** Get performance metrics for an advertiser grouped by ad. */
  performanceMetricsByAd: Array<AdPerformanceMetric>;
  /** Get performance metrics for an advertiser grouped by adgroup. */
  performanceMetricsByAdGroup: Array<AdGroupPerformanceMetric>;
  /** Get performance metrics for an advertiser. */
  performanceMetricsByAdvertiser: Array<AdvertiserPerformanceMetric>;
  /** Get performance metrics for an advertiser grouped by campaign. */
  performanceMetricsByCampaign: Array<CampaignPerformanceMetric>;
  /** Get performance metrics grouped by product type and then by advertiser. */
  performanceMetricsByProductTypeAndAdvertiser: Array<ProductTypeAdvertiserPerformanceMetric>;
  /** Get a summary of performance metrics for an advertiser, campaign, and/or ad group. */
  performanceSummary?: Maybe<PerformanceSummary>;
  /** Query for platform ids that do not exist in dapi-files */
  platformIdsNotInDapi: PlatformIdsNotInDapiResponse;
  /** Valid Platforms */
  platforms: Array<Platform>;
  /** Return a list of all Product Forms. */
  productForms: Array<ProductForm>;
  /** Get a rate by its id */
  rate: Rate;
  /** Get a rate card by its id */
  rateCard: RateCard;
  rateCards: RateCards;
  /** Get the rates associated with a given rate card id */
  rates: Rates;
  recencyAdGroupMetrics: Array<DetailedRecencyResponse>;
  recencyAdvertiserMetrics: Array<RecencyResponse>;
  recencyCampaignMetrics: Array<DetailedRecencyResponse>;
  rollupAdvertiserPerformanceMetrics: RollupAdvertiserPerformanceMetricsResponse;
  rollupAdvertiserPerformanceSummary: RollupAdvertiserPerformanceSummaryResponse;
  searchAdGroupPerformanceMetrics: SearchAdGroupPerformanceMetricsResponse;
  searchAdGroupPerformanceSummary: SearchAdGroupPerformanceSummaryResponse;
  searchAdvertiserPerformanceMetrics: SearchAdvertiserPerformanceMetricsResponse;
  searchAdvertiserPerformanceSummary: SearchAdvertiserPerformanceSummaryResponse;
  /**
   * Search Advertising Products.
   * @deprecated Use `advertisingProducts` query instead.
   */
  searchAdvertisingProducts: AdvertisingProductsResponse;
  searchCampaignPerformanceMetrics: SearchCampaignPerformanceMetricsResponse;
  searchCampaignPerformanceSummary: SearchCampaignPerformanceSummaryResponse;
  searchConversionMetrics: Array<SearchConversionsResponse>;
  searchDeviceTypeMetrics: Array<SearchDeviceTypeMetricsResponse>;
  searchGeoMetrics: Array<SearchGeoMetricsResponse>;
  /** Search Hierarchy Products. */
  searchHierarchyProducts: HierarchyProductPageResponse;
  searchKeywordMetrics: Array<SearchKeywordsResponse>;
  searchLocations: SearchLocationsResponse;
  searchOrderDetails: OrderDetailsResponse;
  searchPlatformCampaigns: LinkedAndUnlinkedCampaigns;
  searchTimeOfDayMetrics: Array<GoogleTimeOfDayMetricsResponse>;
  /** Get supported location types (i.e., geo granularities) for a given product */
  supportedLocationTypes: Array<AnalyticsLocationType>;
  /** Search Tradedesk Campaign Conversion Tracking Label Sets. */
  tradedeskCampaignConversionTrackingLabelSets?: Maybe<TradedeskCampaignConversionTrackingLabelSets>;
  unreadNotificationCount?: Maybe<Scalars['Int']>;
  user?: Maybe<User>;
  users: Array<User>;
  validateConversationToken: Scalars['Boolean'];
  /** Validates that an Order is valid prior to creating it */
  validateOrder: ValidOrder;
  validatePassword: ValidatePasswordResponse;
  videoAdGroupGeoMetrics: Array<VideoGeoMetricsResponse>;
  videoAdGroupPerformanceMetrics: VideoAdGroupPerformanceMetricsResponse;
  videoAdGroupPerformanceSummary: VideoAdGroupPerformanceSummaryResponse;
  videoAdvertiserGeoMetrics: Array<VideoGeoMetricsResponse>;
  videoAdvertiserPerformanceMetrics: VideoAdvertiserPerformanceMetricsResponse;
  videoAdvertiserPerformanceSummary: VideoAdvertiserPerformanceSummaryResponse;
  videoBrandMetrics: Array<VideoBrandMetricsResponse>;
  videoCampaignGeoMetrics: Array<VideoGeoMetricsResponse>;
  videoCampaignPerformanceMetrics: VideoCampaignPerformanceMetricsResponse;
  videoCampaignPerformanceSummary: VideoCampaignPerformanceSummaryResponse;
  videoConversionMetrics: Array<VideoConversionsResponse>;
  videoCreativeMetrics: Array<VideoCreativeMetricsResponse>;
  videoDeviceTypeMetrics: Array<VideoDeviceTypeMetricsResponse>;
  videoFoldMetrics: Array<FoldResponse>;
  videoTimeOfDayMetrics: Array<VideoTimeOfDayMetricsResponse>;
  willProposalHaveRecommendedCampaigns: Scalars['Boolean'];
  youtubeAdGroupPerformanceMetrics: YoutubeAdGroupPerformanceMetricsResponse;
  youtubeAdGroupPerformanceSummary: YoutubeAdGroupPerformanceSummaryResponse;
  youtubeAdvertiserPerformanceMetrics: YoutubeAdvertiserPerformanceMetricsResponse;
  youtubeAdvertiserPerformanceSummary: YoutubeAdvertiserPerformanceSummaryResponse;
  youtubeAudienceMetrics: Array<GoogleAudienceResponse>;
  youtubeCampaignPerformanceMetrics: YoutubeCampaignPerformanceMetricsResponse;
  youtubeCampaignPerformanceSummary: YoutubeCampaignPerformanceSummaryResponse;
  youtubeCreativeMetrics: Array<YoutubeCreativeMetricsResponse>;
  youtubeDeviceTypeMetrics: Array<GoogleDeviceTypeMetricsResponse>;
  youtubeGeoMetrics: Array<YoutubeGeoMetricsResponse>;
};

export type QueryAdditionalReportsArgs = {
  advertiserId: Scalars['Float'];
};

export type QueryAdvertiserArgs = {
  id: Scalars['Float'];
};

export type QueryAdvertiserLogoUriArgs = {
  advertiserId: Scalars['Float'];
};

export type QueryAdvertiserProductListingArgs = {
  advertiserId: Scalars['ID'];
  productId: Scalars['ID'];
};

export type QueryAdvertiserProductListingsArgs = {
  filter: AdvertiserProductListingsFilterInput;
  page?: InputMaybe<PageInput>;
  sort?: InputMaybe<Array<AdvertiserProductListingsSortInput>>;
};

export type QueryAdvertisersArgs = {
  hierarchyId?: InputMaybe<Scalars['Float']>;
  hierarchyMongoId?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<Scalars['Float']>>;
  includeChildHierarchies?: InputMaybe<Scalars['Boolean']>;
  limit?: Scalars['Int'];
  mongoIds?: InputMaybe<Array<Scalars['String']>>;
  name?: InputMaybe<Scalars['String']>;
  offset?: Scalars['Int'];
};

export type QueryAdvertisingProductArgs = {
  id: Scalars['ID'];
};

export type QueryAdvertisingProductClassesArgs = {
  hierarchyId?: InputMaybe<Scalars['ID']>;
};

export type QueryAdvertisingProductLinesArgs = {
  hierarchyId?: InputMaybe<Scalars['ID']>;
};

export type QueryAdvertisingProductTypesArgs = {
  hierarchyId?: InputMaybe<Scalars['ID']>;
};

export type QueryAdvertisingProductsArgs = {
  filter?: InputMaybe<AdvertisingProductsFilterInput>;
  page?: InputMaybe<PageInput>;
  sort?: InputMaybe<Array<AdvertisingProductsSortInput>>;
};

export type QueryAnalyticsAdvertiserArgs = {
  id: Scalars['Float'];
};

export type QueryAudienceMetricsArgs = {
  adGroupId?: InputMaybe<Scalars['String']>;
  advertiserId: Scalars['String'];
  campaignId?: InputMaybe<Scalars['String']>;
  endDate: Scalars['Date'];
  resolution?: InputMaybe<AnalyticsResolution>;
  startDate: Scalars['Date'];
};

export type QueryAvailableHierarchyProductsArgs = {
  hierarchyId: Scalars['ID'];
};

export type QueryBehavioralTtdTargetingArgs = {
  limit?: Scalars['Int'];
  offset?: Scalars['Int'];
  value?: InputMaybe<Scalars['String']>;
  values?: InputMaybe<Array<Scalars['String']>>;
};

export type QueryCampaignArgs = {
  id: Scalars['ID'];
};

export type QueryCampaignsArgs = {
  filter?: InputMaybe<CampaignsFilterInput>;
  page?: InputMaybe<PageInput>;
};

export type QueryContentTtdTargetingArgs = {
  limit?: Scalars['Int'];
  offset?: Scalars['Int'];
  value?: InputMaybe<Scalars['String']>;
  values?: InputMaybe<Array<Scalars['String']>>;
};

export type QueryConversationArgs = {
  input: ConversationInput;
};

export type QueryCreativeArgs = {
  id: Scalars['Float'];
};

export type QueryDemographicTtdTargetingArgs = {
  limit?: Scalars['Int'];
  offset?: Scalars['Int'];
  value?: InputMaybe<Scalars['String']>;
  values?: InputMaybe<Array<Scalars['String']>>;
};

export type QueryDisplayAdGroupGeoMetricsArgs = {
  adGroupId?: InputMaybe<Scalars['String']>;
  advertiserId: Scalars['String'];
  campaignId: Scalars['String'];
  endDate: Scalars['Date'];
  resolution?: InputMaybe<AnalyticsResolution>;
  startDate: Scalars['Date'];
  zip?: InputMaybe<Scalars['Boolean']>;
};

export type QueryDisplayAdGroupPerformanceMetricsArgs = {
  adGroupId?: InputMaybe<Scalars['String']>;
  advertiserId: Scalars['String'];
  campaignId?: InputMaybe<Scalars['String']>;
  endDate: Scalars['Date'];
  resolution?: InputMaybe<AnalyticsResolution>;
  startDate: Scalars['Date'];
};

export type QueryDisplayAdGroupPerformanceSummaryArgs = {
  adGroupId?: InputMaybe<Scalars['String']>;
  advertiserId: Scalars['String'];
  campaignId?: InputMaybe<Scalars['String']>;
  endDate: Scalars['Date'];
  resolution?: InputMaybe<AnalyticsResolution>;
  startDate: Scalars['Date'];
};

export type QueryDisplayAdvertiserGeoMetricsArgs = {
  advertiserId: Scalars['String'];
  endDate: Scalars['Date'];
  resolution?: InputMaybe<AnalyticsResolution>;
  startDate: Scalars['Date'];
  zip?: InputMaybe<Scalars['Boolean']>;
};

export type QueryDisplayAdvertiserPerformanceMetricsArgs = {
  advertiserId: Scalars['String'];
  endDate: Scalars['Date'];
  resolution?: InputMaybe<AnalyticsResolution>;
  startDate: Scalars['Date'];
};

export type QueryDisplayAdvertiserPerformanceSummaryArgs = {
  advertiserId: Scalars['String'];
  endDate: Scalars['Date'];
  resolution?: InputMaybe<AnalyticsResolution>;
  startDate: Scalars['Date'];
};

export type QueryDisplayBrandMetricsArgs = {
  adGroupId?: InputMaybe<Scalars['String']>;
  advertiserId: Scalars['String'];
  campaignId?: InputMaybe<Scalars['String']>;
  endDate: Scalars['Date'];
  resolution?: InputMaybe<AnalyticsResolution>;
  startDate: Scalars['Date'];
};

export type QueryDisplayCampaignGeoMetricsArgs = {
  advertiserId: Scalars['String'];
  campaignId?: InputMaybe<Scalars['String']>;
  endDate: Scalars['Date'];
  resolution?: InputMaybe<AnalyticsResolution>;
  startDate: Scalars['Date'];
  zip?: InputMaybe<Scalars['Boolean']>;
};

export type QueryDisplayCampaignPerformanceMetricsArgs = {
  advertiserId: Scalars['String'];
  campaignId?: InputMaybe<Scalars['String']>;
  endDate: Scalars['Date'];
  resolution?: InputMaybe<AnalyticsResolution>;
  startDate: Scalars['Date'];
};

export type QueryDisplayCampaignPerformanceSummaryArgs = {
  advertiserId: Scalars['String'];
  campaignId?: InputMaybe<Scalars['String']>;
  endDate: Scalars['Date'];
  resolution?: InputMaybe<AnalyticsResolution>;
  startDate: Scalars['Date'];
};

export type QueryDisplayConversionMetricsArgs = {
  adGroupId?: InputMaybe<Scalars['String']>;
  advertiserId: Scalars['String'];
  campaignId?: InputMaybe<Scalars['String']>;
  endDate: Scalars['Date'];
  resolution?: InputMaybe<AnalyticsResolution>;
  startDate: Scalars['Date'];
};

export type QueryDisplayCreativeMetricsArgs = {
  adGroupId?: InputMaybe<Scalars['String']>;
  advertiserId: Scalars['String'];
  campaignId?: InputMaybe<Scalars['String']>;
  endDate: Scalars['Date'];
  resolution?: InputMaybe<AnalyticsResolution>;
  startDate: Scalars['Date'];
};

export type QueryDisplayDeviceTypeMetricsArgs = {
  adGroupId?: InputMaybe<Scalars['String']>;
  advertiserId: Scalars['String'];
  campaignId?: InputMaybe<Scalars['String']>;
  endDate: Scalars['Date'];
  resolution?: InputMaybe<AnalyticsResolution>;
  startDate: Scalars['Date'];
};

export type QueryDisplayFacebookTargetingArgs = {
  limit?: Scalars['Int'];
  offset?: Scalars['Int'];
  productName: ProductNameEnum;
  type: TypeEnum;
  value?: InputMaybe<Scalars['String']>;
  values?: InputMaybe<Array<Scalars['String']>>;
};

export type QueryDisplayFoldMetricsArgs = {
  adGroupId?: InputMaybe<Scalars['String']>;
  advertiserId: Scalars['String'];
  campaignId?: InputMaybe<Scalars['String']>;
  endDate: Scalars['Date'];
  resolution?: InputMaybe<AnalyticsResolution>;
  startDate: Scalars['Date'];
};

export type QueryDisplayTimeOfDayMetricsArgs = {
  adGroupId?: InputMaybe<Scalars['String']>;
  advertiserId: Scalars['String'];
  campaignId?: InputMaybe<Scalars['String']>;
  endDate: Scalars['Date'];
  startDate: Scalars['Date'];
};

export type QueryDmaByIdArgs = {
  id: Scalars['String'];
};

export type QueryDmaSearchArgs = {
  pageNumber?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  value?: InputMaybe<Scalars['String']>;
};

export type QueryDmasByIdArgs = {
  ids: Array<Scalars['String']>;
};

export type QueryEmailTargetingArgs = {
  limit?: Scalars['Int'];
  offset?: Scalars['Int'];
  type: EmailTypeEnum;
  value?: InputMaybe<Scalars['String']>;
  values?: InputMaybe<Array<Scalars['String']>>;
};

export type QueryEngagementMetricsByAdGroupArgs = {
  input: EngagementMetricsByAdGroupInput;
};

export type QueryEngagementSummaryArgs = {
  input: EngagementSummaryInput;
};

export type QueryExportAdvertisingProductsCsvJobStatusArgs = {
  jobId: Scalars['Float'];
};

export type QueryExportProductsCsvJobStatusArgs = {
  jobId: Scalars['Float'];
};

export type QueryExportUsersCsvJobStatusArgs = {
  jobId: Scalars['Float'];
};

export type QueryExternalAdGroupsArgs = {
  input?: InputMaybe<SearchExternalAdGroupsInput>;
};

export type QueryExternalAdvertisersArgs = {
  input?: InputMaybe<SearchExternalAdvertisersInput>;
};

export type QueryExternalAdvertisersEagerArgs = {
  input: SearchEagerExternalAdvertisersInput;
};

export type QueryExternalCampaignsArgs = {
  input?: InputMaybe<SearchExternalCampaignsInput>;
};

export type QueryFacebookAdGroupAudiencesArgs = {
  input: SearchFacebookAdGroupAudiencesInput;
};

export type QueryFacebookAdGroupPerformanceMetricsArgs = {
  adGroupId?: InputMaybe<Scalars['String']>;
  advertiserId: Scalars['String'];
  campaignId?: InputMaybe<Scalars['String']>;
  endDate: Scalars['Date'];
  resolution?: InputMaybe<AnalyticsResolution>;
  startDate: Scalars['Date'];
};

export type QueryFacebookAdGroupPerformanceSummaryArgs = {
  adGroupId?: InputMaybe<Scalars['String']>;
  advertiserId: Scalars['String'];
  campaignId?: InputMaybe<Scalars['String']>;
  endDate: Scalars['Date'];
  resolution?: InputMaybe<AnalyticsResolution>;
  startDate: Scalars['Date'];
};

export type QueryFacebookAdvertiserPerformanceMetricsArgs = {
  advertiserId: Scalars['String'];
  endDate: Scalars['Date'];
  resolution?: InputMaybe<AnalyticsResolution>;
  startDate: Scalars['Date'];
};

export type QueryFacebookAdvertiserPerformanceSummaryArgs = {
  advertiserId: Scalars['String'];
  endDate: Scalars['Date'];
  resolution?: InputMaybe<AnalyticsResolution>;
  startDate: Scalars['Date'];
};

export type QueryFacebookAudiencesArgs = {
  adGroupId?: InputMaybe<Scalars['String']>;
  advertiserId: Scalars['String'];
  campaignId?: InputMaybe<Scalars['String']>;
};

export type QueryFacebookCampaignPerformanceMetricsArgs = {
  advertiserId: Scalars['String'];
  campaignId?: InputMaybe<Scalars['String']>;
  endDate: Scalars['Date'];
  resolution?: InputMaybe<AnalyticsResolution>;
  startDate: Scalars['Date'];
};

export type QueryFacebookCampaignPerformanceSummaryArgs = {
  advertiserId: Scalars['String'];
  campaignId?: InputMaybe<Scalars['String']>;
  endDate: Scalars['Date'];
  resolution?: InputMaybe<AnalyticsResolution>;
  startDate: Scalars['Date'];
};

export type QueryFacebookCreativeMetricsArgs = {
  adGroupId?: InputMaybe<Scalars['String']>;
  advertiserId: Scalars['String'];
  campaignId?: InputMaybe<Scalars['String']>;
  endDate: Scalars['Date'];
  resolution?: InputMaybe<AnalyticsResolution>;
  startDate: Scalars['Date'];
};

export type QueryFacebookGeoMetricsArgs = {
  adGroupId?: InputMaybe<Scalars['String']>;
  advertiserId: Scalars['String'];
  campaignId?: InputMaybe<Scalars['String']>;
  endDate: Scalars['Date'];
  resolution?: InputMaybe<AnalyticsResolution>;
  startDate: Scalars['Date'];
};

export type QueryFacebookPerformanceMetricsByPublisherArgs = {
  input: FacebookPerformanceMetricsByPublisherInput;
};

export type QueryFbTargetingArgs = {
  limit?: Scalars['Int'];
  offset?: Scalars['Int'];
  type: TypeEnum;
  value?: InputMaybe<Scalars['String']>;
  values?: InputMaybe<Array<Scalars['String']>>;
};

export type QueryFileArgs = {
  input: GetFileInput;
};

export type QueryFilesArgs = {
  filter: FilesFilterInput;
  page?: InputMaybe<PageInput>;
};

export type QueryFrequencyMetricsArgs = {
  adGroupId?: InputMaybe<Scalars['String']>;
  advertiserId: Scalars['String'];
  campaignId?: InputMaybe<Scalars['String']>;
  endDate: Scalars['Date'];
  resolution?: InputMaybe<AnalyticsResolution>;
  startDate: Scalars['Date'];
};

export type QueryGdnAdGroupPerformanceMetricsArgs = {
  adGroupId?: InputMaybe<Scalars['String']>;
  advertiserId: Scalars['String'];
  campaignId?: InputMaybe<Scalars['String']>;
  endDate: Scalars['Date'];
  resolution?: InputMaybe<AnalyticsResolution>;
  startDate: Scalars['Date'];
};

export type QueryGdnAdGroupPerformanceSummaryArgs = {
  adGroupId?: InputMaybe<Scalars['String']>;
  advertiserId: Scalars['String'];
  campaignId?: InputMaybe<Scalars['String']>;
  endDate: Scalars['Date'];
  resolution?: InputMaybe<AnalyticsResolution>;
  startDate: Scalars['Date'];
};

export type QueryGdnAdvertiserPerformanceMetricsArgs = {
  advertiserId: Scalars['String'];
  endDate: Scalars['Date'];
  resolution?: InputMaybe<AnalyticsResolution>;
  startDate: Scalars['Date'];
};

export type QueryGdnAdvertiserPerformanceSummaryArgs = {
  advertiserId: Scalars['String'];
  endDate: Scalars['Date'];
  resolution?: InputMaybe<AnalyticsResolution>;
  startDate: Scalars['Date'];
};

export type QueryGdnAudienceMetricsArgs = {
  adGroupId?: InputMaybe<Scalars['String']>;
  advertiserId: Scalars['String'];
  campaignId?: InputMaybe<Scalars['String']>;
  endDate: Scalars['Date'];
  resolution?: InputMaybe<AnalyticsResolution>;
  startDate: Scalars['Date'];
};

export type QueryGdnCampaignPerformanceMetricsArgs = {
  advertiserId: Scalars['String'];
  campaignId?: InputMaybe<Scalars['String']>;
  endDate: Scalars['Date'];
  resolution?: InputMaybe<AnalyticsResolution>;
  startDate: Scalars['Date'];
};

export type QueryGdnCampaignPerformanceSummaryArgs = {
  advertiserId: Scalars['String'];
  campaignId?: InputMaybe<Scalars['String']>;
  endDate: Scalars['Date'];
  resolution?: InputMaybe<AnalyticsResolution>;
  startDate: Scalars['Date'];
};

export type QueryGdnCreativeMetricsArgs = {
  adGroupId?: InputMaybe<Scalars['String']>;
  advertiserId: Scalars['String'];
  campaignId?: InputMaybe<Scalars['String']>;
  endDate: Scalars['Date'];
  resolution?: InputMaybe<AnalyticsResolution>;
  startDate: Scalars['Date'];
};

export type QueryGdnDeviceTypeMetricsArgs = {
  adGroupId?: InputMaybe<Scalars['String']>;
  advertiserId: Scalars['String'];
  campaignId?: InputMaybe<Scalars['String']>;
  endDate: Scalars['Date'];
  resolution?: InputMaybe<AnalyticsResolution>;
  startDate: Scalars['Date'];
};

export type QueryGdnGeoMetricsArgs = {
  adGroupId?: InputMaybe<Scalars['String']>;
  advertiserId: Scalars['String'];
  campaignId?: InputMaybe<Scalars['String']>;
  endDate: Scalars['Date'];
  resolution?: InputMaybe<AnalyticsResolution>;
  startDate: Scalars['Date'];
  zip?: InputMaybe<Scalars['Boolean']>;
};

export type QueryGdnTargetingArgs = {
  limit?: Scalars['Int'];
  offset?: Scalars['Int'];
  type: TypeEnum;
  value?: InputMaybe<Scalars['String']>;
  values?: InputMaybe<Array<Scalars['String']>>;
};

export type QueryGdnTimeOfDayMetricsArgs = {
  adGroupId?: InputMaybe<Scalars['String']>;
  advertiserId: Scalars['String'];
  campaignId?: InputMaybe<Scalars['String']>;
  endDate: Scalars['Date'];
  startDate: Scalars['Date'];
};

export type QueryGeoMetricsArgs = {
  input: GeoMetricsInput;
};

export type QueryGeocodeSearchArgs = {
  layer?: InputMaybe<MapboxBoundaryLayer>;
  pageNumber?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  value?: InputMaybe<Scalars['String']>;
};

export type QueryGeocodesByFeatureIdArgs = {
  ids: Array<Scalars['String']>;
};

export type QueryGeocodesByLocationArgs = {
  locations: Array<LocationInput>;
};

export type QueryGeocodesByZipcodeArgs = {
  zipcodes: Array<Scalars['String']>;
};

export type QueryGetConversationArgs = {
  id: Scalars['Int'];
};

export type QueryGetFileDownloadArgs = {
  fileId: Scalars['Float'];
};

export type QueryGetFilesArgs = {
  fileIds: Array<Scalars['Int']>;
};

export type QueryGetInsertionOrderValidationArgs = {
  orderInsertionDetails?: InputMaybe<Array<ProposalOrderInsertionDetail>>;
  orderInsertionDetailsSem?: InputMaybe<Array<ProposalOrderInsertionDetailSem>>;
  orderInsertionDetailsYouTube?: InputMaybe<Array<ProposalOrderInsertionDetailYouTube>>;
};

export type QueryGetJsonPreferenceArgs = {
  key: Scalars['String'];
};

export type QueryGetJsonPreferenceGroupArgs = {
  key: Array<Scalars['String']>;
};

export type QueryGetLocalSeoUrlArgs = {
  advertiserId: Scalars['Float'];
};

export type QueryGetOrderArgs = {
  id: Scalars['Float'];
};

export type QueryGetOrderDetailArgs = {
  id: Scalars['Float'];
};

export type QueryGetOrderDetailsByOrderIdArgs = {
  orderId: Scalars['Float'];
};

export type QueryGetOrderDetailsForReviewArgs = {
  id: Scalars['Float'];
};

export type QueryGetOrdersArgs = {
  advertiserIds?: InputMaybe<Array<Scalars['Int']>>;
  endDate?: InputMaybe<Scalars['DateTime']>;
  hasDateOfOrder?: InputMaybe<Scalars['Boolean']>;
  hierarchyIds?: InputMaybe<Array<Scalars['Int']>>;
  name?: InputMaybe<Scalars['String']>;
  orderDetailStatus?: InputMaybe<OrderDetailStatusEnum>;
  orderIds?: InputMaybe<Array<Scalars['Int']>>;
  orderStatus?: InputMaybe<OrderStatusEnum>;
  pageNumber?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  requesterUserIds?: InputMaybe<Array<Scalars['String']>>;
  sortBy?: InputMaybe<Array<SortOrdersData>>;
  startDate?: InputMaybe<Scalars['DateTime']>;
};

export type QueryGetPlatformCampaignArgs = {
  id: Scalars['Float'];
};

export type QueryGetProductRatesArgs = {
  advertiserId?: InputMaybe<Scalars['Float']>;
  effectiveDate: Scalars['DateTime'];
  hierarchyId?: InputMaybe<Scalars['Float']>;
  productIds: Array<Scalars['Float']>;
};

export type QueryGetProductsArgs = {
  productType?: InputMaybe<ProductTypeEnum>;
};

export type QueryGetProposalArgs = {
  id: Scalars['Float'];
};

export type QueryGetProposalsArgs = {
  advertiserId?: InputMaybe<Scalars['Float']>;
  advertiserIds?: InputMaybe<Array<Scalars['Int']>>;
  advertiserName?: InputMaybe<Scalars['String']>;
  filter?: InputMaybe<Scalars['String']>;
  hierarchyIds?: InputMaybe<Array<Scalars['Int']>>;
  limit?: Scalars['Int'];
  maxBudget?: InputMaybe<Scalars['Float']>;
  minBudget?: InputMaybe<Scalars['Float']>;
  offset?: Scalars['Int'];
  orderBy?: InputMaybe<Array<ProposalOrderBy>>;
  requestorId?: InputMaybe<Scalars['String']>;
  requestorIds?: InputMaybe<Array<Scalars['String']>>;
  statuses?: InputMaybe<Array<ProposalStatus>>;
};

export type QueryGetTradedeskForecastArgs = {
  days: Scalars['Float'];
  fullPaths?: InputMaybe<Array<Scalars['String']>>;
  geoSearchData?: InputMaybe<Array<GeoData>>;
  productKey?: InputMaybe<Scalars['String']>;
};

export type QueryGetUserbyEmailArgs = {
  email: Scalars['String'];
};

export type QueryGoogleAdsAdGroupMetricsArgs = {
  adGroupId: Scalars['String'];
  advertiserId: Scalars['String'];
  campaignId: Scalars['String'];
  endDate: Scalars['Date'];
  startDate: Scalars['Date'];
};

export type QueryGoogleAdsAdvertiserMetricsArgs = {
  advertiserId: Scalars['String'];
  endDate: Scalars['Date'];
  startDate: Scalars['Date'];
};

export type QueryGoogleAdsCampaignMetricsArgs = {
  advertiserId: Scalars['String'];
  campaignId: Scalars['String'];
  endDate: Scalars['Date'];
  startDate: Scalars['Date'];
};

export type QueryHierarchiesArgs = {
  filter?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<Scalars['Float']>>;
  limit?: Scalars['Int'];
  mongoIds?: InputMaybe<Array<Scalars['String']>>;
  offset?: Scalars['Int'];
  parentId?: InputMaybe<Scalars['Float']>;
  parentMongoId?: InputMaybe<Scalars['String']>;
};

export type QueryHierarchiesByEntityIdsArgs = {
  input: HierarchiesByEntityIdsInput;
};

export type QueryHierarchiesByIdArgs = {
  filter?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<Scalars['Float']>>;
  limit?: Scalars['Int'];
  mongoIds?: InputMaybe<Array<Scalars['String']>>;
  offset?: Scalars['Int'];
  parentId?: InputMaybe<Scalars['Float']>;
  parentMongoId?: InputMaybe<Scalars['String']>;
};

export type QueryHierarchiesByNameArgs = {
  filter?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<Scalars['Float']>>;
  limit?: Scalars['Int'];
  mongoIds?: InputMaybe<Array<Scalars['String']>>;
  offset?: Scalars['Int'];
  parentId?: InputMaybe<Scalars['Float']>;
  parentMongoId?: InputMaybe<Scalars['String']>;
};

export type QueryHierarchyArgs = {
  id?: InputMaybe<Scalars['Float']>;
  mongoId?: InputMaybe<Scalars['String']>;
};

export type QueryHierarchyChildIdsArgs = {
  id?: InputMaybe<Scalars['Float']>;
  mongoId?: InputMaybe<Scalars['String']>;
};

export type QueryHierarchyParentIdsArgs = {
  advertiserId?: InputMaybe<Scalars['Float']>;
  advertiserMongoId?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Float']>;
  mongoId?: InputMaybe<Scalars['String']>;
};

export type QueryHierarchyProductArgs = {
  id: Scalars['ID'];
};

export type QueryHierarchyProductConfigArgs = {
  hierarchyId: Scalars['ID'];
  productId: Scalars['ID'];
};

export type QueryHierarchyProductConfigsArgs = {
  filter: HierarchyProductConfigsFilterInput;
  page?: InputMaybe<PageInput>;
  sort?: InputMaybe<Array<HierarchyProductConfigsSortInput>>;
};

export type QueryHierarchyProductListingsArgs = {
  filter: HierarchyProductListingsFilterInput;
  page?: InputMaybe<PageInput>;
  sort?: InputMaybe<Array<HierarchyProductListingsSortInput>>;
};

export type QueryHierarchyProductRatesArgs = {
  hierarchyProductId: Scalars['ID'];
};

export type QueryHierarchyRatesByParentIdArgs = {
  parentId: Scalars['Float'];
};

export type QueryImprovadoAccountsArgs = {
  filter: ImprovadoAccountsFilterInput;
  page?: InputMaybe<PageInput>;
};

export type QueryImprovadoConnectionsArgs = {
  input: ImprovadoConnectionsInput;
};

export type QueryImprovadoSubagenciesArgs = {
  filter?: InputMaybe<ImprovadoSubagenciesFilterInput>;
  page?: InputMaybe<PageInput>;
};

export type QueryImprovadoSubagenciesByAccountArgs = {
  input: ImprovadoSubagenciesByAccountInput;
};

export type QueryIndustriesByNameArgs = {
  filter: Scalars['String'];
};

export type QueryJobStatusArgs = {
  jobId: Scalars['Float'];
};

export type QueryLineItemArgs = {
  id: Scalars['ID'];
};

export type QueryLineItemAllocationsArgs = {
  filter?: InputMaybe<LineItemAllocationsFilterInput>;
  page?: InputMaybe<PageInput>;
};

export type QueryLineItemsArgs = {
  filter?: InputMaybe<LineItemsFilterInput>;
  page?: InputMaybe<PageInput>;
  sort?: InputMaybe<Array<LineItemsSortInput>>;
};

export type QueryLinkedAdvertisersArgs = {
  input?: InputMaybe<SearchLinkedAdvertisersInput>;
};

export type QueryLinkedAndUnlinkedCampaignsArgs = {
  filter?: InputMaybe<LinkedAndUnlinkedCampaignFilterInput>;
};

export type QueryLocationArgs = {
  id: Scalars['Float'];
};

export type QueryLocationsByIdArgs = {
  ids: Array<Scalars['Int']>;
};

export type QueryMetaPublisherPerformanceArgs = {
  adGroupId?: InputMaybe<Scalars['String']>;
  advertiserId: Scalars['String'];
  campaignId?: InputMaybe<Scalars['String']>;
  endDate: Scalars['Date'];
  resolution?: InputMaybe<AnalyticsResolution>;
  startDate: Scalars['Date'];
};

export type QueryMicroIndustriesByNameArgs = {
  filter: Scalars['String'];
  industryName?: InputMaybe<Scalars['String']>;
};

export type QueryNativeTargetingArgs = {
  limit?: Scalars['Int'];
  offset?: Scalars['Int'];
  value?: InputMaybe<Scalars['String']>;
  values?: InputMaybe<Array<Scalars['String']>>;
};

export type QueryNotificationsArgs = {
  filter?: InputMaybe<NotificationsFilter>;
  orderBy?: InputMaybe<Array<OrderBy>>;
  page?: InputMaybe<PageNumberPageSizePaginationArgs>;
};

export type QueryOrderArgs = {
  id: Scalars['ID'];
};

export type QueryOrdersArgs = {
  filter?: InputMaybe<OrdersFilterInput>;
  page?: InputMaybe<PageInput>;
  sort?: InputMaybe<Array<OrdersSortInput>>;
};

export type QueryPerformanceMetricsByAdArgs = {
  input: PerformanceMetricsByAdInput;
};

export type QueryPerformanceMetricsByAdGroupArgs = {
  input: PerformanceMetricsByAdGroupInput;
};

export type QueryPerformanceMetricsByAdvertiserArgs = {
  input: PerformanceMetricsByAdvertiserInput;
};

export type QueryPerformanceMetricsByCampaignArgs = {
  input: PerformanceMetricsByCampaignInput;
};

export type QueryPerformanceMetricsByProductTypeAndAdvertiserArgs = {
  input: PerformanceMetricsByAdvertiserInput;
};

export type QueryPerformanceSummaryArgs = {
  input: PerformanceSummaryInput;
};

export type QueryPlatformIdsNotInDapiArgs = {
  platform: Platform;
  platformIds: Array<Scalars['ID']>;
};

export type QueryRateArgs = {
  id: Scalars['ID'];
};

export type QueryRateCardArgs = {
  id: Scalars['ID'];
};

export type QueryRateCardsArgs = {
  advertiserId?: InputMaybe<Scalars['Int']>;
  hierarchyId?: InputMaybe<Scalars['Int']>;
};

export type QueryRatesArgs = {
  rateCardId: Scalars['ID'];
};

export type QueryRecencyAdGroupMetricsArgs = {
  adGroupId: Scalars['String'];
  advertiserId: Scalars['String'];
  campaignId: Scalars['String'];
  endDate: Scalars['Date'];
  resolution?: InputMaybe<AnalyticsResolution>;
  startDate: Scalars['Date'];
};

export type QueryRecencyAdvertiserMetricsArgs = {
  advertiserId: Scalars['String'];
  endDate: Scalars['Date'];
  resolution?: InputMaybe<AnalyticsResolution>;
  startDate: Scalars['Date'];
};

export type QueryRecencyCampaignMetricsArgs = {
  advertiserId: Scalars['String'];
  campaignId: Scalars['String'];
  endDate: Scalars['Date'];
  resolution?: InputMaybe<AnalyticsResolution>;
  startDate: Scalars['Date'];
};

export type QueryRollupAdvertiserPerformanceMetricsArgs = {
  advertiserId: Scalars['String'];
  endDate: Scalars['Date'];
  productTypes?: InputMaybe<Array<ApiAnalyticsMediaType>>;
  resolution: AnalyticsResolution;
  startDate: Scalars['Date'];
};

export type QueryRollupAdvertiserPerformanceSummaryArgs = {
  advertiserId: Scalars['String'];
  endDate: Scalars['Date'];
  productTypes?: InputMaybe<Array<ApiAnalyticsMediaType>>;
  startDate: Scalars['Date'];
};

export type QuerySearchAdGroupPerformanceMetricsArgs = {
  adGroupId?: InputMaybe<Scalars['String']>;
  advertiserId: Scalars['String'];
  campaignId?: InputMaybe<Scalars['String']>;
  endDate: Scalars['Date'];
  resolution?: InputMaybe<AnalyticsResolution>;
  startDate: Scalars['Date'];
};

export type QuerySearchAdGroupPerformanceSummaryArgs = {
  adGroupId?: InputMaybe<Scalars['String']>;
  advertiserId: Scalars['String'];
  campaignId?: InputMaybe<Scalars['String']>;
  endDate: Scalars['Date'];
  resolution?: InputMaybe<AnalyticsResolution>;
  startDate: Scalars['Date'];
};

export type QuerySearchAdvertiserPerformanceMetricsArgs = {
  advertiserId: Scalars['String'];
  endDate: Scalars['Date'];
  resolution?: InputMaybe<AnalyticsResolution>;
  startDate: Scalars['Date'];
};

export type QuerySearchAdvertiserPerformanceSummaryArgs = {
  advertiserId: Scalars['String'];
  endDate: Scalars['Date'];
  resolution?: InputMaybe<AnalyticsResolution>;
  startDate: Scalars['Date'];
};

export type QuerySearchAdvertisingProductsArgs = {
  request: SearchAdvertiserProductRequest;
};

export type QuerySearchCampaignPerformanceMetricsArgs = {
  advertiserId: Scalars['String'];
  campaignId?: InputMaybe<Scalars['String']>;
  endDate: Scalars['Date'];
  resolution?: InputMaybe<AnalyticsResolution>;
  startDate: Scalars['Date'];
};

export type QuerySearchCampaignPerformanceSummaryArgs = {
  advertiserId: Scalars['String'];
  campaignId?: InputMaybe<Scalars['String']>;
  endDate: Scalars['Date'];
  resolution?: InputMaybe<AnalyticsResolution>;
  startDate: Scalars['Date'];
};

export type QuerySearchConversionMetricsArgs = {
  adGroupId?: InputMaybe<Scalars['String']>;
  advertiserId: Scalars['String'];
  campaignId?: InputMaybe<Scalars['String']>;
  endDate: Scalars['Date'];
  resolution?: InputMaybe<AnalyticsResolution>;
  startDate: Scalars['Date'];
};

export type QuerySearchDeviceTypeMetricsArgs = {
  adGroupId?: InputMaybe<Scalars['String']>;
  advertiserId: Scalars['String'];
  campaignId?: InputMaybe<Scalars['String']>;
  endDate: Scalars['Date'];
  resolution?: InputMaybe<AnalyticsResolution>;
  startDate: Scalars['Date'];
};

export type QuerySearchGeoMetricsArgs = {
  adGroupId?: InputMaybe<Scalars['String']>;
  advertiserId: Scalars['String'];
  campaignId?: InputMaybe<Scalars['String']>;
  endDate: Scalars['Date'];
  resolution?: InputMaybe<AnalyticsResolution>;
  startDate: Scalars['Date'];
  zip?: InputMaybe<Scalars['Boolean']>;
};

export type QuerySearchHierarchyProductsArgs = {
  request: SearchHierarchyProductRequest;
};

export type QuerySearchKeywordMetricsArgs = {
  adGroupId?: InputMaybe<Scalars['String']>;
  advertiserId: Scalars['String'];
  campaignId?: InputMaybe<Scalars['String']>;
  endDate: Scalars['Date'];
  resolution?: InputMaybe<AnalyticsResolution>;
  startDate: Scalars['Date'];
};

export type QuerySearchLocationsArgs = {
  advertiserId: Scalars['Int'];
  pageNumber?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  searchTerm?: InputMaybe<Scalars['String']>;
};

export type QuerySearchOrderDetailsArgs = {
  advertiserIds?: InputMaybe<Array<Scalars['Int']>>;
  assigneeUserIds?: InputMaybe<Array<Scalars['String']>>;
  dateFilter?: InputMaybe<OrderDetailDateFilterParams>;
  endDate?: InputMaybe<Scalars['DateTime']>;
  flags?: InputMaybe<Array<Scalars['String']>>;
  followerUserIds?: InputMaybe<Array<Scalars['String']>>;
  hierarchyId?: InputMaybe<Scalars['Float']>;
  ids?: InputMaybe<Array<Scalars['Int']>>;
  maxBudget?: InputMaybe<Scalars['Float']>;
  minBudget?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
  orderIds?: InputMaybe<Array<Scalars['Int']>>;
  pageNumber?: InputMaybe<Scalars['Int']>;
  pageSize?: InputMaybe<Scalars['Int']>;
  productIds?: InputMaybe<Array<Scalars['Float']>>;
  purchaseDate?: InputMaybe<Scalars['DateTime']>;
  requestorUserIds?: InputMaybe<Array<Scalars['String']>>;
  sortBy?: InputMaybe<Array<SortOrderDetailsData>>;
  startDate?: InputMaybe<Scalars['DateTime']>;
  statuses?: InputMaybe<Array<SearchOrderDetailStatusEnum>>;
};

export type QuerySearchPlatformCampaignsArgs = {
  advertiserId: Scalars['Float'];
  platformName: PlatformEnum;
  searchTerm?: InputMaybe<Scalars['String']>;
};

export type QuerySearchTimeOfDayMetricsArgs = {
  adGroupId?: InputMaybe<Scalars['String']>;
  advertiserId: Scalars['String'];
  campaignId?: InputMaybe<Scalars['String']>;
  endDate: Scalars['Date'];
  startDate: Scalars['Date'];
};

export type QuerySupportedLocationTypesArgs = {
  input: AnalyticsProductTypeIdentifier;
};

export type QueryTradedeskCampaignConversionTrackingLabelSetsArgs = {
  input: SearchTradedeskCampaignConversionTrackingLabelSetsInput;
};

export type QueryUserArgs = {
  id: Scalars['String'];
};

export type QueryUsersArgs = {
  filter?: InputMaybe<Scalars['String']>;
  ids?: InputMaybe<Array<Scalars['String']>>;
  limit?: Scalars['Int'];
  offset?: Scalars['Int'];
  scope?: InputMaybe<UserScope>;
  sort?: InputMaybe<Array<UserSort>>;
  types?: InputMaybe<Array<UserType>>;
};

export type QueryValidateConversationTokenArgs = {
  input: ValidateConversationTokenInput;
};

export type QueryValidateOrderArgs = {
  input: Dapi_CreateOrderInput;
};

export type QueryValidatePasswordArgs = {
  password: Scalars['String'];
};

export type QueryVideoAdGroupGeoMetricsArgs = {
  adGroupId?: InputMaybe<Scalars['String']>;
  advertiserId: Scalars['String'];
  campaignId: Scalars['String'];
  endDate: Scalars['Date'];
  resolution?: InputMaybe<AnalyticsResolution>;
  startDate: Scalars['Date'];
  zip?: InputMaybe<Scalars['Boolean']>;
};

export type QueryVideoAdGroupPerformanceMetricsArgs = {
  adGroupId?: InputMaybe<Scalars['String']>;
  advertiserId: Scalars['String'];
  campaignId?: InputMaybe<Scalars['String']>;
  endDate: Scalars['Date'];
  resolution?: InputMaybe<AnalyticsResolution>;
  startDate: Scalars['Date'];
};

export type QueryVideoAdGroupPerformanceSummaryArgs = {
  adGroupId?: InputMaybe<Scalars['String']>;
  advertiserId: Scalars['String'];
  campaignId?: InputMaybe<Scalars['String']>;
  endDate: Scalars['Date'];
  resolution?: InputMaybe<AnalyticsResolution>;
  startDate: Scalars['Date'];
};

export type QueryVideoAdvertiserGeoMetricsArgs = {
  advertiserId: Scalars['String'];
  endDate: Scalars['Date'];
  resolution?: InputMaybe<AnalyticsResolution>;
  startDate: Scalars['Date'];
  zip?: InputMaybe<Scalars['Boolean']>;
};

export type QueryVideoAdvertiserPerformanceMetricsArgs = {
  advertiserId: Scalars['String'];
  endDate: Scalars['Date'];
  resolution?: InputMaybe<AnalyticsResolution>;
  startDate: Scalars['Date'];
};

export type QueryVideoAdvertiserPerformanceSummaryArgs = {
  advertiserId: Scalars['String'];
  endDate: Scalars['Date'];
  resolution?: InputMaybe<AnalyticsResolution>;
  startDate: Scalars['Date'];
};

export type QueryVideoBrandMetricsArgs = {
  adGroupId?: InputMaybe<Scalars['String']>;
  advertiserId: Scalars['String'];
  campaignId?: InputMaybe<Scalars['String']>;
  endDate: Scalars['Date'];
  resolution?: InputMaybe<AnalyticsResolution>;
  startDate: Scalars['Date'];
};

export type QueryVideoCampaignGeoMetricsArgs = {
  advertiserId: Scalars['String'];
  campaignId?: InputMaybe<Scalars['String']>;
  endDate: Scalars['Date'];
  resolution?: InputMaybe<AnalyticsResolution>;
  startDate: Scalars['Date'];
  zip?: InputMaybe<Scalars['Boolean']>;
};

export type QueryVideoCampaignPerformanceMetricsArgs = {
  advertiserId: Scalars['String'];
  campaignId?: InputMaybe<Scalars['String']>;
  endDate: Scalars['Date'];
  resolution?: InputMaybe<AnalyticsResolution>;
  startDate: Scalars['Date'];
};

export type QueryVideoCampaignPerformanceSummaryArgs = {
  advertiserId: Scalars['String'];
  campaignId?: InputMaybe<Scalars['String']>;
  endDate: Scalars['Date'];
  resolution?: InputMaybe<AnalyticsResolution>;
  startDate: Scalars['Date'];
};

export type QueryVideoConversionMetricsArgs = {
  adGroupId?: InputMaybe<Scalars['String']>;
  advertiserId: Scalars['String'];
  campaignId?: InputMaybe<Scalars['String']>;
  endDate: Scalars['Date'];
  resolution?: InputMaybe<AnalyticsResolution>;
  startDate: Scalars['Date'];
};

export type QueryVideoCreativeMetricsArgs = {
  adGroupId?: InputMaybe<Scalars['String']>;
  advertiserId: Scalars['String'];
  campaignId?: InputMaybe<Scalars['String']>;
  endDate: Scalars['Date'];
  resolution?: InputMaybe<AnalyticsResolution>;
  startDate: Scalars['Date'];
};

export type QueryVideoDeviceTypeMetricsArgs = {
  adGroupId?: InputMaybe<Scalars['String']>;
  advertiserId: Scalars['String'];
  campaignId?: InputMaybe<Scalars['String']>;
  endDate: Scalars['Date'];
  resolution?: InputMaybe<AnalyticsResolution>;
  startDate: Scalars['Date'];
};

export type QueryVideoFoldMetricsArgs = {
  adGroupId?: InputMaybe<Scalars['String']>;
  advertiserId: Scalars['String'];
  campaignId?: InputMaybe<Scalars['String']>;
  endDate: Scalars['Date'];
  resolution?: InputMaybe<AnalyticsResolution>;
  startDate: Scalars['Date'];
};

export type QueryVideoTimeOfDayMetricsArgs = {
  adGroupId?: InputMaybe<Scalars['String']>;
  advertiserId: Scalars['String'];
  campaignId?: InputMaybe<Scalars['String']>;
  endDate: Scalars['Date'];
  startDate: Scalars['Date'];
};

export type QueryWillProposalHaveRecommendedCampaignsArgs = {
  advertiserId: Scalars['Float'];
  budget: Scalars['Float'];
  end: Scalars['DateTime'];
  goal: ProposalGoalType;
  recommendationCampaignType: RecommendationCampaignType;
  start: Scalars['DateTime'];
};

export type QueryYoutubeAdGroupPerformanceMetricsArgs = {
  adGroupId?: InputMaybe<Scalars['String']>;
  advertiserId: Scalars['String'];
  campaignId?: InputMaybe<Scalars['String']>;
  endDate: Scalars['Date'];
  resolution?: InputMaybe<AnalyticsResolution>;
  startDate: Scalars['Date'];
};

export type QueryYoutubeAdGroupPerformanceSummaryArgs = {
  adGroupId?: InputMaybe<Scalars['String']>;
  advertiserId: Scalars['String'];
  campaignId?: InputMaybe<Scalars['String']>;
  endDate: Scalars['Date'];
  resolution?: InputMaybe<AnalyticsResolution>;
  startDate: Scalars['Date'];
};

export type QueryYoutubeAdvertiserPerformanceMetricsArgs = {
  advertiserId: Scalars['String'];
  endDate: Scalars['Date'];
  resolution?: InputMaybe<AnalyticsResolution>;
  startDate: Scalars['Date'];
};

export type QueryYoutubeAdvertiserPerformanceSummaryArgs = {
  advertiserId: Scalars['String'];
  endDate: Scalars['Date'];
  resolution?: InputMaybe<AnalyticsResolution>;
  startDate: Scalars['Date'];
};

export type QueryYoutubeAudienceMetricsArgs = {
  adGroupId?: InputMaybe<Scalars['String']>;
  advertiserId: Scalars['String'];
  campaignId?: InputMaybe<Scalars['String']>;
  endDate: Scalars['Date'];
  resolution?: InputMaybe<AnalyticsResolution>;
  startDate: Scalars['Date'];
};

export type QueryYoutubeCampaignPerformanceMetricsArgs = {
  advertiserId: Scalars['String'];
  campaignId?: InputMaybe<Scalars['String']>;
  endDate: Scalars['Date'];
  resolution?: InputMaybe<AnalyticsResolution>;
  startDate: Scalars['Date'];
};

export type QueryYoutubeCampaignPerformanceSummaryArgs = {
  advertiserId: Scalars['String'];
  campaignId?: InputMaybe<Scalars['String']>;
  endDate: Scalars['Date'];
  resolution?: InputMaybe<AnalyticsResolution>;
  startDate: Scalars['Date'];
};

export type QueryYoutubeCreativeMetricsArgs = {
  adGroupId?: InputMaybe<Scalars['String']>;
  advertiserId: Scalars['String'];
  campaignId?: InputMaybe<Scalars['String']>;
  endDate: Scalars['Date'];
  resolution?: InputMaybe<AnalyticsResolution>;
  startDate: Scalars['Date'];
};

export type QueryYoutubeDeviceTypeMetricsArgs = {
  adGroupId?: InputMaybe<Scalars['String']>;
  advertiserId: Scalars['String'];
  campaignId?: InputMaybe<Scalars['String']>;
  endDate: Scalars['Date'];
  resolution?: InputMaybe<AnalyticsResolution>;
  startDate: Scalars['Date'];
};

export type QueryYoutubeGeoMetricsArgs = {
  adGroupId?: InputMaybe<Scalars['String']>;
  advertiserId: Scalars['String'];
  campaignId?: InputMaybe<Scalars['String']>;
  endDate: Scalars['Date'];
  resolution?: InputMaybe<AnalyticsResolution>;
  startDate: Scalars['Date'];
  zip?: InputMaybe<Scalars['Boolean']>;
};

export type Range = {
  __typename?: 'Range';
  max: Scalars['Float'];
  min: Scalars['Float'];
};

export type RangeInput = {
  max: Scalars['Float'];
  min: Scalars['Float'];
};

/** A billing rate. */
export type Rate = {
  __typename?: 'Rate';
  /** The billing type of the rate. */
  billingType: BillingType;
  /** The date that this rate was created. */
  created: Scalars['DateTime'];
  /** A human-friendly description for this rate. */
  description?: Maybe<Scalars['String']>;
  /** The flight minimum days amount required to spend for this rate. */
  flightMinimum: Scalars['Float'];
  /** The ID of the rate. */
  id: Scalars['ID'];
  /**
   * The minimum amount required to spend for this rate.
   * @deprecated Use monthlyBudgetMinimum, monthlyImpressionMinimum, or flightMinimum instead
   */
  minSpendAmount?: Maybe<Scalars['Float']>;
  /** The monthly budget minimum amount required to spend for this rate. */
  monthlyBudgetMinimum: Scalars['Float'];
  /** The monthly impression minimum amount required to spend for this rate. */
  monthlyImpressionMinimum: Scalars['Float'];
  /** The rate card that owns this rate. */
  rateCard: RateCard;
  /** The retail amount for this rate. */
  retailAmount: Scalars['Float'];
  /** The date that this rate was updated. */
  updated: Scalars['DateTime'];
  /** The wholesale amount for this rate. */
  wholesaleAmount: Scalars['Float'];
};

/** A rate card contains a list of rates. */
export type RateCard = {
  __typename?: 'RateCard';
  /** The date and time when the rate card was created. */
  created: Scalars['DateTime'];
  /** The rate card id */
  id: Scalars['ID'];
  /** The name of the rate card. */
  name: Scalars['String'];
  /** A list of rates associated with the rate card. */
  rates: Array<Rate>;
  /** The date and time when the rate card was last updated. */
  updated: Scalars['DateTime'];
};

export type RateCards = {
  __typename?: 'RateCards';
  rateCardIds: Array<Scalars['Float']>;
};

export type RateDetail = {
  __typename?: 'RateDetail';
  amount?: Maybe<Scalars['Float']>;
  effectiveDate?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
  inherited?: Maybe<Scalars['Boolean']>;
  rateCardId?: Maybe<Scalars['Float']>;
  rateType?: Maybe<RateTypeEnum>;
};

/** The possible kinds of rates you can have */
export enum RateTypeEnum {
  BudgetMinimum = 'BUDGET_MINIMUM',
  MonthMinimum = 'MONTH_MINIMUM',
  Retail = 'RETAIL',
  SetupFee = 'SETUP_FEE',
  Wholesale = 'WHOLESALE',
}

export type Rates = {
  __typename?: 'Rates';
  /** The rates */
  rates: Array<Rate>;
};

export type RecencyConversionValue = BaseConversionValue & {
  __typename?: 'RecencyConversionValue';
  conversions: Scalars['Float'];
  postClickConversions: Scalars['Float'];
  postImpressionConversions: Scalars['Float'];
  trackingLabelName?: Maybe<Scalars['String']>;
  trackingLabelSequence: Scalars['Float'];
};

export type RecencyGroup = {
  __typename?: 'RecencyGroup';
  maxDays?: Maybe<Scalars['Float']>;
  minDays?: Maybe<Scalars['Float']>;
};

export type RecencyResponse = {
  __typename?: 'RecencyResponse';
  interval: AnalyticsInterval;
  value: RecencyValue;
};

export type RecencyValue = {
  __typename?: 'RecencyValue';
  clicks: Scalars['Float'];
  conversions: Scalars['Float'];
  ctr: Scalars['Float'];
  impressions: Scalars['Float'];
  postClickConversions: Scalars['Float'];
  postImpressionConversions: Scalars['Float'];
  recencyGroup?: Maybe<RecencyGroup>;
};

export enum RecommendationCampaignType {
  Display = 'DISPLAY',
  DisplayAndVideo = 'DISPLAY_AND_VIDEO',
  Video = 'VIDEO',
}

/**
 * Input for `resetHierarchyProductConfig`.
 *
 * When a parameter is `true`, that field will be reset so that its value is inherited from the parent hierarchy.
 */
export type ResetHierarchyProductConfigInput = {
  /** When `true`, inherit `customName` from the parent hierarchy. */
  customName?: InputMaybe<Scalars['Boolean']>;
  /** When `true`, inherit `enabledAdvertiserIds` from the parent hierarchy. */
  enabledAdvertiserIds?: InputMaybe<Scalars['Boolean']>;
  /** When `true`, inherit `enabledForAllAdvertisers` from the parent hierarchy. */
  enabledForAllAdvertisers?: InputMaybe<Scalars['Boolean']>;
  /** When `true`, inherit `goalTypes` from the parent hierarchy. */
  goalTypes?: InputMaybe<Scalars['Boolean']>;
  /** The ID of the hierarchy being configured. */
  hierarchyId: Scalars['ID'];
  /** The ID of the product being configured. */
  productId: Scalars['ID'];
  /** When `true`, inherit `rateCardId` from the parent hierarchy. */
  rateCardId?: InputMaybe<Scalars['Boolean']>;
  /** When `true`, inherit `status` from the parent hierarchy. */
  status?: InputMaybe<Scalars['Boolean']>;
};

export type RollupAdvertiserPerformanceMetric = {
  __typename?: 'RollupAdvertiserPerformanceMetric';
  interval: AnalyticsInterval;
  value: RollupAdvertiserPerformanceValue;
};

export type RollupAdvertiserPerformanceMetricsResponse = {
  __typename?: 'RollupAdvertiserPerformanceMetricsResponse';
  metrics: Array<RollupAdvertiserPerformanceMetric>;
};

export type RollupAdvertiserPerformanceSummaryResponse = {
  __typename?: 'RollupAdvertiserPerformanceSummaryResponse';
  metrics: Array<RollupAdvertiserPerformanceMetric>;
  popMetrics: RollupAdvertiserPerformanceValue;
};

export type RollupAdvertiserPerformanceSummaryResponsePopMetricsArgs = {
  advertiserId: Scalars['String'];
  endDate: Scalars['Date'];
  productTypes?: InputMaybe<Array<ApiAnalyticsMediaType>>;
  startDate: Scalars['Date'];
};

export type RollupAdvertiserPerformanceValue = BaseRollupPerformanceValue & {
  __typename?: 'RollupAdvertiserPerformanceValue';
  clicks: Scalars['Float'];
  conversions: Scalars['Float'];
  ctr: Scalars['Float'];
  impressions: Scalars['Float'];
  viewCompletionRate: Scalars['Float'];
  viewsCompleted: Scalars['Float'];
  viewsStarted: Scalars['Float'];
};

export type SaveManualCustomCampaignInput = {
  budget?: InputMaybe<Scalars['Float']>;
  details?: InputMaybe<Scalars['String']>;
  end?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Float']>;
  isRecommended: Scalars['Boolean'];
  monthlyBudget?: InputMaybe<Array<Scalars['Float']>>;
  name?: InputMaybe<Scalars['String']>;
  product?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['DateTime']>;
  status?: InputMaybe<CampaignStatus>;
};

export type SaveManualDisplayCampaignInput = {
  behavioralTargets?: InputMaybe<Array<Scalars['String']>>;
  budget?: InputMaybe<Scalars['Float']>;
  contentTargets?: InputMaybe<Array<Scalars['String']>>;
  cpm?: InputMaybe<Scalars['Float']>;
  demographicTargets?: InputMaybe<Array<Scalars['String']>>;
  details?: InputMaybe<Scalars['String']>;
  end?: InputMaybe<Scalars['DateTime']>;
  forecast?: InputMaybe<CampaignForecastInput>;
  id?: InputMaybe<Scalars['Float']>;
  isRecommended: Scalars['Boolean'];
  monthlyBudget?: InputMaybe<Array<Scalars['Float']>>;
  name?: InputMaybe<Scalars['String']>;
  nativeTargets?: InputMaybe<Array<Scalars['String']>>;
  note?: InputMaybe<NoteInput>;
  product?: InputMaybe<Scalars['String']>;
  proposedImpressions?: InputMaybe<Scalars['Float']>;
  start?: InputMaybe<Scalars['DateTime']>;
  status?: InputMaybe<CampaignStatus>;
};

export type SaveManualEmailCampaignInput = {
  addOns?: InputMaybe<Array<Scalars['String']>>;
  budget?: InputMaybe<Scalars['Float']>;
  campaignBudget?: InputMaybe<Scalars['Float']>;
  consumerInterestTargets?: InputMaybe<Array<Scalars['String']>>;
  consumerLifestyleTargets?: InputMaybe<Array<Scalars['String']>>;
  cpm?: InputMaybe<Scalars['Float']>;
  demographicTargets?: InputMaybe<Array<Scalars['String']>>;
  flatFee?: InputMaybe<Scalars['Float']>;
  id?: InputMaybe<Scalars['Float']>;
  isFlatFeeBased?: InputMaybe<Scalars['Boolean']>;
  isRecommended: Scalars['Boolean'];
  name?: InputMaybe<Scalars['String']>;
  note?: InputMaybe<NoteInput>;
  product?: InputMaybe<Scalars['String']>;
  proposedSends?: InputMaybe<Scalars['Float']>;
  start?: InputMaybe<Scalars['DateTime']>;
  status?: InputMaybe<CampaignStatus>;
};

export type SaveManualGeofencingCampaignInput = {
  audienceTargeting?: InputMaybe<Scalars['String']>;
  budget?: InputMaybe<Scalars['Float']>;
  cpm?: InputMaybe<Scalars['Float']>;
  details: Scalars['String'];
  end: Scalars['DateTime'];
  id?: InputMaybe<Scalars['Float']>;
  isRecommended: Scalars['Boolean'];
  locationsFileId?: InputMaybe<Scalars['Float']>;
  locationsFileUri?: InputMaybe<Scalars['String']>;
  monthlyBudget: Array<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
  note?: InputMaybe<NoteInput>;
  product?: InputMaybe<Scalars['String']>;
  proposedImpressions?: InputMaybe<Scalars['Float']>;
  setupFee?: InputMaybe<Scalars['Float']>;
  start?: InputMaybe<Scalars['DateTime']>;
  status?: InputMaybe<CampaignStatus>;
};

export type SaveManualSemCampaignInput = {
  adSpend?: InputMaybe<Scalars['Float']>;
  budget?: InputMaybe<Scalars['Float']>;
  end?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Float']>;
  isRecommended: Scalars['Boolean'];
  managementFee?: InputMaybe<Scalars['Float']>;
  monthlyBudget?: InputMaybe<Array<Scalars['Float']>>;
  name?: InputMaybe<Scalars['String']>;
  note?: InputMaybe<NoteInput>;
  product?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['DateTime']>;
  status?: InputMaybe<CampaignStatus>;
};

export type SaveManualSeoCampaignInput = {
  budget?: InputMaybe<Scalars['Float']>;
  end?: InputMaybe<Scalars['DateTime']>;
  franchiseMultiLocation?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['Float']>;
  isRecommended: Scalars['Boolean'];
  monthsDuration?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
  note?: InputMaybe<NoteInput>;
  numberOfLocations?: InputMaybe<Scalars['Float']>;
  product?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['DateTime']>;
  status?: InputMaybe<CampaignStatus>;
};

export type SaveManualSocialMediaCampaignInput = {
  adSpend?: InputMaybe<Scalars['Float']>;
  behavioralTargets?: InputMaybe<Array<Scalars['String']>>;
  budget?: InputMaybe<Scalars['Float']>;
  end?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Float']>;
  isRecommended: Scalars['Boolean'];
  managementFee?: InputMaybe<Scalars['Float']>;
  monthlyBudget?: InputMaybe<Array<Scalars['Float']>>;
  name?: InputMaybe<Scalars['String']>;
  note?: InputMaybe<NoteInput>;
  product?: InputMaybe<Scalars['String']>;
  proposedImpressions?: InputMaybe<Scalars['Float']>;
  setupFee?: InputMaybe<Scalars['Float']>;
  start?: InputMaybe<Scalars['DateTime']>;
  status?: InputMaybe<CampaignStatus>;
};

export type SaveManualSpecializedCampaignInput = {
  adSpend?: InputMaybe<Scalars['Float']>;
  automateTicketCreation?: InputMaybe<Scalars['Boolean']>;
  budget?: InputMaybe<Scalars['Float']>;
  cpm?: InputMaybe<Scalars['Float']>;
  csvFileId?: InputMaybe<Scalars['Float']>;
  description?: InputMaybe<Scalars['String']>;
  end?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Float']>;
  impressions?: InputMaybe<Scalars['Float']>;
  isCPVBased?: InputMaybe<Scalars['Boolean']>;
  isRecommended: Scalars['Boolean'];
  managementFee?: InputMaybe<Scalars['Float']>;
  monthlyBudget?: InputMaybe<Array<Scalars['Float']>>;
  monthsDuration?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
  note?: InputMaybe<NoteInput>;
  product?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['DateTime']>;
  status?: InputMaybe<CampaignStatus>;
};

export type SaveManualStreamingAudioCampaignInput = {
  behavioralTargets?: InputMaybe<Array<Scalars['String']>>;
  budget?: InputMaybe<Scalars['Float']>;
  contentTargets?: InputMaybe<Array<Scalars['String']>>;
  cpm?: InputMaybe<Scalars['Float']>;
  demographicTargets?: InputMaybe<Array<Scalars['String']>>;
  end?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Float']>;
  isRecommended: Scalars['Boolean'];
  monthlyBudget?: InputMaybe<Array<Scalars['Float']>>;
  name?: InputMaybe<Scalars['String']>;
  note?: InputMaybe<NoteInput>;
  product?: InputMaybe<Scalars['String']>;
  proposedImpressions?: InputMaybe<Scalars['Float']>;
  start?: InputMaybe<Scalars['DateTime']>;
  status?: InputMaybe<CampaignStatus>;
};

export type SaveManualVideoCampaignInput = {
  addOns?: InputMaybe<Array<Scalars['String']>>;
  behavioralTargets?: InputMaybe<Array<Scalars['String']>>;
  budget?: InputMaybe<Scalars['Float']>;
  contentTargets?: InputMaybe<Array<Scalars['String']>>;
  cpm?: InputMaybe<Scalars['Float']>;
  demographicTargets?: InputMaybe<Array<Scalars['String']>>;
  details?: InputMaybe<Scalars['String']>;
  end?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Float']>;
  isCPVBased?: InputMaybe<Scalars['Boolean']>;
  isRecommended: Scalars['Boolean'];
  monthlyBudget?: InputMaybe<Array<Scalars['Float']>>;
  name?: InputMaybe<Scalars['String']>;
  note?: InputMaybe<NoteInput>;
  product?: InputMaybe<Scalars['String']>;
  proposedImpressions?: InputMaybe<Scalars['Float']>;
  start?: InputMaybe<Scalars['DateTime']>;
  status?: InputMaybe<CampaignStatus>;
};

export type SearchAdGroupPerformanceMetric = {
  __typename?: 'SearchAdGroupPerformanceMetric';
  interval: AnalyticsInterval;
  value: SearchAdGroupPerformanceValue;
};

export type SearchAdGroupPerformanceMetricsResponse = {
  __typename?: 'SearchAdGroupPerformanceMetricsResponse';
  metrics: Array<SearchAdGroupPerformanceMetric>;
};

export type SearchAdGroupPerformanceSummaryResponse = {
  __typename?: 'SearchAdGroupPerformanceSummaryResponse';
  metrics: Array<SearchAdGroupPerformanceMetric>;
  popMetrics?: Maybe<SearchPopMetrics>;
};

export type SearchAdGroupPerformanceSummaryResponsePopMetricsArgs = {
  adGroupId?: InputMaybe<Scalars['String']>;
  advertiserId: Scalars['String'];
  campaignId?: InputMaybe<Scalars['String']>;
  endDate: Scalars['Date'];
  resolution?: InputMaybe<AnalyticsResolution>;
  startDate: Scalars['Date'];
};

export type SearchAdGroupPerformanceValue = BaseAdGroupPerformanceValue &
  BaseSearchPerformanceValue & {
    __typename?: 'SearchAdGroupPerformanceValue';
    adGroupId: Scalars['String'];
    adGroupName: Scalars['String'];
    clicks: Scalars['Float'];
    conversionRate: Scalars['Float'];
    conversions: Scalars['Float'];
    costPerClick?: Maybe<CurrencyDto>;
    costPerConversion?: Maybe<CurrencyDto>;
    ctr: Scalars['Float'];
    impressions: Scalars['Float'];
    spend?: Maybe<CurrencyDto>;
  };

export type SearchAdvertiserPerformanceMetric = {
  __typename?: 'SearchAdvertiserPerformanceMetric';
  interval: AnalyticsInterval;
  value: SearchAdvertiserPerformanceValue;
};

export type SearchAdvertiserPerformanceMetricsResponse = {
  __typename?: 'SearchAdvertiserPerformanceMetricsResponse';
  metrics: Array<SearchAdvertiserPerformanceMetric>;
};

export type SearchAdvertiserPerformanceSummaryResponse = {
  __typename?: 'SearchAdvertiserPerformanceSummaryResponse';
  metrics: Array<SearchAdvertiserPerformanceMetric>;
  popMetrics?: Maybe<SearchPopMetrics>;
};

export type SearchAdvertiserPerformanceSummaryResponsePopMetricsArgs = {
  advertiserId: Scalars['String'];
  endDate: Scalars['Date'];
  resolution?: InputMaybe<AnalyticsResolution>;
  startDate: Scalars['Date'];
};

export type SearchAdvertiserPerformanceValue = BaseSearchPerformanceValue & {
  __typename?: 'SearchAdvertiserPerformanceValue';
  advertiserId: Scalars['String'];
  clicks: Scalars['Float'];
  conversionRate: Scalars['Float'];
  conversions: Scalars['Float'];
  costPerClick?: Maybe<CurrencyDto>;
  costPerConversion?: Maybe<CurrencyDto>;
  ctr: Scalars['Float'];
  impressions: Scalars['Float'];
  spend?: Maybe<CurrencyDto>;
};

export type SearchAdvertiserProductRequest = {
  advertisingClasses?: InputMaybe<Array<Scalars['String']>>;
  advertisingLines?: InputMaybe<Array<Scalars['String']>>;
  advertisingTypes?: InputMaybe<Array<Scalars['String']>>;
  ids?: InputMaybe<Array<Scalars['ID']>>;
  name?: InputMaybe<Scalars['String']>;
  pageNumber?: Scalars['Int'];
  pageSize?: Scalars['Int'];
};

export type SearchCampaignPerformanceMetric = {
  __typename?: 'SearchCampaignPerformanceMetric';
  interval: AnalyticsInterval;
  value: SearchCampaignPerformanceValue;
};

export type SearchCampaignPerformanceMetricsResponse = {
  __typename?: 'SearchCampaignPerformanceMetricsResponse';
  metrics: Array<SearchCampaignPerformanceMetric>;
};

export type SearchCampaignPerformanceSummaryResponse = {
  __typename?: 'SearchCampaignPerformanceSummaryResponse';
  metrics: Array<SearchCampaignPerformanceMetric>;
  popMetrics?: Maybe<SearchPopMetrics>;
};

export type SearchCampaignPerformanceSummaryResponsePopMetricsArgs = {
  advertiserId: Scalars['String'];
  campaignId?: InputMaybe<Scalars['String']>;
  endDate: Scalars['Date'];
  resolution?: InputMaybe<AnalyticsResolution>;
  startDate: Scalars['Date'];
};

export type SearchCampaignPerformanceValue = BaseCampaignPerformanceValue &
  BaseSearchPerformanceValue & {
    __typename?: 'SearchCampaignPerformanceValue';
    campaignId: Scalars['String'];
    campaignName?: Maybe<Scalars['String']>;
    clicks: Scalars['Float'];
    conversionRate: Scalars['Float'];
    conversions: Scalars['Float'];
    costPerClick?: Maybe<CurrencyDto>;
    costPerConversion?: Maybe<CurrencyDto>;
    ctr: Scalars['Float'];
    impressions: Scalars['Float'];
    spend?: Maybe<CurrencyDto>;
  };

export type SearchConversionValue = {
  __typename?: 'SearchConversionValue';
  conversionActionName: Scalars['String'];
  conversions: Scalars['Float'];
};

export type SearchConversionsResponse = {
  __typename?: 'SearchConversionsResponse';
  interval: AnalyticsInterval;
  value: SearchConversionValue;
};

export type SearchDeviceTypeMetricsResponse = {
  __typename?: 'SearchDeviceTypeMetricsResponse';
  interval: AnalyticsInterval;
  value: SearchDeviceTypeValue;
};

export type SearchDeviceTypeValue = BaseGoogleDeviceTypeValue & {
  __typename?: 'SearchDeviceTypeValue';
  clicks: Scalars['Float'];
  conversionRate: Scalars['Float'];
  conversions: Scalars['Float'];
  costPerClick?: Maybe<CurrencyDto>;
  costPerConversion?: Maybe<CurrencyDto>;
  ctr: Scalars['Float'];
  deviceType: GoogleDeviceTypeEnum;
  impressions: Scalars['Float'];
  spend?: Maybe<CurrencyDto>;
  view25PctCompletionRate: Scalars['Float'];
  view50PctCompletionRate: Scalars['Float'];
  view75PctCompletionRate: Scalars['Float'];
  viewCompletionRate: Scalars['Float'];
  viewRate: Scalars['Float'];
  views: Scalars['Float'];
  views25PctCompleted: Scalars['Float'];
  views50PctCompleted: Scalars['Float'];
  views75PctCompleted: Scalars['Float'];
  viewsCompleted: Scalars['Float'];
};

/** Input for `externalAdvertisersEager` query. */
export type SearchEagerExternalAdvertisersInput = {
  /** The hierarchy id of External Advertisers to find. Results are associated with at least the provided hierarchy id. */
  hierarchyId: Scalars['ID'];
  /** The name of External Advertisers to find. Supports partial matching. */
  name?: InputMaybe<Scalars['String']>;
  /** Return page _n_. Must be greater than 0. */
  pageNumber?: Scalars['Int'];
  /** Return _n_ elements per page. Must be between 1 and 100. */
  pageSize?: Scalars['Int'];
  /** Platform to filter External Advertisers by. */
  platform: Platform;
  /** A list of Platform Advertiser IDs to filter the External Advertisers by. */
  platformAdvertiserIds?: InputMaybe<Array<Scalars['String']>>;
};

/** Input for `externalAdGroups` query. */
export type SearchExternalAdGroupsInput = {
  /** A list of External Ad Group IDs to return. */
  ids?: InputMaybe<Array<Scalars['ID']>>;
  /** Return page _n_. Must be greater than 0. */
  pageNumber?: Scalars['Int'];
  /** Return _n_ elements per page. Must be between 1 and 100. */
  pageSize?: Scalars['Int'];
  /** Platform to filter External Ad Groups by. */
  platform?: InputMaybe<Platform>;
  /** A list of Platform Ad Group IDs to filter External Ad Groups by. */
  platformAdGroupIds?: InputMaybe<Array<Scalars['String']>>;
  /** A Platform Advertiser ID to filter External Ad Groups by. */
  platformAdvertiserId?: InputMaybe<Scalars['String']>;
  /** A Platform Campaign ID to filter External Ad Groups by. */
  platformCampaignId?: InputMaybe<Scalars['String']>;
};

/** Input for `externalAdvertisers` query. */
export type SearchExternalAdvertisersInput = {
  /** The hierarchy id of External Advertisers to find. Results are associated with at least the provided hierarchy id. */
  hierarchyId?: InputMaybe<Scalars['ID']>;
  /** A list of External Advertiser IDs to return. */
  ids?: InputMaybe<Array<Scalars['ID']>>;
  /** The name of External Advertisers to find. Supports partial matching. */
  name?: InputMaybe<Scalars['String']>;
  /** Return page _n_. Must be greater than 0. */
  pageNumber?: Scalars['Int'];
  /** Return _n_ elements per page. Must be between 1 and 100. */
  pageSize?: Scalars['Int'];
  /** Platform to filter External Advertisers by. */
  platform?: InputMaybe<Platform>;
  /** A list of Platform Advertiser IDs to filter the External Advertisers by. */
  platformAdvertiserIds?: InputMaybe<Array<Scalars['String']>>;
};

/** Input for `externalCampaigns` query. */
export type SearchExternalCampaignsInput = {
  /** A list of External Campaign IDs to return. */
  ids?: InputMaybe<Array<Scalars['ID']>>;
  /** Return page _n_. Must be greater than 0. */
  pageNumber?: Scalars['Int'];
  /** Return _n_ elements per page. Must be between 1 and 100. */
  pageSize?: Scalars['Int'];
  /** Platform to filter External Advertisers by. */
  platform?: InputMaybe<Platform>;
  /** A Platform Advertiser ID to filter External Advertisers by. */
  platformAdvertiserId?: InputMaybe<Scalars['String']>;
  /** A list of Platform Campaign IDs to filter External Advertisers by. */
  platformCampaignIds?: InputMaybe<Array<Scalars['String']>>;
};

/** Input for `facebookAdGroupAudiences` query. */
export type SearchFacebookAdGroupAudiencesInput = {
  /** Return page _n_. Must be greater than 0. */
  pageNumber?: Scalars['Int'];
  /** Return _n_ elements per page. Must be between 1 and 100. */
  pageSize?: Scalars['Int'];
  /** A list of Platform Ad Group IDs to filter Facebook Ad Group Audiences by. */
  platformAdGroupIds: Array<Scalars['String']>;
};

export type SearchGeoMetricsResponse = {
  __typename?: 'SearchGeoMetricsResponse';
  interval: AnalyticsInterval;
  value: SearchGeoValue;
};

export type SearchGeoValue = BaseGeoValue & {
  __typename?: 'SearchGeoValue';
  boundary?: Maybe<MapboxBoundary>;
  city?: Maybe<Scalars['String']>;
  clicks: Scalars['Float'];
  conversions: Scalars['Float'];
  coordinates?: Maybe<LatLongType>;
  country: Scalars['String'];
  impressions: Scalars['Float'];
  location: Scalars['String'];
  region: Scalars['String'];
  zip?: Maybe<Scalars['String']>;
};

/** Input for `searchHierarchyProducts` query. */
export type SearchHierarchyProductRequest = {
  /**
   * An advertiser ID to filter Hierarchy Products by.
   * When given with a hierarchy ID, ensure that the advertiser belongs to the given hierarchy!
   */
  advertiserId?: InputMaybe<Scalars['ID']>;
  /** A list of Advertising Product Classes to filter Hierarchy Products by. */
  advertisingProductClasses?: InputMaybe<Array<Scalars['String']>>;
  /** A list of Advertising Product Lines to filter Hierarchy Products by. */
  advertisingProductLines?: InputMaybe<Array<Scalars['String']>>;
  /** A Hierarchy ID to filter Hierarchy Products by. */
  hierarchyId?: InputMaybe<Scalars['ID']>;
  /** A list of Hierarchy Product IDs to return. */
  ids?: InputMaybe<Array<Scalars['ID']>>;
  /** A list of Legacy Product Keys to filter Hierarchy Products by. */
  legacyProductKeys?: InputMaybe<Array<Scalars['String']>>;
  /**
   * The name of a Hierarchy Product to find.
   * Supports partial matches on `HierarchyProduct.customName` and `Product.name`.
   */
  name?: InputMaybe<Scalars['String']>;
  /** Return page _n_. Must be greater than 0. */
  pageNumber?: Scalars['Int'];
  /** Return _n_ elements per page. Must be between 1 and 50. */
  pageSize?: Scalars['Int'];
  /** A Product ID to filter Hierarchy Products by. */
  productId?: InputMaybe<Scalars['ID']>;
  /** The status of the hierarchy product. */
  status?: InputMaybe<HierarchyProductStatus>;
};

export type SearchKeywordsResponse = {
  __typename?: 'SearchKeywordsResponse';
  interval: AnalyticsInterval;
  value: SearchKeywordsValue;
};

export type SearchKeywordsValue = {
  __typename?: 'SearchKeywordsValue';
  clicks: Scalars['Float'];
  conversionRate: Scalars['Float'];
  conversions: Scalars['Float'];
  costPerClick?: Maybe<CurrencyDto>;
  costPerConversion?: Maybe<CurrencyDto>;
  ctr: Scalars['Float'];
  impressions: Scalars['Float'];
  keyword: Scalars['String'];
  spend?: Maybe<CurrencyDto>;
};

/** Input for `linkedAdvertisers` query. */
export type SearchLinkedAdvertisersInput = {
  /** A list of Advertiser IDs to filter Linked Advertisers by. */
  advertiserIds?: InputMaybe<Array<Scalars['Int']>>;
  /** Return page _n_. Must be greater than 0. */
  pageNumber?: Scalars['Int'];
  /** Return _n_ elements per page. Must be between 1 and 100. */
  pageSize?: Scalars['Int'];
  /** Platform to filter Linked Advertisers by. */
  platform?: InputMaybe<Platform>;
  /** A list of Platform Advertiser IDs to filter Linked Advertisers by. */
  platformAdvertiserIds?: InputMaybe<Array<Scalars['String']>>;
  /** The hierarchy that created the linked advertisers. */
  sourceHierarchyId?: InputMaybe<Scalars['ID']>;
};

export type SearchLocationsResponse = PaginatedResponse & {
  __typename?: 'SearchLocationsResponse';
  pageNumber: Scalars['Int'];
  pageSize: Scalars['Int'];
  results: Array<Location>;
  totalCount?: Maybe<Scalars['Int']>;
  totalPages?: Maybe<Scalars['Int']>;
};

export enum SearchOrderDetailStatusEnum {
  Canceled = 'CANCELED',
  Complete = 'COMPLETE',
  Draft = 'DRAFT',
  Live = 'LIVE',
  New = 'NEW',
  Paused = 'PAUSED',
  Pending = 'PENDING',
  Sold = 'SOLD',
}

export type SearchPopMetrics = {
  __typename?: 'SearchPopMetrics';
  clicks: Scalars['Float'];
  conversionRate: Scalars['Float'];
  conversions: Scalars['Float'];
  costPerClick: Scalars['Float'];
  costPerConversion: Scalars['Float'];
  ctr: Scalars['Float'];
  impressions: Scalars['Float'];
  spend: Scalars['Float'];
};

/** Input for `tradedeskCampaignConversionTrackingLabelSets` query. */
export type SearchTradedeskCampaignConversionTrackingLabelSetsInput = {
  /** Return page _n_. Must be greater than 0. */
  pageNumber?: Scalars['Int'];
  /** Return _n_ elements per page. Must be between 1 and 100. */
  pageSize?: Scalars['Int'];
  /** A list of Platform Campaign IDs to filter Tradedesk Campaign Conversion Tracking Label Sets by. */
  platformCampaignIds: Array<Scalars['String']>;
};

export type SendTemplatedEmailInput = {
  /** The list of addresses to blind copy this email to. */
  bccEmails?: InputMaybe<Array<Scalars['String']>>;
  /** The list of addresses to copy this email to. */
  ccEmails?: InputMaybe<Array<Scalars['String']>>;
  /** The template to use for the email subject and body. */
  templateId: Scalars['ID'];
  /** The template parameters to populate the given email template. */
  templateParams?: InputMaybe<Scalars['JSON']>;
  /** The list of addresses to direct this email to. */
  toEmails: Array<Scalars['String']>;
};

export type ShallowCampaign = {
  __typename?: 'ShallowCampaign';
  budget?: Maybe<Scalars['Float']>;
  created?: Maybe<Scalars['DateTime']>;
  end?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  note?: Maybe<Note>;
  orderId?: Maybe<Scalars['Float']>;
  product?: Maybe<Product>;
  productKey?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['DateTime']>;
  status?: Maybe<CampaignStatus>;
  ticketNumber?: Maybe<Scalars['String']>;
  type: Scalars['String'];
};

/** The signed uri of a `File`. */
export type SignedUri = {
  __typename?: 'SignedURI';
  /**
   * The date/time when the `uri` link will expire.
   * After this time you can no longer download the file and will need to re-request the SignedURI.
   */
  expiresAt: Scalars['DateTime'];
  /** The URI the file can be downloaded from. */
  uri: Scalars['String'];
};

export type SoftwareProduct = ProductResponse & {
  __typename?: 'SoftwareProduct';
  category: ProductCategory;
  created: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  legacyProductKeys?: Maybe<Array<Scalars['String']>>;
  name: Scalars['String'];
  productForms: Array<ProductForm>;
  type: ProductType;
  updated: Scalars['DateTime'];
};

/** Possible sort directions */
export enum SortDirection {
  Asc = 'ASC',
  Desc = 'DESC',
}

export type SortOrderDetailsData = {
  direction: OrderDetailsSearchSortDirection;
  field: OrderDetailsSearchSortFields;
};

export type SortOrdersData = {
  direction: OrderSearchSortDirection;
  field: OrderSearchSortFields;
};

export type TargetValues = {
  __typename?: 'TargetValues';
  app: Scalars['Float'];
  ctv: Scalars['Float'];
  uniques: Scalars['Float'];
  value: Scalars['String'];
  web: Scalars['Float'];
};

/** describes the day and time for an analytics value */
export type TimeOfDayInterval = {
  __typename?: 'TimeOfDayInterval';
  /** day of the week, ie MONDAY */
  dayOfWeek?: Maybe<DayOfWeekEnum>;
  /** hour of day, ie 0 -> 23 */
  hourOfDay: Scalars['Float'];
};

/** A tracking label on a Tradedesk campaign. */
export type TradedeskCampaignConversionTrackingInput = {
  name: Scalars['String'];
  reportingColumnId: Scalars['Int'];
};

export type TradedeskCampaignConversionTrackingLabel = {
  __typename?: 'TradedeskCampaignConversionTrackingLabel';
  name: Scalars['String'];
  reportingColumnId: Scalars['Int'];
};

export type TradedeskCampaignConversionTrackingLabelSet = {
  __typename?: 'TradedeskCampaignConversionTrackingLabelSet';
  conversionTrackingLabels: Array<TradedeskCampaignConversionTrackingLabel>;
  platformCampaignId: Scalars['String'];
  platformCampaignName: Scalars['String'];
};

/** A request to upsert conversion tracking labels on a single Tradedesk external campaign. */
export type TradedeskCampaignConversionTrackingLabelSetInput = {
  conversionTrackingLabels: Array<TradedeskCampaignConversionTrackingInput>;
  platformCampaignId: Scalars['String'];
};

/** Paginated Tradedesk Campaign Conversion Tracking Label Sets. */
export type TradedeskCampaignConversionTrackingLabelSets = {
  __typename?: 'TradedeskCampaignConversionTrackingLabelSets';
  pageNumber: Scalars['Int'];
  pageSize: Scalars['Int'];
  results: Array<TradedeskCampaignConversionTrackingLabelSet>;
  totalCount: Scalars['Int'];
  totalPages: Scalars['Int'];
};

export type TtdAudienceResponse = {
  __typename?: 'TtdAudienceResponse';
  interval: AnalyticsInterval;
  value: TtdAudienceValue;
};

export type TtdAudienceValue = {
  __typename?: 'TtdAudienceValue';
  clicks: Scalars['Float'];
  ctr: Scalars['Float'];
  impressions: Scalars['Float'];
  name: Scalars['String'];
};

export enum TtdDeviceTypeEnum {
  ConnectedTv = 'CONNECTED_TV',
  Desktop = 'DESKTOP',
  Mobile = 'MOBILE',
  Other = 'OTHER',
  Tablet = 'TABLET',
}

/** Possible types for targeting */
export enum TypeEnum {
  Behavioral = 'BEHAVIORAL',
  ConsumerInterest = 'CONSUMER_INTEREST',
  ConsumerLifestyle = 'CONSUMER_LIFESTYLE',
  Content = 'CONTENT',
  Demo = 'DEMO',
  Native = 'NATIVE',
}

export type UnlinkedPlatformCampaign = {
  __typename?: 'UnlinkedPlatformCampaign';
  externalCampaignId: Scalars['String'];
  name: Scalars['String'];
  platform: PlatformEnum;
};

export type UnsubscribeInput = {
  /** The list of emails to unsubscribe. */
  emails: Array<Scalars['String']>;
};

export type UpdateAdMixCampaignInput = {
  budget: Scalars['Float'];
  id?: InputMaybe<Scalars['Float']>;
  monthlyBudget: Array<Scalars['Float']>;
  name: Scalars['String'];
  platformAllocations?: InputMaybe<Array<UpdatePlatformAllocationInput>>;
  status: Scalars['String'];
};

export type UpdateAdvertiserInput = {
  hierarchyId?: InputMaybe<Scalars['Float']>;
  id: Scalars['Float'];
  industry?: InputMaybe<Scalars['String']>;
  keywords?: InputMaybe<Array<Scalars['String']>>;
  logoFileId?: InputMaybe<Scalars['Float']>;
  microIndustries?: InputMaybe<Array<Scalars['String']>>;
  name?: InputMaybe<Scalars['String']>;
  website?: InputMaybe<Scalars['String']>;
};

/** Input for `updateAdvertisingProduct`. */
export type UpdateAdvertisingProductInput = {
  advertisingClass?: InputMaybe<Scalars['String']>;
  advertisingLine?: InputMaybe<Scalars['String']>;
  advertisingType?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  /** The ID of the Advertising Product to update. */
  id: Scalars['ID'];
  legacyProductKeys?: InputMaybe<Array<Scalars['String']>>;
  /**
   * The name of the Advertising Product. Must be unique. `name` is used in various places to identify
   * products and changes could have unintended consequences - proceed with caution.
   */
  name?: InputMaybe<Scalars['String']>;
  platforms?: InputMaybe<Array<Platform>>;
  productFormAppIds?: InputMaybe<Array<Scalars['ID']>>;
  type?: InputMaybe<ProductType>;
};

export type UpdateBusinessHourInput = {
  closeTime?: InputMaybe<Scalars['String']>;
  id: Scalars['Float'];
  openTime?: InputMaybe<Scalars['String']>;
};

/** Input for `updateCampaign`. */
export type UpdateCampaignInput = {
  /** The ID of the campaign on the external platform */
  externalCampaignId?: InputMaybe<Scalars['ID']>;
  /** The ID of the campaign to update */
  id: Scalars['ID'];
  /** A human readable name for the campaign */
  name?: InputMaybe<Scalars['String']>;
  /** The platform to associate this campaign with */
  platform?: InputMaybe<Platform>;
};

export type UpdateConversationContextInput = {
  conversationId: Scalars['Int'];
  /** The default notification data for user notifications that are created whenever a message is added to the conversation. */
  notificationData?: InputMaybe<NotificationDataInput>;
  /** The `refereceUrl` for user notifications that are created whenever a message is added to the conversation. */
  referenceUrl?: InputMaybe<Scalars['String']>;
  /** The `subject` for emails that are sent whenever a message is added to the conversation. */
  subject?: InputMaybe<Scalars['String']>;
};

export type UpdateConversationListenerUserEmailsInput = {
  id: Scalars['Int'];
  userEmails?: Array<Scalars['String']>;
};

/** Input for `UpdateFile` Mutation. */
export type UpdateFileInput = {
  /** The date/time when the files content will be removed and can no longer be downloaded. */
  fileExpiryDate?: InputMaybe<Scalars['DateTime']>;
  /** The id of the file to update */
  id: Scalars['ID'];
};

export type UpdateHierarchyInput = {
  id: Scalars['Float'];
  mongoId?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  ownerId?: InputMaybe<Scalars['String']>;
  parentId?: InputMaybe<Scalars['Float']>;
  shortName?: InputMaybe<Scalars['String']>;
  styleColor1?: InputMaybe<Scalars['String']>;
  styleColor2?: InputMaybe<Scalars['String']>;
  styleLogo?: InputMaybe<Scalars['String']>;
};

/** Input for `updateHierarchyProductConfig`. */
export type UpdateHierarchyProductConfigInput = {
  /**
   * The customized name to display instead of the product name within the hierarchy.
   *
   * When blank, `customName` will be reset and inherited from the parent product config..
   */
  customName?: InputMaybe<Scalars['String']>;
  /** The specific advertisers that the product should be enabled for when `enabledForAllAdvertisers == false`. */
  enabledAdvertiserIds?: InputMaybe<Array<Scalars['ID']>>;
  /** When true, the product is enabled for all advertisers that are a child of the hierarchy. */
  enabledForAllAdvertisers?: InputMaybe<Scalars['Boolean']>;
  /**
   * The goal types to use for the product within the hierarchy.
   *
   * When empty, `goalTypes` will be reset and inherited from the parent product config.
   */
  goalTypes?: InputMaybe<Array<AllocationGoalType>>;
  /** The ID of the hierarchy being configured. */
  hierarchyId: Scalars['ID'];
  /** The ID of the product being configured. */
  productId: Scalars['ID'];
  /** The ID of a rate card to use for the product within the hierarchy. */
  rateCardId?: InputMaybe<Scalars['ID']>;
  /**
   * The status of the product within the hierarchy.
   *
   * When `ENABLED`, the product must also be enabled in the parent hierarchy.
   *
   * When the status changes, all child hierarchy product configs will be updated to inherit the new status.
   */
  status?: InputMaybe<HierarchyProductStatus>;
};

export type UpdateHierarchyProductRequest = {
  customName?: InputMaybe<Scalars['String']>;
  enabledAdvertiserIds?: InputMaybe<Array<Scalars['ID']>>;
  enabledForAllAdvertisers?: InputMaybe<Scalars['Boolean']>;
  goalTypes?: InputMaybe<Array<AllocationGoalType>>;
  rateCardId?: InputMaybe<Scalars['ID']>;
};

/** Input for `updateLineItem`. */
export type UpdateLineItemInput = {
  /** The ID of the rate to set as active. This must exist on the line item's associated rate card. */
  activeRateId?: InputMaybe<Scalars['ID']>;
  /**
   * The advertiser location IDs for this line item. Unless the value is null,
   * this overwrites any existing value.
   */
  advertiserLocationIds?: InputMaybe<Array<Scalars['ID']>>;
  /**
   * Provide allocations for the line item. Unless the value is null, the provided list will overwrite any
   * previous allocations on the line item.
   */
  allocations?: InputMaybe<Array<LineItemAllocationInput>>;
  /** The assignee's user id. Set this to a blank string to unset the assignee. */
  assigneeUserId?: InputMaybe<Scalars['ID']>;
  /**
   * The list of flags to add to the line item. Unless the value is null, the provided list will overwrite any
   * previous flags on the line item.
   * Example: `["Needs Response", "Missing Information"]`
   */
  flags?: InputMaybe<Array<Scalars['String']>>;
  /**
   * The follower user ids. Unless the value is null, the provided list will overwrite any
   * previous followers on the order detail.
   */
  followerUserIds?: InputMaybe<Array<Scalars['String']>>;
  /** The geolocations that are associated with this input. Any existing locations will be overwritten! */
  geoLocations?: InputMaybe<GeoLocationsInput>;
  /** The ID of the line item to update. */
  id: Scalars['ID'];
  /** The message conversation ID. */
  messageConversationId?: InputMaybe<Scalars['ID']>;
  /** The name of the line item. */
  name?: InputMaybe<Scalars['String']>;
  /** The notes conversation ID. */
  notesConversationId?: InputMaybe<Scalars['ID']>;
  /** Information specific to the line item's product (defined by the productKey). */
  productInfo?: InputMaybe<Scalars['JSON']>;
  /** Freeform notes to store additional info about the proposed phase of the line item */
  proposalNotes?: InputMaybe<Scalars['String']>;
  /** The ID of the rate card. */
  rateCardId?: InputMaybe<Scalars['ID']>;
  /** The requesting user's id. Set this to a blank string to reset it to default (order requester). */
  requesterUserId?: InputMaybe<Scalars['ID']>;
  /** The status of the line item. */
  status?: InputMaybe<LineItemStatus>;
  /**
   * The targeting information for this line item. Only non-null values of fields (eg 'behavioral') will be applied.
   * All existing targeting information will remain when not overriden.
   */
  targeting?: InputMaybe<LineItemTargetingInput>;
};

/** Input for `updateOrder`. */
export type UpdateOrderInput = {
  /** The ID of the advertiser the order pertains to. */
  advertiserId?: InputMaybe<Scalars['ID']>;
  /** The user ID that is assigned to the order. Provide an empty string to remove the assignee. */
  assigneeUserId?: InputMaybe<Scalars['ID']>;
  /** The date that this entity became an official order. This will be applied to any existing line items. */
  dateOfOrder?: InputMaybe<Scalars['Date']>;
  /** The ID of the order to update */
  id: Scalars['ID'];
  /** The name of the order. */
  name?: InputMaybe<Scalars['String']>;
  /** Custom information specific to the order. */
  orderInfo?: InputMaybe<Scalars['JSON']>;
  /** The requesting user's id. Set this to a blank string to reset it to default (order creator). */
  requesterUserId?: InputMaybe<Scalars['ID']>;
};

/** Input for `mutation updateOrderRequesters`. */
export type UpdateOrderRequestersInput = {
  /** If true, apply the requester ID to all line items. `lineItemIds` will be ignored if true. */
  applyToAllLineItems?: Scalars['Boolean'];
  /** If true, change the requester on the order. */
  applyToOrder?: Scalars['Boolean'];
  /** The list of the line item IDs to apply the requester to. If null or empty, no line items will be impacted (unless `applyToAllLineItems` is true). */
  lineItemIds?: InputMaybe<Array<Scalars['ID']>>;
  /** The ID of the order to apply this update to. Required even when updating only line items (ie `applyToOrder` is false). */
  orderId: Scalars['ID'];
  /** The requester ID to apply to the order and or line items. */
  requesterId: Scalars['ID'];
};

export type UpdatePasswordInput = {
  currentPassword: Scalars['String'];
  newPassword: Scalars['String'];
};

export type UpdatePlatformAllocationInput = {
  allocation?: InputMaybe<Scalars['Float']>;
  behavioralTargets?: InputMaybe<Array<Scalars['String']>>;
  budget?: InputMaybe<Scalars['Float']>;
  contentTargets?: InputMaybe<Array<Scalars['String']>>;
  demographicTargets?: InputMaybe<Array<Scalars['String']>>;
  id?: InputMaybe<Scalars['Float']>;
  platform?: InputMaybe<Scalars['String']>;
};

export type UpdateProposalInput = {
  adMixCampaigns?: InputMaybe<Array<UpdateAdMixCampaignInput>>;
  advertiserId?: InputMaybe<Scalars['Float']>;
  budget?: InputMaybe<Scalars['Float']>;
  end?: InputMaybe<Scalars['DateTime']>;
  goal?: InputMaybe<ProposalGoalType>;
  id: Scalars['Float'];
  industry?: InputMaybe<Scalars['String']>;
  keywords?: InputMaybe<Array<Scalars['String']>>;
  locations?: InputMaybe<Array<Scalars['String']>>;
  locationsObject?: InputMaybe<ProposalLocationsInput>;
  manualCustomCampaigns?: InputMaybe<Array<SaveManualCustomCampaignInput>>;
  manualDisplayCampaigns?: InputMaybe<Array<SaveManualDisplayCampaignInput>>;
  manualEmailCampaigns?: InputMaybe<Array<SaveManualEmailCampaignInput>>;
  manualGeofencingCampaigns?: InputMaybe<Array<SaveManualGeofencingCampaignInput>>;
  manualSEMCampaigns?: InputMaybe<Array<SaveManualSemCampaignInput>>;
  manualSEOCampaigns?: InputMaybe<Array<SaveManualSeoCampaignInput>>;
  manualSocialMediaCampaigns?: InputMaybe<Array<SaveManualSocialMediaCampaignInput>>;
  manualSpecializedCampaigns?: InputMaybe<Array<SaveManualSpecializedCampaignInput>>;
  manualStreamingAudioCampaigns?: InputMaybe<Array<SaveManualStreamingAudioCampaignInput>>;
  manualVideoCampaigns?: InputMaybe<Array<SaveManualVideoCampaignInput>>;
  microIndustries?: InputMaybe<Array<Scalars['String']>>;
  name?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['DateTime']>;
  status?: InputMaybe<ProposalStatus>;
  type?: InputMaybe<Scalars['String']>;
  website?: InputMaybe<Scalars['String']>;
};

export type UpdateRateInput = {
  /** The billing type of the rate. */
  billingType?: InputMaybe<BillingType>;
  /** The description of the rate. */
  description?: InputMaybe<Scalars['String']>;
  /** The flight minimum days amount required to spend for this rate. */
  flightMinimum?: InputMaybe<Scalars['Float']>;
  /** The ID of the rate to update. */
  id: Scalars['ID'];
  /** The monthly minimum budget required to spend for this rate. */
  monthlyBudgetMinimum?: InputMaybe<Scalars['Float']>;
  /** The monthly minimum impressions required to spend for this rate. */
  monthlyImpressionMinimum?: InputMaybe<Scalars['Float']>;
  /** The rate's retail amount. */
  retailAmount?: InputMaybe<Scalars['Float']>;
  /** The rate's wholesale amount. */
  wholesaleAmount?: InputMaybe<Scalars['Float']>;
};

export type UpdateUserAvatarInput = {
  id: Scalars['String'];
  imageFileId?: InputMaybe<Scalars['Float']>;
};

export type UpdateUserHierarchiesInput = {
  hierarchies: Array<HierarchiesInput>;
  id: Scalars['String'];
};

export type UpdateUserInput = {
  data?: InputMaybe<UserDataInput>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  fullName?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  lastName?: InputMaybe<Scalars['String']>;
  middleName?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

export type UpdateUserPermissionsInput = {
  entityId?: InputMaybe<Scalars['String']>;
  grantType?: InputMaybe<GrantType>;
  hierarchyId?: InputMaybe<Scalars['String']>;
  hierarchyType?: InputMaybe<HierarchyType>;
  id: Scalars['String'];
  permissions?: InputMaybe<Array<Scalars['String']>>;
  roles?: InputMaybe<Array<UserPermissions>>;
};

/** Input for `mutation upsertAllocationRollup` */
export type UpsertAllocationRollupInput = {
  /** The range for which this allocation should be active. */
  dateRange: LineItemAllocationDateRangeInput;
  /**
   * Amounts to apply to this allocation. A `null` value for a nested property will be treated as nonexistent.
   * It is *not* possible to reset amounts.
   */
  goalAmounts: LineItemAllocationRollupGoalAmountsInput;
  /** The subtype of the allocation. Multiple allocations of different subtypes can exist in identical date ranges. */
  goalSubtype?: AllocationGoalSubtype;
  /** The ID of the line item to add this allocation rollup onto. */
  lineItemId: Scalars['ID'];
};

export type UpsertExternalAdGroupInput = {
  /** The display name. */
  name: Scalars['String'];
  /** The Platform the External Ad Group belongs to. */
  platform: Platform;
  /** The Platform Ad Group ID the External Ad Group belongs to. */
  platformAdGroupId: Scalars['String'];
  /** The Platform Campaign ID the External Ad Group belongs to. */
  platformCampaignId: Scalars['String'];
};

/** Input for `upsertExternalAdGroups` mutation. */
export type UpsertExternalAdGroupsInput = {
  /** A list of External Ad Groups to upsert. */
  adGroups: Array<UpsertExternalAdGroupInput>;
};

export type UpsertExternalAdvertiserInput = {
  /**
   * Describes hierarchies and related metadata to associate with the external advertiser.
   * Nullable for backwards-compatibility.
   */
  hierarchies?: InputMaybe<Array<ExternalAdvertiserHierarchyInput>>;
  /** The display name of the External Advertiser. */
  name: Scalars['String'];
  /** The Platform of the External Advertiser. */
  platform: Platform;
  /** The Platform Advertiser ID this External Advertiser belongs to. */
  platformAdvertiserId: Scalars['String'];
};

/** Input for `upsertExternalAdvertisers` mutation. */
export type UpsertExternalAdvertisersInput = {
  /** A list of External Advertisers to upsert. */
  advertisers: Array<UpsertExternalAdvertiserInput>;
};

export type UpsertExternalCampaignInput = {
  /** The display name. */
  name: Scalars['String'];
  /** The Platform the External Campaign belongs to. */
  platform: Platform;
  /** The Platform Advertiser ID the External Campaign belongs to. */
  platformAdvertiserId: Scalars['String'];
  /** The Platform Campaign ID the External Campaign belongs to. */
  platformCampaignId: Scalars['String'];
};

/** Input for `upsertExternalCampaigns` mutation. */
export type UpsertExternalCampaignsInput = {
  /** A list of External Campaigns to upsert. */
  campaigns: Array<UpsertExternalCampaignInput>;
};

/** Input for a single Facebook ad group's audience metadata. */
export type UpsertFacebookAdGroupAudienceInput = {
  /** JSON describing audience targeting data for this ad group. */
  audienceTargetingJson?: InputMaybe<Scalars['String']>;
  /** The Facebook ad group id to which metadata will be added. */
  platformAdGroupId: Scalars['String'];
};

/** Input for the `upsertFacebookAdGroupAudiences` mutation. */
export type UpsertFacebookAdGroupAudiencesInput = {
  /** A list of Facebook ad group metadata to upsert. */
  facebookAdGroupAudienceMetadata: Array<UpsertFacebookAdGroupAudienceInput>;
};

/** The input to the UpsertImprovadoAccountSettingsInput mutation. */
export type UpsertImprovadoAccountSettingsInput = {
  /** A list of improvado account ids for which this setting update is meant for */
  accountIds: Array<Scalars['ID']>;
  /** The subagency that this setting should be applied to. Important since an account can belong to multiple subagencies. */
  subagency: Scalars['ID'];
  /** The boolean flag to apply that decides whether improvado pulls new data or not for these improvado accounts */
  upload: Scalars['Boolean'];
};

/** A request to upsert conversion tracking labels on a list of existing Tradedesk external campaigns. */
export type UpsertTradedeskCampaignConversionTrackingLabelSetsInput = {
  labelSets: Array<TradedeskCampaignConversionTrackingLabelSetInput>;
};

export type UpsertedExternalAdGroups = {
  __typename?: 'UpsertedExternalAdGroups';
  adGroups: Array<ExternalAdGroup>;
};

export type UpsertedExternalAdvertisers = {
  __typename?: 'UpsertedExternalAdvertisers';
  advertisers: Array<ExternalAdvertiser>;
};

export type UpsertedExternalCampaigns = {
  __typename?: 'UpsertedExternalCampaigns';
  campaigns: Array<ExternalCampaign>;
};

/** The output of the Upsert Improvado Account Settings Mutation. Ids include those who successfully updated. */
export type UpsertedImprovadoAccountSettings = {
  __typename?: 'UpsertedImprovadoAccountSettings';
  /** A list of improvado account ids who were successfully updated with this setting */
  accountIds: Array<Scalars['ID']>;
  /** The subagency that this setting was applied to. Important since an account can belong to multiple subagencies. */
  subagency: Scalars['ID'];
  /** The setting that these Improvado Accounts have been updated to */
  upload: Scalars['Boolean'];
};

/** Federated `User` entity. */
export type User = {
  __typename?: 'User';
  active?: Maybe<Scalars['Boolean']>;
  data?: Maybe<UserData>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  grants: Array<GrantsResponse>;
  /**
   * The id of the user.  This is (technically) an ID type but because App's has this marked as a 'String'
   * we have to mirror it as a 'String' here
   */
  id?: Maybe<Scalars['String']>;
  imageFile?: Maybe<File>;
  /** @deprecated Use imageFile field instead */
  imageUrl?: Maybe<Scalars['String']>;
  lastLoginInstant?: Maybe<Scalars['Float']>;
  lastName?: Maybe<Scalars['String']>;
  logoFile?: Maybe<File>;
  /** @deprecated Use logoFile field instead */
  logoUri?: Maybe<Scalars['String']>;
  middleName?: Maybe<Scalars['String']>;
  parentAdvertiser?: Maybe<Advertiser>;
  parentHierarchies?: Maybe<Array<Hierarchy>>;
  parentHierarchy?: Maybe<Hierarchy>;
  parentHierarchyExternalIds?: Maybe<Array<Scalars['String']>>;
  permissions: Array<UserPermissions>;
  registrations?: Maybe<Array<UserRegistration>>;
  tenantId?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  verified?: Maybe<Scalars['Boolean']>;
};

export type UserData = {
  __typename?: 'UserData';
  imageFileId?: Maybe<Scalars['Float']>;
  parentId?: Maybe<Scalars['String']>;
  type?: Maybe<UserType>;
};

export type UserDataInput = {
  imageFileId?: InputMaybe<Scalars['Float']>;
  parentId?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<UserType>;
};

export enum UserPermissions {
  AllowIntegrations = 'allowIntegrations',
  AllowNewReports = 'allowNewReports',
  CanViewPacingKpi = 'canViewPacingKPI',
  EditCpm = 'editCpm',
  HideKnowledgeBase = 'hideKnowledgeBase',
  HideResourceCenter = 'hideResourceCenter',
  SubAdmin = 'subAdmin',
  SubmitAsIo = 'submitAsIO',
  UpdateRequestor = 'updateRequestor',
}

export type UserRegistration = {
  __typename?: 'UserRegistration';
  applicationId?: Maybe<Scalars['String']>;
  roles?: Maybe<Array<Scalars['String']>>;
  username?: Maybe<Scalars['String']>;
  verified?: Maybe<Scalars['Boolean']>;
};

export type UserScope = {
  advertiserId?: InputMaybe<Scalars['Float']>;
  hierarchyId?: InputMaybe<Scalars['Float']>;
  includeLineItemAssignees?: InputMaybe<Scalars['Boolean']>;
};

export type UserSort = {
  direction: Scalars['String'];
  field: Scalars['String'];
};

/** Possible types for users */
export enum UserType {
  Admin = 'admin',
  Customer = 'customer',
  Division = 'division',
  LineItemAssignee = 'lineItemAssignee',
  Ops = 'ops',
}

/** Response type for `query validateOrder`. */
export enum ValidOrder {
  /** The order is not valid. */
  Failure = 'FAILURE',
  /** The order is valid. */
  Success = 'SUCCESS',
}

export type ValidateConversationTokenInput = {
  authToken: ConversationAuthInput;
};

export type ValidatePasswordResponse = {
  __typename?: 'ValidatePasswordResponse';
  errors: Array<Scalars['String']>;
  result: Scalars['Boolean'];
};

export type VideoAdGroupPerformanceMetric = {
  __typename?: 'VideoAdGroupPerformanceMetric';
  interval: AnalyticsInterval;
  value: VideoAdGroupPerformanceValue;
};

export type VideoAdGroupPerformanceMetricsResponse = {
  __typename?: 'VideoAdGroupPerformanceMetricsResponse';
  metrics: Array<VideoAdGroupPerformanceMetric>;
};

export type VideoAdGroupPerformanceSummaryResponse = {
  __typename?: 'VideoAdGroupPerformanceSummaryResponse';
  metrics: Array<VideoAdGroupPerformanceMetric>;
  popMetrics?: Maybe<VideoPopMetrics>;
};

export type VideoAdGroupPerformanceSummaryResponsePopMetricsArgs = {
  adGroupId?: InputMaybe<Scalars['String']>;
  advertiserId: Scalars['String'];
  campaignId?: InputMaybe<Scalars['String']>;
  endDate: Scalars['Date'];
  resolution?: InputMaybe<AnalyticsResolution>;
  startDate: Scalars['Date'];
};

export type VideoAdGroupPerformanceValue = BaseVideoPerformanceValue & {
  __typename?: 'VideoAdGroupPerformanceValue';
  adGroupId: Scalars['String'];
  adGroupName: Scalars['String'];
  clicks: Scalars['Float'];
  conversions: Scalars['Float'];
  ctr: Scalars['Float'];
  impressions: Scalars['Float'];
  postClickConversions: Scalars['Float'];
  postImpressionConversions: Scalars['Float'];
  view25PctCompletionRate: Scalars['Float'];
  view50PctCompletionRate: Scalars['Float'];
  view75PctCompletionRate: Scalars['Float'];
  viewCompletionRate: Scalars['Float'];
  views25PctCompleted: Scalars['Float'];
  views50PctCompleted: Scalars['Float'];
  views75PctCompleted: Scalars['Float'];
  viewsCompleted: Scalars['Float'];
  viewsStarted: Scalars['Float'];
};

export type VideoAdvertiserPerformanceMetric = {
  __typename?: 'VideoAdvertiserPerformanceMetric';
  interval: AnalyticsInterval;
  value: VideoAdvertiserPerformanceValue;
};

export type VideoAdvertiserPerformanceMetricsResponse = {
  __typename?: 'VideoAdvertiserPerformanceMetricsResponse';
  metrics: Array<VideoAdvertiserPerformanceMetric>;
};

export type VideoAdvertiserPerformanceSummaryResponse = {
  __typename?: 'VideoAdvertiserPerformanceSummaryResponse';
  metrics: Array<VideoAdvertiserPerformanceMetric>;
  popMetrics?: Maybe<VideoPopMetrics>;
};

export type VideoAdvertiserPerformanceSummaryResponsePopMetricsArgs = {
  advertiserId: Scalars['String'];
  endDate: Scalars['Date'];
  resolution?: InputMaybe<AnalyticsResolution>;
  startDate: Scalars['Date'];
};

export type VideoAdvertiserPerformanceValue = BaseVideoPerformanceValue & {
  __typename?: 'VideoAdvertiserPerformanceValue';
  advertiserId: Scalars['String'];
  clicks: Scalars['Float'];
  conversions: Scalars['Float'];
  ctr: Scalars['Float'];
  impressions: Scalars['Float'];
  postClickConversions: Scalars['Float'];
  postImpressionConversions: Scalars['Float'];
  view25PctCompletionRate: Scalars['Float'];
  view50PctCompletionRate: Scalars['Float'];
  view75PctCompletionRate: Scalars['Float'];
  viewCompletionRate: Scalars['Float'];
  views25PctCompleted: Scalars['Float'];
  views50PctCompleted: Scalars['Float'];
  views75PctCompleted: Scalars['Float'];
  viewsCompleted: Scalars['Float'];
  viewsStarted: Scalars['Float'];
};

export type VideoBrandMetricsResponse = {
  __typename?: 'VideoBrandMetricsResponse';
  interval: AnalyticsInterval;
  value: VideoBrandValue;
};

export type VideoBrandValue = BaseBrandValue & {
  __typename?: 'VideoBrandValue';
  brand?: Maybe<Brand>;
  brandId?: Maybe<Scalars['String']>;
  clicks: Scalars['Float'];
  ctr: Scalars['Float'];
  impressions: Scalars['Float'];
  viewCompletionRate: Scalars['Float'];
  viewsCompleted: Scalars['Float'];
};

export type VideoCampaignPerformanceMetric = {
  __typename?: 'VideoCampaignPerformanceMetric';
  interval: AnalyticsInterval;
  value: VideoCampaignPerformanceValue;
};

export type VideoCampaignPerformanceMetricsResponse = {
  __typename?: 'VideoCampaignPerformanceMetricsResponse';
  aggregations: CampaignAggregations;
  metrics: Array<VideoCampaignPerformanceMetric>;
};

export type VideoCampaignPerformanceSummaryResponse = {
  __typename?: 'VideoCampaignPerformanceSummaryResponse';
  metrics: Array<VideoCampaignPerformanceMetric>;
  popMetrics?: Maybe<VideoPopMetrics>;
};

export type VideoCampaignPerformanceSummaryResponsePopMetricsArgs = {
  advertiserId: Scalars['String'];
  campaignId?: InputMaybe<Scalars['String']>;
  endDate: Scalars['Date'];
  resolution?: InputMaybe<AnalyticsResolution>;
  startDate: Scalars['Date'];
};

export type VideoCampaignPerformanceValue = BaseVideoPerformanceValue & {
  __typename?: 'VideoCampaignPerformanceValue';
  campaignId: Scalars['String'];
  campaignName?: Maybe<Scalars['String']>;
  clicks: Scalars['Float'];
  conversions: Scalars['Float'];
  ctr: Scalars['Float'];
  impressions: Scalars['Float'];
  postClickConversions: Scalars['Float'];
  postImpressionConversions: Scalars['Float'];
  view25PctCompletionRate: Scalars['Float'];
  view50PctCompletionRate: Scalars['Float'];
  view75PctCompletionRate: Scalars['Float'];
  viewCompletionRate: Scalars['Float'];
  views25PctCompleted: Scalars['Float'];
  views50PctCompleted: Scalars['Float'];
  views75PctCompleted: Scalars['Float'];
  viewsCompleted: Scalars['Float'];
  viewsStarted: Scalars['Float'];
};

export type VideoConversionValue = BaseConversionValue & {
  __typename?: 'VideoConversionValue';
  conversions: Scalars['Float'];
  postClickConversions: Scalars['Float'];
  postImpressionConversions: Scalars['Float'];
  trackingLabelName?: Maybe<Scalars['String']>;
  trackingLabelSequence: Scalars['Float'];
};

export type VideoConversionsResponse = {
  __typename?: 'VideoConversionsResponse';
  interval: AnalyticsInterval;
  value: VideoConversionValue;
};

export type VideoCreativeMetricsResponse = {
  __typename?: 'VideoCreativeMetricsResponse';
  interval: AnalyticsInterval;
  value: VideoCreativeValue;
};

export type VideoCreativeValue = BaseTtdCreativeValue & {
  __typename?: 'VideoCreativeValue';
  clicks: Scalars['Float'];
  conversions: Scalars['Float'];
  creative: Creative;
  creativeId: Scalars['String'];
  ctr: Scalars['Float'];
  impressions: Scalars['Float'];
  postClickConversions: Scalars['Float'];
  postImpressionConversions: Scalars['Float'];
  view25PctCompletionRate: Scalars['Float'];
  view50PctCompletionRate: Scalars['Float'];
  view75PctCompletionRate: Scalars['Float'];
  viewCompletionRate: Scalars['Float'];
  views25PctCompleted: Scalars['Float'];
  views50PctCompleted: Scalars['Float'];
  views75PctCompleted: Scalars['Float'];
  viewsCompleted: Scalars['Float'];
  viewsStarted: Scalars['Float'];
};

export type VideoDeviceTypeMetricsResponse = {
  __typename?: 'VideoDeviceTypeMetricsResponse';
  interval: AnalyticsInterval;
  value: VideoDeviceTypeValue;
};

export type VideoDeviceTypeValue = BaseDeviceTypeValue & {
  __typename?: 'VideoDeviceTypeValue';
  clicks: Scalars['Float'];
  ctr: Scalars['Float'];
  deviceType: TtdDeviceTypeEnum;
  impressions: Scalars['Float'];
  viewCompletionRate: Scalars['Float'];
  viewsCompleted: Scalars['Float'];
  viewsStarted: Scalars['Float'];
};

export type VideoGeoMetricsResponse = {
  __typename?: 'VideoGeoMetricsResponse';
  interval: AnalyticsInterval;
  value: VideoGeoValue;
};

export type VideoGeoValue = BaseGeoValue & {
  __typename?: 'VideoGeoValue';
  boundary?: Maybe<MapboxBoundary>;
  city?: Maybe<Scalars['String']>;
  clicks: Scalars['Float'];
  conversions: Scalars['Float'];
  coordinates?: Maybe<LatLongType>;
  country: Scalars['String'];
  impressions: Scalars['Float'];
  location: Scalars['String'];
  region: Scalars['String'];
  zip?: Maybe<Scalars['String']>;
};

export type VideoPopMetrics = {
  __typename?: 'VideoPopMetrics';
  clicks: Scalars['Float'];
  conversions: Scalars['Float'];
  ctr: Scalars['Float'];
  impressions: Scalars['Float'];
  postClickConversions: Scalars['Float'];
  postImpressionConversions: Scalars['Float'];
  view25PctCompletionRate: Scalars['Float'];
  view50PctCompletionRate: Scalars['Float'];
  view75PctCompletionRate: Scalars['Float'];
  viewCompletionRate: Scalars['Float'];
  views25PctCompleted: Scalars['Float'];
  views50PctCompleted: Scalars['Float'];
  views75PctCompleted: Scalars['Float'];
  viewsCompleted: Scalars['Float'];
  viewsStarted: Scalars['Float'];
};

export type VideoTimeOfDayMetricsResponse = BaseTimeOfDayResponse & {
  __typename?: 'VideoTimeOfDayMetricsResponse';
  interval: TimeOfDayInterval;
  value: VideoTimeOfDayValue;
};

export type VideoTimeOfDayValue = BaseTimeOfDayValue & {
  __typename?: 'VideoTimeOfDayValue';
  clicks: Scalars['Float'];
  ctr: Scalars['Float'];
  impressions: Scalars['Float'];
  viewCompletionRate: Scalars['Float'];
  viewsCompleted: Scalars['Float'];
};

export type YoutubeAdGroupPerformanceMetric = {
  __typename?: 'YoutubeAdGroupPerformanceMetric';
  interval: AnalyticsInterval;
  value: YoutubeAdGroupPerformanceValue;
};

export type YoutubeAdGroupPerformanceMetricsResponse = {
  __typename?: 'YoutubeAdGroupPerformanceMetricsResponse';
  metrics: Array<YoutubeAdGroupPerformanceMetric>;
};

export type YoutubeAdGroupPerformanceSummaryResponse = {
  __typename?: 'YoutubeAdGroupPerformanceSummaryResponse';
  metrics: Array<YoutubeAdGroupPerformanceMetric>;
  popMetrics?: Maybe<YoutubePopMetrics>;
};

export type YoutubeAdGroupPerformanceSummaryResponsePopMetricsArgs = {
  adGroupId?: InputMaybe<Scalars['String']>;
  advertiserId: Scalars['String'];
  campaignId?: InputMaybe<Scalars['String']>;
  endDate: Scalars['Date'];
  resolution?: InputMaybe<AnalyticsResolution>;
  startDate: Scalars['Date'];
};

export type YoutubeAdGroupPerformanceValue = BaseAdGroupPerformanceValue &
  BaseYoutubePerformanceValue & {
    __typename?: 'YoutubeAdGroupPerformanceValue';
    adGroupId: Scalars['String'];
    adGroupName: Scalars['String'];
    clicks: Scalars['Float'];
    conversionRate: Scalars['Float'];
    conversions: Scalars['Float'];
    costPerClick?: Maybe<CurrencyDto>;
    costPerConversion?: Maybe<CurrencyDto>;
    ctr: Scalars['Float'];
    impressions: Scalars['Float'];
    spend?: Maybe<CurrencyDto>;
    view25PctCompletionRate: Scalars['Float'];
    view50PctCompletionRate: Scalars['Float'];
    view75PctCompletionRate: Scalars['Float'];
    viewCompletionRate: Scalars['Float'];
    viewRate: Scalars['Float'];
    views: Scalars['Float'];
    views25PctCompleted: Scalars['Float'];
    views50PctCompleted: Scalars['Float'];
    views75PctCompleted: Scalars['Float'];
    viewsCompleted: Scalars['Float'];
  };

export type YoutubeAdvertiserPerformanceMetric = {
  __typename?: 'YoutubeAdvertiserPerformanceMetric';
  interval: AnalyticsInterval;
  value: YoutubeAdvertiserPerformanceValue;
};

export type YoutubeAdvertiserPerformanceMetricsResponse = {
  __typename?: 'YoutubeAdvertiserPerformanceMetricsResponse';
  metrics: Array<YoutubeAdvertiserPerformanceMetric>;
};

export type YoutubeAdvertiserPerformanceSummaryResponse = {
  __typename?: 'YoutubeAdvertiserPerformanceSummaryResponse';
  metrics: Array<YoutubeAdvertiserPerformanceMetric>;
  popMetrics?: Maybe<YoutubePopMetrics>;
};

export type YoutubeAdvertiserPerformanceSummaryResponsePopMetricsArgs = {
  advertiserId: Scalars['String'];
  endDate: Scalars['Date'];
  resolution?: InputMaybe<AnalyticsResolution>;
  startDate: Scalars['Date'];
};

export type YoutubeAdvertiserPerformanceValue = BaseYoutubePerformanceValue & {
  __typename?: 'YoutubeAdvertiserPerformanceValue';
  advertiserId: Scalars['String'];
  clicks: Scalars['Float'];
  conversionRate: Scalars['Float'];
  conversions: Scalars['Float'];
  costPerClick?: Maybe<CurrencyDto>;
  costPerConversion?: Maybe<CurrencyDto>;
  ctr: Scalars['Float'];
  impressions: Scalars['Float'];
  spend?: Maybe<CurrencyDto>;
  view25PctCompletionRate: Scalars['Float'];
  view50PctCompletionRate: Scalars['Float'];
  view75PctCompletionRate: Scalars['Float'];
  viewCompletionRate: Scalars['Float'];
  viewRate: Scalars['Float'];
  views: Scalars['Float'];
  views25PctCompleted: Scalars['Float'];
  views50PctCompleted: Scalars['Float'];
  views75PctCompleted: Scalars['Float'];
  viewsCompleted: Scalars['Float'];
};

export type YoutubeCampaignPerformanceMetric = {
  __typename?: 'YoutubeCampaignPerformanceMetric';
  interval: AnalyticsInterval;
  value: YoutubeCampaignPerformanceValue;
};

export type YoutubeCampaignPerformanceMetricsResponse = {
  __typename?: 'YoutubeCampaignPerformanceMetricsResponse';
  metrics: Array<YoutubeCampaignPerformanceMetric>;
};

export type YoutubeCampaignPerformanceSummaryResponse = {
  __typename?: 'YoutubeCampaignPerformanceSummaryResponse';
  metrics: Array<YoutubeCampaignPerformanceMetric>;
  popMetrics?: Maybe<YoutubePopMetrics>;
};

export type YoutubeCampaignPerformanceSummaryResponsePopMetricsArgs = {
  advertiserId: Scalars['String'];
  campaignId?: InputMaybe<Scalars['String']>;
  endDate: Scalars['Date'];
  resolution?: InputMaybe<AnalyticsResolution>;
  startDate: Scalars['Date'];
};

export type YoutubeCampaignPerformanceValue = BaseCampaignPerformanceValue &
  BaseYoutubePerformanceValue & {
    __typename?: 'YoutubeCampaignPerformanceValue';
    campaignId: Scalars['String'];
    campaignName?: Maybe<Scalars['String']>;
    clicks: Scalars['Float'];
    conversionRate: Scalars['Float'];
    conversions: Scalars['Float'];
    costPerClick?: Maybe<CurrencyDto>;
    costPerConversion?: Maybe<CurrencyDto>;
    ctr: Scalars['Float'];
    impressions: Scalars['Float'];
    spend?: Maybe<CurrencyDto>;
    view25PctCompletionRate: Scalars['Float'];
    view50PctCompletionRate: Scalars['Float'];
    view75PctCompletionRate: Scalars['Float'];
    viewCompletionRate: Scalars['Float'];
    viewRate: Scalars['Float'];
    views: Scalars['Float'];
    views25PctCompleted: Scalars['Float'];
    views50PctCompleted: Scalars['Float'];
    views75PctCompleted: Scalars['Float'];
    viewsCompleted: Scalars['Float'];
  };

export type YoutubeCreativeMetricsResponse = {
  __typename?: 'YoutubeCreativeMetricsResponse';
  interval: AnalyticsInterval;
  value: YoutubeCreativeValue;
};

export type YoutubeCreativeValue = BaseGoogleCreativeValue & {
  __typename?: 'YoutubeCreativeValue';
  adName: Scalars['String'];
  clicks: Scalars['Float'];
  conversionRate: Scalars['Float'];
  conversions: Scalars['Float'];
  creative: Creative;
  creativeId: Scalars['String'];
  ctr: Scalars['Float'];
  impressions: Scalars['Float'];
  view25PctCompletionRate: Scalars['Float'];
  view50PctCompletionRate: Scalars['Float'];
  view75PctCompletionRate: Scalars['Float'];
  viewCompletionRate: Scalars['Float'];
  viewRate: Scalars['Float'];
  views: Scalars['Float'];
  views25PctCompleted: Scalars['Float'];
  views50PctCompleted: Scalars['Float'];
  views75PctCompleted: Scalars['Float'];
  viewsCompleted: Scalars['Float'];
};

export type YoutubeGeoMetricsResponse = {
  __typename?: 'YoutubeGeoMetricsResponse';
  interval: AnalyticsInterval;
  value: YoutubeGeoValue;
};

export type YoutubeGeoValue = BaseGeoValue & {
  __typename?: 'YoutubeGeoValue';
  boundary?: Maybe<MapboxBoundary>;
  city?: Maybe<Scalars['String']>;
  clicks: Scalars['Float'];
  conversions: Scalars['Float'];
  coordinates?: Maybe<LatLongType>;
  country: Scalars['String'];
  impressions: Scalars['Float'];
  location: Scalars['String'];
  region: Scalars['String'];
  viewRate: Scalars['Float'];
  views: Scalars['Float'];
  zip?: Maybe<Scalars['String']>;
};

export type YoutubePopMetrics = {
  __typename?: 'YoutubePopMetrics';
  clicks: Scalars['Float'];
  conversionRate: Scalars['Float'];
  conversions: Scalars['Float'];
  costPerClick: Scalars['Float'];
  costPerConversion: Scalars['Float'];
  ctr: Scalars['Float'];
  impressions: Scalars['Float'];
  spend: Scalars['Float'];
  view25PctCompletionRate: Scalars['Float'];
  view50PctCompletionRate: Scalars['Float'];
  view75PctCompletionRate: Scalars['Float'];
  viewCompletionRate: Scalars['Float'];
  viewRate: Scalars['Float'];
  views: Scalars['Float'];
  views25PctCompleted: Scalars['Float'];
  views50PctCompleted: Scalars['Float'];
  views75PctCompleted: Scalars['Float'];
  viewsCompleted: Scalars['Float'];
};

/** Input for `dapi_createOrder`. */
export type Dapi_CreateOrderInput = {
  /** The advertiser ID for which the order is being created for. */
  advertiserId: Scalars['ID'];
  /** The user ID that is assigned to the order. */
  assigneeUserId?: InputMaybe<Scalars['ID']>;
  /** The user ID that created the order. If null, attempts to fallback to the detected user making the request. */
  createdByUserId?: InputMaybe<Scalars['ID']>;
  /** The date that this entity became an official order. This will be applied to any existing line items. */
  dateOfOrder?: InputMaybe<Scalars['Date']>;
  /** The associated line items to create. */
  lineItems?: InputMaybe<Array<LineItemInput>>;
  /** The name of the order. */
  name: Scalars['String'];
  /** Custom information specific to the order. */
  orderInfo?: InputMaybe<Scalars['JSON']>;
  /**
   * An optional email address that represents the external user that this order was created for.
   * This should only be set when creating an order for an external user that does not exist in our system.
   */
  ownerEmail?: InputMaybe<Scalars['String']>;
  /** The proposed date to end the order. */
  proposedEndDate?: InputMaybe<Scalars['Date']>;
  /** The proposed date to start the order. */
  proposedStartDate?: InputMaybe<Scalars['Date']>;
  /** The requesting user's id. Defaults to the creator of the order if null or empty. */
  requesterUserId?: InputMaybe<Scalars['ID']>;
  /** The source of the order */
  source: OrderSource;
  /** The state of the order. If not provided, a default state will be determined based on other info provided */
  state?: InputMaybe<OrderState>;
};

export type UserQueryVariables = Exact<{
  id: Scalars['String'];
}>;

export type UserQuery = {
  __typename?: 'Query';
  user?: { __typename?: 'User'; id?: string | null; username?: string | null } | null;
};

export type UpdateUserMutationVariables = Exact<{
  updateUserInput: UpdateUserInput;
}>;

export type UpdateUserMutation = {
  __typename?: 'Mutation';
  updateUser: { __typename?: 'User'; id?: string | null; username?: string | null };
};
