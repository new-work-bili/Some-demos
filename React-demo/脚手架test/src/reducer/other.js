
const other = (state=1,action)=>{
    switch(action.type){
        case 'ADD': return 'ADD';
        case 'SUB': return 'SUB';
        default: return state;
        break;
    }
}

export default other;