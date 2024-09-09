import Layout from "../components/Layout.vue"
import Sexto from "../components/Sexto.vue"
import Septimo from "../components/Septimo.vue"
import Octavo from "../components/Octavo.vue"
import Noveno from "../components/Noveno.vue"
import Decimo from "../components/Decimo.vue"
import Once from "../components/Once.vue"

export const routes = [
    {
        path: "/", component: Layout, name: "layout", children: [
            { path: "", redirect: "gradosexto" },
            { path: "gradosexto", component: Sexto, name: "sexto" },
            { path: "gradoseptimo", component: Septimo, name: "septimo" },
            { path: "gradooctavo", component: Octavo, name: "octavo" },
            { path: "gradonoveno", component: Noveno, name: "noveno" },
            { path: "gradodecimo", component: Decimo, name: "decimo" },
            { path: "gradoonce", component: Once, name: "once" }
        ]
    }
]