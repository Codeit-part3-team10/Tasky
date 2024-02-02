interface ColumnStateProps {
  state: string;
}

interface RandomColors {
  [key: number]: string;
}

const RANDOM_COLORS: RandomColors = {
  0: 'bg-violet-300',
};

interface RandomColorComb {
  [key: string]: string;
}
export const RANDOM_COLOR_COMB: RandomColorComb = {
  'bg-violet-300': 'text-black',
};

export const RANDOM_COLOR_CIRCLE: RandomColorComb = {
  'bg-violet-300': 'bg-violet-5534DA',
};
// const getTextToNum = (text: string) => {
//   let num = 0;
//   for (let i = 0; i < text.length; i++) {
//     num += text.charCodeAt(i);
//   }
//   return num % 10;
// };

export default function StateList({ state }: ColumnStateProps) {
  // const num = getTextToNum(state ?? '텍스트');
  const bg = RANDOM_COLORS[0];
  const text = RANDOM_COLOR_COMB[bg];
  const circle = RANDOM_COLOR_CIRCLE[bg];
  return (
    <div
      className={`inline-flex whitespace-nowrap items-center h-[22px] gap-[6px] px-[8px] border rounded-xl ${bg}`}
    >
      <div className={`rounded-full ${circle} w-[6px] h-[6px]`}></div>
      <span className={`text-[12px] ${text}`}>{state}</span>
    </div>
  );
}
