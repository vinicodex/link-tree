export default function ProfilePicture() {
    return(
        <div className="flex-col justify-center bg-red">
            <div className="flex justify-center">
                <img class="w-28 h-28 rounded-full" src="img/profile.png" alt="" width="384" height="512"></img>
            </div>
            <div className="flex justify-center">
                <p className="font-bold tracking-wide">@vinicodex</p>
            </div>
        </div>
    );
  }
  