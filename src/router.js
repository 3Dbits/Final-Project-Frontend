import { createWebHistory, createRouter } from "vue-router";
import Home from "./components/Home.vue";
import Login from "./components/Login.vue";
import Register from "./components/Register.vue";
import IndexPage from "@/views/IndexPage.vue";
import UserInfo from "@/components/UserInfo.vue";
import PostPage from "@/views/PostPage.vue";
import Search from "@/components/Search.vue";
import SearchPage from "@/views/SearchPage.vue";
import FriendsPage from "@/views/FriendsPage.vue";
import ProfilePage from "@/views/ProfilePage.vue";
import PostList from "@/components/PostList.vue";
import HomePage from "@/views/HomePage.vue";
// lazy-loaded
const Profile = () => import("./components/Profile.vue")
const BoardAdmin = () => import("./components/BoardAdmin.vue")
const BoardUser = () => import("./components/BoardUser.vue")

const routes = [
    {
        path: "/",
        name: "home",
        component: IndexPage,
    },
    {
        path: "/home",
        component: HomePage,
    },
    {
        path: "/login",
        component: Login,
    },
    {
        path: "/register",
        component: Register,
    },
    {
        path: "/profile",
        name: "profile",
        // lazy-loaded
        component: Profile,
    },
    {
        path: "/admin",
        name: "admin",
        // lazy-loaded
        component: BoardAdmin,
    },
    {
        path:"/userInfo/:user.id",
        component: UserInfo
    },
    {
        path: "/user",
        name: "user",
        // lazy-loaded
        component: BoardUser,
    },
    {
        path: "/post",
        name: "PostPage",
        component: PostPage,
    },
    {
        path: "/search",
        name: "SearchPage",
        component: SearchPage,
    },
    {
        path: "/friends",
        name: "FriendsPage",
        component: FriendsPage,
    },
    {
        path: "/userInfo",
        name: "ProfilePage",
        component: ProfilePage,
    },
    {
        path: "/postlist",
        name: "Postlist",
        component: PostList,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

//MC If you want to check Authorized status everytime a navigating action is trigger
// router.beforeEach((to, from, next) => {
//   const publicPages = ['/login', '/register', '/home'];
//   const authRequired = !publicPages.includes(to.path);
//   const loggedIn = localStorage.getItem('user');
//
//   // trying to access a restricted page + not logged in
//   // redirect to login page
//   if (authRequired && !loggedIn) {
//     next('/login');
//   } else {
//     next();
//   }
// });

export default router;
