import deviceConstants from './device.constants';
import action from "../../models/classes/action"
import state from "../../models/classes/state"
export default function device(state: state, action: action) {
    switch (action.type) {
        case deviceConstants.GET_ALL_REQUEST:
            return {
                ...state,
            };
        case deviceConstants.GET_ALL_SUCCESS:
            return {
                devices:action.devices,
            };

        case deviceConstants.GET_ALL_FAILURE:
            return {
                error: "Impossible d'obtenir la liste des téléphones",
            };
        case deviceConstants.CLEAR:
            return {};
        default:
            return state;
    }
}
