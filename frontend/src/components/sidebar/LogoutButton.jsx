import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
  const { loading, logout } = useLogout();

  return (
    <div className="mt-auto flex justify-center py-4">
      <button
        onClick={logout}
        disabled={loading}
        className="flex items-center gap-2 px-4 py-2 rounded-full bg-red-600 hover:bg-red-700 text-white transition-all shadow-md disabled:bg-gray-500"
      >
        {loading ? (
          <span className="loading loading-spinner"></span>
        ) : (
          <>
            <BiLogOut className="w-6 h-6" />
            <span>Logout</span>
          </>
        )}
      </button>
    </div>
  );
};

export default LogoutButton;
