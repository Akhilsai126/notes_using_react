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
                <main className="flex gap-3">
                    <Sidebar />

                    <div>
                        <div className=" flex flex-wrap gap-6 w-screen mt-7">

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