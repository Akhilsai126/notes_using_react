import { Fragment } from "react"
import { Navbar } from "../../../components/Navbar"
import { Sidebar } from "../../../components/Sidebar"
import { useNotes } from "../../../context/notes-context"
import { Notescard } from "../../../components/Notescard"

export const Archive = () => {

    const { archive } = useNotes();



    return (
        <>
            <Fragment>
                <Navbar />
                <main className="flex gap-3 h-screen"> {/* Ensure full viewport height */}
                    <Sidebar />
    
                    <div className="w-full flex-1 overflow-y-auto h-full"> {/* Set flex-1 for the content container */}
                        <div className="flex flex-wrap gap-6 mt-7">
                            {
                                archive?.length > 0 && archive.map(({ id, title, text, isPinned }) => {
                                    return (
                                        <Notescard key={id} id={id} title={title} text={text} isPinned={isPinned} />
                                    )
                                })
                            }
                        </div>
                    </div>
                </main>
            </Fragment>
        </>
    )
    
    
    
}