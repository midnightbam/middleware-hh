export default function validateAssignment(req, res, next) {
  const errors = [];
  const { title, content, category, email } = req.body ?? {};

  if (typeof title !== "string" || title.trim() === "") {
    errors.push({ field: "title", message: "Title is required and must be a non-empty string." });
  }

  if (typeof content !== "string") {
    errors.push({ field: "content", message: "Content is required and must be a string." });
  } else {
    const len = content.length;
    if (len < 500 || len > 1000) {
      errors.push({ field: "content", message: "Content must be between 500 and 1000 characters." });
    }
  }

  if (typeof category !== "string") {
    errors.push({ field: "category", message: "Category is required and must be a string." });
  } else {
    const allowed = ["Math", "English", "Biology"];
    if (!allowed.includes(category)) {
      errors.push({ field: "category", message: `Category must be one of: ${allowed.join(", ")}.` });
    }
  }

  if (typeof email !== "string" || email.trim() === "") {
    errors.push({ field: "email", message: "Email is required and must be a non-empty string." });
  } else {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errors.push({ field: "email", message: "Invalid email format." });
    }
  }

  if (errors.length > 0) {
    return res.status(400).json({ errors });
  }
  next();
}
