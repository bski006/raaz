'use strict'
import {combineReducers} from 'redux'
import assign from 'lodash/assign'

import car from './car/filterReducer'
import tuning from './tuning/filterReducer'
import paginate from './paginate/paginateReducer'
import history from './history/historyReducer'
import post from './post/postReducer'
import user from './user/userReducer'
import newpost from './newpost/newpostReducer'
import newbuild from './build/buildReducer'
import newpart from './part/partReducer'

const {
  BUILDS_REQUEST,
  BUILDS_SUCCESS,
  BUILDS_ERROR,

  BUILDS_REQUEST_PART,
  BUILDS_SUCCESS_PART,
  BUILDS_ERROR_PART,

  BUILDS_REQUEST_TAG,
  BUILDS_SUCCESS_TAG,
  BUILDS_ERROR_TAG,

  BUILDS_REQUEST_USER,
  BUILDS_SUCCESS_USER,
  BUILDS_ERROR_USER,

  BUILDS_REQUEST_SPECID,
  BUILDS_SUCCESS_SPECID,
  BUILDS_ERROR_SPECID,


  PARTS_REQUEST,
  PARTS_SUCCESS,
  PARTS_ERROR,

  PARTS_MANU_REQUEST,
  PARTS_MANU_SUCCESS,
  PARTS_MANU_ERROR,

  PARTS_BUILD_REQUEST,
  PARTS_BUILD_SUCCESS,
  PARTS_BUILD_ERROR,

  POSTS_REQUEST,
  POSTS_SUCCESS,
  POSTS_ERROR,

  POSTS_REQUEST_USER,
  POSTS_SUCCESS_USER,
  POSTS_ERROR_USER,

  POSTS_REQUEST_BUILD,
  POSTS_SUCCESS_BUILD,
  POSTS_ERROR_BUILD,

  POSTS_REQUEST_PART,
  POSTS_SUCCESS_PART,
  POSTS_ERROR_PART,

  MAKE_REQUEST,
  MAKE_SUCCESS,
  MAKE_ERROR,

  MODEL_REQUEST,
  MODEL_SUCCESS,
  MODEL_ERROR,

  SUBMODEL_REQUEST,
  SUBMODEL_SUCCESS,
  SUBMODEL_ERROR,

  SPECS_REQUEST,
  SPECS_SUCCESS,
  SPECS_ERROR,

  SPECS_DETAILS_REQUEST,
  SPECS_DETAILS_SUCCESS,
  SPECS_DETAILS_ERROR,

  DEALS_REQUEST,
  DEALS_SUCCESS,
  DEALS_ERROR,

  CAT_REQUEST,
  CAT_SUCCESS,
  CAT_ERROR,

} = require ('../constants').default

let initState = {
  car: {},
  makes: {},
  models: {},
  submodels: {},
  specs: {},
  builds: {},
  parts: {},
  posts: {},
  specDetails: {},
  newpost: {},
  newbuild: {},
  newpart: {},
}

function entities(state=initState, action) {
  if (action.response && action.response.entities) {
    return assign({}, state,  action.response.entities)
  }
  return state
}


const pagination = combineReducers ({

  buildsPagination: paginate ({
    mapActionToKey: action =>action.key,
    types: [BUILDS_REQUEST, BUILDS_SUCCESS, BUILDS_ERROR],
  }),

  buildPaginationByPartId: paginate ({
    mapActionToKey: action =>action.partId,
    types: [BUILDS_REQUEST_PART, BUILDS_SUCCESS_PART, BUILDS_ERROR_PART],
  }),

  buildPaginationByTag: paginate ({
    mapActionToKey: action =>action.tag,
    types: [BUILDS_REQUEST_TAG, BUILDS_SUCCESS_TAG, BUILDS_ERROR_TAG],
  }),

  buildPaginationBySpecId: paginate ({
    mapActionToKey: action =>action.specId,
    types: [BUILDS_REQUEST_SPECID, BUILDS_SUCCESS_SPECID, BUILDS_ERROR_SPECID],
  }),

  buildPaginationByUserId: paginate ({
    mapActionToKey: action =>action.userId,
    types: [BUILDS_REQUEST_USER, BUILDS_SUCCESS_USER, BUILDS_ERROR_USER],
  }),

  dealsPagination: paginate ({
    mapActionToKey: action=>action.specId,
    types: [
      DEALS_REQUEST,
      DEALS_SUCCESS,
      DEALS_ERROR,
    ]
  }),

  postsPagination: paginate ({
    mapActionToKey: action =>action.key,
    types: [
      POSTS_REQUEST,
      POSTS_SUCCESS,
      POSTS_ERROR,
    ]
  }),

  postPaginationByBuildId: paginate ({
    mapActionToKey: action =>action.buildId,
    types: [
      POSTS_REQUEST_BUILD,
      POSTS_SUCCESS_BUILD,
      POSTS_ERROR_BUILD,
    ]
  }),

  postPaginationByUserId: paginate ({
    mapActionToKey: action =>action.userId,
    types: [
      POSTS_REQUEST_USER,
      POSTS_SUCCESS_USER,
      POSTS_ERROR_USER,
    ]
  }),

  postPaginationByPartId: paginate ({
    mapActionToKey: action =>action.partId,
    types: [
      POSTS_REQUEST_PART,
      POSTS_SUCCESS_PART,
      POSTS_ERROR_PART,
    ]
  }),

  categoriesPagination: paginate ({
    mapActionToKey: action=>action.key,
    types: [
      CAT_REQUEST,
      CAT_SUCCESS,
      CAT_ERROR,
    ]
  }),

  specDetailsPagination: paginate ({
    mapActionToKey: action=>action.specId,
    types: [
      SPECS_DETAILS_REQUEST,
      SPECS_DETAILS_SUCCESS,
      SPECS_DETAILS_ERROR,
    ]
  }),

  partsPagination: paginate ({
    mapActionToKey: action =>action.specId,
    types: [
      PARTS_REQUEST,
      PARTS_SUCCESS,
      PARTS_ERROR
    ]
  }),

  partsPaginationByManufacturer: paginate ({
    mapActionToKey: action=>action.manufacturerId,
    types: [
      PARTS_MANU_REQUEST,
      PARTS_MANU_SUCCESS,
      PARTS_MANU_ERROR,
    ]
  }),

  partsPaginationByBuildId: paginate ({
    mapActionToKey: action => action.buildId,
    types: [
      PARTS_BUILD_REQUEST,
      PARTS_BUILD_SUCCESS,
      PARTS_BUILD_ERROR,
    ]
  })
})


const rootReducer = combineReducers ({
  entities,
  pagination,
  history,
  user,
  car,
  tuning,
  post,
  newpost,
  newbuild,
  newpart,
})



export default rootReducer
