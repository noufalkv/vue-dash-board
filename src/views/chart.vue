<template>
  <div class="about" >
     <Navbar/>
     <div class="mx-12">
    <h1 class="subheading  text-center pa-5 "> Charts</h1>
    <v-container class="my-5"> 
      <v-container class="grey lighten-5">
        <v-row no-gutters>
          <v-col cols="12" sm="4"  >
            <v-card class="pa-4 ma-2" outlined tile >
              <h3 class="subheading grey--text text-center">Sales Chart</h3>
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
        
    </v-container>
    </div>
  </div>
   
</template>
<script>
import Navbar from '@/components/Navbar.vue'
 
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
    components: { Navbar},
   data(){
     return{
       chartData:{
          '2020-01-12' : 2, '2020-01-13' : 5,  '2020-01-14' : 10,  '2020-01-15' : 5,  '2020-01-16' : 11 ,  '2020-01-17' : 12 ,  '2020-01-18' : 14   },
        projects: [
        { title: 'Design a new website', person: 'The Net Ninja', due: '1st Jan 2019', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Code up the homepage', person: 'Chun Li', due: '10th Jan 2019', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Design video thumbnails', person: 'Ryu', due: '20th Dec 2018', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Create a community forum', person: 'Gouken', due: '20th Oct 2018', status: 'overdue', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
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

  