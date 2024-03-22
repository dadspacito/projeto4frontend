import React from "react";
import { userStore } from "../../stores/UserStore";

async function changePhotography() {
  const response = await fetch("https://api.thecatapi.com/v1/images/search");
  const data = await response.json();
  const newURL = data[0].url;
  userStore.getState().updateUserTargetDetails({ photoURL: newURL });
}

function ProfilePhoto() {
  const photoURL = userStore((state) => state.userTargetDetails.photoURL);

  return (
    <div style={{ textAlign: "center" }}>
      {photoURL !== "" && (
        <div
          style={{
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            backgroundImage: `url(${photoURL})`,
            backgroundPosition: "center",
            backgroundSize: "  cover",
            margin: "0 auto",
          }}
        ></div>
      )}
      <button onClick={changePhotography} style={{ marginTop: "20px" }}>
        Snap a fresh Fur-tograph
      </button>
    </div>
  );
}
export default ProfilePhoto;
