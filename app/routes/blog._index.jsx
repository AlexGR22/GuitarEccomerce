import { useLoaderData } from "@remix-run/react"
import { getBlogs } from "~/models/blog.server"
import ListadoBlogs from "~/components/listadoBlogs";


export function meta() {
    return [
        { title: `GuitarLA - Blog` },
        { name: 'description', content: 'GuitarLA, blog de música' }
    ]
}
export async function loader() {
    const blogs = await getBlogs()
    console.log(blogs);
    return blogs.data
}



function Blog() {

    const blogs = useLoaderData()

    return (
            <ListadoBlogs
                blogs={blogs} />
    )
}

export default Blog



//=====================
// archivo sin nested
//=====================

// import { getBlogs } from "~/models/blog.server"
// import { useLoaderData } from "@remix-run/react"
// import styles from '~/styles/blog.css'
// import ListadoBlogs from "~/components/listadoBlogs";

// export function links() {
//     return [
//         {
//             rel: 'stylesheet',
//             href: styles
//         }

//     ]
// }
// export async function loader() {
//     const blogs = await getBlogs()
//     console.log(blogs);
//     return blogs.data
// }

// export function meta() {
//     return [
//         { title: `GuitarLA - Blog` },
//         { name: 'description', content: 'GuitarLA, blog de música' }
//     ]
// }

// function Blog() {
//     const blogs = useLoaderData()

//     return (

//         <main className="contenedor">
//             <ListadoBlogs
//                 blogs={blogs} />
//         </main>
//     )
// }

// export default Blog
