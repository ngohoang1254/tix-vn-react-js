import MovieDetail from "../containers/Home/MovieDetail"
import HomePage from "./../containers/Home/HomePage"
const routesHome = [
    {
        path : "/",
        component : HomePage,
        exact : true
    },
    {
        path : "/movie/:id",
        component : MovieDetail,
        exact : false
    }
]
export {routesHome}