import Link from "next/link";

const Login = () => {
  return (
    <div>
      <Link href={"/"}>홈</Link>
      <h1>로그인</h1>
      <Link href={"/worker/join"}>회원가입</Link>
    </div>
  );
};

export default Login;
