<template>
  <div class="about" >
     <Navbar/>
     <div class="mx-12">
    <h1 class="subheading  text-center pa-5 "> Dashboard</h1>
    <v-container class="my-5"> 
      <v-container class="grey lighten-5">
        <v-row no-gutters>
          <v-col cols="12" sm="4"  >
            <v-card class="pa-4 ma-2" outlined tile >
              <h3 class="subheading grey--text text-center">Bookings  Chart</h3>
              <pie-chart :data="[['OTA',150],['Travel Agent',200],['Hotel/Cruise',50],['Direct',500],['Phone',100]]"></pie-chart>
            </v-card>
          </v-col>

          <v-col cols="12" sm="4" >
            <v-card class="pa-4 ma-2" outlined tile>
              <h3 class="subheading grey--text text-center ">Sales Chart</h3>
              <line-chart :data="chartData"></line-chart>
            </v-card>
          </v-col>

          <v-col cols="12" sm="4"  >
            <v-card class="pa-4 ma-2" outlined tile>
              <h3 class="subheading grey--text text-center">Sales Chart</h3>
              <column-chart :data="[['Sun', 32], ['Mon', 46], ['Tue', 28]]"></column-chart>
            </v-card>
          </v-col>

        </v-row> 

        
      </v-container> 



<h1 class="subheading  text-center pa-5 "> Customers</h1>



       <v-layout row class="mb-3">
         <v-tooltip top>
           <template v-slot:activator="{ on }">
         <v-btn depressed small color="teal" dark @click="sortBy('name')" v-on="on" class="mx-1">
           <v-icon left small>person</v-icon>
           <span class="caption text-lowercase">By Name</span>
         </v-btn> 
         </template>
         <span>Sort By Name</span> 
        </v-tooltip>

        <v-tooltip top>
           <template v-slot:activator="{ on }">
          <v-btn  depressed small  color="teal" dark @click="sortBy('company')"  v-on="on" class="mx-1">
           <v-icon left small>folder</v-icon>
           <span class="caption text-lowercase">By Company</span>
         </v-btn> 
         </template>
         <span>Sort By Company</span> 
        </v-tooltip>
        </v-layout>



         <v-card flat v-for="project in projects" :key="project.title"> 
            <v-layout row wrap :class="`pa1- project ${project.status}`"> 
                 <v-flex xs10 md4 class="pa-3"> 
                    <div class="caption grey-text">Customer Name  </div> 
                     <div>{{project.name}} </div>  
                  </v-flex>

                  <v-flex xs6 sm4 md2 class="pa-3"> 
                    <div class="caption grey-text">Company </div> 
                     <div>{{project.company}} </div>  
                  </v-flex>

                  <v-flex xs6 sm4 md2 class="pa-3"> 
                    <div class="caption grey-text">Email </div> 
                     <div>{{project.email}}</div>  
                  </v-flex>

                   <v-flex xs2 sm4 md2 class="pa-3"> 
                     <div class="right">
                    <v-chip small :class="`${project.status} white--text caption my-2`">{{project.status}}</v-chip>
                    </div>
                     </v-flex>

                    <v-flex xs1 sm4 md1 class="pa-3"> 
                      
                     <Edit/> 
                    
                     </v-flex>
                      <v-flex xs1 sm4 md1 class="pa-3"> 
                      
                      <v-btn class="mx-2" fab dark small color="white">
                      <v-icon dark color="red">delete</v-icon>
                    </v-btn>
                    
                     </v-flex>


                   
             </v-layout> 
              <v-divider> </v-divider>
         </v-card>
        
    </v-container>
    </div>
  </div>
   
</template>
<script>
import Navbar from '@/components/Navbar.vue'
import Edit from '@/components/edit.vue'
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
    components: { Navbar, Edit},
   data(){
     return{
       chartData:{
         '2020-01-12' : 2, '2020-01-13' : 5,  '2020-01-14' : 10,  '2020-01-15' : 5,  '2020-01-16' : 11 ,  '2020-01-17' : 12 ,  '2020-01-18' : 14 },
        projects: [
         { name: 'Noufal', company: 'John doe', email: 'noufalv@gmail.com', status: 'active', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
         { name: 'John doe', company: 'The Net Ninja', email: 'abcd@gmail.com', status: 'inactive', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
         { name: 'John Leider', company: 'Carl Martin Erik Larsson', email: 'xyzac@gmail.com', status: 'active', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
         { name: 'Lee Sang-hyeok', company: 'The Net Ninja', email: 'jhon@gmail.com', status: 'inactive', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
         { name: 'Peng Yiliang', company: 'Lee Sang-hyeok', email: 'fgb@gmail.com', status: 'active', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
         { name: 'Carl Martin Erik Larsson', company: 'The Net Ninja', email: 'sales@gmail.com', status: 'active', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
       ]
     }
   },


   methods:{
     sortBy(prop){
       this.projects.sort((a,b)=> a[prop] < b[prop] ? -1 : 1  )
     }
   }
}
</script>

 <style>
  .project.inactive{ border-left:4px solid #3cd1c2;border-right:4px solid #3cd1c2;}
  .project.active{ border-left:4px solid orange;border-right:4px solid orange;}
   

  .v-chip.inactive{ background: #3cd1c2 !important;}
  .v-chip.active{ background:orange !important;}
  
 </style>  