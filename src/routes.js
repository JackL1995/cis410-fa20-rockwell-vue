import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './components/Home.vue';
import Customer from './components/Customer.vue';
import Account from './components/Account.vue';
import Login from './components/Login.vue';
import NotFound from './components/NotFound.vue';
import SignUp from './components/SignUp.vue';
import Vehicles from './components/Vehicles.vue';
import VehicleDetails from './components/VehicleDetails.vue';
import WorkCreate from './components/WorkCreate.vue';
import WorkOrders from './components/WorkOrders.vue';

Vue.use(VueRouter);

const routes = [
    {path: '/', component: Home},
    {path: '/account', component: Account},
    {path: '/signin', component: Login},
    {path: '/vehicle', component: Vehicles},
    {path: '/vehicle/:pk', component: VehicleDetails,
        children: [
            {path: 'workorder', component: WorkCreate}
        ]},
    {path: '/signup', component: SignUp},
    {path: '/:invalidroute(.*)', component: NotFound}
]

export default new VueRouter({mode: 'history', routes:routes})