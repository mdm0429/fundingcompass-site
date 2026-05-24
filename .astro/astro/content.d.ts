declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"pages": {
"compare/best-equipment-financing-companies.md": {
	id: "compare/best-equipment-financing-companies.md";
  slug: "compare/best-equipment-financing-companies";
  body: string;
  collection: "pages";
  data: InferEntrySchema<"pages">
} & { render(): Render[".md"] };
"compare/best-invoice-factoring-companies.md": {
	id: "compare/best-invoice-factoring-companies.md";
  slug: "compare/best-invoice-factoring-companies";
  body: string;
  collection: "pages";
  data: InferEntrySchema<"pages">
} & { render(): Render[".md"] };
"compare/best-merchant-cash-advance-providers.md": {
	id: "compare/best-merchant-cash-advance-providers.md";
  slug: "compare/best-merchant-cash-advance-providers";
  body: string;
  collection: "pages";
  data: InferEntrySchema<"pages">
} & { render(): Render[".md"] };
"compare/equipment-loan-vs-lease.md": {
	id: "compare/equipment-loan-vs-lease.md";
  slug: "compare/equipment-loan-vs-lease";
  body: string;
  collection: "pages";
  data: InferEntrySchema<"pages">
} & { render(): Render[".md"] };
"compare/factoring-vs-line-of-credit.md": {
	id: "compare/factoring-vs-line-of-credit.md";
  slug: "compare/factoring-vs-line-of-credit";
  body: string;
  collection: "pages";
  data: InferEntrySchema<"pages">
} & { render(): Render[".md"] };
"compare/factoring-vs-merchant-cash-advance.md": {
	id: "compare/factoring-vs-merchant-cash-advance.md";
  slug: "compare/factoring-vs-merchant-cash-advance";
  body: string;
  collection: "pages";
  data: InferEntrySchema<"pages">
} & { render(): Render[".md"] };
"compare/invoice-financing-vs-factoring.md": {
	id: "compare/invoice-financing-vs-factoring.md";
  slug: "compare/invoice-financing-vs-factoring";
  body: string;
  collection: "pages";
  data: InferEntrySchema<"pages">
} & { render(): Render[".md"] };
"compare/purchase-order-financing-vs-factoring.md": {
	id: "compare/purchase-order-financing-vs-factoring.md";
  slug: "compare/purchase-order-financing-vs-factoring";
  body: string;
  collection: "pages";
  data: InferEntrySchema<"pages">
} & { render(): Render[".md"] };
"compare/recourse-vs-non-recourse-factoring.md": {
	id: "compare/recourse-vs-non-recourse-factoring.md";
  slug: "compare/recourse-vs-non-recourse-factoring";
  body: string;
  collection: "pages";
  data: InferEntrySchema<"pages">
} & { render(): Render[".md"] };
"compare/sba-504-vs-equipment-loan.md": {
	id: "compare/sba-504-vs-equipment-loan.md";
  slug: "compare/sba-504-vs-equipment-loan";
  body: string;
  collection: "pages";
  data: InferEntrySchema<"pages">
} & { render(): Render[".md"] };
"compare/spot-vs-contract-factoring.md": {
	id: "compare/spot-vs-contract-factoring.md";
  slug: "compare/spot-vs-contract-factoring";
  body: string;
  collection: "pages";
  data: InferEntrySchema<"pages">
} & { render(): Render[".md"] };
"glossary/index.md": {
	id: "glossary/index.md";
  slug: "glossary";
  body: string;
  collection: "pages";
  data: InferEntrySchema<"pages">
} & { render(): Render[".md"] };
"guides/accounts-receivable-financing.md": {
	id: "guides/accounts-receivable-financing.md";
  slug: "guides/accounts-receivable-financing";
  body: string;
  collection: "pages";
  data: InferEntrySchema<"pages">
} & { render(): Render[".md"] };
"guides/b2b-funding-glossary.md": {
	id: "guides/b2b-funding-glossary.md";
  slug: "guides/b2b-funding-glossary";
  body: string;
  collection: "pages";
  data: InferEntrySchema<"pages">
} & { render(): Render[".md"] };
"guides/business-line-of-credit.md": {
	id: "guides/business-line-of-credit.md";
  slug: "guides/business-line-of-credit";
  body: string;
  collection: "pages";
  data: InferEntrySchema<"pages">
} & { render(): Render[".md"] };
"guides/equipment-financing-checklist.md": {
	id: "guides/equipment-financing-checklist.md";
  slug: "guides/equipment-financing-checklist";
  body: string;
  collection: "pages";
  data: InferEntrySchema<"pages">
} & { render(): Render[".md"] };
"guides/equipment-financing.md": {
	id: "guides/equipment-financing.md";
  slug: "guides/equipment-financing";
  body: string;
  collection: "pages";
  data: InferEntrySchema<"pages">
} & { render(): Render[".md"] };
"guides/equipment-leasing.md": {
	id: "guides/equipment-leasing.md";
  slug: "guides/equipment-leasing";
  body: string;
  collection: "pages";
  data: InferEntrySchema<"pages">
} & { render(): Render[".md"] };
"guides/invoice-factoring-checklist.md": {
	id: "guides/invoice-factoring-checklist.md";
  slug: "guides/invoice-factoring-checklist";
  body: string;
  collection: "pages";
  data: InferEntrySchema<"pages">
} & { render(): Render[".md"] };
"guides/invoice-factoring-faq.md": {
	id: "guides/invoice-factoring-faq.md";
  slug: "guides/invoice-factoring-faq";
  body: string;
  collection: "pages";
  data: InferEntrySchema<"pages">
} & { render(): Render[".md"] };
"guides/invoice-factoring-red-flags.md": {
	id: "guides/invoice-factoring-red-flags.md";
  slug: "guides/invoice-factoring-red-flags";
  body: string;
  collection: "pages";
  data: InferEntrySchema<"pages">
} & { render(): Render[".md"] };
"guides/invoice-factoring.md": {
	id: "guides/invoice-factoring.md";
  slug: "guides/invoice-factoring";
  body: string;
  collection: "pages";
  data: InferEntrySchema<"pages">
} & { render(): Render[".md"] };
"guides/merchant-cash-advance-faq.md": {
	id: "guides/merchant-cash-advance-faq.md";
  slug: "guides/merchant-cash-advance-faq";
  body: string;
  collection: "pages";
  data: InferEntrySchema<"pages">
} & { render(): Render[".md"] };
"guides/merchant-cash-advance.md": {
	id: "guides/merchant-cash-advance.md";
  slug: "guides/merchant-cash-advance";
  body: string;
  collection: "pages";
  data: InferEntrySchema<"pages">
} & { render(): Render[".md"] };
"guides/purchase-order-financing.md": {
	id: "guides/purchase-order-financing.md";
  slug: "guides/purchase-order-financing";
  body: string;
  collection: "pages";
  data: InferEntrySchema<"pages">
} & { render(): Render[".md"] };
"guides/sba-loans.md": {
	id: "guides/sba-loans.md";
  slug: "guides/sba-loans";
  body: string;
  collection: "pages";
  data: InferEntrySchema<"pages">
} & { render(): Render[".md"] };
"index.md": {
	id: "index.md";
  slug: "index";
  body: string;
  collection: "pages";
  data: InferEntrySchema<"pages">
} & { render(): Render[".md"] };
"industries/agricultural-equipment-financing.md": {
	id: "industries/agricultural-equipment-financing.md";
  slug: "industries/agricultural-equipment-financing";
  body: string;
  collection: "pages";
  data: InferEntrySchema<"pages">
} & { render(): Render[".md"] };
"industries/construction-equipment-financing.md": {
	id: "industries/construction-equipment-financing.md";
  slug: "industries/construction-equipment-financing";
  body: string;
  collection: "pages";
  data: InferEntrySchema<"pages">
} & { render(): Render[".md"] };
"industries/construction-factoring.md": {
	id: "industries/construction-factoring.md";
  slug: "industries/construction-factoring";
  body: string;
  collection: "pages";
  data: InferEntrySchema<"pages">
} & { render(): Render[".md"] };
"industries/government-contractor-factoring.md": {
	id: "industries/government-contractor-factoring.md";
  slug: "industries/government-contractor-factoring";
  body: string;
  collection: "pages";
  data: InferEntrySchema<"pages">
} & { render(): Render[".md"] };
"industries/healthcare-factoring.md": {
	id: "industries/healthcare-factoring.md";
  slug: "industries/healthcare-factoring";
  body: string;
  collection: "pages";
  data: InferEntrySchema<"pages">
} & { render(): Render[".md"] };
"industries/manufacturing-equipment-financing.md": {
	id: "industries/manufacturing-equipment-financing.md";
  slug: "industries/manufacturing-equipment-financing";
  body: string;
  collection: "pages";
  data: InferEntrySchema<"pages">
} & { render(): Render[".md"] };
"industries/medical-equipment-financing.md": {
	id: "industries/medical-equipment-financing.md";
  slug: "industries/medical-equipment-financing";
  body: string;
  collection: "pages";
  data: InferEntrySchema<"pages">
} & { render(): Render[".md"] };
"industries/restaurant-equipment-financing.md": {
	id: "industries/restaurant-equipment-financing.md";
  slug: "industries/restaurant-equipment-financing";
  body: string;
  collection: "pages";
  data: InferEntrySchema<"pages">
} & { render(): Render[".md"] };
"industries/restaurant-merchant-cash-advance.md": {
	id: "industries/restaurant-merchant-cash-advance.md";
  slug: "industries/restaurant-merchant-cash-advance";
  body: string;
  collection: "pages";
  data: InferEntrySchema<"pages">
} & { render(): Render[".md"] };
"industries/retail-factoring.md": {
	id: "industries/retail-factoring.md";
  slug: "industries/retail-factoring";
  body: string;
  collection: "pages";
  data: InferEntrySchema<"pages">
} & { render(): Render[".md"] };
"industries/staffing-factoring.md": {
	id: "industries/staffing-factoring.md";
  slug: "industries/staffing-factoring";
  body: string;
  collection: "pages";
  data: InferEntrySchema<"pages">
} & { render(): Render[".md"] };
"industries/technology-equipment-financing.md": {
	id: "industries/technology-equipment-financing.md";
  slug: "industries/technology-equipment-financing";
  body: string;
  collection: "pages";
  data: InferEntrySchema<"pages">
} & { render(): Render[".md"] };
"industries/trucking-factoring.md": {
	id: "industries/trucking-factoring.md";
  slug: "industries/trucking-factoring";
  body: string;
  collection: "pages";
  data: InferEntrySchema<"pages">
} & { render(): Render[".md"] };
"industries/wholesale-factoring.md": {
	id: "industries/wholesale-factoring.md";
  slug: "industries/wholesale-factoring";
  body: string;
  collection: "pages";
  data: InferEntrySchema<"pages">
} & { render(): Render[".md"] };
"legal/about.md": {
	id: "legal/about.md";
  slug: "legal/about";
  body: string;
  collection: "pages";
  data: InferEntrySchema<"pages">
} & { render(): Render[".md"] };
"legal/contact.md": {
	id: "legal/contact.md";
  slug: "legal/contact";
  body: string;
  collection: "pages";
  data: InferEntrySchema<"pages">
} & { render(): Render[".md"] };
"legal/editorial-standards.md": {
	id: "legal/editorial-standards.md";
  slug: "legal/editorial-standards";
  body: string;
  collection: "pages";
  data: InferEntrySchema<"pages">
} & { render(): Render[".md"] };
"legal/how-we-make-money.md": {
	id: "legal/how-we-make-money.md";
  slug: "legal/how-we-make-money";
  body: string;
  collection: "pages";
  data: InferEntrySchema<"pages">
} & { render(): Render[".md"] };
"legal/lenders.md": {
	id: "legal/lenders.md";
  slug: "legal/lenders";
  body: string;
  collection: "pages";
  data: InferEntrySchema<"pages">
} & { render(): Render[".md"] };
"legal/privacy.md": {
	id: "legal/privacy.md";
  slug: "legal/privacy";
  body: string;
  collection: "pages";
  data: InferEntrySchema<"pages">
} & { render(): Render[".md"] };
"legal/terms.md": {
	id: "legal/terms.md";
  slug: "legal/terms";
  body: string;
  collection: "pages";
  data: InferEntrySchema<"pages">
} & { render(): Render[".md"] };
"providers/balboa-capital-review.md": {
	id: "providers/balboa-capital-review.md";
  slug: "providers/balboa-capital-review";
  body: string;
  collection: "pages";
  data: InferEntrySchema<"pages">
} & { render(): Render[".md"] };
"providers/bfs-capital-review.md": {
	id: "providers/bfs-capital-review.md";
  slug: "providers/bfs-capital-review";
  body: string;
  collection: "pages";
  data: InferEntrySchema<"pages">
} & { render(): Render[".md"] };
"providers/bluevine-review.md": {
	id: "providers/bluevine-review.md";
  slug: "providers/bluevine-review";
  body: string;
  collection: "pages";
  data: InferEntrySchema<"pages">
} & { render(): Render[".md"] };
"providers/credibly-review.md": {
	id: "providers/credibly-review.md";
  slug: "providers/credibly-review";
  body: string;
  collection: "pages";
  data: InferEntrySchema<"pages">
} & { render(): Render[".md"] };
"providers/crest-capital-review.md": {
	id: "providers/crest-capital-review.md";
  slug: "providers/crest-capital-review";
  body: string;
  collection: "pages";
  data: InferEntrySchema<"pages">
} & { render(): Render[".md"] };
"providers/ecapital-review.md": {
	id: "providers/ecapital-review.md";
  slug: "providers/ecapital-review";
  body: string;
  collection: "pages";
  data: InferEntrySchema<"pages">
} & { render(): Render[".md"] };
"providers/fundbox-review.md": {
	id: "providers/fundbox-review.md";
  slug: "providers/fundbox-review";
  body: string;
  collection: "pages";
  data: InferEntrySchema<"pages">
} & { render(): Render[".md"] };
"providers/greenbox-capital-review.md": {
	id: "providers/greenbox-capital-review.md";
  slug: "providers/greenbox-capital-review";
  body: string;
  collection: "pages";
  data: InferEntrySchema<"pages">
} & { render(): Render[".md"] };
"providers/lendio-review.md": {
	id: "providers/lendio-review.md";
  slug: "providers/lendio-review";
  body: string;
  collection: "pages";
  data: InferEntrySchema<"pages">
} & { render(): Render[".md"] };
"providers/national-funding-review.md": {
	id: "providers/national-funding-review.md";
  slug: "providers/national-funding-review";
  body: string;
  collection: "pages";
  data: InferEntrySchema<"pages">
} & { render(): Render[".md"] };
"providers/ondeck-review.md": {
	id: "providers/ondeck-review.md";
  slug: "providers/ondeck-review";
  body: string;
  collection: "pages";
  data: InferEntrySchema<"pages">
} & { render(): Render[".md"] };
"providers/otr-solutions-review.md": {
	id: "providers/otr-solutions-review.md";
  slug: "providers/otr-solutions-review";
  body: string;
  collection: "pages";
  data: InferEntrySchema<"pages">
} & { render(): Render[".md"] };
"providers/prn-funding-review.md": {
	id: "providers/prn-funding-review.md";
  slug: "providers/prn-funding-review";
  body: string;
  collection: "pages";
  data: InferEntrySchema<"pages">
} & { render(): Render[".md"] };
"providers/rapid-finance-review.md": {
	id: "providers/rapid-finance-review.md";
  slug: "providers/rapid-finance-review";
  body: string;
  collection: "pages";
  data: InferEntrySchema<"pages">
} & { render(): Render[".md"] };
"providers/riviera-finance-review.md": {
	id: "providers/riviera-finance-review.md";
  slug: "providers/riviera-finance-review";
  body: string;
  collection: "pages";
  data: InferEntrySchema<"pages">
} & { render(): Render[".md"] };
"providers/rts-financial-review.md": {
	id: "providers/rts-financial-review.md";
  slug: "providers/rts-financial-review";
  body: string;
  collection: "pages";
  data: InferEntrySchema<"pages">
} & { render(): Render[".md"] };
"providers/tci-business-capital-review.md": {
	id: "providers/tci-business-capital-review.md";
  slug: "providers/tci-business-capital-review";
  body: string;
  collection: "pages";
  data: InferEntrySchema<"pages">
} & { render(): Render[".md"] };
"providers/triumph-business-capital-review.md": {
	id: "providers/triumph-business-capital-review.md";
  slug: "providers/triumph-business-capital-review";
  body: string;
  collection: "pages";
  data: InferEntrySchema<"pages">
} & { render(): Render[".md"] };
"tools/business-loan-calculator.md": {
	id: "tools/business-loan-calculator.md";
  slug: "tools/business-loan-calculator";
  body: string;
  collection: "pages";
  data: InferEntrySchema<"pages">
} & { render(): Render[".md"] };
"tools/equipment-financing-calculator.md": {
	id: "tools/equipment-financing-calculator.md";
  slug: "tools/equipment-financing-calculator";
  body: string;
  collection: "pages";
  data: InferEntrySchema<"pages">
} & { render(): Render[".md"] };
"tools/factoring-cost-calculator.md": {
	id: "tools/factoring-cost-calculator.md";
  slug: "tools/factoring-cost-calculator";
  body: string;
  collection: "pages";
  data: InferEntrySchema<"pages">
} & { render(): Render[".md"] };
"tools/mca-true-cost-calculator.md": {
	id: "tools/mca-true-cost-calculator.md";
  slug: "tools/mca-true-cost-calculator";
  body: string;
  collection: "pages";
  data: InferEntrySchema<"pages">
} & { render(): Render[".md"] };
"tools/sba-loan-calculator.md": {
	id: "tools/sba-loan-calculator.md";
  slug: "tools/sba-loan-calculator";
  body: string;
  collection: "pages";
  data: InferEntrySchema<"pages">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("../../src/content/config.js");
}
