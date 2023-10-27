import { Container } from "@/components/UserDetails/Container";
import { FaPhoneAlt, FaUser } from "react-icons/fa";

export function Legit() {
  return (
    <>
      <Container
        title="Quem é seu responsável legal?"
        icon={<FaUser className="min-w-[22px] min-h-[22px]" />}
        second_title="Como entramos em contato com ele?"
        second_icon={<FaPhoneAlt className="min-w-[22px] min-h-[22px]" />}
      />
    </>
  );
}
