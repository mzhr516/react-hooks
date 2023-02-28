import { useState } from "react";
import { EmpForm } from "./form";
import { EmpTable } from "./Table";
import { v4 as uuid } from "uuid";

export default function Crud() {
  const [formData, setFormData] = useState({ name: "", age: "" });
  const [employList, setEmployList] = useState([]);
  const [editEmp, setEditEmp] = useState(false);

  const addEmp = () => {
    setEmployList([...employList, { ...formData, id: uuid() }]);
  };

  const uptEmp = (id) => {
    const updateEmp = employList.map((obj) => {
      if (obj.id === id) {
        return { ...formData, id: uuid() };
      } else {
        return obj;
      }
    });
    setEmployList(updateEmp);
  };

  const submit = (e) => {
    e.preventDefault();
    if (editEmp === false) {
      addEmp();
    } else {
      uptEmp(formData.id);
    }
    setFormData({ name: "", age: "" });
  };
  const deleteEmp = (id) => {
    const removeEmp = employList.filter((obj) => obj.id !== id);
    setEmployList(removeEmp);
  };
  const updateEmp = (employ) => {
    console.log(employ);
    setEditEmp(true);
    setFormData(employ);
  };

  return (
    <>
      <EmpForm submit={submit} setFormData={setFormData} formData={formData} />
      <EmpTable
        employList={employList}
        deleteEmp={deleteEmp}
        updateEmp={updateEmp}
      />
    </>
  );
}
