import React,{useState} from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill , BsChatDotsFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import "./styles.scss";
import emailjs from "@emailjs/browser"; 

const Contact = () => {

  const [formData, setFormData] = useState({
    from_name: "",
    reply_to: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submit button clicked!");

    setLoading(true);
    console.log("Form Data Before Submission:", formData);

    try {
      const response = await emailjs.send(
        "service_s42j4bd", // Your EmailJS Service ID
        "template_tsw5iou", // Your EmailJS Template ID
        formData,
        "X32NBKBRrgQxPJI2j" // Your EmailJS Public Key
      );

      console.log("Email sent successfully!", response);
      alert("Message sent successfully!");
      setFormData({ from_name: "", reply_to: "", message: "" }); // Clear form

    } catch (error) {
      console.error("Error:", error);
      alert("Failed to send message. Please try again.");
    }

    setLoading(false);
  };


  return (
    <section id="contact" className="contact">
      <PageHeaderContent
        headerText="Get In Touch..!"
        icon={<BsChatDotsFill  size={40} />}
      />
      <div className="contact__content">
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(-200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <h3 className="contact__content__header-text">Let's Talk</h3>
        </Animate>
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
        <form className="contact__content__form" onSubmit={handleSubmit}>
          <div className="contact__content__form">
            <div className="contact__content__form__controlswrapper">
              <div>
                <input
                  required
                  name="from_name"
                  className="inputName"
                  type={"text"}
                  value={formData.from_name}
                  onChange={handleChange}
                />
                <label htmlFor="name" className="nameLabel">
                  Name
                </label>
              </div>
              <div>
                <input
                  required
                  name="reply_to"
                  className="inputEmail"
                  type="email"
                  value={formData.reply_to}
                  onChange={handleChange}
                />
                <label htmlFor="email" className="emailLabel">
                  Email
                </label>
              </div>
              <div>
                <textarea
                  required
                  name="message"
                  className="inputDescription"
                  type={"text"}
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                />
                <label htmlFor="message" className="descriptionLabel">
                 Message
                </label>
              </div>
            </div>
            <button type="submit" disabled={loading}>
                {loading ? "Sending..." : "Send Your Message"}
              </button>
          </div>
          </form>
        </Animate>
      </div>
    </section>
  );
};
export default Contact;
