import { useForm } from "react-hook-form";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { toDoState, categoryState } from "./atoms";

interface IForm {
  toDo?: string;
}

const CreateToDo = () => {
  const { register, handleSubmit, setValue } = useForm();
  const setToDos = useSetRecoilState(toDoState);
  const category = useRecoilValue(categoryState);

  const handleValid = ({ toDo }: IForm) => {
    setToDos((oldToDos) => [
      { text: toDo, id: Date.now(), category },
      ...oldToDos,
    ]);
    setValue("toDo", "");
  };

  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <input
        {...register("toDo", { required: "Please write a To Do" })}
        placeholder="Write a to do"
      />
    </form>
  );
};

export default CreateToDo;
