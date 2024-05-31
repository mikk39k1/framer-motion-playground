import ImageWheel from "@/components/ImageWheel";
import UseAnimate from "@/components/UseAnimate";
import Image from "next/image";

export default function Home() {
  return (
    <main className="grid h-screen place-content-center">
      <ImageWheel />
    </main>
  );
}
