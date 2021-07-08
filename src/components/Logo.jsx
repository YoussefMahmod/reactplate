import ReactplateLogo from "%/img/Reactplate.gif";

export default function Logo() {
  return (
    <>
      {/* Imported images have the side benefit that, if the file is missing, the
      build will fail, and you’ll find out quick */}
      <h1 class="logo"><span>React</span>plate</h1>
    </>
  );
}
