export const DISPLAY_LIST = 'DISPLAY_LIST';

export const DISPLAY_DETAIL = 'DISPLAY_DETAIL';
export const DELETED_ITEM='DELETED_ITEM';

export const saveData = (payload) =>{
    return {
        type:'SAVEDATA',
        payload:payload
    }
}