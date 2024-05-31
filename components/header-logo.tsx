import Image from "next/image";
import Link from "next/link";

const HeaderLogo = () => {
  return (
    <Link href="/">
      <div className="items-center hidden lg:flex">
        <Image src="/logo.svg" alt="Logo" height={28} width={28} />
        <p className=" font-semibold text-[#fff] text-2xl ml-2.5">My Finance</p>
      </div>
    </Link>
  );
};

export default HeaderLogo;
