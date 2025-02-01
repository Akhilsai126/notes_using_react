import logo from '../../assets/textlogo.png';


export const Navbar = ()=>{
    return(
        <header className='flex px-5 py-2 gap-3 border-b-2 border-gray-100'>
            <div className='w-12 h-12'>
                <img className='w-full h-full' src={logo} alt="MyLogo"/>
            </div>
            <h1 className='text-indigo-800 text-4xl font-bold'>NoteIt</h1>
        </header>
    );
};