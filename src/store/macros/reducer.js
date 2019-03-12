import { union, omit } from 'lodash'

const defaultState = {
  learningId: false,
  openedId: undefined,
  lastId: undefined,
  nodeIds: [],
}

const macroReducer = (state = defaultState, action) => {
  const p = action.payload

  switch (action.type) {
    case 'R_MACRO_ADD': {
      return {
        ...state,
        nodeIds: union(state.nodeIds, [p.nodeId]),
      }
    }
    case 'R_MACRO_DELETE': {
      return {
        ...state,
        items: omit(state.items, [p.id]),
      }
    }
    case 'R_MACRO_LEARNING_TOGGLE': {
      return {
        ...state,
        learningId: state.learningId !== false ? false : p.id,
      }
    }
    case 'R_MACRO_LEARNING_STOP': {
      return {
        ...state,
        learningId: false,
      }
    }
    case 'R_MACRO_OPEN_TOGGLE': {
      return {
        ...state,
        openedId: p.id !== state.openedId ? p.id : undefined,
      }
    }
    case 'R_MACRO_CLOSE': {
      return {
        ...state,
        openedId: undefined,
      }
    }
    case 'R_MACRO_UPDATE_LAST_ID': {
      return {
        ...state,
        lastId: p.id,
      }
    }
    case 'MACROS_REPLACE_ALL': {
      return p.macros
    }
    default:
      return state
  }
}

export default macroReducer
