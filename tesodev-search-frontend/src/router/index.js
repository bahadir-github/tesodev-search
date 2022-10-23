import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import ShowMoreView from "../views/ShowMoreView.vue";
import AddUserView from "../views/AddUserView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/show-more",
    name: "showMore",
    component: ShowMoreView,
  },
  {
    path: "/add-user",
    name: "AddUserView",
    component: AddUserView,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
