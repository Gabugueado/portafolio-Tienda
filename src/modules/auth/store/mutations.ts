import { MutationTree } from "vuex";
import { AuthState } from "./state";

const mutation: MutationTree<AuthState> = {
    // someMutation(state: ExampleStateInterface){}

    SignIn(state, user) {
        state.user = user.email
    },
};

export default mutation