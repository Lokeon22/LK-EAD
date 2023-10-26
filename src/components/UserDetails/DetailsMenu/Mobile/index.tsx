import { UserBox } from "../../UserBox";

import { BsPeopleFill, BsCameraFill, BsFillFileEarmarkFill } from "react-icons/bs";
import { GiReceiveMoney } from "react-icons/gi";
import { MdEmail, MdCreditCard } from "react-icons/md";

import { FaUserEdit, FaWheelchair, FaLock, FaGraduationCap } from "react-icons/fa";

export function Mobile({ open }: { open: boolean }) {
  return (
    <>
      <nav className="col-span-2 lg:col-span-1 hidden md:flex flex-col gap-3 justify-start items-start">
        <UserBox text="Minha Conta" icon={<FaUserEdit className="min-w-[24px] min-h-[24px]" />} />
        <UserBox
          text="Responsável Legal"
          icon={<BsPeopleFill className="min-w-[24px] min-h-[24px]" />}
        />
        <UserBox
          text="Responsável Financeiro"
          icon={<GiReceiveMoney className="min-w-[24px] min-h-[24px]" />}
        />
        <UserBox
          text="Acessibilidade"
          icon={<FaWheelchair className="min-w-[24px] min-h-[24px]" />}
        />
        <UserBox text="Minha Foto" icon={<BsCameraFill className="min-w-[24px] min-h-[24px]" />} />
        <UserBox text="Alterar senha" icon={<FaLock className="min-w-[24px] min-h-[24px]" />} />
        <UserBox text="Alterar e-mail" icon={<MdEmail className="min-w-[24px] min-h-[24px]" />} />
        <UserBox
          text="Informações acadêmicas"
          icon={<FaGraduationCap className="min-w-[24px] min-h-[24px]" />}
        />
        <UserBox
          text="Documentação"
          icon={<BsFillFileEarmarkFill className="min-w-[24px] min-h-[24px]" />}
        />
        <UserBox
          text="Meus cartões"
          icon={<MdCreditCard className="min-w-[24px] min-h-[24px]" />}
        />
      </nav>

      {open && (
        <nav className="col-span-2 lg:col-span-1 flex flex-col gap-3 justify-start items-start">
          <UserBox text="Minha Conta" icon={<FaUserEdit className="min-w-[24px] min-h-[24px]" />} />
          <UserBox
            text="Responsável Legal"
            icon={<BsPeopleFill className="min-w-[24px] min-h-[24px]" />}
          />
          <UserBox
            text="Responsável Financeiro"
            icon={<GiReceiveMoney className="min-w-[24px] min-h-[24px]" />}
          />
          <UserBox
            text="Acessibilidade"
            icon={<FaWheelchair className="min-w-[24px] min-h-[24px]" />}
          />
          <UserBox
            text="Minha Foto"
            icon={<BsCameraFill className="min-w-[24px] min-h-[24px]" />}
          />
          <UserBox text="Alterar senha" icon={<FaLock className="min-w-[24px] min-h-[24px]" />} />
          <UserBox text="Alterar e-mail" icon={<MdEmail className="min-w-[24px] min-h-[24px]" />} />
          <UserBox
            text="Informações acadêmicas"
            icon={<FaGraduationCap className="min-w-[24px] min-h-[24px]" />}
          />
          <UserBox
            text="Documentação"
            icon={<BsFillFileEarmarkFill className="min-w-[24px] min-h-[24px]" />}
          />
          <UserBox
            text="Meus cartões"
            icon={<MdCreditCard className="min-w-[24px] min-h-[24px]" />}
          />
        </nav>
      )}
    </>
  );
}
