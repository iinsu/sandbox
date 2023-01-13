import Link from "next/link";
import styled, { css } from "styled-components";
import { headerStyle } from "../components/profile/style";

const Header = styled.div`
  ${headerStyle}
`;

export default function Home() {
  return (
    <>
      <div>
        <h1>메인화면</h1>
        <Header>헤더</Header>
        <div>
          <Link href={"/worker/join"}>회원가입</Link>
        </div>
        <div>
          <Link href={"/login"}>로그인</Link>
        </div>
        <Link href={"/mypage/worker/info"}>마이페이지</Link>
      </div>
    </>
  );
}
