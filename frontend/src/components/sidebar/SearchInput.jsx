import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversations();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3) {
      return toast.error("Search term must be at least 3 characters long");
    }

    const conversation = conversations.find((c) =>
      c.fullName.toLowerCase().includes(search.toLowerCase())
    );

    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else toast.error("No such user found!");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-2 bg-gray-800 rounded-full p-3 w-full max-w-lg mx-auto shadow-lg"
    >
      <input
        type="text"
        placeholder="Search…"
        className="flex-1 bg-transparent text-white placeholder-gray-400 focus:outline-none px-4 py-2"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        type="submit"
        className="p-2 rounded-full bg-sky-500 hover:bg-sky-600 transition-all focus:ring-2 focus:ring-sky-300"
      >
        <IoSearchSharp className="w-6 h-6 text-white" />
      </button>
    </form>
  );
};

export default SearchInput;

// STARTER CODE SNIPPET
// import { IoSearchSharp } from "react-icons/io5";

// const SearchInput = () => {
// 	return (
// 		<form className='flex items-center gap-2'>
// 			<input type='text' placeholder='Search…' className='input input-bordered rounded-full' />
// 			<button type='submit' className='btn btn-circle bg-sky-500 text-white'>
// 				<IoSearchSharp className='w-6 h-6 outline-none' />
// 			</button>
// 		</form>
// 	);
// };
// export default SearchInput;
