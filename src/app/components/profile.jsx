export default function ProfilePicture() {
    return(
        <div className="flex-col justify-center">
            <div className="flex justify-center">
                <img class="w-32 h-32 rounded-full" src="img/profile.png" alt="" width="384" height="512"></img>
            </div>
            <div className="flex justify-center mt-10">
                <p className="font-bold tracking-wide">@vinicodex</p>
            </div>
        </div>
    );
  }
  