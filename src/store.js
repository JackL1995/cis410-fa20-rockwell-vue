import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

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
        }
    }
})