import { motion} from "framer-motion";
import { NavHashLink as Link } from 'react-router-hash-link';
import { MyButton } from "../components/Button";
import Title from '../components/Title'
import { FaLinkedin,FaFacebook,FaGithub } from "react-icons/fa";
import { useState } from "react";
import axios from 'axios';
import '../styles/contact.css';

const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e :any) => {
    setFormData({
      ...formData,
      [e.target.name.toLowerCase()]: e.target.value
    });
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://api.web3forms.com/submit', {
        apikey: 'bfa55daa-56e4-4a44-b6cd-749859e363e5',
        ...formData
      });

      if (response.status === 200) {
        setStatus('Form submitted successfully!');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        setStatus('Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('Something went wrong. Please try again.');
    }
  };
  return (
      <>
       <span id="contact"></span>
       <Title  title="Contact" />
      <div style={{ display: 'flex',justifyContent:'center', flexWrap:'wrap', gap: '30px', margin: 30 }}>
        <motion.div
          initial={{ x: -200 }}
          animate={{ x: 0 }}
          exit={{ x: "-100vw" }}
           className="col col-lg-4 my-3 rounded contact-cont p-4 flex-grow-1"
        >
          <div className="contact-info">
            <div className="contact-name">
              <div className="sm-title">
                <h3>Email</h3>
              </div>
              <p>
                <a href="mailto:mr.noman0095@gmail.com">mr.noman0095@gmail.com</a>
              </p>
            </div>
            <div className="contact-name">
              <div className="sm-title mt-4">
                <h3>Phone</h3>
              </div>
              <p>
                <Link to={"https://wa.me/+923214399336"}>
                  +92 3214399336
                </Link>
                <br />

              </p>
              <div className="linksPlace-contact">
          <a href="https://www.linkedin.com/in/chaudhary-noman-ahmad-393764261" target="_blank"><FaLinkedin /></a>
          <a href="https://www.facebook.com/profile.php?id=100039076668129" target="_blank"><FaFacebook/></a>
          <a href="https://github.com/Azirqui" target="_blank"><FaGithub/></a>
          </div>
            </div>
            
          </div>
        </motion.div>
        {/* <motion.div
          initial={{ x: 200 }}
          animate={{ x: 0 }}
          exit={{ x:"100vw" }}
          style={{ flex: '1 1 100%', maxWidth: '500px', width: '100%' }} className="my-3 rounded contact-cont p-4"
        >
          <div className="contact-form">
            <div className="sm-title">
              <h3>Get In Touch</h3>
            </div>
            <form id="contact-form" method="POST">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input name="Name" id="name" placeholder="Name *" className="form-control" type="text"/>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      name="Email"
                      id="email"
                      placeholder="Email *"
                      className="form-control"
                      type="email"
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <input
                      name="Subject"
                      id="subject"
                      placeholder="Subject *"
                      className="form-control"
                      type="text"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Your message *"
                      rows={3}
                      className="form-control"
                    ></textarea>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="send">
                  <a type="submit"><MyButton text="Get in Touch" /></a>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </motion.div> */}
        <motion.div
      initial={{ x: 200 }}
      animate={{ x: 0 }}
      exit={{ x: '100vw' }}
      style={{ flex: '1 1 100%', maxWidth: '500px', width: '100%' }}
      className="my-3 rounded contact-cont p-4"
    >
      <div className="contact-form">
        <div className="sm-title">
          <h3>Get In Touch</h3>
        </div>
        <form id="contact-form" method="POST" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <input
                  name="Name"
                  id="name"
                  placeholder="Name *"
                  className="form-control"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <input
                  name="Email"
                  id="email"
                  placeholder="Email *"
                  className="form-control"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-12">
              <div className="form-group">
                <input
                  name="Subject"
                  id="subject"
                  placeholder="Subject *"
                  className="form-control"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group">
                <textarea
                  name="message"
                  id="message"
                  placeholder="Your message *"
                  rows={3}
                  className="form-control"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>
            <div className="col-md-12">
              <div className="send">
                <button type="submit">
                  <MyButton text="Get in Touch" />
                </button>
              </div>
            </div>
          </div>
        </form>
        {status && <p>{status}</p>}
      </div>
    </motion.div>
      </div>
      </>
  );
};

export default Contact;
