<template>
    <div>
        <h1>Account</h1>
        <hr/>
        <h3> {{nameFirst}}'s Previous Requests </h3>

        <p v-if="accountError" class="form-text text-danger">Can't get account information. Please try again later.</p>

        <table v-if="workOrdersByUser" class="table">
            <thead>
                <th>VehicleVIN</th>
                <th>Invoice Number</th>
                <th>Begin Date</th>
                <th>Service Requested</th>
            </thead>
            <tbody>
                <tr v-for="thisWorkOrder in workOrdersByUser" :key="thisWorkOrder.InvoiceID">
                    <th><router-link :to="`/vehicle/${thisWorkOrder.VehicleVIN}`">{{thisWorkOrder.VehicleVIN}}</router-link></th>
                    <th>{{thisWorkOrder.InvoiceID}}</th>
                    <th>{{thisWorkOrder.BeginDate}}</th>
                    <th>{{thisWorkOrder.ServiceRequested}}</th>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return{
            workOrdersByUser: null,
            accountError: false
        }
    },
    computed:{
        nameFirst(){
            return this.$store.state.user.FirstName
    }},
        created(){
            axios.get("/workorder/me", {
                headers: {
                    Authorization: `Bearer ${this.$store.state.token}`
                }
            })
            .then((response)=>{
                console.log("here is workorder/me response", response)
                this.workOrdersByUser = response.data
            })
            .catch(()=>{
                this.accountError = true;
            })
        }
    
}
</script>

<style scoped>

</style>