import { detailsList } from "@/assets/data/details";
import { sofiaSans } from "@/styles/fonts";
import { twMerge } from "tailwind-merge";
import DetailsList from "./detailsList";

export default function DetailsCategoriesList() {
  return (
    <div className="flex flex-col gap-9">
      {detailsList.map((items) => (
        <section
          key={items.category}
          className="flex flex-col gap-4 max-w-full overflow-x-clip"
        >
          <h2
            className={twMerge(
              sofiaSans.className,
              "text-2xl leading-[28.8px] text-h2"
            )}
          >
            {items.category}
          </h2>

          <DetailsList subItems={items.list} />
        </section>
      ))}
    </div>
  );
}
