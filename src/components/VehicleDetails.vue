<template>
    <div>
        <div class="card">
            <div class="card-body">
                <h2 class="text-primary">{{Vehicles.MakeName}}</h2>
                <br/>
                <p>Popularity rank: <br/> <strong>{{Vehicles.PopularityRank}}</strong></p>
                <p>Number of cars worked on: <br/> <strong>{{Vehicles.NumberWorkedOn}}</strong></p>
                
            </div>
        </div>

        <br/>
        
        <router-link v-if="auth" :to="`/vehicle/${this.$route.params.pk}/workorder`">
            <button type="button" class="btn btn-success">Add a new work order</button>
        </router-link>

        <router-link v-else :to="`/signin`">
            <button type="button" class="btn btn-outline-success">Login to create a work order</button>
        </router-link>
        
    </div>
</template>

<script>
export default {
    computed:{
        Vehicles(){
            var Vehicle = this.$store.state.Vehicle;
            var thisVehicle = Vehicle.find((aVehicle)=> aVehicle.VehicleVIN == this.$route.params.pk)

            // console.log("here is the vehicle selected", thisVehicle)
            return thisVehicle
        },
        auth(){return this.$store.state.token}
    }
}
</script>

<style scoped>

</style>