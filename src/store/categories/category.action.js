import { CATEGORIES_ACTION_TYPES } from "./category.types";
import { createAction } from "../../utils/reducer/reducer.utils";

export const setCategoriesMap = (categoriesMap) => createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP, categoriesMap);
export const setCategoriesMapMeals = (meals) => createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MEALS, meals);
export const updateCategoriesWeight = (weight) => createAction(CATEGORIES_ACTION_TYPES.UPDATE_CATEGORIES_WEIGHT, weight);
export const updateCategoriesHeight = (height) => createAction(CATEGORIES_ACTION_TYPES.UPDATE_CATEGORIES_HEIGHT, height);
export const updateCategoriesAge = (age) => createAction(CATEGORIES_ACTION_TYPES.UPDATE_CATEGORIES_AGE, age);
export const updateCategoriesActivityLevel = (activityLevel) => createAction(CATEGORIES_ACTION_TYPES.UPDATE_CATEGORIES_ACTIVITYLEVEL, activityLevel);
export const updateCategoriesGoal = (goal) => createAction(CATEGORIES_ACTION_TYPES.UPDATE_CATEGORIES_GOAL, goal);