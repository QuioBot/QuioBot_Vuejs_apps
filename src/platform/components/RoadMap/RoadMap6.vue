
<template>
    <section class="road-map style-6" id="roadmap">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="block-text center">
                        <h2 class="heading">{{title}}</h2>
                    </div>
                    <div class="road-map__main">
                        
                    <carousel 
                            :settings='settings' 
                            :breakpoints='breakpoints'
                        >
                            <Slide v-for="slide in dataRoadMap.slice(11,15)" :key="slide.id">
                                <div class="roadmap-box">
                                    <h2 class="time">{{slide.time}}</h2>
                                    <h3 class="title">{{slide.title}}</h3>
                                    <p class="fs-20">{{slide.desc1}} <span>{{slide.title2}}</span></p>
                                    <p class="fs-20">{{slide.desc2}}</p>
                                </div>
                                
                            </Slide>
                            <template #addons>
                                <navigation />
                            </template>
                        </carousel>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import "./styles.scss";

import { defineComponent } from 'vue';
import { Carousel, Slide, Navigation,  } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';
import { dataRoadMap } from '../../fake-data/data-roadmap';


export default defineComponent ({
   name: "About3",
    components: {
        Carousel,
        Slide,
         Navigation,
    },
    data: () => ({
        dataRoadMap,
        title: 'Training Steps',
        desc : '',
        settings: {
            itemsToShow: 1,
            snapAlign: 'center',
        },
        breakpoints: {
            0: {
                itemsToShow: 1,
                snapAlign: 'center',
			},
            768: {
                itemsToShow: 1,
                snapAlign: 'center',
            },
            1024: {
                itemsToShow: 2,
                snapAlign: 'center',
            },
            1200: {
                itemsToShow: 2,
                snapAlign: 'center',
            },
        },
    }),
})

</script>