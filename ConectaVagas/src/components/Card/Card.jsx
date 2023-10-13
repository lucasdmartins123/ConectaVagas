import { BsCalendarDate, BsFillGeoAltFill, BsStack } from "react-icons/bs";
import { MdOutlineAttachMoney } from "react-icons/md";

export default function card({ vacancy }) {
  const formatDate = (date) => {
    const createDate = new Date(date);
    const format = { year: "numeric", month: "2-digit", day: "2-digit" };

    const formatedDate = createDate.toLocaleDateString("pt-BR", format);

    return formatedDate;
  };

  return (
    <li className="bg-white shadow-sm shadow-black opacity-75 rounded overflow-hidden">
      <div>
        <h2 className="text-lg font-semibold">{vacancy.title}</h2>
      </div>
      <div>
        <p className="break-title">{vacancy.description}</p>

        <span>
          <BsStack size={18} />
          {vacancy.filters}
        </span>

        <span>
          <MdOutlineAttachMoney size={20} />
          {data.salary.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>

        <span>
          <BsFillGeoAltFill size={18} />
          {vacancy.location}
        </span>

        <span>
          <BsCalendarDate size={18} />
          {formatDate(vacancy.postDate)}
        </span>
      </div>
    </li>
  );
}
