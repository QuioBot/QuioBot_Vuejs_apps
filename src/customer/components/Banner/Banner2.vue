
<template>
    <section class="banner-top style-2 ">
        <div class="container">
            <div class="row">
                <div class="col-xl-6 col-md-12">
                    <div class="banner-top__content">
                        <h2 class="title">{{title}}  </h2>
                        <h2 class="title" style="color:white ;">{{title1}}</h2>
                        <h2 class="title"><span>{{title2}}</span>{{title3}} </h2>
                        <p class="desc">{{desc}}</p>
                        <div class="button">
                            <a :href="github" target="_blank" class="btn-action"><span>Github Repository</span></a>  
                        </div>
<!-- 
                        <ul class="content-list">
                        <li>
                            <h5 class='number'>'Positif'</h5>
                            <p>0.23</p>
                        </li>
                        <li>
                            <h5 class='number'>'Neutre'</h5>
                            <p>0.45</p>
                        </li>
                        <li>
                            <h5 class='number'>'Negatif'</h5>
                            <p>0.32</p>
                        </li>
                        </ul> -->
                    </div>
                </div>
                <div class="col-xl-6 col-md-12">
                    
                    <div class="banner-top__sale">
                    <!-- <img src='../../assets/images/layout/banner01.png'/> -->
                    
                            
                          <form @submit.prevent="formSubmit">
                               <div class="form row">
                                   
                                  
                                   <div class="form-group col-md-12">
                                       <textarea v-model="review" style="width: 100%;height: 418px;color: #fff;background-color: transparent;border:solid 5px #fff;padding: 5%;" 
                                                placeholder="Best and cutest headset I've ever owned. I've always been a turtle Beach kinda girl but I saw these and instantly fell in love. They are super quality, the noise cancellation is great and the overall quality is just so good. My only complaint and it's not really a complaint because I knew about it before I bought it, is that it's only compatible with pc. As it has a USB connection.
                                                    Update: ive had this headset replaced once already. And the replacement has done the exact same thing as the first one, after a little while the headset starts acting as though it has a short. It will randomly disconnect and reconnect. Awful popping sounds and other noise. Dont recommend."></textarea>
                                   </div>
                               </div>
                               <div class="button">
                            <button class="btn-action style-customer" type="submit" ><span class="effect">Predict Your Review</span></button>
                        </div>
                             </form>
                    <div class="sale-content">
                            <h6>Review Prediction : <p style="color:#28a745;" class="value">{{score_sentiment}} : {{score_confidence}} %</p></h6>
                            

                            <!-- <Countdown 
                                starttime="Jul 1, 2022 15:37:25" 
                                endtime="Dec 8, 2022 16:37:25" >
                            </Countdown> -->
                            
                     </div>
                     
                        
                        
                    </div>
                
                </div>
      
            </div>
        </div>
    </section>
</template>

<script>
// import Countdown from '../Layouts/Countdown.vue';
import "./styles.scss";
// import { dataBanner } from '../../fake-data/databanner';
import axios from 'axios'

export default {
    name: "About",
     components: {
        // Countdown,
    },
    data (){
        return {
            github : "https://github.com/QuioBot?tab=repositories",
            score_sentiment : "positive",
            score_confidence : 0.7765687227249146,
            // dataBanner,
            title : 'QuioBot',
            title1 : 'Customer Satisfaction',
            title2 : 'Whit NLP Bert And',
            title3 : 'Web Scraping',
            desc: 'QuioBot Customer Satisfaction it is a measure of how products and services supplied by a company meet or surpass customer expectation.',
            review: '',
            score: {},
            // score_sentiment : "positive",
            show : false
        }    
    },
    methods: {

        formSubmit() {
                
                this.c= true
                axios
                     .post(
                        "/predict",{text:this.review},
                )
                     .then((response) => {
                            this.score = response.data;
                            this.score_confidence = response.data.confidence;
                            this.score_sentiment = response.data.sentiment

                        })

            }

},
};
</script>
<style>
textarea {
  width: 585px;
  height: 518px;
  color: #fff;
  background-color: transparent;
  border:solid 5px #fff;
  padding: 5%;
  /* background-image: url("../../assets/images"); */
}
textarea::placeholder {
  color: #fff;  
}
</style>
            
            