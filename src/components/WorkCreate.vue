<template>
<div class="row justify-content-center">
    <div class="col-lg-10">
        <div class="card"><div class="card-body">
            <h4>Submit a Repair Request</h4> 
            <form id="review-form" @submit.prevent="submitRequest">
                <!-- <div class="form-group">
                    <label for="ratinginput">Rating</label> <input type="number" id="ratinginput" name=" rating" min="1" max="10" required="required" class="form-control"
                    v-model="rating"></div>  -->
                    <div class="form-group">
                    <label for="summaryinput">Begin date requested</label> 
                    <textarea row="1" id="summaryinput" name="summary" required="required" class="form-control" v-model="BeginDate"></textarea>
                    </div> 

                    <!-- <div class="form-group">
                    <label for="summaryinput">Required return date</label> 
                    <textarea row="3" id="summaryinput" name="summary" required="required" class="form-control" placeholder="Can be null" v-model="ReturnDatePromised"></textarea>
                    </div>  -->

                    <div class="form-group">
                    <label for="ratinginput">Advisor ID</label> <input type="number" id="ratinginput" name=" rating" min="1" max="1" required="required" class="form-control" placeholder="Can only be 1, for now"
                    v-model="AdvisorID"></div> 

                    <!-- <div class="form-group">
                    <label for="ratinginput">Customer ID</label> <input type="number" id="ratinginput" name=" rating" min="4" max="13" required="required" class="form-control" placeholder="Can only be between 4 and 13"
                    v-model="CustomerID"></div>  -->

                    <div class="form-group">
                        <label for="summaryinput">What can we help you with today?</label> 
                        <textarea row="3" id="summaryinput" name="summary" required="required" class="form-control" placeholder="Please put duct tape over hole in engine" v-model="ServiceRequested"></textarea>
                        </div> 
                        <button type="submit" class="btn btn-primary">Submit Request</button> 
                        <button v-on:click="cancelReview" type="clear" class="btn btn-outline-danger">Cancel</button> 

                        <p v-if="errorMessage" class="form-text text-danger">{{errorMessage}}</p>
                        <!----></form></div></div></div></div>
</template>

<script>
import axios from 'axios';

export default {
    data(){
        return{
            BeginDate: null,
            // ReturnDatePromised: null,
            AdvisorID: null,
            ServiceRequested: null,
            // CustomerID: null,
            errorMessage: null
        }
    },
    methods:{
        submitRequest(){
            const myRequest={
                BeginDate: this.BeginDate,
                ServiceRequested: this.ServiceRequested,
                AdvisorID: this.AdvisorID, 
                VehicleVIN: this.$route.params.pk
            };

            console.log("Here is the request", myRequest)

            const token = this.$store.state.token;
            axios.post("/WorkOrder", myRequest, {
                headers:{
                    Authorization: `Bearer ${token}`
                }
            })
            .then(()=>{this.$router.replace('/account')})
            .catch(()=>{
                this.errorMessage = "Cannot create a work request. Try again later."
            })
        },
        cancelReview(){
            this.$router.go(-1)
        }
    }
}
</script>

<style scoped>

</style>