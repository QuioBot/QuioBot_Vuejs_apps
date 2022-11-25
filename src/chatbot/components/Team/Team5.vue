
<template>
    <section class="section-team style-4" id="team">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="block-text center">
                        <h6 class="sub-title">{{subtitle}}</h6>
                        <h3 class="title">{{title}}</h3>
                        <p class="mt-15 fs-20 pd22">{{desc}}</p>
                    </div>
                </div>
            </div>
            <div class="row mt-27 justify-content-center" data-aos="fade-up" data-aos-duration="1000">
                <div class="col-xl-3 col-md-6" v-for="item in dataTeam.slice(4,5)" :key="item.id">
                    <div class="team-box-s4 center">
                        <div class="team-box__image">
                            <router-link to="#"><img :src="item.img" alt="QuiBot"/></router-link>
                        </div>
                        <div class="team-box__info">
                            <router-link to="#" class="name h5">{{item.name}}</router-link>
                            <p class="position fs-17">{{item.position}}</p>
                            <ul class="list-social">   
                                <li  v-for="icon in item.listsocial" :key="icon.id">
                                    <router-link :to="icon.link"><i :class="icon.icon"></i></router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>         
            </div>
        </div>
    </section>
</template>

<script>

import "./styles.scss";
import { dataTeam } from '../../fake-data/data-team';

export default {
    name: "Feature",
     data (){
        return {
            dataTeam,
            subtitle: '',
            title: 'Our Team',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget quam est, elit venenatis nulla. Sodales netus viverra ipsum consequat.',
        }    
    }
};
</script>
            
            