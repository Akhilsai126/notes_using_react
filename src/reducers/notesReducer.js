import {v4 as uuid} from 'uuid';


export const notesReducer = (state , {type,payload})=>{
     switch(type){
        case 'TITLE':
            return{
                ...state,
                title : payload,
            }
        case 'TEXT':
            return{
                ...state ,
                text : payload,
            }
        case 'ADD_NOTE':
            return{
                ...state,
                notes : [...state.notes,{title:state.title,text:state.text,id:uuid(),isPinned:false}]
            }
        case 'CLEAR_INPUT':
            return{
                ...state,
                title : '',
                text : ''
            }
        case 'PIN':
            return {
                ...state,
                notes: state.notes.map((note) =>
                  note.id === payload.id ? { ...note, isPinned: !note.isPinned } : note
                ),
              };
        case 'UNPIN':
            return {
                    ...state,
                    notes: state.notes.map((note) =>
                      note.id === payload.id ? { ...note, isPinned: false } : note
                    ),
                  };
        case 'ADD_TO_ARCHIVE':
            return{
                ...state,
                archive: [...state.archive,state.notes.find(({id})=> id === payload.id)],
                notes: state.notes.filter(({id})=>id!== payload.id)
            }
        case "REMOVE_FROM_ARCHIVE":
                const noteToRestore = state.archive.find(({ id }) => id === payload.id);
                return {
                    ...state,
                    notes: noteToRestore ? [...state.notes, noteToRestore] : state.notes, // Add back to notes
                    archive: state.archive.filter(({ id }) => id !== payload.id), // Remove from archive
                };
        case 'IMPORTANT':
            return{
                ...state,
                important : [...state.important,state.notes.find(({id})=>id===payload.id)],
                notes : state.notes.filter(({id})=> id !== payload.id),
            }
        case "UNIMPORTANT":
                const noteToRestore1 = state.important.find(({ id }) => id === payload.id);
                return {
                    ...state,
                    notes: noteToRestore1 ? [...state.notes, noteToRestore1] : state.notes, // Add back to notes
                    important: state.important.filter(({ id }) => id !== payload.id), // Remove from important
                };
        case 'ADD_TO_BIN':
            return{
                ...state ,
                bin:[...state.bin,state.notes.find(({id})=>id===payload.id)],
                notes:state.notes.filter(({id})=>id!==payload.id),
            }
        case 'REMOVE':
            return{
                ...state,
                bin: state.bin.filter(({id})=>id!==payload.id),
            }
            
        default:
            return state
     }
}

