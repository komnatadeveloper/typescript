import { Product} from 'MyProductModels'

import {createAction, createAsyncAction} from 'typesafe-actions'

export const getProducts = createAsyncAction(
  'GET_PRODUCTS_REQUEST',
  'GET_PRODUCTS_SUCCESS',
  'GET_PRODUCTS_FAILURE'
)<undefined, Product[], string>();

