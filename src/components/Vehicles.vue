<template>
    <div>
        <h1>Vehicles</h1>
        <hr/>

        <table class="table">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Make Name</th>
                    <th>Model</th>
                    <th>Color</th>
                    <th>Technician Name</th>
                    <th>Miles</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="thisVehicle in Vehicle" :key="thisVehicle.VehicleVIN">
                    <td>{{thisVehicle.Year}}</td>
                    <th>{{thisVehicle.MakeName}}</th>
                    <td>{{thisVehicle.Model}}</td>
                    <td>{{thisVehicle.Color}}</td>
                    <td>{{thisVehicle.TechnicianName}}</td>
                    <td>{{thisVehicle.Miles}}</td>
                    <!-- <td>Number of {{thisVehicle.MakeName}}s Worked On</td> -->
                    <td>
                        <router-link :to="`/vehicle/${thisVehicle.VehicleVIN}`">
                            <button type="button" class="btn btn-primary">{{thisVehicle.MakeName}} Details</button>
                        </router-link>
                    </td>
                </tr>
            </tbody>
        </table>

    </div>
</template>

<script>
export default {
    computed:{
        Vehicle(){return this.$store.state.Vehicle}
    }
}
</script>

<style scoped>

</style>