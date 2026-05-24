// Maps canonical URL path prefixes to Unsplash photo IDs
const MAP: [string, string][] = [
  ['guides/invoice-factoring',                  '1516549655169-df83a0774514'],
  ['guides/equipment-financing',                '1503708928676-1cb796a0891e'],
  ['guides/merchant-cash-advance',              '1622021142947-da7dedc7c39a'],
  ['guides/business-line-of-credit',            '1556742049-0cfed4f6a45d'],
  ['guides/sba-loans',                          '1553729175-dc3df8df4cec'],
  ['industries/trucking',                       'dlyz37qqHfM'],
  ['industries/staffing',                       'bNe3ApBGJ8A'],
  ['industries/healthcare',                     '1516549655169-df83a0774514'],
  ['industries/construction-factoring',         '1495036019936-220b29b930ea'],
  ['industries/wholesale',                      '1587293852726-70cdb56c2866'],
  ['industries/restaurant-equipment',           '1529940316268-e245e031bcd1'],
  ['industries/manufacturing',                  'pWUyHVJgLhg'],
  ['industries/construction-equipment',         '1661963927439-26e74bee3674'],
  ['industries/restaurant-merchant',            '1535850452425-140ee4a8dbae'],
  ['compare/best-invoice-factoring',            '1516549655169-df83a0774514'],
  ['compare/best-equipment-financing',          '1503708928676-1cb796a0891e'],
  ['compare/best-merchant-cash',                '1622021142947-da7dedc7c39a'],
  ['compare/',                                  'heiYgqp0Tsk'],
  ['providers/triumph',                         'dlyz37qqHfM'],
  ['providers/rts',                             'dlyz37qqHfM'],
  ['providers/',                                'heiYgqp0Tsk'],
  ['tools/factoring-cost',                      '1516549655169-df83a0774514'],
  ['tools/mca',                                 'xoU52jUVUXA'],
  ['tools/equipment',                           '1503708928676-1cb796a0891e'],
];

const DEFAULT_ID = '1556742049-0cfed4f6a45d';

function getPhotoId(canonical: string): string {
  const path = canonical.replace('https://fundingcompass.guide/', '');
  return MAP.find(([k]) => path.startsWith(k))?.[1] ?? DEFAULT_ID;
}

export function heroUrl(canonical: string): string {
  return `https://images.unsplash.com/photo-${getPhotoId(canonical)}?w=1400&h=320&fit=crop&auto=format&q=80`;
}

export function thumbUrl(photoId: string): string {
  return `https://images.unsplash.com/photo-${photoId}?w=72&h=50&fit=crop&auto=format&q=75`;
}
