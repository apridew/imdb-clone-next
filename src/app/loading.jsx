import Image from "next/image";
import spinner from "/public/spinner.svg"

export default function loading() {
  return (
    <div className="flex justify-center mt-48">
      <Image src={spinner} alt="loading" width={100} height={100}></Image>
    </div>
  );
}
