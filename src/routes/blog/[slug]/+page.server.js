import { sql } from "@vercel/postgres";

export async function load({ locals }) {
  return {
    names: await sql`SELECT * from NAMES where user_id='${locals.user}'`
  }
}
//export function load({params}){

    //const slug= ${params.slug}
//    return{
 //       content: `hello ${params.slug}`
 //   } 

//}
//async : running only on server side....not being sent to frontend