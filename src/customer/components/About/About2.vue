
<template>
    <section class="about style-2">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="about__content">
                        <div class="row">
                            <div class="col-xl-5 col-md-12">
                                <div class="block-text">
                                    <h3 class="title">{{title}}</h3>
                                    <p class="fs-20 mt-12">{{desc}}</p>
                                </div>
                            </div>
                            <div class="col-xl-7 col-md-12">
                                <div class="tf-box">
                                    <div class="box-icon">
                                        <span >
                                            <img src="../../../assets/images/logo/negative.png" style="width: ;">
                                        </span>
                                        <h5> {{ ngt }} %</h5>
                                    </div>
                                    <div class="box-icon" >
                                        <span >
                                            <img src="../../../assets/images/logo/neutral.png" style="width: ;">
                                        </span>
                                        <h5> {{ ntr }} %</h5>
                                    </div>
                                    <div class="box-icon" >
                                        <span >
                                            <img src="../../../assets/images/logo/positive.png" style="width: ;">
                                        </span>
                                        <h5> {{ psv }} %</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

import "./styles.scss";

import { dataAbout } from '../../fake-data/data-about';
import axios from 'axios';

export default {
    name: "About",
     data (){
        return {
            ngt : 0,
            psv : 0,
            ntr : 0,
            dataAbout,
            title: 'Customer Satisfaction Porcentenge',
            desc : ''
        }    
    },
    async created(){
            await axios
                .get('/predictall')
                .then(response => {
                    this.ngt = response.data.ngt;
                    this.psv = response.data.psv;
                    this.ntr = response.data.ntr;
                
                }
                );
  },
};
</script>
            
            