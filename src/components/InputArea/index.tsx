import * as C from "./styles";
import { Item } from "../../types/Item";
import { useState } from "react";
import { categories } from "../../data/categories";

type Props = {
  onAdd: (item: Item) => void;
};

export const InputArea = ({ onAdd }: Props) => {
  const [dateField, setDateField] = useState("");
  const [categoryField, setCategoryField] = useState("");
  const [titleField, setTitleField] = useState("");
  const [valueField, setValueField] = useState(0);

  let categoryKeys: string[] = Object.keys(categories);

  const handleAddEvent = () => {
    let errors: string[] = [];

    if (isNaN(new Date(dateField).getTime())) {
      errors.push("Invalid Date!");
    }
    if (!categoryKeys.includes(categoryField)) {
      errors.push("Invalid Category!");
    }
    if (titleField === "") {
      errors.push("Empty Title!");
    }
    if (valueField <= 0) {
      errors.push("Invalid Value!");
    }

    if (errors.length > 0) {
      alert(errors.join("\n"));
    } else {
      let [year, month, day] = dateField.split("-");
      onAdd({
        date: new Date(parseInt(year), parseInt(month) - 1, parseInt(day)),
        category: categoryField,
        title: titleField,
        value: valueField,
      });
      clearFields();
    }
  };

  const clearFields = () => {
    setDateField("");
    setCategoryField("");
    setTitleField("");
    setValueField(0);
  };

  return (
    <C.Container>
      <C.Label>
        <C.InputLabel>Date</C.InputLabel>
        <C.Input
          type="date"
          value={dateField}
          onChange={(e) => setDateField(e.target.value)}
        />
      </C.Label>
      <C.Label>
        <C.InputLabel>Category</C.InputLabel>
        <C.Select
          value={categoryField}
          onChange={(e) => setCategoryField(e.target.value)}
        >
          <>
            <option></option>
            {categoryKeys.map((key, index) => (
              <option key={index} value={key}>
                {categories[key].title}
              </option>
            ))}
          </>
        </C.Select>
      </C.Label>
      <C.Label>
        <C.InputLabel>Title</C.InputLabel>
        <C.Input
          type="text"
          value={titleField}
          onChange={(e) => setTitleField(e.target.value)}
        />
      </C.Label>
      <C.Label>
        <C.InputLabel>Value</C.InputLabel>
        <C.Input
          type="number"
          value={valueField}
          onChange={(e) => setValueField(parseFloat(e.target.value))}
        />
      </C.Label>
      <C.Label>
        <C.InputLabel>&nbsp;</C.InputLabel>
        <C.Button onClick={handleAddEvent}>Add</C.Button>
      </C.Label>
    </C.Container>
  );
};
