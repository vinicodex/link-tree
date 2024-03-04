import ProfilePicture from "./components/profile";
import Button from "./components/button";

export default function Home() {
  return(
    <div className="w-full h-full flex-col">
      <ProfilePicture/>
      <Button img="svg/github.svg" alt="github-img" text="Github"/>
      {/* <Button value="Youtube"/>
      <Button value="Linkedin"/>
      <Button value="Instagram"/> */}
    </div>
  );
}
