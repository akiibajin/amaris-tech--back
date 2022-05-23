import db from "../../database/postgres/models"
import { UserAttributes } from "../user/user.attributes"
import { HomeTopAttributes } from "./home-content.interface"

const User = db.User

export async function getTopHomeService(user:typeof User){
        try{
            const response = await db.HomeTop.findOne({where:{
                UserId:user.id
            }})
            console.log("here the response: ", response)
            return response  
        }
        catch(error)
        { 
            return await Promise.reject(error)
        }
}

export async function addHomeTopService(homeTopContent:HomeTopAttributes, user?:typeof User){
    try
    {
        let {additionalContent} = homeTopContent
        if(!additionalContent) additionalContent = []
        const homeTop = await db.HomeTop.create({
            ...homeTopContent,
            additionalContent: !Array.isArray(additionalContent) ? [additionalContent] : additionalContent
        })
        await user.setHomeTop(homeTop)
        return await Promise.resolve() 
    }
    catch(error)
    {
        console.log(error)
        return await Promise.reject(error)
    }
} 