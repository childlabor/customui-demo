import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Hello",
      component: () =>
        import("./views/Hello.vue")
    },
    {
      path: "/toast-demo",
      name: "ToastDemo",
      component: () =>
        import("./views/ToastDemo.vue")
    },
    {
      path: "/laslider-demo",
      name: "LaSliderDemo",
      component: () =>
        import("./views/LaSliderDemo.vue")
    }
  ]
});
