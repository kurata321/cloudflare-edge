import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from 'next';

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const Index: NextPage<Props> = (props) => {
  const todo: Todo[] = props.todo;
  return (
    <div>
      <h1>border</h1>
      <ul>
        {todo.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Index;

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  const todo = await response.json();
  return {
    props: {
      todo,
    },
  };
};
