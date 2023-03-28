import { Header, Tasks, CreateTaskField, Tabs } from "./components";

export const App = () => {
  return (
    <>
      <Header />
      <CreateTaskField />
      <Tabs />
      <Tasks />
    </>
  );
}
