import Link from "next/link";

const WorkerInfo = () => {
  return (
    <div>
      <Link href={"/"}>홈</Link>
      <h1>마이페이지 - 회원정보 수정</h1>
      <Link href={"/mypage/worker/password"}>비밀번호 변경</Link>
    </div>
  );
};

export default WorkerInfo;
