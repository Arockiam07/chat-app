import { useEffect } from "react";
import useConversation from "../../zustand/useConversation";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";
import { useAuthContext } from "../../context/AuthContext";

const MessageContainer = () => {
	const { selectedConversation, setSelectedConversation } = useConversation();

	useEffect(() => {
		// Cleanup function (unmounts)
		return () => setSelectedConversation(null);
	}, [setSelectedConversation]);

	return (
		<div className="md:min-w-[900px] flex flex-col h-full bg-gray-900 text-white rounded-lg">
			{!selectedConversation ? (
				<NoChatSelected />
			) : (
				<>
					{/* Header with Profile */}
					<div className="bg-slate-700 flex items-center gap-3 px-4 py-3 rounded-t-lg">
						{/* Profile Picture */}
						<img
							src={selectedConversation.profilePic || "/default-avatar.png"}
							alt="Profile"
							className="w-10 h-10 rounded-full border border-gray-300"
						/>
						
						{/* User Name */}
						<span className="text-lg font-semibold">{selectedConversation.fullName}</span>
					</div>
					<hr />

					{/* Messages */}
					<div className="flex-1 overflow-y-auto p-4">
						<Messages />
					</div>

					{/* Message Input */}
					<MessageInput />
				</>
			)}
		</div>
	);
};

export default MessageContainer;

const NoChatSelected = () => {
	const { authUser } = useAuthContext();
	return (
		<div className="flex items-center justify-center w-full h-full">
			<div className="px-4 text-center sm:text-lg md:text-xl text-gray-300 font-semibold flex flex-col items-center gap-3">
				<p>Welcome 👋 {authUser.fullName} ❄</p>
				<p>Select a chat to start messaging</p>
				<TiMessages className="text-5xl md:text-7xl text-center text-blue-400" />
			</div>
		</div>
	);
};

// STARTER CODE SNIPPET
// import MessageInput from "./MessageInput";
// import Messages from "./Messages";

// const MessageContainer = () => {
// 	return (
// 		<div className='md:min-w-[450px] flex flex-col'>
// 			<>
// 				{/* Header */}
// 				<div className='bg-slate-500 px-4 py-2 mb-2'>
// 					<span className='label-text'>To:</span> <span className='text-gray-900 font-bold'>John doe</span>
// 				</div>

// 				<Messages />
// 				<MessageInput />
// 			</>
// 		</div>
// 	);
// };
// export default MessageContainer;
