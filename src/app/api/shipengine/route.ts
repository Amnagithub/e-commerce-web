import { NextRequest } from "next/server";

export async function get (request : NextRequest){
        return new Response(JSON.stringify({ message: "shipengine testing" }));
};

export async function post (request:NextRequest){
    const{shipToAddress,packages} = await request.json();
    
    try{
        const shipmentDetails =await shipEngine.getRatesWithShipmentDetails({
            shipment:{
                shipTo:shipToAdress,
                shipFrom:{
                    name:"Syed",
                    phone:"0321*****",
                    adressline1:"Adress1",
                    adressline2:"Adress2",
                    cityLocality:"Karachi",
                    postalCode:"75000",
                    province:"Sindh",
                    countryCod:"PK",
                    adressResidentialIndicators:"no",

                },
                packages:packages
            }
        })
    } catch (error) {
        console.error(error:"Error");
        }

}