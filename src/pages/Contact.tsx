import { forwardRef, useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import emailjs from "@emailjs/browser";

const Contact = forwardRef<HTMLDivElement>(function Contact(props, contactRef) {
  const form = useRef<HTMLFormElement | null>(null);

  // for email successfully sent
  const [success, setSuccess] = useState(false);
  const [name, setName] = useState("");
  //sender Email
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const Gradient = {
    hidden: {
      x: -500,
      y: -500,
    },
    visible: {
      x: 0,
      y: 0,
    },
  };
  const ref = useRef(null);
  const isInView = useInView(ref);

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  useEffect(() => {
    if (success) {
      const timeOut = setTimeout(() => {
        setSuccess(false);
      }, 5000);

      return () => clearTimeout(timeOut);
    }
  }, [success]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.current) {
      emailjs
        .sendForm("service_sgggr8w", "template_h083q5h", form.current, {
          publicKey: "cynpvujnz2wjxS6nD",
        })
        .then(
          () => {
            setSuccess(true);
          },
          (error: Error) => {
            console.log("FAILED...", error);
          }
        )
        .finally(() => {
          setEmail("");
          setName("");
          setMessage("");
        });
    }
  };
  return (
    <div
      ref={contactRef}
      id="Contact"
      className="md:px-[10%] md:h-screen p-[5%] flex flex-col gap-10 justify-between  "
    >
      <h1>Contact</h1>
      <div className="flex flex-col md:flex-row justify-between">
        <div className="pl-5 flex flex-col  pb-[5%]  h-full">
          <h3 className="text-3xl font-bold text-blue-700">Wai Yan</h3>

          <p className="contactMep mt-5">Front-End developer</p>

          <p className="contactMep">
            I'm avialabe for freelance and full-time options.
            <span className="block">Conatct me and let's talk</span>
          </p>

          <h3 className="mt-10 mb-3 px-3">Connect with me</h3>

          <div className="flex w-full justify-between">
            <div className="p-3 cursor-pointer hover:scale-105 ease-in duration-300">
              <a
                href="https://www.linkedin.com/in/wai-yan-0a87b82ba"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin size={22} />
              </a>
            </div>
            <div className="p-3 cursor-pointer hover:scale-105 ease-in duration-300">
              <a
                href="https://www.facebook.com/profile.php?id=100016784135387&mibextid=AEUHqQ"
                target="_blank"
                rel="noreferrer"
              >
                <FaSquareFacebook size={22} />
              </a>
            </div>
            <div className="p-3 cursor-pointer hover:scale-105 ease-in duration-300">
              <a
                href="mailto:yenxxxw@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineMail size={22} />
              </a>
            </div>
          </div>
        </div>

        <form
          className="font-sans flex flex-col gap-4 relative"
          onSubmit={(e) => handleSubmit(e)}
          ref={form}
        >
          <div>
            <div className="GradinentBorderContainer" ref={ref}>
              <motion.div
                className="GradientDiv"
                variants={Gradient}
                transition={{ duration: 0.5, type: "none" }}
                initial="hidden"
                animate={mainControls}
              ></motion.div>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          </div>
          <div>
            <div className="GradinentBorderContainer" ref={ref}>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <motion.div
                className="GradientDiv"
                variants={Gradient}
                transition={{ delay: 0.5, duration: 0.5, type: "none" }}
                initial="hidden"
                animate={mainControls}
              ></motion.div>
            </div>
          </div>

          <div>
            <div className="GradinentBorderContainer" ref={ref}>
              <textarea
                name="message"
                id="message"
                rows={7}
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
              <motion.div
                className="GradientDiv"
                variants={Gradient}
                transition={{ delay: 1, duration: 0.5, type: "none" }}
                initial="hidden"
                animate={mainControls}
              ></motion.div>
            </div>
          </div>
          <div className="overflow-hidden w-full">
            <motion.button
              variants={{
                hidden: {
                  x: -500,
                },
                visible: {
                  x: 0,
                },
              }}
              transition={{ delay: 1.5, duration: 0.35, type: "none" }}
              initial="hidden"
              animate={mainControls}
              className="bg-blue-800 w-full text-white py-1 text-sm hover:scale-50  duration-300"
            >
              Submit
            </motion.button>
          </div>

          <p
            className={`text-green-600 font-bold ${
              success ? "absolute bottom-[-20px] left-0" : "hidden"
            }`}
          >
            Email sent successfully
          </p>
        </form>
      </div>
    </div>
  );
});

export default Contact;
