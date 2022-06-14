// code your solution here
const superbowlWin = (rec) => {
    for(const myItem of rec){
        if(myItem.result === "W"){
            return myItem.year;
        }
    }
        
}
