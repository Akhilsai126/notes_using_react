import { useNotes } from "../../context/notes-context";
import { findNotesInArchive } from "../../utils/findNotesInArchive";

export const Notescard = ({ id, title, text, isPinned }) => {
  const { notesDispatch,archive } = useNotes();

  const onPinClick = (id) => {
    !isPinned ?
      notesDispatch({
        type: "PIN",
        payload: { id },
      }) : notesDispatch({
        type: "UNPIN",
        payload: { id },
      })
  };


  const onArchiveClick = (id)=>{

    !isNotesInArchive ? notesDispatch({
      type : 'ADD_TO_ARCHIVE',
      payload : {id},
     }) : notesDispatch({
      type : 'REMOVE_FROM_ARCHIVE',
      payload : {id},
     })
  }

   

  const isNotesInArchive = findNotesInArchive(archive,id);

  return (
    <div className="w-[250px] border border-neutral-800 p-2 rounded-md" key={id}>
      <div className="flex justify-between">
        <p>{title}</p>
        {
          !isNotesInArchive?  <button onClick={()=>onPinClick(id)}>
          <span className={`${isPinned? 'material-icons' : 'material-icons-outlined'}`}>
              push_pin
          </span>
       </button>
     : <></>
        }
         </div>

         <hr className="border-t border-gray-400 my-2" />
         

      <div className="flex flex-col">
        <p>{text}</p>
        <div className="ml-auto">
          <button onClick={()=>onArchiveClick(id)}>
            <span className={isNotesInArchive?`material-icons`:`material-icons-outlined`}>archive</span>
          </button>
          <button>
            <span className="material-icons">delete</span>
          </button>
        </div>
      </div>
    </div>
  );
};
