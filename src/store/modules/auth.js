
import axios from 'axios';
import router from '../../router'

export const auth = {
  

    state: {
     auth: 0
    },
    mutations: {
    log: (state) => state.auth = 1,
    out: (state) => state.auth = 0
    },
    actions: {
        login ({commit}, credential) {
            axios.post("http://localhost:8000/api/login", credential)
                .then((response) => response.data.token)
                .then((result) => {
                    localStorage.setItem('token', result);
                    commit('log');
                    router.push({path: '/articeles'});
                    console.log(this.state.auth)
                });
        },
        logout({commit}) {
           
            
            var tokenn = localStorage.getItem('token');
            
            var tokenjs = {
              "token": tokenn,
            }
            console.log(tokenjs)
            axios.post("http://localhost:8000/api/logout", tokenjs)
                .then((response) => console.log(response))
                .then(() => {
                    localStorage.removeItem('token');
                    commit('out');
                    router.push({path: '/login'});
                    console.log(this.state.auth)

                });
        }
    },
  }