import { useRouter } from "next/router";

function Developer() {
    const router = useRouter();
    const id = Number(router.query.id)
  if(!id){
    return <h4>loading...</h4>
  }
 
  const details = [
    { id: 1, name: "Yash", role: "Senior Developer" },
    { id: 2, name: "Vaibhav", role: "Backend Developer" },
    { id: 3, name: "Suresh", role: "Frontend Developer" },
  ];
   const name = details[id-1].name;
   const role = details[id-1].role;

  return <h1>Hello world this is {name} {role}</h1>;
}

export default Developer;
