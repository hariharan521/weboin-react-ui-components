import React, { useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!form.firstName.trim()) newErrors.firstName = "First name is required";
    if (!form.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Enter a valid email address";
    }
    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[+\d\s\-()]{7,15}$/.test(form.phone)) {
      newErrors.phone = "Enter a valid phone number";
    }
    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    } else if (form.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setLoading(true);
    try {
      const existingRaw = localStorage.getItem("contactSubmissions");
      const existing = existingRaw ? JSON.parse(existingRaw) : [];
      const newEntry = {
        id: Date.now(),
        ...form,
        submittedAt: new Date().toISOString(),
      };
      localStorage.setItem(
        "contactSubmissions",
        JSON.stringify([...existing, newEntry])
      );
      await new Promise((res) => setTimeout(res, 800));
      setSubmitted(true);
      setForm({ firstName: "", lastName: "", email: "", phone: "", message: "" });
      setErrors({});
    } catch (err) {
      console.error("Failed to save:", err);
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = (field) => ({
    width: "100%",
    padding: "10px 14px",
    borderRadius: "10px",
    border: `1.5px solid ${errors[field] ? "#e24b4a" : "#e0e0ec"}`,
    background: errors[field] ? "#fff5f5" : "#f7f7fb",
    fontSize: "13px",
    color: "#1a1a2e",
    boxSizing: "border-box",
    outline: "none",
    fontFamily: "inherit",
    transition: "border-color 0.2s",
  });

  const contactItems = [
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5dcaa5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m2 7 10 7 10-7" />
        </svg>
      ),
      title: "Email Support",
      value: "Support@zyntral.com",
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5dcaa5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 21s-7-6.5-7-11a7 7 0 1 1 14 0c0 4.5-7 11-7 11z" />
          <circle cx="12" cy="10" r="2.5" />
        </svg>
      ),
      title: "Office Address",
      value: "Southwest road 5874, D block",
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5dcaa5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 3.08 5.18 2 2 0 0 1 5.07 3h3a2 2 0 0 1 2 1.72c.13 1 .37 1.97.72 2.9a2 2 0 0 1-.45 2.11L9.09 11a16 16 0 0 0 4 4l1.27-1.27a2 2 0 0 1 2.11-.45c.93.35 1.9.59 2.9.72A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
      title: "Call Us Directly",
      value: "+1 (555) 123-4567",
    },
  ];

  return (
    <>
      {/* Responsive styles injected */}
      <style>{`
        .contact-wrapper {
          background: #eeebff;
          border-radius: 24px;
          padding: 32px;
          display: flex;
          flex-direction: row;
          gap: 24px;
          box-sizing: border-box;
          width: 100%;
          max-width: 1000px;
          margin: 20px auto;
          font-family: 'Poppins', sans-serif;
          align-items: stretch;
        }
        .contact-left {
          flex: 0 0 220px;
          display: flex;
          flex-direction: column;
        }
        .contact-right {
          flex: 1;
          min-width: 0;
          background: #fff;
          border-radius: 16px;
          padding: 24px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .contact-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }
        /* Mobile */
        @media (max-width: 640px) {
          .contact-wrapper {
            flex-direction: column;
            padding: 20px 16px;
            border-radius: 16px;
            gap: 16px;
          }
          .contact-left {
            flex: none;
            width: 100%;
          }
          .contact-info-items {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 0;
          }
          .contact-info-items hr {
            display: none;
          }
          .contact-right {
            padding: 18px 16px;
          }
          .contact-row {
            grid-template-columns: 1fr;
            gap: 12px;
          }
        }
      `}</style>

      <div className="contact-wrapper">

        {/* LEFT */}
        <div className="contact-left">
          <h2 style={{ fontSize: "18px", fontWeight: "600", color: "#1a1a2e", margin: "0 0 8px" }}>
            Get in touch with us
          </h2>
          <p style={{ fontSize: "12px", color: "#6b6b80", margin: "0 0 14px", lineHeight: "1.6" }}>
            Have questions or need assistance? We're here to help you every step of the way.
          </p>
          <hr style={{ border: "none", borderTop: "1px solid #d0d0e0", margin: "0 0 14px" }} />

          <div className="contact-info-items">
            {contactItems.map((item, i) => (
              <div key={i}>
                <div style={{ padding: "12px 0" }}>
                  <div style={{ marginBottom: "5px" }}>{item.icon}</div>
                  <p style={{ fontSize: "12px", fontWeight: "600", color: "#1a1a2e", margin: "0 0 2px" }}>
                    {item.title}
                  </p>
                  <p style={{ fontSize: "11px", color: "#6b6b80", margin: 0 }}>{item.value}</p>
                </div>
                {i < 2 && (
                  <hr style={{ border: "none", borderTop: "1px solid #d0d0e0", margin: 0 }} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="contact-right">
          {submitted && (
            <div style={{
              background: "#e1f5ee",
              border: "1px solid #5dcaa5",
              borderRadius: "10px",
              padding: "12px 16px",
              fontSize: "13px",
              color: "#0f6e56",
              fontWeight: "500",
            }}>
              ✓ Message sent! We'll get back to you soon.
            </div>
          )}

          {/* Row 1: First + Last */}
          <div className="contact-row">
            {[
              { label: "First Name", name: "firstName", placeholder: "Enter your first name", type: "text" },
              { label: "Last Name", name: "lastName", placeholder: "Enter your last name", type: "text" },
            ].map((f) => (
              <div key={f.name}>
                <label style={{ fontSize: "12px", fontWeight: "500", color: "#1a1a2e", display: "block", marginBottom: "5px" }}>
                  {f.label}
                </label>
                <input
                  type={f.type}
                  name={f.name}
                  placeholder={f.placeholder}
                  value={form[f.name]}
                  onChange={handleChange}
                  style={inputStyle(f.name)}
                />
                {errors[f.name] && (
                  <p style={{ fontSize: "11px", color: "#e24b4a", margin: "4px 0 0" }}>
                    {errors[f.name]}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Row 2: Email + Phone */}
          <div className="contact-row">
            {[
              { label: "Email Address", name: "email", placeholder: "Enter your email", type: "email" },
              { label: "Phone", name: "phone", placeholder: "Enter your phone number", type: "tel" },
            ].map((f) => (
              <div key={f.name}>
                <label style={{ fontSize: "12px", fontWeight: "500", color: "#1a1a2e", display: "block", marginBottom: "5px" }}>
                  {f.label}
                </label>
                <input
                  type={f.type}
                  name={f.name}
                  placeholder={f.placeholder}
                  value={form[f.name]}
                  onChange={handleChange}
                  style={inputStyle(f.name)}
                />
                {errors[f.name] && (
                  <p style={{ fontSize: "11px", color: "#e24b4a", margin: "4px 0 0" }}>
                    {errors[f.name]}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Message */}
          <div>
            <label style={{ fontSize: "12px", fontWeight: "500", color: "#1a1a2e", display: "block", marginBottom: "5px" }}>
              Message
            </label>
            <textarea
              name="message"
              placeholder="Write your message here...."
              rows={5}
              value={form.message}
              onChange={handleChange}
              style={{ ...inputStyle("message"), resize: "none" }}
            />
            {errors.message && (
              <p style={{ fontSize: "11px", color: "#e24b4a", margin: "4px 0 0" }}>
                {errors.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <div>
            <button
              onClick={handleSubmit}
              disabled={loading}
              style={{
                background: loading ? "#888" : "#1a1a2e",
                color: "#fff",
                border: "none",
                borderRadius: "50px",
                padding: "12px 28px",
                fontSize: "13px",
                fontWeight: "500",
                cursor: loading ? "not-allowed" : "pointer",
                transition: "background 0.2s",
                width: "100%",
              }}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;