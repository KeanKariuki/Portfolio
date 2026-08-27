 import { ImageResponse } from "next/og"; 
 export const size = { width: 64, height: 64, }; 
 export const contentType = "image/png"; 
 export default 
 function Icon() { 
    return new ImageResponse( 
        ( 
        <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#262626", borderRadius: 10, }} >
             <div style={{ fontFamily: "Georgia, serif", fontStyle: "italic", fontSize: 38, color: "#f4f1ea", }} > K </div> 
             </div> ), { ...size, } ); 
             }