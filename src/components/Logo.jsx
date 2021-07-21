import ReactplateLogo from "%/img/Reactplate.png";

export default function Logo() {
  return (
    <>
      {/* Imported images have the side benefit that, if the file is missing, the
      build will fail, and you’ll find out quick */}
      <img src={ReactplateLogo} width="400px" height="400px" alt="" />
    </>
  );
}
