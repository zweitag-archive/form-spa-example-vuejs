export const SET_SIGNUP_STEP = 'SET_SIGNUP_STEP';
export const SET_SIGNUP_EMAIL = 'SET_SIGNUP_EMAIL';
export const SET_FIRST_NAME = 'SET_FIRST_NAME';
export const SET_LAST_NAME = 'SET_LAST_NAME';
export const SET_GENDER = 'SET_GENDER';
export const SET_SSN = 'SET_SSN';
export const SET_ADDRESS = 'SET_ADDRESS';

export default {
    [SET_SIGNUP_STEP](state, step) {
        state.signupStep = step; // eslint-disable-line
    },
    [SET_SIGNUP_EMAIL](state, signupEmail) {
        state.signupEmail = signupEmail; // eslint-disable-line
    },
    [SET_FIRST_NAME](state, firstName) {
        state.firstName = firstName; // eslint-disable-line
    },
    [SET_LAST_NAME](state, lastName) {
        state.lastName = lastName; // eslint-disable-line
    },
    [SET_GENDER](state, gender) {
        state.gender = gender; // eslint-disable-line
    },
    [SET_SSN](state, ssn) {
        state.ssn = ssn; // eslint-disable-line
    },
    [SET_ADDRESS](state, address) {
        state.address = address; // eslint-disable-line
    },
};
