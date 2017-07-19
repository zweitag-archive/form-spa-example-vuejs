import * as m from './_mutations';
import * as c from './_constants';

const API_URL = 'https://untitled-0gr6hjvsa65x.runkit.sh/';

export default {
    setSignupEmail(context, email) {
        context.commit(m.SET_SIGNUP_EMAIL, email);
    },
    confirmSignupEmail(context) {
        context.commit(m.SET_SIGNUP_STEP, c.ENTER_PERSONAL_DATA);
    },
    setFirstName(context, name) {
        context.commit(m.SET_FIRST_NAME, name);
    },
    setLastName(context, name) {
        context.commit(m.SET_LAST_NAME, name);
    },
    setGender(context, gender) {
        context.commit(m.SET_GENDER, gender);
    },
    confirmPersonalData(context) {
        context.commit(m.SET_SIGNUP_STEP, c.ENTER_SSN);
    },
    setSsn(context, ssn) {
        context.commit(m.SET_SSN, ssn);
    },
    async confirmSsn(context) {
        const ssn = context.state.ssn;
        const body = { ssn };
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });
        const json = await response.json();
        if (!json.error) {
            context.commit(m.SET_ADDRESS, json);
        }
    },
    confirmAddress(context) {
        context.commit(m.SET_SIGNUP_STEP, c.CONFIRM_ALL);
    },
};
