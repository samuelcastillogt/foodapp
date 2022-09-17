import { AppProps } from "next/app"
import Layout from "../component/Layout"
import "./style.css"
const MyApp =({ Component, pageProps })=>{
    return(
        <Layout>
             <Component {...pageProps} />
        </Layout>
    )
}
export default MyApp