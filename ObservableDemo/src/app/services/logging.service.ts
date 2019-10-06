export class LoggingService {   
    logInfo(msg : string) : void{
        console.log("Info : "+msg);        
    }
    logDebug(msg : string) : void{
        console.log("Debug : "+msg);        
    }
    logError(msg : string) : void{
        console.log("Error : "+msg);        
    }
}