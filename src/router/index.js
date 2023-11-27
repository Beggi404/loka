import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RoomView from '../views/RoomView.vue'
import ReviewView from '../views/ReviewView.vue'
import ContactView from '../views/ContactView.vue'
import BookView from '../views/BookView.vue'
import PaymentView from '../views/PaymentView.vue'
import TermsofserviceView from "../views/TermsofserviceView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/rooms',
      name: 'room',
      component: RoomView
    },
    {
      path: '/reviews',
      name: 'review',
      component: ReviewView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/book',
      name: 'book',
      component: BookView
    },
    {
      path: '/payment',
      name: 'payment',
      component: PaymentView
    },
    {
      path: '/tos',
      name: 'tos',
      component: TermsofserviceView
    }
  ]
})

export default router
