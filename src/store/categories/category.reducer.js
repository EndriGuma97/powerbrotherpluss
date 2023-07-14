import { CATEGORIES_ACTION_TYPES } from "./category.types";

export const CATEGORIES_INITIAL_STATE = {
    categoriesMap: {
        meals: [],
        age: '',
        goal: '',
        activityLevel: '',
        height: '',
        weight: '',
    }
}

export const categoriesReducer = (state = CATEGORIES_INITIAL_STATE, action = {}) => {
    const { type, payload } = action;

    switch(type) {
        case CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP:
            return {...state, categoriesMap: payload};
            case CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MEALS:
                return { ...state, categoriesMap: {
                    ...state.categoriesMap,
                    meals: payload
                } }
            case CATEGORIES_ACTION_TYPES.UPDATE_CATEGORIES_WEIGHT:
                return {...state, categoriesMap: {
                    ...state.categoriesMap,
                    weight: payload
                }}
                case CATEGORIES_ACTION_TYPES.UPDATE_CATEGORIES_HEIGHT:
                    return {...state, categoriesMap: {
                        ...state.categoriesMap,
                        height: payload
                    }}
                    case CATEGORIES_ACTION_TYPES.UPDATE_CATEGORIES_AGE:
                        return {...state, categoriesMap: {
                            ...state.categoriesMap,
                            age: payload
                        }}
                        case CATEGORIES_ACTION_TYPES.UPDATE_CATEGORIES_ACTIVITYLEVEL:
                            return {...state, categoriesMap: {
                                ...state.categoriesMap,
                              activityLevel: payload
                            }};
                            case CATEGORIES_ACTION_TYPES.UPDATE_CATEGORIES_GOAL:
                                return {...state, categoriesMap: {
                                    ...state.categoriesMap,
                                    goal: payload
                                }}
            default:
                return state;
    }

}