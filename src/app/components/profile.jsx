import Image from "next/image";

export default function ProfilePicture() {
    return(
        <div className="flex-col justify-center">
            <div className="flex justify-center">
                <Image className="w-36 h-36 rounded-full" src="/img/profile.png" alt="" width="384" height="512"/>
            </div>
            <div className="flex justify-center mt-4">
                <p className="font-bold tracking-wid from-slate-100 to-white text-white">@vinicodex</p>
            </div>
        </div>
    );
  }
  