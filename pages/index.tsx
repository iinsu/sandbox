import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>
        <h1>메인화면</h1>
        <div>
          <Link href={"/worker/join"}>회원가입</Link>
        </div>
        <div>
          <Link href={"/worker/join"}>로그인</Link>
        </div>
      </div>
    </>
  );
}
