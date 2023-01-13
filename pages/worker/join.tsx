import Link from "next/link";
import { useForm } from "react-hook-form";

const Join = () => {
  const handleSignup = (data) => {
    console.log(data);
    delete data.pwCheck;
    console.log(data);
  };

  const { register, handleSubmit } = useForm();

  return (
    <>
      <div>
        <Link href={"/"}>홈</Link>
        <h1>회원가입</h1>
        <form
          onSubmit={handleSubmit(handleSignup)}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <input {...register("email")} type="text" placeholder="이메일" />
          <input {...register("password")} type="text" placeholder="비밀번호" />
          <input {...register("pwCheck")} type="text" placeholder="확인" />
          <input {...register("name")} type="text" placeholder="닉네임" />
          <input {...register("address")} type="text" placeholder="주소" />
          <label>
            <input type="checkbox" />
            개인정보활용 동의 (필수)
          </label>
          <label>
            <input type="checkbox" />
            개인정보수집 동의 (필수)
          </label>
          <label>
            <input type="checkbox" />
            광고 동의 (선택)
          </label>
          <button>가입하기</button>
        </form>
      </div>
    </>
  );
};

export default Join;
