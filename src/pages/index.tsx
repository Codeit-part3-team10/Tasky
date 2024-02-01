import Link from "next/link";

export default function Home() {
  return (
    <div className="px-5 py-5 flex gap-7">
      <Link href='/login' className="w-fit h-10 border border-violet-5534DA rounded-md py-2 px-2">로그인</Link>
      <Link href='/signup' className="w-fit h-10 border border-violet-5534DA rounded-md py-2 px-2">회원가입</Link>
      <Link href='/mydashboard' className="w-fit h-10 border border-violet-5534DA rounded-md py-2 px-2">나의 대시보드</Link>
      <Link href='/dashboard' className="w-fit h-10 border border-violet-5534DA rounded-md py-2 px-2">대시보드</Link>
      <Link href='/mypage' className="w-fit h-10 border border-violet-5534DA rounded-md py-2 px-2">계정관리</Link>
    </div>
  );
}
