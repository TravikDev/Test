import { DetailsSubCategoriesList } from "./detailsSubCategoriesList";
import { sofiaSans } from "@/shared/styles/fonts";
import { twMerge } from "tailwind-merge";
import { detailsList } from "@/shared/data/details";

export const DetailsCategoriesList = () => {
  return (
    <div className="flex flex-col gap-9">
      {detailsList.map((items, idx) => (
        <section
          key={items.category}
          className="flex max-w-full flex-col gap-4 overflow-x-clip"
        >
          <h2
            className={twMerge(
              sofiaSans.className,
              "text-2xl leading-[28.8px] text-h2",
            )}
          >
            {items.category}
          </h2>

          <DetailsSubCategoriesList subItems={items.list} />
        </section>
      ))}
    </div>
  );
}
