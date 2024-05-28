import { END_POINT } from "../config/api";

const getContactUs = async () => {
  const response = await fetch(`${END_POINT}/contactus/getcontactus`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  const data = await response.json();
  return data.ContactUs;
};

const postContactUs = async (data) => {
  const response = await fetch(`${END_POINT}/contactus/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const _data = await response.json();
  return _data;
};

const deleteContactUs = async (id) => {
  const response = await fetch(`${END_POINT}/contactus/deleteContactUs`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify({ contactUsId: id }),
  });

  const data = await response.json();
  return data;
};

export { getContactUs, postContactUs, deleteContactUs };
