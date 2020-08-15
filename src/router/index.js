import Vue from "vue";
import VueRouter from "vue-router";

import Demo from "@/components/Demo";
import LearnDemo from "@/components/LearnDemo";
import MyWebsitem from "@/components/MyWebsitem";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes:[
        { path: "/", name: "home", component: Demo  },
        { path: "/websitem", name: "websitem", component: MyWebsitem},
        { path: "/damo", name: "damo", component: LearnDemo },
    ]
});

export default router;
