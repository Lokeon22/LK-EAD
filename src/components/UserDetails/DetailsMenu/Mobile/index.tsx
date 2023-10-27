import { UserBox } from "../../UserBox";
import { userItems } from "@/functions/fakeData";

import { IconBaseProps } from "react-icons/lib";

export function Mobile({
  open,
  setActiveItem,
}: {
  open: boolean;
  setActiveItem: React.Dispatch<React.SetStateAction<number>>;
}) {
  const onItemClick = (index: number) => setActiveItem(index);

  return (
    <>
      <nav
        id="desktop"
        className="col-span-2 lg:col-span-1 hidden md:flex flex-col gap-3 justify-start items-start"
      >
        {userItems.map((dt, index) => {
          return (
            <div
              key={dt.id}
              onClick={() => onItemClick(index)}
              className="w-[90%] p-4 cursor-pointer rounded-sm flex items-center gap-3 bg-white shadow-md border-l-blue-500 border-l-[5px] hover:brightness-95 hover:duration-200"
            >
              <UserBox text={dt.text} icon={dt.icon as IconBaseProps} />
            </div>
          );
        })}
      </nav>

      {open && (
        <nav className="col-span-2 lg:col-span-1 flex flex-col gap-3 justify-start items-start">
          {userItems.map((dt, index) => {
            return (
              <div
                key={dt.id}
                onClick={() => onItemClick(index)}
                className="w-[90%] p-4 cursor-pointer rounded-sm flex items-center gap-3 bg-white shadow-md border-l-blue-500 border-l-[5px] hover:brightness-95 hover:duration-200"
              >
                <UserBox text={dt.text} icon={dt.icon as IconBaseProps} />
              </div>
            );
          })}
        </nav>
      )}
    </>
  );
}
