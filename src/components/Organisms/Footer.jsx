
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { SiOdysee } from "react-icons/si";

export const Footer = () => {
  return (
    <footer className="bg-neutral-400 py-4">
      <div className="flex justify-center m-4">
        <div className="justify-center">
          <div className="mx-4 text-center">
            <a href="#" className="text-5xl">
              <SiOdysee className="m-auto"/>
            </a>
            <p className="text-xl">miox,inc.</p>
          </div>
          <div className="flex m-4">
            <h3 className="p-2 text-5xl">
              <FaXTwitter />
            </h3>
            <h3 className="p-2 text-5xl">
              <FaInstagram />
            </h3>
            <h3 className="p-2 text-5xl">
              <FaGithub />
            </h3>
          </div>
        </div>

        <div classNama="ml-8">
          <li className="p-2 list-none">
            <a href="#">会社情報</a>
          </li>
          <li className="p-2 list-none">
            <a href="#">会社概要</a>
          </li>
          <li className="p-2 list-none">
            <a href="#">製造</a>
          </li>
          <li className="p-2 list-none">
            <a href="#">取材</a>
          </li>
        </div>

        <div className="ml-8">
          <li className="p-2 list-none">
            <a href="#">IR</a>
          </li>
          <li className="p-2 list-none">
            <a href="#">トップ</a>
          </li>
          <li className="p-2 list-none">
            <a href="#">ニュース</a>
          </li>
        </div>
      </div>

      <div className="m-4">
        <p className="flex justify-center">miox,inc</p>
      </div>
    </footer>
  );
};
