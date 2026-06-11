import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {
  const navigate = useNavigate();

  const [messages, setMessages] = useState([]);
  const [showMessages, setShowMessages] = useState(false);
  const [showAdmin, setShowAdmin] = useState(false);
  const [logoutMsg, setLogoutMsg] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    // 🔐 SECURITY CHECK
    if (!token || token === "undefined" || token === "null") {
      navigate("/admin");
      return;
    }

    fetchMessages();

    // 🔄 AUTO REFRESH EVERY 2 SECONDS
    const interval = setInterval(() => {
      fetchMessages();
    }, 2000);

    window.scrollTo(0, 0);

    // cleanup
    return () => clearInterval(interval);
  }, [navigate]);

  const fetchMessages = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await fetch(
        "https://techkaam-website-production.up.railway.app/api/admin/messages",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await res.json();

      console.log("API RESPONSE:", data);

      if (Array.isArray(data?.messages)) {
        setMessages(data.messages);
      } else if (Array.isArray(data)) {
        setMessages(data);
      } else {
        setMessages([]);
      }
    } catch (err) {
      console.log("API Error:", err);
      setMessages([]);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setLogoutMsg(true);

    setTimeout(() => {
      navigate("/admin");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-100 p-8 pt-36">

      {/* HEADER */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-slate-800">
          Admin Dashboard
        </h1>

        <p className="text-gray-500 mt-3">
          Manage Contact Messages
        </p>

        <button
          onClick={logout}
          className="mt-6 bg-[#0F2E74] hover:bg-[#0b1f52] text-white px-6 py-3 rounded-xl shadow-md transition"
        >
          Logout
        </button>
      </div>

      {/* rest same code... */}
    </div>
  );
}

export default AdminDashboard;