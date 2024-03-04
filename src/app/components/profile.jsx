import Image from "next/image";

export default function ProfilePicture() {
    return(
        <div className="flex-col justify-center">
            <div className="flex justify-center">
                <Image className="w-32 h-32 rounded-full" src="/img/profile.png" alt="" width="384" height="512"/>
            </div>
            <div className="flex justify-center mt-10">
                <p className="font-bold tracking-wide">@vinicodex</p>
            </div>
        </div>
    );
  }
  