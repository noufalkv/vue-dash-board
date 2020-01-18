<template>
  <v-app>
   <v-content>
     <v-container class="fill-height" fluid>
       <v-row align="center" justify="center">
         <v-col  cols="12" sm="8" md="8">
           <v-card class="elevation-12">
              <v-window v-model="step">
                 <v-window-item  :value="1">
                   <v-row>
                     <v-col  cols="12"  md="8">
                        <v-card-text class="mt-12">
                          <h1 class="text-center display-2 teal--text text--accent-3" >Sign in</h1>
                           

                        <h4 class="text-center  mlt-4" >Ensure your e-mail for registration</h4>
                          <v-form>
                               <v-text-field label="Email" v-model="email" name="Email" prepend-icon="email" type="text" color="teal accent-3" :rules="inputRules"/>
                                 <v-text-field id="password" v-model="password" label="Password" name="Password" prepend-icon="lock" type="password" color="teal accent-3" :rules="inputRules"/>
                          </v-form>
                          <h3 class="text-right  mlt-3" >Forgot your Password?</h3>
                          <v-checkbox class="text-right  mlt-3" v-model="ex4"  label="Remember me"  color="teal"   value="indigo"  hide-details ></v-checkbox>
            
                           
                          </v-card-text>

                          <div class="text-center" mt-3>
                             
                             <v-btn rounded color="teal accent-3" dark  @click="submit">Sign in</v-btn>
                          </div>
                      </v-col>
                       <v-col  cols="12"  md="4" color="teal accent-3" class="teal accent-3">
                         <v-card-text class="white--text mt-12">

                           <h1 class="text-center display-1"> Hello Friends !</h1>
                            <h5 class="text-center">Enter your personal details and start journey wth us!</h5>
                         </v-card-text>
                          <div class="text-center">
                            <v-btn rounded outlined="" dark @click="step++">Sign Up</v-btn>
                          </div>  
                        </v-col> 
                   </v-row>
                      
              </v-window-item> 
               <v-window-item  :value="2">
                <v-row class="fill-height">
                   <v-col  cols="12"  md="4" class="teal accent-3">
                     <v-card-text class="white--text mt-12">
                         <h1 class="text-center display-1"> Welcome Back!</h1>
                            <h5 class="text-center">To keep Connected with us Please Login with your personnal info </h5>
                     </v-card-text>  
                     <div class="text-center">
                        <v-btn rounded outlined  dark @click="step--">Sign in</v-btn>
                     </div>
                   </v-col> 

                   <v-col  cols="12"  md="8">
                      <v-card-text class="mt-12">
                         <h1 class="text-center display-2 teal--text text--accent-3"> Create Account</h1>
                          

                      <h4 class="text-center mt-4"> Ensure Your Email for registration</h4>



                      <v-form>
                            <v-text-field label="Name" name="name" prepend-icon="person" v-model="name" type="text" color="teal accent-3 " :rules="inputRules"/>
                            <v-text-field label="Email" name="email" prepend-icon="email"  v-model="email" type="text" color="teal accent-3" :rules="inputRules"/>
                            <v-text-field id="password" label="password" name="Password" v-model="password" prepend-icon="lock" type="password" color="teal accent-3" :rules="inputRules"/>
                     </v-form>
                 </v-card-text> 

                 <div class="text-center mt-5">
                   <v-btn rounded="teal accent-3" dark router-link to="/dashboard"  @click="submitReg"> Sign Up</v-btn>
                  </div>  

              </v-col> 

                 </v-row> 

              </v-window-item> 
              </v-window>            
           </v-card>
          </v-col>
       </v-row>
     </v-container>
   </v-content>
  </v-app>  

 
</template>

<script>
// @ is an alias to /src
 

export default {
  name: 'home',
   
  data(){
    return{
      step: 1,
      name:'',
      email:'',
      password:'',
      inputRules:[
        v => v.length >= 3 || 'Minimum length 3 character'
      ],
      ex4: [ 'indigo'],
    }
  },
  props:{
    source: String
  },
  methods:{
    submit()
    {
     if(this.email !=''|| this.password !='') 
     {
      this.$router.push({name:'dashboard'})
      }
    },


    submitReg()
    {
     if(this.name !=''|| this.email !=''|| this.password !='') 
     {
      this.$router.push({name:'dashboard'})
      }
    }
    
  }
  
}
</script>


 