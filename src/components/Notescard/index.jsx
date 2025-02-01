import { useNotes } from "../../context/notes-context";
import { findNotesInArchive } from "../../utils/findNotesInArchive";
import { findNotesInImportant } from "../../utils/findNotesInImportant";
import { findNotesInBin } from "../../utils/findNotesInBin";

export const Notescard = ({ id, title, text, isPinned }) => {
  const { notesDispatch, archive, important, bin } = useNotes();

  const onPinClick = (id) => {
    !isPinned
      ? notesDispatch({
          type: "PIN",
          payload: { id },
        })
      : notesDispatch({
          type: "UNPIN",
          payload: { id },
        });
  };

  const onArchiveClick = (id) => {
    !isNotesInArchive
      ? notesDispatch({
          type: "ADD_TO_ARCHIVE",
          payload: { id },
        })
      : notesDispatch({
          type: "REMOVE_FROM_ARCHIVE",
          payload: { id },
        });
  };

  const isNotesInArchive = findNotesInArchive(archive, id);

  const isNotesInImportant = findNotesInImportant(important, id);

  const isNotesInBin = findNotesInBin(bin, id);

  const onImportantClick = (id) => {
    !isNotesInImportant
      ? notesDispatch({
          type: "IMPORTANT",
          payload: { id },
        })
      : notesDispatch({
          type: "UNIMPORTANT",
          payload: { id },
        });
  };

  const onDeleteClick = (id) => {
    !isNotesInBin
      ? notesDispatch({
          type: "ADD_TO_BIN",
          payload: { id },
        })
      : notesDispatch({
          type: "REMOVE",
          payload: { id },
        });
  };

  return (
    <div
      className="w-[250px] border border-neutral-800 p-2 rounded-md"
      key={id}
    >
      <div className="flex justify-between">
        <p>{title}</p>
        {!isNotesInArchive && !isNotesInImportant && !isNotesInBin && (
          <button onClick={() => onPinClick(id)}>
            <span
              className={`${
                isPinned ? "material-icons" : "material-icons-outlined"
              }`}
            >
              push_pin
            </span>
          </button>
        )}
      </div>

      <hr className="border-t border-gray-400 my-2" />

      <div className="flex flex-col">
        <p>{text}</p>
        <div className="ml-auto">
          {!isNotesInImportant && !isNotesInBin && (
            <button onClick={() => onArchiveClick(id)}>
              <span
                className={
                  isNotesInArchive
                    ? `material-icons`
                    : `material-icons-outlined`
                }
              >
                archive
              </span>
            </button>
          )}

          {!isNotesInArchive && !isNotesInImportant && (
            <button onClick={() => onDeleteClick(id)}>
              <span className="material-icons">delete</span>
            </button>
          )}

          {/* button for important */}

          {!isNotesInArchive && !isNotesInBin && (
            <button onClick={() => onImportantClick(id)}>
              <span
                className={
                  isNotesInImportant
                    ? "material-icons"
                    : "material-icons-outlined"
                }
              >
                label_important
              </span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
