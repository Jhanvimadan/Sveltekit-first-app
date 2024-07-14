export function load({params}){

    //const slug= ${params.slug}
    return{
        content: `hello ${params.slug}`
    } 

}
//async : running only on server side....not being sent to frontend