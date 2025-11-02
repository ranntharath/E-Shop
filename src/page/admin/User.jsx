import React, { useState } from "react";
import { Pencil, Trash2 } from "lucide-react";
import { useGetAllUserQuery } from "../../redux/services/userAdmin";
import LoadingComponent from "../../components/globals/LoadingComponent";
import toast from "react-hot-toast";

const columns = ["Name", "Email", "Role", "Date"];

function User() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRole, setFilterRole] = useState(""); // ✅ Added role filter state

  const { data: users, isLoading } = useGetAllUserQuery();

  if (isLoading) return <LoadingComponent message={"Loading..."} />;

  //  Filter users by name/email and role
  const filteredUser = users?.users
    ?.filter((u) => {
      const name = u.name?.toLowerCase() || "";
      const email = u.email?.toLowerCase() || "";
      const search = searchTerm.toLowerCase();
      return name.includes(search) || email.includes(search);
    })
    ?.filter((u) => {
      if (filterRole === "") return true; // show all if no role filter
      return u.role?.toLowerCase() === filterRole.toLowerCase();
    });

  return (
    <>
      <h2 className="text-3xl font-semibold text-gray-800">Users</h2>
      <div className="mt-5 border border-slate-200 rounded-md bg-white">
        {/* Function / Filters */}
        <div className="flex justify-between items-center p-3 flex-wrap gap-2">
          <div className="flex flex-wrap gap-2 items-center">
            {/*  Search input */}
            <input
              type="text"
              placeholder="Search by name or email"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border border-slate-300 p-1 pl-3 rounded-md focus:outline-[#ffb3a7]"
            />

            {/* Role filter dropdown */}
            <select
              value={filterRole}
              onChange={(e) => setFilterRole(e.target.value)}
              className="border border-slate-300 p-1.5 pl-3 rounded-md focus:outline-[#ffb3a7]"
            >
              <option value="">All Roles</option>
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>
          </div>
        </div>

        {/* Table */}
        <div className="relative w-full overflow-x-auto border border-gray-200 bg-white">
          <table className="w-full text-sm text-left border-collapse min-w-[700px]">
            <thead className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 uppercase text-xs font-semibold">
              <tr>
                {columns.map((col, index) => (
                  <th
                    key={index}
                    className="px-5 py-3 border-b border-gray-200 text-gray-700 tracking-wide whitespace-nowrap"
                  >
                    {col}
                  </th>
                ))}
                <th className="px-5 py-3 border-b border-gray-200 text-center whitespace-nowrap">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {filteredUser?.map((user, i) => (
                <tr
                  key={user._id}
                  className={`transition-all duration-200 ${
                    i % 2 === 0 ? "bg-white" : "bg-gray-50"
                  } hover:bg-gray-100/60`}
                >
                  <td className="py-3 px-5 text-gray-600 whitespace-nowrap">
                    {user?.name}
                  </td>
                  <td className="py-3 px-5 text-gray-700 whitespace-nowrap">
                    {user?.email}
                  </td>
                  <td className="py-3 px-5 text-gray-700 whitespace-nowrap">
                    {user?.role}
                  </td>
                  <td className="py-3 px-5 text-gray-500 whitespace-nowrap">
                    {new Date(user?.createdAt).toLocaleDateString()}
                  </td>
                  <td className="py-3 px-5 text-center whitespace-nowrap">
                    <div className="flex items-center justify-center space-x-3">
                      <button
                        onClick={() => toast.error("This feature not allowed yet")}
                        className="p-2 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-600 hover:text-blue-800 transition"
                      >
                        <Pencil size={16} />
                      </button>
                      <button
                        onClick={() => toast.error("This feature not allowed yet")}
                        className="p-2 rounded-lg bg-red-50 hover:bg-red-100 text-red-600 hover:text-red-800 transition"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {filteredUser?.length === 0 && (
                <tr>
                  <td
                    colSpan={7}
                    className="text-center py-8 text-gray-500 italic bg-gray-50"
                  >
                    No users found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default User;
