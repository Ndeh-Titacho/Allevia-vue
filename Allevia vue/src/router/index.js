import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import ServicesView from "@/views/ServicesView.vue";
import AboutView from "@/views/AboutView.vue";
import FAQView from "@/views/FAQView.vue";
import loginView from "@/views/loginView.vue";
import SignupView from "@/views/SignupView.vue";
import ResetPasswordView from "@/views/ResetPasswordView.vue";
import ForgotPasswordView from "@/views/ForgotPasswordView.vue";
import AppointmentsView from "@/views/AppointmentsView.vue";
import ProfileView from "@/views/ProfileView.vue";
import MedicationsListView from "@/views/MedicationsListView.vue";
import MedicalHistoryView from "@/views/MedicalHistoryView.vue";
import DashboardView from "@/views/DashboardView.vue";
import ScheduleAppointmentView from "@/views/ScheduleAppointmentView.vue";
import AdminDashoardView from "@/views/AdminDashoardView.vue";
import UsersView from "@/views/UsersView.vue";
import ShowUserView from "@/views/ShowUserView.vue";
import EditProfileView from "@/views/EditProfileView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/services",
      name: "services",
      component: ServicesView,
    },
    {
      path: "/about",
      name: "about-us",
      component: AboutView,
    },
    {
      path: "/FAQ",
      name: "FAQ",
      component: FAQView,
    },
    {
      path: "/login",
      name: "login",
      component: loginView,
    },
    {
      path: "/signup",
      name: "signup",
      component: SignupView,
    },
    {
      path: "/reset-password",
      name: "reset-passord",
      component: ResetPasswordView,
    },
    {
      path: "/forgot-password",
      name: "forgot-passord",
      component: ForgotPasswordView,
    },
    {
      path: "/appointments",
      name: "appointments",
      component: AppointmentsView,
    },
    {
      path: "/profile",
      name: "profile",
      component: ProfileView,
    },
    {
      path: "/medication-list",
      name: "medication-list",
      component: MedicationsListView,
    },
    {
      path: "/medical-history",
      name: "medical-history",
      component: MedicalHistoryView,
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: DashboardView,
    },
    {
      path: "/schedule-appointment",
      name: "schedule-appointment",
      component: ScheduleAppointmentView,
    },
    {
      path: "/admin-dashboard",
      name: "admin-dashboard",
      component: AdminDashoardView,
    },
    {
      path: "/users",
      name: "users-list",
      component: UsersView,
    },
    {
      path: "/showUser",
      name: "showuser",
      component: ShowUserView,
    },
    {
      path: "/edit-profile",
      name: "editprofile",
      component: EditProfileView,
    },
  ],
});

export default router;
