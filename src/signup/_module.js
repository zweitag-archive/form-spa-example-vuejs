import mutations from './_mutations';
import actions from './_actions';
import { ENTER_EMAIL } from './_constants';

const initialState = {
    signupStep: ENTER_EMAIL,
    signupEmail: '',
    firstName: '',
    lastName: '',
    gender: 'other',
    ssn: '',
    address: {
        street: '',
        city: '',
    },
};

export default { state: initialState, mutations, actions };
