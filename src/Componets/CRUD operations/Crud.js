import { useState } from "react";
import { EmpForm } from "./form";
import { EmpTable } from "./Table";
import { v4 as uuid } from "uuid";

export default function Crud() {
  const [formData, setFormData] = useState({ name: "", age: "" });
  const [employList, setEmployList] = useState([]);

  const submit = (e) => {
    e.preventDefault();
    setEmployList([...employList, { ...formData, id: uuid() }]);
    setFormData({ name: "", age: "" });
  };
  console.log(employList);
  const deleteEmp = (id) => {
    const removeEmp = employList.filter((value) => value.id !== id);
    setEmployList(removeEmp);
  };

  return (
    <>
      <EmpForm submit={submit} setFormData={setFormData} formData={formData} />
      <EmpTable employList={employList} deleteEmp={deleteEmp} />
    </>
  );
}
