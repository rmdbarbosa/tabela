import Logo from "../assets/Logo/Logo.svg";

export default function Header() {
  return (
    <header className="pl-[10px] xl:pl-[20px] py-[12px] shadow-md realative z-10 bg-white">
      <img src={Logo} />
    </header>
  );
}
