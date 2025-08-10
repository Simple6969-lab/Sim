const fs=require("fs/promises")
const path=require("path")
const {ans} =require("./gemini")
const tomakefile=async()=>{
    try {
        const data=await fs.readFile(path.join(__dirname,"q.txt"),"utf-8")
        const res=await ans(data)

        console.log(res)
    } catch (error) {
        console.log(error);
    }
}

tomakefile()
 

 