<template>
    <div>
        <h1>Account</h1>
        <hr/>
        <h3> {{nameFirst}}'s Previous Requests </h3>

        <table class="table">
            <thead>
                <th>Begin Date</th>
                <th>Vehicle Make</th>
                <th>Service Requested</th>
            </thead>
            <tbody>
                <tr v-for="thisWorkOrder in workOrdersByUser" :key="thisWorkOrder.InvoiceID">
                    <th>{{thisWorkOrder.BeginDate}}</th>
                    <!-- <th>{{thisWorkOrder.MakeID}}</th> -->
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
        },
        created(){
            axios.get("/workorder/me", {
                headers: {
                    Authorization: `Bearer ${this.$store.state.token}`
                }
            })
            .then((response)=>{
                //console.log("here is workorder/me response", response)
                this.workOrdersByUser = response.data
            })
        }
    }
}
</script>

<style scoped>

</style>