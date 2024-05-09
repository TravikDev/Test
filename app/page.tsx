import { sofiaSans } from "@/shared/styles/fonts";
import { twMerge } from "tailwind-merge";

export default function Home() {
  return (
    <main className="main-layout">
      <h1
        className={twMerge(
          sofiaSans.className,
          "min-h-[58px] gap-6 text-5xl leading-[57.6px]",
        )}
      >
        Index Page
      </h1>

      <p>Нажмите на любую ссылку в меню</p>
    </main>
  );
}
