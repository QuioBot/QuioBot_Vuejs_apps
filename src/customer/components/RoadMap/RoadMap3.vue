
<template>
    <section class="road-map style-3" id="roadmap">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="block-text center">
                        <h6 class="sub-heading">{{subtitle}}</h6>
                        <h3 class="heading">{{title}}</h3>
                    </div>
                </div>
            </div>
        </div>
        <div class="road-map__main">
            <div class="box-roadmap" v-for="item in dataRoadMap.slice(27,31)" :key="item.id">
                <div class="icon"></div>
                <h5 class="title">{{item.title}}</h5>
                <ul class="list">
                    <li v-for="icon in item.list" :key="icon.id">
                        <span class="icon-roadmap"></span> <p>{{icon.text}}</p>
                    </li>                           
                </ul>
            </div>                          
        </div>
    </section>
</template>

<script>

import "./styles.scss";
import { dataRoadMap } from '../../fake-data/data-roadmap';

export default {
    name: "RoadMap",
     data (){
        return {
            dataRoadMap,
           subtitle: '',
            title: 'Training Steps',
        }    
    }
};
</script>
            
            