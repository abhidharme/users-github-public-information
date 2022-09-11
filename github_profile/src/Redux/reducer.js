import * as Types from "./actionTypes";

const initState = {
    loading: false,
    profile: {},
    error: false
}

export const reducer = (store = initState, { type, payload }) => {
    switch (type) {
        case Types.FETCH_USER_PROFILE_REQUEST:
            return {
                ...store,
                loading: true,
                error: false
            }
        case Types.FETCH_USER_PROFILE_SUCCESS:
            return {
                ...store,
                loading: false,
                profile: payload,
                error: false
            }
        case Types.FETCH_USER_PROFILE_FAILURE:
            return {
                ...store,
                loading: false,
                error: true
            }
        default:
            return store;

    }
}