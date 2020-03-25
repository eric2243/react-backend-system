/**
 * ebikeReducer
 */
import { SWITCH_MENU } from "../actions/actionTypes";

 const initState = {
    menuName: ''
};

const getEbikeData = (state, action) => {
	return {...state, menuName: action.menuName};
};
const ebikeReducer = (state = initState, action) => {
	switch(action.type) {
		case SWITCH_MENU:
			return getEbikeData(state, action);
		default:
			return state;
	}
};

export default ebikeReducer;
