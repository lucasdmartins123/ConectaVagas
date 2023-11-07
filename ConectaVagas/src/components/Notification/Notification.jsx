import { Link } from "react-router-dom";
import { useState, useRef, useContext, useEffect, useMemo } from "react";

import { CompaniesContext } from "../../components/Context/CompaniesContext";
import { AuthContext } from "../../components/Context/AuthContext";

export default function Notification({ showNotification }) {
  const { notifications, handleReadNotifications } =
    useContext(CompaniesContext);

  const toggleViewed = (id) => {
    handleReadNotifications(id);
  };

  return (
    <>
      <div
        className={`absolute px-4 py-4 rounded-md bg-white shadow-lg -right-12 top-10 z-10 ${
          showNotification ? "block" : "hidden"
        }`}
      >
        {" "}
        <div className="flex flex-col ">
          {notifications.map((notification) => (
            <div className="pt-5 pb-5 flex pr-3" key={notification.id}>
              <div className="w-full">
                <Link to={`/vacancieDetails/${notification.jobVacancy.id}`}>
                  <h1 className="flex justify-center  font-sans text-white text-md bg-azul-100 rounded-md shadow-md  shadow-black p-2 mb-1">
                    {notification.jobVacancy.title}
                  </h1>
                </Link>
              </div>
              <input
                className="ml-5 w-5"
                type="checkbox"
                checked={notification.read}
                onChange={() => toggleViewed(notification.id)}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
