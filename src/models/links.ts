/**
 * Pagination TesterLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface Links {
  first?: string;
  last?: string;
  prev?: string;
  next?: string;
}

export const linksSchema: Schema<Links> = object({
  first: ['first', optional(string())],
  last: ['last', optional(string())],
  prev: ['prev', optional(string())],
  next: ['next', optional(string())],
});
