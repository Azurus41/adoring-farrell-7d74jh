import "../styles.css";

const user = {
  name: "Hedy Lamarr",
  imageUrl:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Hedy_Lamarr_in_The_Heavenly_Body_1944.jpg/500px-Hedy_Lamarr_in_The_Heavenly_Body_1944.jpg?_=20151109160652",
  imageSize: 90,
};

export default function Profile() {
  return (
    <div className="ImgComp">
      <h2>{user.name}</h2>
      <img
        src={user.imageUrl}
        style={{ width: user.imageSize, height: user.imageSize }}
      ></img>
    </div>
  );
}
