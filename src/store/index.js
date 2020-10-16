import axios from 'axios';

export const actions = {
    async nuxtServerInit({ commit }) {
        const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users`);

        commit('auth/set', data[0]);
    },
};
