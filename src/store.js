import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import routes from './routes.js';

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        token: null,
        user: null,
        Vehicle: []
    },
    mutations:{
        storeTokenInApp(state, myToken){
            state.token = myToken
        },
        storeUserInApp(state, myUser){
            state.user = myUser
        },
        storeVehicle(state, myVehicle){
            state.Vehicle = myVehicle
        },
        clearAuthData(state){
            state.token = null;
            state.user = null;
        }
    },
    actions:{
        getVehicle({commit}){
            axios.get('/vehicle')
            .then((myResponse)=>{
                console.log("response from getVehicle action", myResponse)
                commit('storeVehicle', myResponse.data)
            })
            .catch(()=>{console.log("error in getVehicle action")})
        },
        logout({commit, state}){
            axios.post('/customer/logout', null, {
                headers:{
                    Authorization: `Bearer ${state.token}`
                }
            });

            commit('clearAuthData');

            routes.replace("/");
        }, 
        tryAutoLogin({commit, dispatch}){
            const token = localStorage.getItem('token');
            if(!token){return}
            
            const expirationDate = new Date(localStorage.getItem('expiration'));

            const now = new Date();

            if( now >= expirationDate) { return}

            commit('storeTokenInApp', token);

            axios.get('/Customer/me', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            .then((myResponse)=>{
                commit('storeUserInApp', myResponse.data);
                dispatch("setLogoutTimer")
            })
        },
        setLogoutTimer({commit, dispatch}){
            const expirationDate = new Date(localStorage.getItem('expiration'));

            const now = new Date();

            const timeAmount = expirationDate - now;

            setTimeout(()=>{
                dispatch("logout")
            }, timeAmount)
        }
    }
})