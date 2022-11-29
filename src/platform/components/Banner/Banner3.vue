
<template>
    <section class="banner-top style-6">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="block-text center">
                        <h2 class="heading">{{title}}</h2>
                        <h5 class="sub-heading">{{subtitle}}</h5>
                    </div>
                
                                        <div class="banner-top__main center">
                        <!-- <img src='~@/assets/images/layout/banner-nft.png' alt="QuiBot" /> -->

                        <div class="buy-token-box">
                            <h2 class="heading">
                                {{title2}}
                            </h2>
                            <p class="fs-20">{{subtitle2}}</p>
                            <a :href="app" target="_blank" class="btn-action style-6"><span>Login Now</span></a>
                            <carousel
                                :autoplay="5000"
                                :wrap-around="true"
                                :settings='settings' 
                                :breakpoints='breakpoints'
                            >
                                <Slide v-for="slide in dataBanner" :key="slide.id">
                                    <img :src="slide.img" alt="QuiBot" />
                                </Slide>

                            </carousel>

                            <h3 class="title">{{title3}}</h3>
                            <p class="fs-20">{{subtitle3}}</p>
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
import { defineComponent } from 'vue';
import { Carousel, Slide  } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';
import { dataBanner } from '../../fake-data/databannerswiper';

export default defineComponent({
    name: "Banner3",
     components: {
        // Countdown,
        Carousel,
        Slide,
    },
    data (){
        return {
            app : "http://157.245.17.232/#/email_marketing",
            dataBanner,
            title : 'QUIOBOT DIGITAL MARKETING PLATFORM',
            title2 : 'WHAT IS QUIOBOT DIGITAL MARKETING PLATFORM ? ',
            subtitle : '',
            subtitle2 : 'Quiobot Platform is a Digital Marketing Platform For Predict Customer Engagement , Customer Satisfaction And Aata Analysis',
            title3 : '',
            subtitle3 : '',
            token_bar1:'1,450 Tokens',
            token_bar2:'150,000 Tokens',
            settings: {
            itemsToShow: 2,
            snapAlign: 'left',
            breakpoints: {
                0: {
                    itemsToShow: 2,
                    snapAlign: 'left',
                },
                768: {
                    itemsToShow: 4,
                    snapAlign: 'left',
                },
                1024: {
                    itemsToShow: 6,
                    snapAlign: 'left',
                },
                1200: {
                    itemsToShow: 6,
                    snapAlign: 'left',
                },
            },
        },
        }    
    }
});
</script>
            
            