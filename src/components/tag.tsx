import { Source_Code_Pro } from "next/font/google";

type TagProps = {
  text: string;
};

const font = Source_Code_Pro({ subsets: ["latin"], weight: "500" });

export default function Tag(props: TagProps) {
  return (
    <div
      className={
        font.className +
        " inline-block bg-smoke-200 mr-2 px-3 py-1 text-turquoise-950 uppercase"
      }
    >
      {props.text.toUpperCase()}
    </div>
  );
}
