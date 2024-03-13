import ProfilePicture from "./components/profile";
import Button from "./components/button";
import FooterComponent from "./components/footer";

export default function Home() {
  return(
    <div className="w-full h-full flex-col my-10">
      <ProfilePicture/>
        <Button img="/svg/github.svg" link="https://github.com/vinicodex" alt="github-img" text="Github"/>
        <Button img="/svg/youtube.svg" link="#"   alt="youtube-img" text="Youtube"/>
        <Button img="/svg/linkedin.svg" link="https://www.linkedin.com/in/marcos-vinicius-61619111b/"  alt="linkedin-img" text="Linkedin"/>
        <Button img="/svg/instagram.svg" link="https://www.instagram.com/vinicodex" alt="instagram-img" text="Instagram"/>
      <FooterComponent/>
    </div>
  );
}
