import { END_POINT } from "../config/api";
import { showToast } from "./toastService";

export async function postFaq(formData, setToast, toast) {
  try {
    const response = await fetch(`${END_POINT}/faq/postFaq`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setToast({
        ...toast,
        toastMessage: "FAQ has been added",
        toastStatus: true,
        toastType: "success",
      });
      return { success: true };
    } else {
      setToast({
        ...toast,
        toastMessage: "Database Error",
        toastStatus: true,
        toastType: "error",
      });
      return { success: false, error: "Database Error" };
    }
  } catch (error) {
    setToast({
      ...toast,
      toastMessage: "Network Error",
      toastStatus: true,
      toastType: "error",
    });
    return { success: false, error: "Network Error" };
  }
}

export async function getFaq() {
  try {
    const response = await fetch(`${END_POINT}/faq/getFaq`);
    if (!response.ok) {
      throw new Error("Failed to fetch FAQs");
    }
    const data = await response.json();
    return data.Faq;
  } catch (error) {
    console.error("Failed to fetch FAQs:", error.message);
    throw new Error("Failed to fetch FAQs");
  }
}

export const deleteFaq = async (faqId, setToast, toast) => {
  const url = `${END_POINT}/faq/deleteFaq`;
  const body = { faqId: faqId };
  const headers = {
    "Content-Type": "application/json",
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };
  try {
    const response = await fetch(url, {
      method: "PUT",
      headers: headers,
      body: JSON.stringify(body),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    setToast({
      ...toast,
      toastMessage: data.message,
      toastStatus: true,
      toastType: "success",
    });
    return data.message;
  } catch (error) {
    console.error("Failed to delete FAQ:", error.message);
    setToast({
      ...toast,
      toastMessage: "Failed to delete FAQ",
      toastStatus: true,
      toastType: "error",
    });
    throw new Error("Failed to delete FAQ");
  }
};

export const updateFaq = async (faqId, updatedFaqDetails, setToast, toast) => {
  try {
    const response = await fetch(`${END_POINT}/faq/updateFaq`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ faqId, ...updatedFaqDetails }),
    });

    if (!response.ok) {
      throw new Error("Failed to update FAQ");
    }

    const data = await response.json();
    setToast({
      ...toast,
      toastMessage: data.message,
      toastStatus: true,
      toastType: "success",
    });
    return data.message;
  } catch (error) {
    console.error("Failed to update FAQ:", error.message);
    setToast({
      ...toast,
      toastMessage: "Failed to update FAQ",
      toastStatus: true,
      toastType: "error",
    });
    throw new Error("Failed to update FAQ");
  }
};

export const getAllQuestions = async (setToast, toast) => {
  try {
    const response = await fetch(`${END_POINT}/question/getallquestions`);
    if (!response.ok) {
      throw new Error("Failed to fetch questions");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch questions:", error.message);
    showToast(setToast, "Check network failed to fetch", "error");
    return [];
  }
};

export async function getQuestionById(id, setToast) {
  const qUrl = `${END_POINT}/question/getQuestionById/${id}`;
  try {
    const qResponse = await fetch(qUrl);
    const qRes = await qResponse.json();
    return qRes;
  } catch (error) {
    console.log(error);
    showToast(setToast, "Failed to fetch question", "error");
    throw new Error("Failed to fetch question");
  }
}

export async function deleteAnswer(answerId, setToast) {
  const url = `${END_POINT}/answers/deleteanswer`;
  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ answerId }),
    });
    const data = await response.json();
    showToast(setToast, "Successfully deleted answer");
    return data;
  } catch (error) {
    console.log(error);
    showToast(setToast, "Failed to delete answer", "error");
    throw new Error("Failed to delete answer");
  }
}

export async function deleteQuestion(questionId, setToast) {
  const url = `${END_POINT}/question/deletequestion`;
  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ questionId }),
    });
    const data = await response.json();
    showToast(setToast, "Successfully deleted question");
    return data;
  } catch (error) {
    console.log(error);
    showToast(setToast, "Failed to delete question", "error");
    throw new Error("Failed to delete question");
  }
}

export async function updateQuestionStatus(id, status, setToast) {
  const qUrl = `${END_POINT}/question/updateStatus`;
  try {
    const qResponse = await fetch(qUrl, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ id, status }),
    });
    const qRes = await qResponse.json();
    showToast(setToast, "Question status updated successfully");
    return qRes;
  } catch (error) {
    console.log(error);
    showToast(setToast, "Failed to update question status", "error");
    throw new Error("Failed to update question status");
  }
}

export async function updateAnswerStatus(id, status, setToast) {
  const aUrl = `${END_POINT}/answers/updateStatus`;
  try {
    const aResponse = await fetch(aUrl, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ id, status }),
    });
    const aRes = await aResponse.json();
    showToast(setToast, "Answer status updated successfully");
    return aRes;
  } catch (error) {
    console.log(error);
    showToast(setToast, "Failed to update answer status", "error");
    throw new Error("Failed to update answer status");
  }
}

export async function getAnswers(questionId, setToast) {
  const aUrl = `${END_POINT}/answers/${questionId}`;
  try {
    const aResponse = await fetch(aUrl);
    const aRes = await aResponse.json();
    return aRes.data;
  } catch (error) {
    console.log(error);
    showToast(setToast, "Failed to fetch answers", "error");
    throw new Error("Failed to fetch answers");
  }
}

export const getAllQuestion = async (handleToast) => {
  try {
    const response = await fetch(`${END_POINT}/question/getallquestions`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    showToast(handleToast, "Failed to fetch questions", "error");
    throw new Error("Failed to fetch questions");
  }
};

export const uploadData = async (formData, handleToast) => {
  try {
    const url = `${END_POINT}/question`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    showToast(handleToast, "Q&A added successfully");
    return data;
  } catch (error) {
    showToast(handleToast, "Failed to add Q&A", "error");
    throw new Error("Failed to add Q&A");
  }
};

export const upvote = async (questionId, handleToast) => {
  try {
    const response = await fetch(`${END_POINT}/question/upvote`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ questionId }),
    });
    if (!response.ok) {
      throw new Error("Failed to upvote question");
    }
    showToast(handleToast, "Upvote Successfully");
    return response.json();
  } catch (error) {
    showToast(handleToast, "You have already voted", "error");
    throw new Error("Failed to upvote question");
  }
};

export const downvote = async (questionId, handleToast) => {
  try {
    const response = await fetch(`${END_POINT}/question/downvote`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ questionId }),
    });
    if (!response.ok) {
      throw new Error("Failed to downvote question");
    }
    showToast(handleToast, "Downvote Successfully");
    return response.json();
  } catch (error) {
    showToast(handleToast, "You have already voted", "error");
    throw new Error("Failed to downvote question");
  }
};

export const postAnswer = async (data, setToast) => {
  try {
    showToast(setToast, "Posting...", "info")
    const url = `${END_POINT}/answers/`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const res = await response.json();
    if (response.status == 200)
      showToast(setToast, "Thanks for answering, it has been sent to admins for review and will appear here on approval", "success");
    else
      showToast(setToast, "Failed to Post Answer", "error");
    return res;
  } catch (error) {
    showToast(setToast, "Failed to Post Answer", "error");
    throw new Error("Failed to post answer");
  }
}

export const upvoteAnswer = async (answerId, handleToast) => {
  try {
    const response = await fetch(`${END_POINT}/answers/upvote`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ answerId }),
    });
    if (!response.ok) {
      throw new Error("Failed to upvote question");
    }
    showToast(handleToast, "Upvote Successfully");
    return response.json();
  } catch (error) {
    showToast(handleToast, "You have already voted", "error");
    throw new Error("Failed to upvote answer");
  }
}

export const downvoteAnswer = async(answerId, handleToast) => {
  try {
    const response = await fetch(`${END_POINT}/answers/downvote`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ answerId }),
    });
    if (!response.ok) {
      throw new Error("Failed to downvote question");
    }
    showToast(handleToast, "Downvote Successfully");
    return response.json();
  } catch (error) {
    showToast(handleToast, "You have already voted", "error");
    throw new Error("Failed to downvote answer");
  }
}