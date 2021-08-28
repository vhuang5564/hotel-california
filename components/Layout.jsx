import Image from 'next/image';
import background from "../public/pictures/king.jpg";

export default function Layout (props) {
  return (
    <main>
      <Image src={background} alt="background"/>
    </main>
  );
}