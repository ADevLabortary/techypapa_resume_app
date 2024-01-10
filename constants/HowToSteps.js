import { FaDownload, FaPencilAlt, FaUserAlt } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";

export const Steps = [
  {
    title: "Create Your Account Or Login",
    icon: <FaUserAlt className="mr-3" />,
    imgSrc:
      "https://www.progetticreativi.it/wp-content/uploads/2017/08/img-google-720x600.jpg",
    text: "Create an account using Google, Facebook, or your email. After creating your account, you can simply login and then follow the other steps.",
  },
  {
    title: "Select One Of The Templates",
    icon: <IoDocumentText className="mr-3" />,
    imgSrc:
      "https://images.template.net/wp-content/uploads/2017/05/Business-Papercut-Infographics.jpg",
    text: "Choose a resume template that suits your style and profession. There are many different free and premium templates on TechyResume.",
  },
  {
    title: "Add Your Details In The Available Fields",
    icon: <FaPencilAlt className="mr-3" />,
    imgSrc:
      "https://avatars.mds.yandex.net/i?id=59260e41c74a97a5f637ffc2d02f63bdc6ee8c39-9046135-images-thumbs&n=13",
    text: "Fill in the required information such as your personal details, work experience, education, and skills in the provided fields. ",
  },
  {
    title: "Download Your Job Winning Resume",
    icon: <FaDownload className="mr-3" />,
    imgSrc:
      "https://avatars.mds.yandex.net/i?id=d9784fc9c33fbb1f0fc98e549f3877a3dd30a664-8439163-images-thumbs&n=13",
    text: "After completing the steps, download your professionally crafted resume and use it to apply for your dream job.",
  },
];
