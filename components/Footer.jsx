import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <h2 className="mt-20">
        eat &nbsp;sleep <span className="line-through">&nbsp;code </span> &nbsp;{" "}
        <a
          className="text-gray-300 text-sm"
          href="https://chat.openai.com/"
          target="_blank"
        >
          ChatGPT
        </a>{" "}
        &nbsp;repeat.
      </h2>
      <b className="hr anim"></b>
      <ul className="footer_list">
        <li>
          <FaGithub />
        </li>
        <li>
          <FaLinkedin />
        </li>
        <li>
          <FaTwitter />
        </li>
        <li>
          <FaInstagram />
        </li>
      </ul>
      <span className="text-gray-200 text-sm mb-6">
        {" "}
        Copyright &copy; PromptShare | Developd by{" "}
        <a
          className="text-gray-400"
          href="https://gauravgarwa.tech"
          target="_blank"
        >
          Gaurav Garwa
        </a>{" "}
      </span>
    </>
  );
};

export default Footer;
