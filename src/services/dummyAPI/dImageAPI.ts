import { dummyAPI } from "./dummAPI";
export const dImageAPI = {
  generateImage:async (width:string ='400',height:string ='200',bgColor:string ='ffffff',textColor:string ='000000',text:string,fontSize:string) => await dummyAPI({endpoint:`image/${width}x${height}/${bgColor}/${textColor}`,queries:{text:text.replaceAll(' ','+'),fontSize:fontSize.toString()}})
}


// https://dummyjson.com/image/400x200/008080/ffffff?text=Hello+Peter!&fontSize=16
// ${text?`text=${text?.replaceAll(' ','+')}:''`+`fontSize=${fontSize}`}