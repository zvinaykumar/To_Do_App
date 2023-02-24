import httpRequest from "./comman"



const register = async (payload) => {
    console.log("payload",payload)
    try{
        let res = await httpRequest({
            method:"POST",
            url:"localhost:3000/users",
            data:payload
        });

        console.log("res",res)
        let {meta, Data} = res.data;

        return {
            ok:meta.Status,
            message:meta.Message,
        }

    } catch (error) {
        return error.Message;
    }
};




export default register
