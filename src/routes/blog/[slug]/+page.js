export async function load({params}){

    //const slug= ${params.slug}
    return{
        content: `hello ${params.slug}`
    } 

}
//asyn: running only on server side....not being sent to frontend